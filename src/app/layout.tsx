import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { BackgroundShapes } from '@/components/background-shapes'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

/**
 * Metadata configuration for SEO and Social Media sharing.
 * Resolves the 'metadataBase' warning in Vercel.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://allanova-portfolio.vercel.app'), 
  title: 'Baliddawa Allan | Full-Stack Developer & Freelancer',
  description: 'Baliddawa Allan - Full-Stack Software Engineer & Freelancer specializing in Java/Spring Boot and React/Next.js. Based in Kampala, Uganda.',
  keywords: [
    'Full-Stack Developer', 
    'Java', 
    'Spring Boot', 
    'React', 
    'Next.js', 
    'Node.js', 
    'Freelancer', 
    'Uganda'
  ],
  authors: [{ name: 'Baliddawa Allan' }],
  openGraph: {
    title: 'Baliddawa Allan | Full-Stack Developer',
    description: 'Portfolio of Baliddawa Allan, Software Engineer and Computer Science Graduate.',
    images: [{
      url: '/images/allan.jpg',
      width: 1200,
      height: 630,
      alt: 'Baliddawa Allan Portfolio Preview',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baliddawa Allan | Full-Stack Developer',
    description: 'Full-Stack Software Engineer specializing in Java, Spring Boot, and React.',
    images: ['/images/allan.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* 
            ThemeProvider handles dark/light mode switching. 
            BackgroundShapes and Navigation stay persistent across all pages.
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundShapes />
          <Navigation />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}