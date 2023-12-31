import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ethan Woo',
  description: 'Made by Ethan Woo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Ethan Woo</title>
      <link rel='icon' type='image/x-icon' href='/favicon/favicon.ico'/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
