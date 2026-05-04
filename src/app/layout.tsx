import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { BackgroundShapes } from '@/components/background-shapes'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://allanova-portfolio.vercel.app'), 
  title: 'Baliddawa Allan | Full-Stack Developer & Freelancer',
  description: 'Full-Stack Software Engineer — Java/Spring Boot, React/Next.js. Based in Kampala, Uganda.',
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
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <BackgroundShapes />
            <Navigation />
            {/* Added overflow-x-hidden to prevent 'funny' horizontal scrolling */}
            <main className="flex-1 overflow-x-hidden">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}