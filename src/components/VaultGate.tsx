import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { liveData } from '../data/live-data'

interface VaultGateProps {
  onUnlock: () => void
}

export function VaultGate({ onUnlock }: VaultGateProps) {
  const { vault, meta } = liveData
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password.toUpperCase().trim() === vault.password.toUpperCase()) {
      setIsUnlocking(true)
      setError(false)
      setTimeout(() => {
        onUnlock()
      }, 1000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-6 bg-black-pure text-white"
      id="vault-gate"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Vault Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gray-700 rounded-2xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isUnlocking ? (
                <motion.svg
                  key="unlocked"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-12 h-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="locked"
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="inline-block px-4 py-1.5 bg-gray-800 rounded-full text-xs font-medium text-gray-400 mb-6">
            Conteúdo Exclusivo • Live #{meta.number}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alan's Vault
          </h2>
          <p className="text-gray-400 text-lg mb-2">
            Templates, scripts, checklists e insights exclusivos
          </p>
          <p className="text-gray-500 text-sm">
            A senha foi revelada no final da live.
          </p>
        </motion.div>

        {/* Password Form */}
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mt-10 max-w-sm mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a senha da live"
              className={`w-full px-5 py-4 bg-gray-800 border-2 rounded-lg text-white placeholder-gray-500 text-center text-lg font-medium tracking-wider uppercase focus:outline-none transition-colors ${
                error
                  ? 'border-red-500 shake'
                  : 'border-gray-700 focus:border-white'
              }`}
              disabled={isUnlocking}
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-3"
            >
              Senha incorreta. Ficou até o final da live?
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isUnlocking || !password}
            className={`mt-6 w-full py-4 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all ${
              isUnlocking
                ? 'bg-white text-black-pure'
                : password
                  ? 'bg-white text-black-pure hover:bg-gray-200'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isUnlocking ? 'Desbloqueando...' : 'Desbloquear Vault'}
          </button>
        </motion.form>

        {/* What's Inside */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left"
        >
          {[
            { icon: '📋', label: `${vault.templates.length} Templates` },
            { icon: '✍️', label: `${vault.scripts.length} Scripts` },
            { icon: '✅', label: `${vault.checklists.length} Checklists` },
            { icon: '💡', label: `${vault.insights.length} Insights` },
          ].map((item) => (
            <div key={item.label} className="bg-gray-800/50 rounded-lg p-4">
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <span className="text-sm text-gray-400">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Didn't attend */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-gray-600 text-sm"
        >
          Não participou da live? A próxima é toda quinta-feira às 19h.
          <br />
          <a href={meta.youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 underline hover:text-white transition-colors">
            Ative o lembrete no YouTube
          </a>
        </motion.p>
      </div>

      <style>{`
        .shake {
          animation: shake 0.5s ease-in-out;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
      `}</style>
    </motion.section>
  )
}
