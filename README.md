# Developer Portfolio

A minimal developer portfolio website built with Next.js, inspired by themackabu.dev. This portfolio features a clean, minimalist design with dark mode support and responsive layout.

## Features

- Modern UI with dark/light mode support
- Responsive design for all devices
- Reusable layouts and components
- Built with Next.js and TypeScript
- Fast performance with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dev-portfolio.git
cd dev-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
dev-portfolio/
├── src/
│   ├── app/                   # App router pages
│   │   ├── page.tsx           # Home page
│   │   ├── projects/          # Projects page
│   │   ├── skills/            # Skills page
│   │   ├── blog/              # Blog page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # Shared components
│   │   ├── Header.tsx         # Header component
│   │   ├── Footer.tsx         # Footer component
│   │   ├── MainLayout.tsx     # Main layout wrapper
│   │   └── ThemeScript.tsx    # Theme toggle script
```

## Customization

- Edit `src/app/globals.css` to modify the global styles
- Update the content in `src/app/page.tsx` and other pages
- Modify the theme colors and design in `src/app/globals.css`

## Deployment

This application can be easily deployed to Vercel:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/dev-portfolio)

## License

This project is open source and available under the [MIT License](LICENSE).
