'use client'

import { 
  Code2, 
  Layout, 
  Workflow, 
  Database, 
  Plug, 
  Bot, 
  CheckCircle,
  FileCode,
  GitBranch
} from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Next.js SaaS Starter', desc: 'Setup completo com auth, DB e deploy' },
  { icon: Layout, title: 'Landing Page Converter', desc: 'Landing otimizada para conversão' },
  { icon: Workflow, title: 'Automation Workflow', desc: 'Automações com n8n/Make' },
  { icon: Database, title: 'Database Schema Designer', desc: 'Modelagem com Supabase' },
  { icon: Plug, title: 'API Integration Master', desc: 'Integrações robustas de APIs' },
  { icon: Bot, title: 'AI Agent Builder', desc: 'Agentes com OpenAI/Claude (bônus)' },
]

const bonuses = [
  { icon: FileCode, title: 'Prompts Otimizados', desc: '50+ prompts testados' },
  { icon: GitBranch, title: 'Templates de Projetos', desc: '4 templates completos' },
  { icon: CheckCircle, title: 'Playbook de Execução', desc: 'Guia passo a passo' },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            O Que Você <span className="text-primary-600">Recebe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um pacote completo de skills, templates e recursos para transformar 
            sua agência em uma máquina de entregas.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            7 Skills Práticas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100 hover:border-primary-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {skill.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            + Bônus Exclusivos
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-accent-50 to-white border border-accent-100 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mx-auto mb-4">
                  <bonus.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {bonus.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {bonus.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}