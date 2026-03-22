import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: 'Ruach Renovations | Premium Kitchen, Bathroom & Home Renovation',
  description: 'Ruach Renovations — breathing life into your home. Expert kitchen, bathroom, and full home renovation services. Quality craftsmanship, guaranteed satisfaction.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
