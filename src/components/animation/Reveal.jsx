import { motion } from 'framer-motion'

// Scroll-triggered entrance (0.5s). Pass `delay` (e.g. index * 0.08) to stagger siblings.
export default function Reveal({ as = 'div', delay = 0, className = '', children }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </Tag>
  )
}
