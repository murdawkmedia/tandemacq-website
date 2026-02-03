# Tandem Acquisition Group Website Project

## 1. Project Overview

**Client:** Tandem Acquisition Group LLC  
**Developer:** Murdawk Media  
**Goal:** Design and build a professional, modern, and mobile-responsive website for Tandem Acquisition Group. The site serves as the digital storefront for a private investment firm focused on acquiring and operating small, profitable "brick-and-mortar" businesses.

## 2. Client Identity & Mission

**Tandem Acquisition Group LLC** acts as a bridge for retiring business owners (specifically aiming at the "Silver Tsunami" of Baby Boomers) to transition their legacy to capable hands.

- **Core Philosophy:** "We are not private equity. We are operators." They focus on preserving the seller's legacy and employees, rather than stripping assets for a quick flip.
- **Target Acquisition:**
  - **Sectors:** HVAC, Plumbing, Electrical, Landscaping, Pest Control, and other essential services.
  - **Financials:** $500k - $2.5M in Annual Revenue.
  - **Type:** "Boring but profitable" established businesses.
  - **Avoids:** SaaS, E-commerce, Crypto, Distressed assets, Turnarounds.

### Design Inspiration

The client has identified the following websites as benchmarks for the desired look and feel:

- **Andina Advisors** (andinaadvisors.com)
- **Deloitte** (deloitte.com)
- *Note: Emulate the professional, high-end, and trustworthy aesthetic of these firms.*

### Color Palette

Derived from the provided assets (`.tmp/Images/Logo`), the brand colors are:

- **Primary Black:** `#010101` (Rich Black)
- **Accent Gold:** `#AE873C` (Metallic/Bronze Gold)
- **Dark Grey:** `#3F3F3F` (Charcoal)
- **Neutral:** `#7E7E7E` (Mid-Grey)
- **Background:** Clean White `#FFFFFF` or Light Grey `#F5F5F5` to contrast with the dark/gold branding.

## 3. Scope of Work (Murdawk Media)

As outlined in the proposal, the project entails:

- **Modern Redesign:** Clean, professional aesthetic suitable for high-net-worth interactions.
- **Mobile Responsiveness:** A flawless experience on all devices.
- **Optimization:**
  - **SEO (Search Engine Optimization):** Standard best practices for organic capability.
  - **AEO (Answer Engine Optimization):** Structured data and content optimization to ensure AI engines (ChatGPT, Perplexity, Gemini) can properly scrape and understand the entity.
- **Infrastructure:**
  - Domain connection on GoDaddy.
  - Hosting setup on GoDaddy.

## 4. Technical Stack (Proposed)

Based on modern web standards and the requirement for speed/SEO:

- **Framework:** React (via Vite) or Astro (for superior static performance).
- **Styling:** Tailwind CSS (for rapid, modern UI development).
- **Routing:** React Router (if SPA) or file-based routing.
- **Deployment:** GoDaddy (Traditional/cPanel Hosting).
- **Analytics:** GoDaddy Analytics or Google Analytics 4.

## 5. Site Architecture (Draft)

1. **Home / Landing Page**
    - Hero Section: Value proposition ("Preserving Your Legacy").
    - About Us: Who we are (Operators vs. PE).
    - Investment Criteria: Visual breakdown of what Tandem buys (Revenue, Sector, etc.).
    - Process: simple 1-2-3 step explanation of the exit process.
    - CTA: "Contact Us" or "Get a Valuation".
2. **Contact Page**
    - Simple form (Name, Business Type, Revenue range, Email/Phone).
    - Direct contact info.
3. **Legal / Footer**
    - Copyright Tandem Acquisition Group.
    - "Designed by Murdawk Media".

## 6. Development Workflow & Best Practices

- **Version Control:** Git repository (GitHub/GitLab).
- **Code Quality:**
  - ESLint + Prettier for consistent formatting.
  - Semantic HTML5 for accessibility and SEO.
  - JSON-LD Structured Data Schema for AEO (Organization, LocalBusiness).
- **Performance:**
  - Lighthouse Score target: 90+ across all metrics.
  - Optimized images (WebP format).
  - Lazy loading for non-critical assets.

## 8. Project Structure

```
tandemacq-website/
├── .tmp/              # Temporary/working files (do not deploy)
├── public/            # Static assets for development (copied to website/ on build)
├── src/               # React source code
│   └── components/    # Layout, Home, Contact
├── website/           # 🚀 DEPLOYMENT FOLDER - upload contents to hosting
│   ├── assets/        # Bundled JS, CSS, images
│   ├── index.html     # Main entry point with SEO/AEO markup
│   ├── robots.txt     # Search engine crawling rules
│   ├── sitemap.xml    # Page index for search engines
│   └── INSTRUCTIONS.txt
├── README.md
├── DEPLOY.md          # Detailed GoDaddy deployment guide
└── package.json
```

## 9. Deployment

**To deploy the website:**

1. Run `npm run build` to generate fresh files in `dist/`
2. Rename `dist/` to `website/` (or copy contents)
3. Upload the **contents** of `website/` to GoDaddy's `public_html` directory
4. See `DEPLOY.md` for detailed instructions including `.htaccess` configuration

## 10. SEO & AEO Features

- **SEO:** Meta tags, Open Graph, Twitter Cards, canonical URL, robots.txt, sitemap.xml
- **AEO:** JSON-LD structured data (Organization, LocalBusiness, WebSite, Person, Service schemas)
