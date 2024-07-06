import Link from 'next/link'
import '../App.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Obochina',
    description: 'My personal website',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <body>
                <div id="root"/>
                {children}
            </body>
        </html>
    )
  }