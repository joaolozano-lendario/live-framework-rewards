import { motion } from 'framer-motion'
import { liveData } from '../data/live-data'

export function VaultContent() {
  const { vault, meta, nextLive } = liveData

  return (
    <section id="vault-content" className="py-24 px-6 bg-white-pure">
      <div className="max-w-5xl mx-auto">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black-pure text-white rounded-full text-xs font-medium mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Vault Desbloqueado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-4">
            Conteúdo Exclusivo da Live #{meta.number}
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Templates, scripts e insights para você implementar hoje
          </p>
        </motion.div>

        {/* Templates Section */}
        <VaultSection
          delay={0.1}
          badge="Templates"
          title="Templates Prontos para Uso"
          description="Copie, cole e adapte para seu contexto"
        >
          <div className="space-y-4">
            {vault.templates.map((template, i) => (
              <TemplateCard
                key={i}
                title={template.title}
                content={template.content}
              />
            ))}
          </div>
        </VaultSection>

        {/* Scripts Section */}
        <VaultSection
          delay={0.2}
          badge="Scripts"
          title="Scripts & Swipe Copy"
          description="Prompts prontos para usar com qualquer IA"
        >
          <div className="space-y-4">
            {vault.scripts.map((script, i) => (
              <ScriptCard
                key={i}
                title={script.title}
                script={script.prompt}
              />
            ))}
          </div>
        </VaultSection>

        {/* Checklists Section */}
        <VaultSection
          delay={0.3}
          badge="Checklists"
          title="Checklists Operacionais"
          description="Não pule etapas - use como validação"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {vault.checklists.map((checklist, i) => (
              <ChecklistCard
                key={i}
                title={checklist.title}
                items={checklist.items}
                variant={checklist.variant}
              />
            ))}
          </div>
        </VaultSection>

        {/* Insights Section */}
        <VaultSection
          delay={0.4}
          badge={`${vault.insights.length} Insights`}
          title="Insights Contra-Intuitivos"
          description="O que parece errado, mas funciona"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {vault.insights.map((insight, i) => (
              <motion.div
                key={insight.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-gray-100 rounded-lg p-5"
              >
                <span className="text-xs font-bold text-gray-400 block mb-2">#{insight.number}</span>
                <h4 className="font-semibold text-black-deep text-sm mb-2">{insight.title}</h4>
                <p className="text-xs text-gray-600">{insight.insight}</p>
              </motion.div>
            ))}
          </div>
        </VaultSection>

        {/* Quotes Section */}
        <VaultSection
          delay={0.5}
          badge="Citações"
          title="Citações Estratégicas do Alan"
          description="Para usar em conversas e reflexões"
        >
          <div className="space-y-4">
            {vault.quotes.map((quote, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-gray-100 border-l-4 border-black-pure p-6 rounded-r-lg"
              >
                <p className="font-serif italic text-black-deep text-lg">"{quote}"</p>
                <cite className="text-sm text-gray-500 mt-2 block not-italic">— Alan Nicolas, Live #{meta.number}</cite>
              </motion.blockquote>
            ))}
          </div>
        </VaultSection>

        {/* Action Plan */}
        <VaultSection
          delay={0.6}
          badge="Plano de Ação"
          title="Comece Agora"
          description="Ações práticas para implementar hoje"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {vault.actionPlan.map((action, i) => (
              <motion.div
                key={action.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black-pure text-white rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 bg-white text-black-pure rounded-full flex items-center justify-center font-bold text-sm">
                    {action.number}
                  </span>
                  <span className="text-xs text-gray-400">{action.time}</span>
                </div>
                <h4 className="font-semibold text-lg mb-4">{action.title}</h4>
                <ul className="space-y-2">
                  {action.steps.map((step, j) => (
                    <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-gray-500 mt-1">→</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </VaultSection>

        {/* Final CTA */}
        {nextLive && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center bg-gray-100 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold text-black-pure mb-4">
              Próxima Live: {nextLive.dayOfWeek} às {nextLive.time}
            </h3>
            <p className="text-gray-600 mb-6">
              Tema: {nextLive.theme}
            </p>
            <a
              href={meta.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black-pure text-white rounded-lg font-medium hover:bg-black-deep transition-colors"
            >
              Ativar Lembrete
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}

// Sub-components
function VaultSection({
  children,
  badge,
  title,
  description,
  delay = 0,
}: {
  children: React.ReactNode
  badge: string
  title: string
  description: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <div className="mb-8">
        <span className="inline-block px-3 py-1 bg-black-pure text-white rounded-full text-xs font-medium mb-3">
          {badge}
        </span>
        <h3 className="text-2xl font-bold text-black-pure mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      {children}
    </motion.div>
  )
}

function TemplateCard({ title, content }: { title: string; content: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
        <span className="font-medium text-sm text-black-deep">{title}</span>
        <button
          onClick={copyToClipboard}
          className="text-xs text-gray-500 hover:text-black-pure transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copiar
        </button>
      </div>
      <pre className="p-4 text-xs text-gray-700 overflow-x-auto font-mono whitespace-pre-wrap">
        {content}
      </pre>
    </div>
  )
}

function ScriptCard({ title, script }: { title: string; script: string }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(script)
  }

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-medium text-sm text-black-deep mb-2">{title}</h4>
          <p className="text-sm text-gray-600 italic">"{script}"</p>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex-shrink-0 p-2 bg-white rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function ChecklistCard({
  title,
  items,
  variant = 'default',
}: {
  title: string
  items: string[]
  variant?: 'default' | 'warning' | 'success'
}) {
  return (
    <div className={`rounded-lg p-6 ${variant === 'warning' ? 'bg-gray-100 border-l-4 border-gray-400' : 'bg-gray-100'}`}>
      <h4 className="font-semibold text-black-deep mb-4">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
            <span className={`flex-shrink-0 w-5 h-5 rounded border-2 mt-0.5 ${variant === 'warning' ? 'border-gray-400' : 'border-gray-300'}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
