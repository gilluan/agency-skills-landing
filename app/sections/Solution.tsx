'use client'

import { Rocket, Shield, TrendingUp, Brain } from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Entregue em Dias, Não Semanas',
    description: 'Com skills prontas, você entrega projetos complexos em dias. Clientes felizes e mais projetos no pipeline.'
  },
  {
    icon: Shield,
    title: 'Padronize Qualidade',
    description: 'Toda entrega segue os mesmos padrões de código, arquitetura e documentação. Qualidade consistente sempre.'
  },
  {
    icon: TrendingUp,
    title: 'Escalone Sem Contratar',
    description: 'Claude Code é seu copiloto técnico 24/7. Produza 10x mais sem aumentar a equipe.'
  },
  {
    icon: Brain,
    title: 'Foque em Estratégia',
    description: 'Deixe o código repetitivo com o Claude. Você foca no que importa: estratégia e relacionamento com clientes.'
  }
]

export default function Solution() {
  return (
    <section className="py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Claude Code como Seu{' '}
            <span className="text-primary-600">Copiloto Técnico</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Skills especializadas que transformam Claude Code em um desenvolvedor sênior 
            trabalhando ao seu lado 24 horas por dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-2xl bg-white border border-primary-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}