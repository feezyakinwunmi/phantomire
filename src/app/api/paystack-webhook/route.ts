// import { supabase } from "../../lib/supabase"; // Your existing lib
// import { NextResponse } from "next/server";
// import crypto from "crypto";

// const PAYSTACK_SECRET_KEY = "pk_test_04475b52d23bd3296af5518ad35b1830a6cbe924"; // Replace with real secret key
// export const dynamic = 'force-dynamic';        // Most important – disables static rendering
// export const revalidate = 0;                   // Optional but helpful
// export const fetchCache = 'force-no-store';    // Prevents any caching attempts
// export const runtime = 'nodejs';
// export async function POST(req: Request) {
//   const rawBody = await req.text(); // Raw for signature
//   const signature = req.headers.get("x-paystack-signature");

//   // Verify signature
//   const expectedSignature = crypto
//     .createHmac("sha512", PAYSTACK_SECRET_KEY)
//     .update(rawBody)
//     .digest("hex");

//   if (signature !== expectedSignature) {
//     return new NextResponse("Invalid signature", { status: 400 });
//   }

//   const event = JSON.parse(rawBody);

//   if (event.event === "charge.success") {
//     const data = event.data;
//     const metadata = data.metadata || {};

//     const { error } = await supabase.from("form_payments").insert({
//       name: metadata.name || "Unknown",
//       phone: metadata.phone || "Unknown",
//       email: data.customer.email,
//       reference: data.reference,
//       promo_code: metadata.promo_code === "none" ? null : metadata.promo_code,
//       amount: data.amount / 100,
//     });

//     if (error) {
//       console.error("Save error:", error);
//       return new NextResponse("DB error", { status: 500 });
//     }
//   }

//   return new NextResponse("OK", { status: 200 });
// }

// // Disable body parsing for raw body
// // export const config = {
// //   api: {
// //     bodyParser: false,
// //   },
// // };


import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";
export const runtime = "nodejs";

// Remove the top-level const and if check entirely

export async function POST(req: Request) {
  // Now get and check the secret key at runtime only
  const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

  if (!PAYSTACK_SECRET_KEY) {
    console.error("PAYSTACK_SECRET_KEY is missing");
    return new NextResponse("Server configuration error", { status: 500 });
  }

  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-paystack-signature");

    if (!signature) {
      return new NextResponse("Missing signature", { status: 400 });
    }

    // Verify Paystack signature
    const expectedSignature = crypto
      .createHmac("sha512", PAYSTACK_SECRET_KEY)
      .update(rawBody)
      .digest("hex");

    if (signature !== expectedSignature) {
      return new NextResponse("Invalid signature", { status: 400 });
    }

    const event = JSON.parse(rawBody);

    if (event.event === "charge.success") {
      const data = event.data;
      const metadata = data.metadata || {};

      // Supabase env checks (also runtime only)
      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

      if (!supabaseUrl || !supabaseServiceKey) {
        console.error("Missing Supabase env vars");
        return new NextResponse("Server configuration error", { status: 500 });
      }

      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      const { error } = await supabase.from("form_payments").insert({
        name: metadata.name || "Unknown",
        phone: metadata.phone || "Unknown",
        email: data.customer.email,
        reference: data.reference,
        promo_code: metadata.promo_code === "none" ? null : metadata.promo_code,
        amount: data.amount / 100,
      });

      if (error) {
        console.error("Supabase insert error:", error);
        return new NextResponse("Database error", { status: 500 });
      }
    }

    return new NextResponse("OK", { status: 200 });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}