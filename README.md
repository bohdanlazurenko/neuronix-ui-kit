# Neuronix UI Kit

A modern UI component library built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- 🎨 Beautiful, accessible components built with Tailwind CSS
- ⚡ TypeScript support for better developer experience
- 🔧 Customizable design system with CSS variables
- 📱 Responsive design
- ⚙️ Flexible component variants

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@/components/ui/button'

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>

// States
<Button disabled>Disabled</Button>
```

## Project Structure

```
neuronix-ui-kit/
├─ app/
│── api/
││── ping/
│││── route.ts
│── globals.css
│── layout.tsx
│── page.tsx
├─ components/
│── ui/
││── button.tsx
├─ lib/
│── utils.ts
├─ .gitignore
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
├─ tsconfig.json
└─ README.md
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **clsx** - Utility for constructing className strings
- **tailwind-merge** - Utility for merging Tailwind CSS classes

## License

MIT License - feel free to use this project for your own purposes!