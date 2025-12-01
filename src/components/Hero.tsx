import { motion } from 'framer-motion'
import { liveData } from '../data/live-data'

export function Hero() {
  const { meta, summary } = liveData

  // Format date
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + 'T12:00:00')
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 bg-white-pure">
      <div className="max-w-4xl mx-auto text-center">
        {/* Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <span className="px-4 py-2 bg-black-pure text-white text-sm font-semibold rounded-full">
            Live #{meta.number}
          </span>
          <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full">
            {formatDate(meta.date)}
          </span>
          {meta.duration && (
            <span className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full">
              {meta.duration}
            </span>
          )}
        </motion.div>

        {/* Main Title - Live Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-pure leading-tight mb-4"
        >
          "{meta.title}"
        </motion.h1>

        {/* Theme */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-500 mb-8"
        >
          {meta.theme}
        </motion.p>

        {/* Key Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-black-deep font-serif italic max-w-2xl mx-auto mb-12"
        >
          "{summary.keyQuote}"
        </motion.p>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto"
        >
          <div className="bg-gray-100 p-6 rounded-xl">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
              O Problema
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">
              {summary.problem.length > 150
                ? summary.problem.substring(0, 150) + '...'
                : summary.problem}
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
              A Solução
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">
              {summary.solution.length > 150
                ? summary.solution.substring(0, 150) + '...'
                : summary.solution}
            </p>
          </div>
          <div className="bg-black-pure text-white p-6 rounded-xl">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
              A Transformação
            </span>
            <p className="text-sm text-gray-300 leading-relaxed">
              {summary.transformation.length > 150
                ? summary.transformation.substring(0, 150) + '...'
                : summary.transformation}
            </p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-xs uppercase tracking-wider">Role para explorar</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
