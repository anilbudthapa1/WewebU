import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2600)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        className="preloader__logo"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        WeWebU
      </motion.div>
      <motion.div
        className="preloader__bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="preloader__fill" />
      </motion.div>
      <motion.p
        style={{ color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.12em' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        LOADING EXPERIENCE
      </motion.p>
    </motion.div>
  )
}
