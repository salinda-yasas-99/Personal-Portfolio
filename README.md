# Portfolio Web App

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

It showcases professional experience, education, skills, projects, and contact information in a clean single-page layout.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS
- Framer Motion
- ESLint
- Firebase Hosting (for deployment)

## Project Structure

```text
portfolio/
|- public/
|- src/
|  |- assets/
|  |- components/
|  |  |- ui/
|  |- data/
|  |- App.jsx
|  |- main.jsx
|- index.html
|- tailwind.config.js
|- postcss.config.js
|- vite.config.js
|- firebase.json
|- package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
pnpm install
```

### Run in Development

```bash
pnpm dev
```

The app runs on the local Vite development server and supports hot module replacement.

## Available Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build production output into dist/
pnpm preview  # Preview production build locally
pnpm lint     # Run ESLint checks
```

## Production Build

```bash
pnpm build
```

The generated production files are placed in the dist folder.

## Deployment (Firebase Hosting)

This project is configured to deploy the dist output directory via Firebase Hosting.

Current hosting config includes:
- public directory: dist
- SPA rewrite: all routes redirected to index.html

Typical deployment flow:

```bash
pnpm build
firebase deploy
```

If Firebase CLI is not installed:

```bash
npm install -g firebase-tools
firebase login
```

## Content Customization

Update portfolio content in these folders:

- src/data for skills, experience, education, and projects
- src/components for section layout and UI behavior
- src/assets for icons, images, and SVGs

## License

This project is intended for personal portfolio use.
