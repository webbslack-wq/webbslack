import { NextResponse } from "next/server";

/**
 * Contact form handler.
 *
 * OPTION A (recommended, 5 min setup) — Resend:
 *   1. npm install resend
 *   2. Get free API key at resend.com (100 emails/day free)
 *   3. Add RESEND_API_KEY to .env.local
 *   4. Uncomment the Resend block below.
 *
 * OPTION B — Formspree (zero backend):
 *   Replace the form action on the contact page with your Formspree endpoint
 *   and delete this route.
 */

export async function POST(req: Request) {
  try {
    const { name, email, business, message } = await req.json();

    if (!name || !email || !business) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // ── OPTION A: Resend (uncomment after `npm install resend`) ──────────
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: "webbslack@gmail.com",
        replyTo: email,
        subject: `🔔 Callback request: ${name} (${business})`,
        html: `
          <h2>New Callback Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Business:</strong> ${business}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || "(no message provided)").replace(/\n/g, "<br>")}</p>
        `,
      });
    } catch (emailErr) {
      console.error("Email send error:", emailErr);
      // Still return success to user even if email fails
    }

    // Log to server (visible in Vercel logs)
    console.log("📩 New callback request:", { name, email, business, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
