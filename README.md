# Solar Days

A complete static React website for **Solar Days**, a solar energy solutions business in Azhikode, Kannur, Kerala. The site is designed to be fast, responsive, SEO-friendly, accessible and focused on turning visitors into enquiries.

## Highlights

- Logo-driven white, blue and orange visual system with a utility bar and sticky header
- Mobile-first responsive design with touch-friendly controls, tabbed hero and route-aware navigation
- Separate page routes for Home, About Us, Services, Products and Contact
- Hero, About, Solar Solutions, Benefits, How Solar Works, Why Solar Days, Gallery, Contact and Map sections
- WhatsApp click-to-chat links, floating button and enquiry form integration
- Google Maps embed and directions links generated from the business address
- SEO metadata, Open Graph, Twitter metadata and LocalBusiness JSON-LD
- Lazy-loaded responsive WebP imagery and locally stored assets
- Gallery lightbox, keyboard navigation and reduced-motion support

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS 3
- React Router 7 for client-side page routes
- Lucide React for interface icons
- Framer Motion for subtle scroll and entrance animations
- React Helmet Async for SEO metadata
- Inter and Plus Jakarta Sans variable fonts self-hosted with Fontsource

## Getting Started

Prerequisites: Node.js 20.19+ is recommended.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Configuration

All business information is centralized in `src/data/businessInfo.js`:

- Business name, description and logo
- Full address and location fields
- Contact people and phone numbers
- Email address
- WhatsApp destination and default message
- Google Maps embed, directions and open links
- Site URL from `VITE_SITE_URL`

### WhatsApp

The WhatsApp number is stored as `whatsappNumber` in `src/data/businessInfo.js`. It currently uses Dileep Kumar's number with India country code: `919287344005`.

Change that single value to use a dedicated business WhatsApp number. Helper functions in `src/utils/whatsapp.js` build all `wa.me` links and the pre-filled enquiry message, so no other files need updating.

### SEO / Canonical URL

Copy the example environment file and set the production domain:

```bash
cp .env.example .env
```

Set `VITE_SITE_URL` to the final website URL, for example:

```env
VITE_SITE_URL=https://your-domain.com
```

This value is used for the canonical URL and absolute social share image URLs. If it is not set, the current browser origin is used as a fallback.

## Project Structure

```text
src/
├── assets/
│   ├── images/          Optimized WebP images and OG image
│   └── logo/            Original-derived Solar Days logo and favicon
├── components/          Utility-bar navbar, tabbed Hero, page shell, sections, shared UI
├── data/                Business info, solutions, products and gallery data
├── pages/               Home, AboutUs, Services, Products and Contact routes
├── utils/               WhatsApp URL and enquiry message helpers
├── App.jsx              App shell, router, HelmetProvider, skip link
├── index.css            Tailwind layers and shared component styles
└── main.jsx             React entry point
```

## Forms and Integrations

The enquiry form validates name, phone, location, requirement and message. Email is optional but validated when provided. On valid submission it opens WhatsApp with a formatted enquiry message.

Nothing is stored by the website. There is no backend, database, authentication or server-side dependency.

Google Maps links are generated from the configured address and do not require an API key.

## Assets

The Solar Days logo was derived from the provided business card asset and preserved without redesign. Photographic imagery is stored locally as optimized WebP files sourced from India-specific solar photography on Pexels. Stock photographs are illustrative and are not presented as actual Solar Days installations; replace them with company project photographs when available.

## Deployment

Run:

```bash
npm run build
```

The `dist/` folder can be deployed to Vercel, Netlify or any static host. `vercel.json` and `public/_redirects` provide SPA fallback rewrites for direct visits to `/about`, `/services`, `/products` and `/contact`. For GitHub Pages project sites, set the correct `base` path in `vite.config.js` before building and configure a 404 fallback separately.

Set `VITE_SITE_URL` in the hosting platform's environment variables for correct canonical and social metadata.

## Verification

```bash
npm run lint
npm run build
```

Both commands pass with the current project configuration.
