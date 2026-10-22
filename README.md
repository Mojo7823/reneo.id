# Reneo.id - Wedding & Photography Platform

A modern wedding photography and digital invitation platform built with Nuxt 4 and Nuxt UI v4.

## Features

- 🎨 **Nuxt 4** - Latest Nuxt framework with improved performance
- 💎 **Nuxt UI v4** - Beautiful, accessible UI components
- 📸 **Photography Portfolio** - Showcase wedding photography work
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework
- 🔤 **TypeScript** - Full type safety

## Setup

Make sure to install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

The site is fully static. Generate it into `.output/public`:

```bash
npm run generate
```

Pushing to `main` deploys it to GitHub Pages (`.github/workflows/deploy.yml`), served at https://reneoplanner.id through Cloudflare.

## Project Structure

```
.
├── app/
│   ├── layouts/       # Layout components
│   ├── pages/         # Application pages
│   ├── components/    # Vue components
│   └── data/          # Portfolio gallery list
├── public/            # Static assets (photos, video, icons)
└── nuxt.config.ts     # Nuxt configuration
```

## Pages

- `/` - Home page: hero, about, portfolio preview, packages, reviews, location, contact
- `/portfolio` - Photography portfolio gallery

Check out the [Nuxt documentation](https://nuxt.com/docs) for more information.

