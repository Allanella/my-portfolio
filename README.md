# Baliddawa Allan - Modern Portfolio Website

A stunning, modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Showcasing my work as a Full-Stack Software Engineer with cutting-edge web technologies and beautiful animations.

## ✨ Features

- 🌙 **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- 🎨 **Modern UI/UX** - Beautiful gradients, glassmorphism effects, and smooth animations
- � **Fully Responsive** - Optimized for all devices from mobile to desktop
- ⚡ **Performance Optimized** - Next.js Image optimization, lazy loading, and code splitting
- 🎯 **Interactive Elements** - Project filtering, skill animations, and micro-interactions
- 🔍 **SEO Friendly** - Meta tags, structured data, and semantic HTML
- �🚀 **Fast Loading** - Optimized build with Next.js 14 App Router

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Theming**: next-themes
- **Animations**: Framer Motion & CSS animations
- **Images**: Next.js Image component with optimization
- **Deployment**: Vercel

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Allanella/baliddawa-allan-portfolio.git
   cd baliddawa-allan-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

1. **Build for production**

   ```bash
   npm run build
   ```

2. **Start production server**

   ```bash
   npm start
   ```

3. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: { DEFAULT: '#667eea', light: '#764ba2' },
      accent: { DEFAULT: '#38bdf8', secondary: '#f5576c' },
      // ... more colors
    }
  }
}
```

### Personal Information

Update your details in the respective components:

- `src/components/hero-section.tsx` - Name, title, location
- `src/components/contact-section.tsx` - Contact links
- `src/app/layout.tsx` - Meta information

### Projects

Modify projects in `src/components/projects-section.tsx`:

```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    image: '/images/project.jpg',
    tech: ['React', 'Next.js'],
    category: 'fullstack',
    github: 'https://github.com/your-repo',
    demo: 'https://your-demo.com',
  },
];
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page component
├── components/
│   ├── hero-section.tsx     # Hero section with animations
│   ├── skills-section.tsx   # Skills and tech stack
│   ├── projects-section.tsx # Project showcase with filtering
│   ├── education-section.tsx # Education background
│   ├── contact-section.tsx  # Contact information
│   ├── navigation.tsx       # Navigation bar with theme toggle
│   ├── background-shapes.tsx # Animated background elements
│   ├── footer.tsx           # Footer component
│   ├── scroll-to-top.tsx    # Scroll to top button
│   └── theme-provider.tsx   # Theme context provider
├── images/                  # Project and profile images
└── ...
```

## 🌐 Live Site

Deployed on Vercel: [Portfolio Live Demo](https://your-portfolio-url.vercel.app)

## 👨‍💻 About Me

Full-Stack Developer specializing in Java/Spring Boot and React/Next.js, based in Kampala, Uganda. I also provide professional sound engineering and MC services for events.

## 📫 Contact

- **Email**: allanbaliddawa@gmail.com
- **LinkedIn**: [Allan Baliddawa](https://www.linkedin.com/in/allan-baliddawa-828771286/)
- **GitHub**: [Allanella](https://github.com/Allanella)

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and use it as inspiration for your own projects!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⚡ **Built with passion and excellence using modern web technologies**
