# Rajeev — Portfolio Website

Multi-page portfolio built with **Next.js 14 (App Router) + Tailwind CSS + TypeScript**.

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, services grid, featured case studies, process, CTA |
| `/work` | All 9 case studies with domain filter (Restaurant, Salon, Fintech, Blockchain, Trading, DevOps, Healthcare, Marketplace, Analytics) |
| `/work/[slug]` | Full case study: problem → build → outcomes, spec table, stack |
| `/services` | Three service tiers + straight-answer FAQ |
| `/about` | Bio, experience timeline, skills, education |
| `/contact` | Minimal callback form (3 required fields) + New Delhi map + email |

## Run Locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy (Vercel — free, 2 minutes)

```bash
npm i -g vercel
vercel
# follow prompts → live URL
```

Or push to GitHub → import at vercel.com → done.

## Wire the Contact Form (5 minutes)

The form posts to `/api/contact`. Right now it logs submissions to server logs.
To get them in your Gmail:

1. Sign up at [resend.com](https://resend.com) (free: 100 emails/day)
2. `npm install resend`
3. Create `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxx
   ```
4. Uncomment the Resend block in `app/api/contact/route.ts`
5. Redeploy

Every form submission lands in **webbslack@gmail.com** with the visitor's
email as reply-to.

## Editing Case Studies

All case study content lives in one file: **`lib/caseStudies.ts`**.
Add/edit/remove entries there — cards, filters, and detail pages update
automatically. No links to live projects are included by design.

> ⚠️ **Before sending to leads:** review the outcome metrics in each case
> study and adjust any numbers to match what you can stand behind in a
> client conversation.

## Design System

- **Canvas:** `#F3F5F8` cool studio gray · **Ink:** `#0F1B2D`
- **Accent:** cobalt `#2742F5` · **Metrics:** copper `#C2702E`
- **Type:** Archivo (display) · Inter (body) · JetBrains Mono (dossier metadata)
- **Signature:** every case study is presented as an "engagement dossier" —
  mono spec lines, file numbers, domain tags

## Customise

- Colors → `tailwind.config.ts`
- Your email appears in: `components/Footer.tsx`, `app/contact/page.tsx`, `app/api/contact/route.ts`
- Map location → the iframe `src` in `app/contact/page.tsx`
- Phone number: intentionally omitted — add to Footer/Contact when ready
