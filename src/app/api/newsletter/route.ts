import { NextRequest, NextResponse } from "next/server";

// Basic email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // ── Option A: Direct Supabase insert (no n8n dependency) ──────────────────
    // Uncomment and set SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in .env.local
    //
    // const supabaseUrl = process.env.SUPABASE_URL;
    // const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    //
    // if (!supabaseUrl || !supabaseKey) {
    //   console.error("[newsletter] Missing Supabase env vars");
    //   return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    // }
    //
    // const res = await fetch(`${supabaseUrl}/rest/v1/newsletter_subscribers`, {
    //   method: "POST",
    //   headers: {
    //     apikey: supabaseKey,
    //     Authorization: `Bearer ${supabaseKey}`,
    //     "Content-Type": "application/json",
    //     Prefer: "return=minimal",
    //   },
    //   body: JSON.stringify({
    //     email: normalizedEmail,
    //     source: "landing_page",
    //     subscribed_at: new Date().toISOString(),
    //   }),
    // });
    //
    // if (!res.ok && res.status !== 409) {
    //   // 409 = already exists — treat as success
    //   const err = await res.text();
    //   console.error("[newsletter] Supabase insert failed:", err);
    //   return NextResponse.json({ error: "Failed to subscribe. Try again." }, { status: 500 });
    // }

    // ── Option B: n8n webhook ─────────────────────────────────────────────────
    // Uncomment and set NEWSLETTER_WEBHOOK_URL in .env.local
    //
    const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL;

    if (!webhookUrl) {
      // Fail gracefully in development — log and return success
      console.warn(
        "[newsletter] NEWSLETTER_WEBHOOK_URL not set. Email captured client-side only:",
        normalizedEmail
      );
      return NextResponse.json({ success: true });
    }

    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: normalizedEmail,
        source: "landing_page",
        subscribed_at: new Date().toISOString(),
      }),
    });

    if (!webhookRes.ok) {
      console.error(
        "[newsletter] Webhook failed:",
        webhookRes.status,
        await webhookRes.text()
      );
      return NextResponse.json(
        { error: "Failed to subscribe. Try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[newsletter] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
