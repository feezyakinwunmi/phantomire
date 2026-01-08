import { supabase } from "../../lib/supabase"; // Your existing lib
import { NextResponse } from "next/server";
import crypto from "crypto";

const PAYSTACK_SECRET_KEY = "pk_test_04475b52d23bd3296af5518ad35b1830a6cbe924"; // Replace with real secret key

export async function POST(req: Request) {
  const rawBody = await req.text(); // Raw for signature
  const signature = req.headers.get("x-paystack-signature");

  // Verify signature
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

    const { error } = await supabase.from("form_payments").insert({
      name: metadata.name || "Unknown",
      phone: metadata.phone || "Unknown",
      email: data.customer.email,
      reference: data.reference,
      promo_code: metadata.promo_code === "none" ? null : metadata.promo_code,
      amount: data.amount / 100,
    });

    if (error) {
      console.error("Save error:", error);
      return new NextResponse("DB error", { status: 500 });
    }
  }

  return new NextResponse("OK", { status: 200 });
}

// Disable body parsing for raw body
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };