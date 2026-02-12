# Dai BA Service

## Overview
A React-based website for Dai BA Service, a property/real estate service company. Built with Create React App (CRA).

## Project Architecture
- **Framework**: React 18 (using CRA)
- **Language**: JavaScript
- **Package Manager**: npm
- **Entry Point**: `src/index.js` -> `src/App.js`
- **Static Assets**: `public/` directory (images, CSS, data.json)
- **Components**: `src/Components/` (Header, About, Contact, Footer, etc.)

## Key Files
- `public/data.json` - Main data source for the site content
- `src/App.js` - Root component with routing
- `src/Home.js` - Home page component

## Development
- Dev server runs on port 5000 with host 0.0.0.0
- `npm start` to run the development server
- `npm run build` to create production build (output in `build/`)

## Deployment
- Static deployment using the `build` directory
- Build command: `npm run build`

## Recent Changes
- 2026-02-12: Configured for Replit environment (port 5000, host 0.0.0.0, proxy-friendly settings)
