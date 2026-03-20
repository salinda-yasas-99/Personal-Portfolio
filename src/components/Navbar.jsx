import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMobileNavClick = (event, href) => {
    event.preventDefault()
    setIsOpen(false)

    const target = document.querySelector(href)
    if (!target) return

    window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/80 bg-[#05070d]/90 shadow-lg shadow-black/30 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-pad flex items-center justify-between py-5">
        <a href="#home" className="font-display text-xl font-semibold">
          <span className="gradient-text">Salinda Yasas</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-5 lg:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-cyan-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
        
          <a
            href="https://drive.google.com/file/d/1US_z2bLG_ku5vFsw2013mOyqLyfnaVCz/preview"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-1.5 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200 transition hover:bg-emerald-400/20 hover:text-white md:flex"
          >
            ↓ Resume
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-lg text-slate-300 transition hover:border-slate-600 hover:text-white lg:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-pad pb-5">
              <ul className="glass-panel flex flex-col gap-1 p-3">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800/70 hover:text-cyan-300"
                      onClick={(event) => handleMobileNavClick(event, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
               <li className="mt-2 border-t border-slate-800 pt-2">
                  <a
                    href="https://drive.google.com/file/d/1US_z2bLG_ku5vFsw2013mOyqLyfnaVCz/preview"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold text-white"                
                  >
                    ↓ View Resume
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
