import { motion } from 'framer-motion'
import { liveData } from '../data/live-data'

export function OpenSection() {
  const { metaphor, pillars, process, publicInsights, meta } = liveData

  return (
    <section className="py-24 px-6 bg-white-soft">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-200 rounded-full text-xs font-medium text-gray-600 mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Acesso Livre
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black-pure mb-4">
            O Framework Completo
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Tudo que você precisa saber da Live #{meta.number} em uma página
          </p>
        </motion.div>

        {/* Metaphor Section - Before/After */}
        {metaphor && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-white-pure border border-gray-200 rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="flex-shrink-0 w-10 h-10 bg-black-pure text-white flex items-center justify-center rounded-full font-bold text-sm">
                  1
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-black-pure">A Metáfora Central</h3>
                  <p className="text-gray-500 text-sm">O conceito que muda tudo</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Before */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-100 rounded-xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gray-200 rounded-bl-full opacity-50" />
                  <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-full mb-4">
                    O que acontece hoje
                  </span>
                  <h4 className="text-xl font-bold text-black-deep mb-4">{metaphor.before.title}</h4>
                  <ul className="space-y-3">
                    {metaphor.before.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 mt-0.5">
                          ✗
                        </span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* After */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-black-pure text-white rounded-xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gray-800 rounded-bl-full opacity-50" />
                  <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-full mb-4">
                    O que deveria ser
                  </span>
                  <h4 className="text-xl font-bold mb-4">{metaphor.after.title}</h4>
                  <ul className="space-y-3">
                    {metaphor.after.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="flex-shrink-0 w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs text-black-pure mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Visual Arrow */}
              <div className="hidden md:flex items-center justify-center my-6">
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="h-px w-12 bg-gray-300" />
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-xs uppercase tracking-wider">Transformação</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="h-px w-12 bg-gray-300" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white-pure border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex-shrink-0 w-10 h-10 bg-black-pure text-white flex items-center justify-center rounded-full font-bold text-sm">
                2
              </span>
              <div>
                <h3 className="text-2xl font-bold text-black-pure">Os {pillars.length} Pilares Fundamentais</h3>
                <p className="text-gray-500 text-sm">Fundamentos que sustentam todo o framework</p>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group bg-gray-100 hover:bg-black-pure rounded-xl p-5 transition-all duration-300 cursor-default"
                >
                  <span className="text-xs font-bold text-gray-400 group-hover:text-gray-500 block mb-2 transition-colors">
                    {pillar.number}
                  </span>
                  <h4 className="font-semibold text-black-deep group-hover:text-white text-sm mb-2 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Pillar Consequences - Expandable */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 p-6 bg-gray-100 rounded-xl"
            >
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                O que acontece se você ignorar esses pilares?
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {pillars.filter(p => p.consequence).slice(0, 3).map((pillar, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-gray-400 mt-1">→</span>
                    <span className="text-gray-600">{pillar.consequence}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white-pure border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex-shrink-0 w-10 h-10 bg-black-pure text-white flex items-center justify-center rounded-full font-bold text-sm">
                3
              </span>
              <div>
                <h3 className="text-2xl font-bold text-black-pure">O Processo Completo</h3>
                <p className="text-gray-500 text-sm">De ideia vaga a sistema funcionando</p>
              </div>
            </div>

            {/* Process Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

              <div className="space-y-4">
                {process.map((step, i) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-stretch gap-4 group"
                  >
                    {/* Phase Badge */}
                    <div className="flex-shrink-0 w-20 relative z-10">
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 group-hover:bg-black-pure rounded-lg py-3 transition-colors">
                        <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-500 transition-colors">
                          {step.phase}
                        </span>
                        <span className="text-lg font-bold text-black-pure group-hover:text-white transition-colors">
                          {step.humanPercent}
                        </span>
                        <span className="text-[10px] text-gray-500 group-hover:text-gray-400 transition-colors">
                          humano
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow bg-gray-100 rounded-lg p-4 flex items-center justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-black-deep text-sm">{step.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded">
                          {step.time}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Insight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 p-6 bg-black-pure text-white rounded-xl flex items-start gap-4"
            >
              <span className="flex-shrink-0 w-10 h-10 bg-white text-black-pure rounded-full flex items-center justify-center text-xl">
                💡
              </span>
              <div>
                <p className="text-sm font-medium text-gray-400 mb-1">Insight Principal</p>
                <p className="text-lg font-serif italic">
                  "90% do trabalho humano acontece no INÍCIO.
                  A IA assume progressivamente — nunca antes de você ter clareza."
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Public Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-white-pure border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex-shrink-0 w-10 h-10 bg-black-pure text-white flex items-center justify-center rounded-full font-bold text-sm">
                4
              </span>
              <div>
                <h3 className="text-2xl font-bold text-black-pure">Insights da Live</h3>
                <p className="text-gray-500 text-sm">As sacadas mais importantes</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {publicInsights.map((insight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative bg-gray-100 rounded-xl p-6 border-l-4 border-black-pure"
                >
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-black-pure text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </span>
                  <h4 className="font-semibold text-black-deep mb-3 mt-2">{insight.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{insight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decision Tree */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white-pure border border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="flex-shrink-0 w-10 h-10 bg-black-pure text-white flex items-center justify-center rounded-full font-bold text-sm">
                5
              </span>
              <div>
                <h3 className="text-2xl font-bold text-black-pure">Tarefa ou Projeto?</h3>
                <p className="text-gray-500 text-sm">A decisão que muda tudo</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                    ✓
                  </span>
                  <div>
                    <h4 className="font-bold text-black-pure">TAREFA</h4>
                    <p className="text-xs text-gray-500">1 ação macro + 1 agente</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">→</span>
                    <span>Enviar e-mail</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">→</span>
                    <span>Criar imagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">→</span>
                    <span>Responder mensagem</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white rounded-lg">
                  <p className="text-xs text-gray-500">
                    <strong>Briefing suficiente.</strong> Pode delegar direto para IA.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-black-pure text-white rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 bg-white text-black-pure rounded-full flex items-center justify-center text-2xl">
                    ⚙️
                  </span>
                  <div>
                    <h4 className="font-bold">PROJETO</h4>
                    <p className="text-xs text-gray-400">Múltiplas tarefas + múltiplos agentes</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">→</span>
                    <span>CRM personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">→</span>
                    <span>Sistema de marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">→</span>
                    <span>E-commerce integrado</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-400">
                    <strong className="text-white">Precisa de Detalhamento.</strong> Não pule etapas.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
