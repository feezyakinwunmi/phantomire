

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";
export const runtime = "nodejs";

// Move secret key to environment variable (never hardcode!)
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

if (!PAYSTACK_SECRET_KEY) {
  throw new Error("PAYSTACK_SECRET_KEY is not set in environment variables");
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-paystack-signature");

    // Verify Paystack signature
    const expectedSignature = crypto
      .createHmac("sha512", PAYSTACK_SECRET_KEY!)
      .update(rawBody)
      .digest("hex");

    if (signature !== expectedSignature) {
      return new NextResponse("Invalid signature", { status: 400 });
    }

    const event = JSON.parse(rawBody);

    // Only process successful charges
    if (event.event === "charge.success") {
      const data = event.data;
      const metadata = data.metadata || {};

      // Create Supabase client inside the handler (runtime only)
      const supabase = createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service_role key for server-side
      );

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
    console.error("Webhook error:", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}