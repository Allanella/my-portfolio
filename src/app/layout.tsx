import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { BackgroundShapes } from '@/components/background-shapes'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  // Replace with your actual Vercel deployment URL
  metadataBase: new URL('https://allanova-portfolio.vercel.app'), 
  title: 'Baliddawa Allan | Full-Stack Developer & Freelancer',
  description: 'Full-Stack Software Engineer & Freelancer specializing in Java, Spring Boot, React, and Next.js.',
  openGraph: {
    title: 'Baliddawa Allan | Full-Stack Developer',
    description: 'Portfolio of Baliddawa Allan, Software Engineer and Computer Science Graduate.',
    images: ['/images/allan.jpg'],
    type: 'website',
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundShapes />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}