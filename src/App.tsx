import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TLDRSection } from './components/TLDRSection'
import { OpenSection } from './components/OpenSection'
import { VaultGate } from './components/VaultGate'
import { VaultContent } from './components/VaultContent'
import { Footer } from './components/Footer'

function App() {
  const [isVaultUnlocked, setIsVaultUnlocked] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleUnlock = () => {
    setIsVaultUnlocked(true)
    // Scroll to vault content after unlock
    setTimeout(() => {
      document.getElementById('vault-content')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <div className="min-h-screen bg-white-pure font-inter">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-black-pure z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <Header />

      <main>
        <Hero />
        <TLDRSection />
        <OpenSection />

        <AnimatePresence mode="wait">
          {!isVaultUnlocked ? (
            <VaultGate key="gate" onUnlock={handleUnlock} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <VaultContent />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App
