import { useEffect } from 'react'
import { motion } from 'framer-motion'
import GradientButton from './ui/GradientButton'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/72 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 my-4 w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-700/80 bg-[#07171a] shadow-[0_0_80px_rgba(16,185,129,0.2)]"
        initial={{ opacity: 0, scale: 0.92, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-lg leading-none text-white/80 backdrop-blur-sm transition hover:bg-black/70 hover:text-white"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Product UI banner */}
        <div className={`relative h-52 w-full overflow-hidden bg-gradient-to-br ${project.coverGradient}`}>
          <div className="absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/10" />
          <div className="absolute -left-14 bottom-0 h-40 w-40 rounded-full bg-white/10" />

          {/* Mock app frame */}
          <div className="absolute inset-4 flex flex-col overflow-hidden rounded-2xl border border-white/15 bg-black/25 backdrop-blur-sm">
            <div className="flex shrink-0 items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <div className="ml-2 h-2 w-28 rounded bg-white/25" />
            </div>
            <div className="flex flex-1 gap-3 p-3">
              <div className="flex w-36 shrink-0 flex-col gap-2">
                <div className="h-2.5 w-full rounded bg-white/20" />
                <div className="h-2.5 w-4/5 rounded bg-white/15" />
                <div className="h-2.5 w-full rounded bg-white/15" />
                <div className="h-2.5 w-3/4 rounded bg-white/10" />
                <div className="mt-2 h-2.5 w-full rounded bg-white/10" />
                <div className="h-2.5 w-4/5 rounded bg-white/10" />
              </div>
              <div className="flex-1 rounded-xl bg-white/10" />
            </div>
          </div>

          <div className="absolute bottom-3 left-4 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            Product UI
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {project.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-emerald-300">{project.role}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <GradientButton href={project.github} variant="secondary">
                GitHub
              </GradientButton>
              <GradientButton href={project.demo}>Live Demo</GradientButton>
            </div>
          </div>

          {/* About this project */}
          <div className="mt-7">
            <h3 className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              About This Project
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">{project.about}</p>
          </div>

          {/* Key features */}
          <div className="mt-7">
            <h3 className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Key Features
            </h3>
            <ul className="space-y-2.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="mt-0.5 shrink-0 text-emerald-400">▸</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Built with */}
          <div className="mt-7">
            <h3 className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Built With
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-emerald-400/35 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal
