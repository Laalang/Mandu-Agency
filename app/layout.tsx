import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mandu Outsourcing',
  description: 'Site by Archyst',
  generator: 'Vercel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
