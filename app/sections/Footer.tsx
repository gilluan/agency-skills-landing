'use client'

import { ArrowRight } from 'lucide-react'

export default function Footer() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pronto para Acelerar{' '}
            <span className="text-primary-400">Sua Agência</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Junte-se a agências que entregam 10x mais rápido. 
            Invista em eficiência e escalone seu negócio.
          </p>
          <button
            onClick={scrollToPricing}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Quero Acesso Imediato - €39
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Agency Skills</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400 text-sm">by AIGENCY OS</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <span>© 2026 Agency Skills. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}