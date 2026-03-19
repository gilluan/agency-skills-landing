'use client'

import { AlertTriangle, Clock, Users, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Projetos Demoram Semanas',
    description: 'Cada projeto leva semanas para ser entregue. Clientes impacientes e margens apertadas.'
  },
  {
    icon: Users,
    title: 'Contratar Devs Custa Caro',
    description: 'Desenvolvedores qualificados são caros e difíceis de encontrar. Sua margem some com a folha.'
  },
  {
    icon: TrendingDown,
    title: 'Qualidade Varia Muito',
    description: 'Cada projeto tem qualidade diferente. Clientes insatisfeitos e retrabalho constante.'
  },
  {
    icon: AlertTriangle,
    title: 'Não Consegue Escalar',
    description: 'Você é o gargalo da agência. Quanto mais cresce, mais trabalho tem.'
  }
]

export default function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Sua Agência Está Presa em{' '}
            <span className="text-red-600">Tarefas Manuais</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Você gasta horas fazendo código repetitivo, revisando trabalho de freelancers 
            e tentando manter a qualidade. Isso não escala.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-2xl bg-red-50 border border-red-100"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}