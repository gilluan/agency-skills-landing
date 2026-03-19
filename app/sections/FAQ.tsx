'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'O que são "skills" para Claude Code?',
    answer: 'São instruções especializadas e templates que ensinam o Claude Code a executar tarefas específicas de forma consistente. Cada skill inclui prompts otimizados, exemplos de código e fluxos de trabalho testados para entregar projetos de alta qualidade rapidamente.'
  },
  {
    question: 'Preciso saber programar para usar?',
    answer: 'Conhecimento básico de programação é recomendado, mas você não precisa ser expert. As skills são projetadas para guiar o Claude Code passo a passo. Se você entende lógica de programação e já trabalha com projetos web, conseguirá usar sem problemas.'
  },
  {
    question: 'Funciona com qualquer tipo de projeto?',
    answer: 'As skills são otimizadas para projetos Next.js, React, TypeScript e automações. Se sua agência trabalha com SaaS, landing pages, e-commerces ou automações de workflow, vai tirar muito proveito. Projetos em outras stacks podem precisar de adaptações.'
  },
  {
    question: 'E as atualizações?',
    answer: 'Você recebe todas as atualizações gratuitamente. Quando novas skills forem adicionadas ou as existentes forem melhoradas, você terá acesso imediato ao conteúdo atualizado sem pagar nada extra.'
  },
  {
    question: 'Como acesso o conteúdo?',
    answer: 'Após a compra, você recebe acesso imediato ao repositório GitHub privado com todo o conteúdo: skills, templates, prompts e playbook. Tudo é seu para sempre. Você também pode baixar o playbook em PDF para consulta offline.'
  },
  {
    question: 'Posso usar em projetos de clientes?',
    answer: 'Sim! A licença permite uso ilimitado em projetos seus e de clientes. Você pode usar as skills e templates em quantos projetos quiser, para quantos clientes quiser. Não há limites de uso.'
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Perguntas <span className="text-primary-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Ainda tem dúvidas? Aqui estão as respostas mais comuns.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}