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
          className="fixed bottom-6 right-4 z-50 rounded-full border border-cyan-400/40 bg-slate-900/85 px-4 py-2 text-sm font-semibold text-cyan-200 shadow-glow backdrop-blur transition hover:scale-105 hover:text-white sm:right-8"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          whileHover={{ boxShadow: '0 0 24px rgba(34, 211, 238, 0.3)' }}
          aria-label="Scroll to top"
        >
          Top
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function App() {
  return (
    <div className="bg-mesh min-h-screen text-slate-200">
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
    </div>
  )
}

export default App
