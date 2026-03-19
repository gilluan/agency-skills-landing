import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-sans">{children}</body>
    </html>
  )
}