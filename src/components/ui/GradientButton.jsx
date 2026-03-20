import { motion } from 'framer-motion'

function GradientButton({ children, href, variant = 'primary' }) {
  const styles =
    variant === 'secondary'
      ? 'bg-slate-900/70 text-slate-200 border border-emerald-400/40'
      : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white'

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(16, 185, 129, 0.35)' }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </motion.a>
  )
}

export default GradientButton
