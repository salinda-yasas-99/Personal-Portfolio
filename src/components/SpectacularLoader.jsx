import { motion } from 'framer-motion'

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${8 + index * 5.5}%`,
  delay: index * 0.08,
  duration: 1.6 + (index % 5) * 0.25,
}))

function SpectacularLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[120] min-h-dvh overflow-hidden bg-[#020202]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      aria-label="Loading portfolio"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.2),transparent_40%),radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.16),transparent_42%),linear-gradient(180deg,#000_0%,#040404_50%,#000_100%)]" />

      <motion.div
        className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
        animate={{ x: [0, 42, -14, 0], y: [0, -12, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-12 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, -30, 16, 0], y: [0, 18, -12, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="pointer-events-none absolute bottom-[-10%] h-2 w-2 rounded-full bg-emerald-300/60 shadow-[0_0_20px_rgba(16,185,129,0.45)]"
          style={{ left: particle.left }}
          initial={{ opacity: 0, y: 0, scale: 0.7 }}
          animate={{ opacity: [0, 1, 0], y: ['0%', '-120vh'], scale: [0.7, 1, 0.5] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}

      <div className="relative z-10 grid min-h-dvh place-items-center px-5">
        <div className="w-full max-w-xl text-center">
          <div className="relative mx-auto mb-10 h-44 w-44 sm:h-48 sm:w-48">
            <motion.div
              className="absolute inset-0 rounded-full border border-emerald-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-[14%] rounded-full border border-cyan-300/35"
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-[31%] rounded-full bg-gradient-to-br from-emerald-400 to-cyan-300"
              animate={{ scale: [0.94, 1.06, 0.94] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-[35%] flex items-center justify-center rounded-full bg-black/90"
              animate={{ boxShadow: ['0 0 16px rgba(16,185,129,0.35)', '0 0 28px rgba(34,211,238,0.45)', '0 0 16px rgba(16,185,129,0.35)'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="font-display text-xl font-bold tracking-[0.18em] text-white sm:text-2xl">
                SY
              </span>
            </motion.div>
          </div>

          <motion.p
            className="font-display text-2xl font-semibold tracking-wide text-white sm:text-3xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Initializing Experience
          </motion.p>

          <div className="mx-auto mt-8 h-1.5 w-64 overflow-hidden rounded-full bg-slate-700/70 sm:w-72">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SpectacularLoader
