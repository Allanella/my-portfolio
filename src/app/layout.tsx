import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { BackgroundShapes } from '@/components/background-shapes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Baliddawa Allan | Full-Stack Developer & Freelancer',
  description: 'Baliddawa Allan - Full-Stack Software Engineer & Freelancer. Java/Spring Boot, React/Next.js. Media skills: Sound Engineering, Master of Ceremonies (MC). Based in Kampala, Uganda.',
  keywords: 'Full-Stack Developer, Java, Spring Boot, React, Next.js, Sound Engineering, MC, Freelancer, Uganda',
  author: 'Baliddawa Allan',
  openGraph: {
    title: 'Baliddawa Allan | Full-Stack Developer & Freelancer',
    description: 'Full-Stack Software Engineer & Freelancer — Java/Spring Boot, React/Next.js. Also skilled in sound engineering and hosting (MC).',
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
