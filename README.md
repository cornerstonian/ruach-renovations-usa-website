# Ruach Renovations — Website Documentation

**Live URL:** https://ruach-renovations-usa.vercel.app  
**GitHub Repo:** https://github.com/cornerstonian/ruach-renovations-usa-website  
**Client:** Ruach Renovations — Knoxville, Tennessee  
**Owners:** Eamon & Evan  

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [File Structure](#file-structure)
4. [How to Run Locally](#how-to-run-locally)
5. [How to Deploy](#how-to-deploy)
6. [How to Update Content](#how-to-update-content)
7. [SEO Configuration](#seo-configuration)
8. [Lead Generation Features](#lead-generation-features)
9. [Design System](#design-system)
10. [Removing the Preview Watermark](#removing-the-preview-watermark)
11. [Custom Domain Setup](#custom-domain-setup)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

A production-grade, single-page marketing website for **Ruach Renovations**, a premium home renovation company based in Knoxville, Tennessee. The site is built for two primary goals:

1. **Lead generation** — converting visitors into quote requests via strategically placed CTAs, trust signals, and a contact form.
2. **Local SEO** — ranking on Google for Knoxville-area kitchen, bathroom, and renovation searches.

The site is fully static — no backend, no database. It deploys automatically to Vercel whenever code is pushed to the `main` branch on GitHub (CI/CD).

---

## Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| **Next.js** | React framework (App Router) | 14.2.5 |
| **TypeScript** | Type-safe JavaScript | 5.x |
| **Tailwind CSS** | Utility-first styling | 3.x |
| **Framer Motion** | Scroll animations & transitions | 11.x |
| **Lucide React** | Icon library | 0.400+ |
| **Google Fonts** | Typography (via next/font) | — |
| **Vercel** | Hosting & auto-deployment | — |
| **GitHub** | Version control & CI/CD trigger | — |

---

## File Structure

```
ruach-renovations/
├── src/
│   └── app/
│       ├── page.tsx          ← MAIN FILE — all sections live here
│       ├── layout.tsx        ← HTML wrapper, SEO metadata, Schema.org
│       ├── globals.css       ← Global styles, animations, floating inputs
│       ├── sitemap.ts        ← Auto-generates /sitemap.xml for Google
│       └── robots.ts         ← Auto-generates /robots.txt for crawlers
├── public/                   ← Static files (add images here)
├── tailwind.config.ts        ← Color system & font configuration
├── next.config.js            ← Next.js configuration
├── package.json              ← Dependencies & scripts
└── README.md                 ← This file
```

**Most maintainers will only ever edit two files:**
- `src/app/page.tsx` — all visible content
- `src/app/layout.tsx` — SEO metadata and business info

---

## How to Run Locally

### Prerequisites
- Node.js 18 or higher (`node --version` to check)
- Git installed

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/cornerstonian/ruach-renovations-usa-website.git
cd ruach-renovations-usa-website

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open your browser
# Visit: http://localhost:3000
```

You'll see the site running live. Any changes you save will automatically refresh the browser.

---

## How to Deploy

### Automatic Deployment (recommended)
Every time you push code to the `main` branch on GitHub, Vercel automatically rebuilds and deploys the site. No manual steps needed.

```bash
# Make your changes, then:
git add .
git commit -m "describe your change"
git push origin main
# Vercel deploys automatically — usually live within 60 seconds
```

### Manual Deployment
If you need to deploy manually:
```bash
npx vercel --prod
```
You'll need to be logged into Vercel CLI (`npx vercel login`).

---

## How to Update Content

All content is in `src/app/page.tsx`. Look for the **`/* ─── Data ─── */`** section near the top of the file. All text, services, testimonials, and gallery labels are stored as JavaScript arrays — no hunting through HTML.

### Update Business Phone Number
Search for `(555) 000-0000` — replace in all locations.  
Also update the `tel:` link: `href="tel:5550000000"` → use digits only, no spaces or dashes.

### Update Business Email
Search for `eamon@ruachrenovations.com` — replace everywhere it appears.

### Update Business Address
Search for `Knoxville, Tennessee` in both `page.tsx` and `layout.tsx`.

### Update Services
Find the `const services = [` array. Each service has:
- `icon` — choose from Lucide icons (see lucide.dev for options)
- `title` — the service name
- `desc` — the description paragraph

### Update Testimonials
Find the `const testimonials = [` array. Each has:
- `text` — the quote
- `name` — client name
- `location` — city, state
- `stars` — number (1–5)

### Update Gallery Labels
Find `const galleryItems = [`. Each item has:
- `label` — project name shown on hover
- `gradient` — Tailwind gradient class (controls placeholder color)
- `h` — height class (e.g. `h-[380px]`)

To add real photos: place images in `/public/` folder, then change the gallery div background from gradient to `<img>` or Next.js `<Image>`.

### Update the "Now Booking" Urgency Text
Search for `Now Booking Spring Projects` and update to current season/month.

### Update CTA Strip Text
Search for `CTAStrip text=` to find the two mid-page call-to-action banners.

---

## SEO Configuration

All SEO settings are in `src/app/layout.tsx`.

### Page Title & Meta Description
```typescript
export const metadata: Metadata = {
  title: "Ruach Renovations | Kitchen & Bathroom Remodeling — Knoxville, TN",
  description: "...",
```
**Best practice:** Keep the title under 60 characters. Keep the description under 160 characters. Always include "Knoxville, TN" in both.

### Open Graph (Social Sharing)
When someone shares the site URL on Facebook, LinkedIn, etc., the `openGraph` block controls what preview card appears. Update `url` once you have the final custom domain.

### Schema.org (LocalBusiness)
The `<script type="application/ld+json">` block in `layout.tsx` tells Google this is a local business. **Update these fields when client info is confirmed:**
- `telephone` — real phone number
- `email` — real email
- `address.addressLocality` — already set to Knoxville
- `openingHours` — real business hours

### Keywords
The `keywords` array targets local search terms. Add more location-specific terms as needed (e.g., "kitchen remodel Oak Ridge TN", "bathroom renovation Maryville TN").

### Sitemap & Robots
These are auto-generated at:
- `/sitemap.xml` — submitted to Google Search Console
- `/robots.txt` — tells search crawlers what to index

**Action required after launch:** Submit `https://yourdomain.com/sitemap.xml` to Google Search Console.

### Updating the Site URL
When the client gets a custom domain, search for `ruach-renovations-usa.vercel.app` in both `layout.tsx` and `sitemap.ts` and replace with the real domain.

---

## Lead Generation Features

### 1. Trust Bar
A gold bar at the very top of the page showing: `20+ Years Experience · 500+ Projects · Licensed & Insured · Satisfaction Guaranteed · Serving Knoxville & East TN`

**To update:** Find `const items = [` inside the `TrustBar` function in `page.tsx`.

### 2. Phone Number in Navigation
Visible on desktop nav — click-to-call. Update `(555) 000-0000` and `tel:5550000000`.

### 3. Urgency Indicator in Hero
`📅 Now Booking Spring Projects` — update this seasonally (Spring/Summer/Fall/Winter) to create urgency.

**To update:** Search for `Now Booking` in `page.tsx`.

### 4. Mid-Page CTA Strips
Two gold strips with call-to-action buttons appear:
- After the Services section
- After the Testimonials section

These intercept visitors before they scroll away. Each has a headline and a "Request a Free Consultation" button linking to `#contact`.

### 5. Contact Form
Full form with Name, Email, Phone, and Project Description fields. **Important:** The form currently has `onSubmit={(e) => e.preventDefault()}` — it does NOT send emails yet. To make it functional, connect it to a form service:

**Recommended options:**
- **Formspree** (formspree.io) — free tier, no backend needed. Replace the `onSubmit` handler with a fetch to your Formspree endpoint.
- **Netlify Forms** — if migrating to Netlify hosting
- **EmailJS** — sends email directly from the browser, free tier available

### 6. Sticky Mobile CTA Bar
On mobile devices, a persistent bar appears at the bottom of the screen after scrolling 400px. It has two buttons: **Call Now** and **Free Quote**. This significantly increases mobile conversions.

**To disable:** Remove `<StickyMobileCTA />` from the main page component.

---

## Design System

### Colors

| Name | Hex | Usage |
|---|---|---|
| `charcoal` | `#1c1917` | Dark backgrounds, primary text |
| `stone` | `#44403c` | Secondary text |
| `cream` | `#faf9f6` | Main page background |
| `warmwhite` | `#fafaf9` | Card backgrounds |
| `gold` | `#d97706` | Accent color, CTAs, highlights |
| `warmgray` | `#78716c` | Body text, descriptions |

### Typography

| Font | Variable | Usage |
|---|---|---|
| **Playfair Display** | `font-display` | Headlines, section titles, logo |
| **Plus Jakarta Sans** | `font-body` | Body text, nav links, labels |

### Animations
All scroll animations use Framer Motion's `whileInView` — they trigger once when the element enters the viewport. The `staggerContainer` variant staggers children with a 0.12s delay between each.

To disable animations on a section, change `whileInView="visible"` to `animate="visible"` and remove `viewport={{ once: true }}`.

---

## Removing the Preview Watermark

The site currently shows a faint diagonal "PREVIEW ONLY" watermark. **Remove this before sending the final live URL to the client.**

1. Open `src/app/page.tsx`
2. Find and delete this line:
   ```tsx
   {/* Preview watermark — remove before final client delivery */}
   <div className="preview-watermark">PREVIEW ONLY</div>
   ```
3. Save, commit, and push:
   ```bash
   git add .
   git commit -m "Remove preview watermark — site approved for launch"
   git push origin main
   ```

Also remove the `.preview-watermark` CSS from `src/app/globals.css` to keep the codebase clean.

---

## Custom Domain Setup

When the client purchases a domain (recommended: **ruachrenovations.com**):

### Step 1: Add domain to Vercel
1. Go to vercel.com → Project → Settings → Domains
2. Add the custom domain
3. Vercel will provide DNS records to configure

### Step 2: Configure DNS at domain registrar
Add the records Vercel provides (usually a CNAME or A record).

### Step 3: Update the site URL
In `src/app/layout.tsx`, update:
```typescript
url: "https://ruachrenovations.com",  // openGraph.url
```

In `src/app/sitemap.ts`, update:
```typescript
url: 'https://ruachrenovations.com',
```

### Step 4: Submit to Google Search Console
1. Go to search.google.com/search-console
2. Add property → enter the domain
3. Verify ownership (Vercel makes this easy — HTML tag method)
4. Submit `https://ruachrenovations.com/sitemap.xml`

---

## Troubleshooting

### Build fails after editing
Run `npm run build` locally to see the error before pushing. Most common issues:
- Missing closing tag in JSX
- TypeScript type error
- Wrong import path

### Site not updating after push
- Check GitHub Actions / Vercel dashboard for build errors
- Make sure you pushed to `main` branch, not another branch

### Fonts not loading
Google Fonts are loaded via `next/font/google` — they require an internet connection. In development, if fonts look wrong, it may be a slow network. In production this is never an issue.

### Form not sending emails
The contact form needs a third-party service connected. See the [Contact Form](#5-contact-form) section above.

### Adding images to gallery
1. Add image files to `/public/` (JPG or WebP recommended for performance)
2. In `page.tsx`, find the gallery item you want to update
3. Replace the gradient div with a Next.js Image component:
   ```tsx
   import Image from 'next/image'
   // Then replace the gradient div with:
   <Image src="/your-image.jpg" alt="Project description" fill className="object-cover" />
   ```

---

## Contact & Handoff

**Original developer:** Lavoisier Cornerstone  
**Email:** vois.cornerstone@gmail.com  
**GitHub:** github.com/cornerstonian  

For questions about the codebase, contact the developer above. For content updates, any developer familiar with React/Next.js can maintain this site following the instructions in this README.
