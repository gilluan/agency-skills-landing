import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agency Skills - Entregue Projetos 10x Mais Rápido com Claude Code',
  description: 'Skills e templates prontos para agências de IA usarem Claude Code como copiloto técnico. Acelere suas entregas e escalone sem contratar.',
  keywords: 'claude code, agência IA, automação, next.js, templates, skills',
  openGraph: {
    title: 'Agency Skills - Entregue Projetos 10x Mais Rápido',
    description: 'Skills e templates para agências de IA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}