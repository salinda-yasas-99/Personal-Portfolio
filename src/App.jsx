import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Skills from './components/Skills'
import ExperienceTimeline from './components/ExperienceTimeline'
import EducationTimeline from './components/EducationTimeline'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpectacularLoader from './components/SpectacularLoader'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          className="fixed bottom-6 right-4 z-50 rounded-full border border-emerald-400/40 bg-slate-900/85 px-4 py-2 text-sm font-semibold text-emerald-200 shadow-glow backdrop-blur transition hover:scale-105 hover:text-white sm:right-8"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ boxShadow: '0 0 24px rgba(16, 185, 129, 0.3)' }}
          aria-label="Scroll to top"
        >
          Top
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false)
    }, 2600)

    document.body.style.overflow = 'hidden'

    return () => {
      window.clearTimeout(timeoutId)
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : ''
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <SpectacularLoader />}</AnimatePresence>

      <motion.div
        className="bg-mesh min-h-screen text-slate-200"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 22 : 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhatIDo />
          <Skills />
          <ExperienceTimeline />
          <EducationTimeline />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTopButton />
      </motion.div>
    </>
  )
}

export default App
