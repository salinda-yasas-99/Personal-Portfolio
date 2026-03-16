import { motion } from 'framer-motion'

function Card({ children, className = '', delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      className={`glass-panel p-6 ${className}`}
    >
      {children}
    </motion.article>
  )
}

export default Card
