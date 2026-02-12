# Dai BA Service

## Overview
A professional buyer's agent landing page website for Dai BA Service, a property investment buyer's agency based in Queensland, Australia. Supports Chinese/English language switching.

## Project Architecture
- **Framework**: React 18 with Vite
- **Language**: JavaScript (JSX)
- **Package Manager**: npm
- **Build Tool**: Vite
- **Animations**: framer-motion
- **Entry Point**: `src/main.jsx` -> `src/App.jsx`
- **Static Assets**: `public/` directory (images, favicon)

## Key Files
- `src/i18n.js` - All Chinese and English translations
- `src/LanguageContext.jsx` - Language context provider with toggle
- `src/App.jsx` - Root component
- `src/components/` - All UI components (Navbar, Hero, Stats, About, Steps, Details, Reviews, Properties, ServiceAreas, FAQ, Contact, Footer)
- `src/index.css` - Complete styles
- `vite.config.js` - Vite configuration (port 5000, host 0.0.0.0)

## Sections
1. **Hero** - Full-screen with logo, title, subtitle, trust badges, CTA buttons, social links
2. **Stats** - Animated counter banner (100+ clients, $7M+ portfolio, 6yr+ experience, 5%+ yield)
3. **About** - Why choose me (4 points) + My Story
4. **Steps** - 6-phase buying process timeline
5. **Details** - 4 investment strategy cards
6. **Reviews** - Client review screenshots gallery
7. **Properties** - 5 case study cards with property images
8. **Service Areas** - Coverage across Brisbane, Gold Coast, Perth, Melbourne, Regional
9. **FAQ** - 6 common buyer agent questions with accordion
10. **Contact** - Contact info + WeChat QR code
11. **Footer** - Copyright + back to top

## Development
- Dev server: `npm run dev` (port 5000, host 0.0.0.0)
- Build: `npm run build` (output in `dist/`)

## Deployment
- Static deployment using the `dist` directory
- Build command: `npm run build`

## Recent Changes
- 2026-02-12: Full migration from CRA to Vite
- 2026-02-12: Complete UI redesign with professional layout
- 2026-02-12: Added Chinese/English language toggle
- 2026-02-12: Added Stats banner, Service Areas, FAQ sections
- 2026-02-12: Enhanced hero with trust badges
- 2026-02-12: Improved CSS with gradients, hover effects, transitions
