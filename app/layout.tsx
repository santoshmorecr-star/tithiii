import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Noto_Serif_Devanagari } from 'next/font/google'
import './globals.css'

const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const serif = Noto_Serif_Devanagari({ subsets: ['devanagari'], variable: '--font-serif' })

export const metadata: Metadata = {
  metadataBase: new URL('https://tithiii.xyz'),
  title: { default: 'Tithiii — Hindu Calendar & Panchang', template: '%s | Tithiii' },
  description: 'A simple, trustworthy Hindu calendar and daily Panchang for India.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Tithiii — Hindu Calendar & Panchang', description: 'Daily Panchang, festivals and Hindu calendar information for India.', url: 'https://tithiii.xyz', siteName: 'Tithiii', type: 'website' },
  robots: { index: true, follow: true },
  other: { 'google-adsense-account': 'ca-pub-5893013929731437' },
}
export const viewport: Viewport = { themeColor: '#fbf8f2', colorScheme: 'light', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${serif.variable} bg-background`}><head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5893013929731437" crossOrigin="anonymous" /></head><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

export const revalidate = 3600
