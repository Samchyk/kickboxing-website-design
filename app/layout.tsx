import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Oswald, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'HUNGARY KICKBOXING — A küzdelem művészete',
    template: '%s — HUNGARY KICKBOXING',
  },
  description:
    'Prémium kickbox tudástár magyar nyelven: stílusok, technikák, edzésmódszerek, szabályok, felszerelés és a magyar kickbox története. Erő, precizitás, fegyelem.',
  metadataBase: new URL('https://hungarykikszbox.com'),
  keywords: [
    'kickbox',
    'küzdősport',
    'technika',
    'edzés',
    'full contact',
    'low kick',
    'magyar kickbox',
  ],
}

export const viewport = {
  themeColor: '#0a0a0b',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hu"
      className={`dark ${inter.variable} ${oswald.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
