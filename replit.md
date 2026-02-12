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
- `src/components/` - All UI components (Navbar, Hero, About, Steps, Details, Reviews, Properties, Contact, Footer)
- `src/index.css` - Complete styles
- `vite.config.js` - Vite configuration (port 5000, host 0.0.0.0)

## Sections
1. **Hero** - Full-screen with logo, title, subtitle, CTA buttons, social links
2. **About** - Why choose me (4 points) + My Story
3. **Steps** - 6-phase buying process timeline
4. **Details** - 4 investment strategy cards
5. **Reviews** - Client review screenshots gallery
6. **Properties** - 5 case study cards with property images
7. **Contact** - Contact info + WeChat QR code
8. **Footer** - Copyright + back to top

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
