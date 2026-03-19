'use client'

import { Check, Sparkles } from 'lucide-react'

const features = [
  '7 skills práticas para Claude Code',
  '4 templates de projetos completos',
  '50+ prompts otimizados',
  'Playbook de execução (50+ páginas)',
  'Acesso vitalício',
  'Atualizações gratuitas',
  'Suporte via email',
  'Comunidade exclusiva (bônus)',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Invista na{' '}
            <span className="text-primary-600">Eficiência</span> da Sua Agência
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um investimento que se paga com um único projeto. 
            Economize semanas de trabalho em cada entrega.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative rounded-3xl bg-white border-2 border-primary-500 shadow-2xl p-8">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary-500 text-white text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                Preço de Lançamento
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pt-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl text-gray-400 line-through">€79</span>
                <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded">
                  -50%
                </span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-gray-900">€39</span>
                <span className="text-gray-500">/único</span>
              </div>
              <p className="text-gray-500 mt-2">Acesso vitalício • Atualizações inclusas</p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="w-full py-4 px-8 bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl">
              Começar Agora - €39
            </button>

            {/* Guarantee */}
            <p className="text-center text-sm text-gray-500 mt-4">
              ✅ Garantia de 7 dias. Não gostou? Devolvemos seu dinheiro.
            </p>
          </div>

          {/* Trust */}
          <p className="text-center text-gray-500 text-sm mt-8">
            Pagamento seguro via Stripe • Acesso imediato após compra
          </p>
        </div>
      </div>
    </section>
  )
}