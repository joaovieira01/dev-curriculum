import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Groven - Crie seu Currículo Profissional",
  description:
    "Plataforma para criar currículos profissionais e modernos em poucos minutos. Ideal para desenvolvedores e profissionais de tecnologia.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
