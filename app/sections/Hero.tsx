'use client'

import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8">
          <Zap className="w-4 h-4" />
          <span>Para Agências de IA que Querem Escalar</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
          Entregue Projetos{' '}
          <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
            10x Mais Rápido
          </span>{' '}
          com Claude Code
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
          Skills e templates prontos para agências de IA usarem Claude Code como copiloto técnico. 
          Padronize qualidade, reduza custos e escalone sem contratar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToPricing}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Quero Acelerar Minha Agência
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#features"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Ver o que está incluído →
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Ideal para agências que usam:</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <span className="text-2xl font-bold">Next.js</span>
            <span className="text-2xl font-bold">React</span>
            <span className="text-2xl font-bold">TypeScript</span>
            <span className="text-2xl font-bold">Supabase</span>
            <span className="text-2xl font-bold">Stripe</span>
          </div>
        </div>
      </div>
    </section>
  )
}