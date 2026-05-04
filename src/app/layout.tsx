import './globals.css';
import { DM_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Baliddawa Allan | Full-Stack Developer',
  description:
    'Full-Stack Software Engineer — Java/Spring Boot, React/Next.js. Based in Kampala, Uganda.',
  keywords: ['Full-Stack Developer', 'React', 'Next.js', 'Java', 'Spring Boot', 'Kampala', 'Uganda'],
  authors: [{ name: 'Baliddawa Allan' }],
  openGraph: {
    title: 'Baliddawa Allan | Full-Stack Developer',
    description:
      'Full-Stack Software Engineer — Java/Spring Boot, React/Next.js. Based in Kampala, Uganda.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.variable}>
      <body
        style={{
          fontFamily: 'var(--font-dm-sans), ui-sans-serif, sans-serif',
          background: '#080c14',
          color: '#f1f5f9',
          minHeight: '100svh',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          overflowX: 'hidden',
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100svh',
            }}
          >
            <main style={{ flex: '1 1 0%' }}>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}