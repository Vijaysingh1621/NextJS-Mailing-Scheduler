import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  title: "Mailing Scheduler",
  description: "Schedule and manage your email campaigns",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
        <div id="modal-root" />
      </body>
    </html>
  )
}

