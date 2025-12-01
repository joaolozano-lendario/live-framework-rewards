import { motion } from 'framer-motion'
import { liveData } from '../data/live-data'

export function TLDRSection() {
  const { tldr, keyIdeas, meta } = liveData

  return (
    <section className="py-20 px-6 bg-black-pure text-white">
      <div className="max-w-5xl mx-auto">
        {/* TL;DR Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium text-gray-400 mb-4">
            TL;DR • Resumo em 2 minutos
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {tldr.oneSentence}
          </h2>

          {/* Context Badge */}
          {meta.context && (
            <p className="text-sm text-gray-500 italic">
              {meta.context}
            </p>
          )}
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Pontos Principais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tldr.keyTakeaways.map((takeaway, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 bg-white/5 rounded-lg p-4"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-white text-black-pure rounded-full flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-300">{takeaway}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* For Who */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* For */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-white text-black-pure rounded-full flex items-center justify-center text-xs">
                ✓
              </span>
              Para Você Se...
            </h3>
            <ul className="space-y-3">
              {tldr.whoIsFor.map((item, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-white mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          {tldr.notFor && tldr.notFor.length > 0 && (
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs">
                  ✗
                </span>
                Não é Para Você Se...
              </h3>
              <ul className="space-y-3">
                {tldr.notFor.map((item, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Key Ideas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Ideias-Chave da Aula
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyIdeas.map((idea, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-xl p-5 ${
                  idea.highlight
                    ? 'bg-white text-black-pure'
                    : 'bg-white/5 text-white'
                }`}
              >
                <span className="text-2xl mb-3 block">{idea.emoji}</span>
                <h4 className={`font-semibold mb-2 ${idea.highlight ? 'text-black-pure' : 'text-white'}`}>
                  {idea.title}
                </h4>
                <p className={`text-sm ${idea.highlight ? 'text-gray-700' : 'text-gray-400'}`}>
                  {idea.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
