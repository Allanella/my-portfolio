import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { BackgroundShapes } from '@/components/background-shapes'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://allanova-portfolio.vercel.app'), 
  title: 'Baliddawa Allan | Full-Stack Developer',
  description: 'Full-Stack Software Engineer — Java/Spring Boot, React/Next.js. Based in Kampala, Uganda.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false} // Force dark to prevent 'funny' flashing
        >
          <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <BackgroundShapes />
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}