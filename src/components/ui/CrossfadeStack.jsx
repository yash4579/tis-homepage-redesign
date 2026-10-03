import { useState } from 'react'
import { motion } from 'framer-motion'

// Keeps every photo mounted and cross-fades to the active one, so the visible photo
// always matches the selection. Shows the item's name if a photo fails to load.
// `priority` loads the first photo eagerly (use for above-the-fold stacks).
export default function CrossfadeStack({ items, active, contain = false, priority = false }) {
  const [failed, setFailed] = useState({})

  return items.map((item, i) => (
    <motion.div
      key={item.name}
      aria-hidden={i !== active}
      className="absolute inset-0"
      initial={false}
      animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.06, y: i === active ? 0 : 12 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {failed[item.name] ? (
        <div className="flex h-full items-center justify-center bg-gradient-to-b from-brand to-ink p-4 text-center font-display text-3xl font-bold italic text-white">
          {item.name}
        </div>
      ) : (
        <img
          src={item.src}
          alt={item.name}
          loading={priority && i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed((f) => ({ ...f, [item.name]: true }))}
          className={`h-full w-full ${contain || item.cutout ? 'object-contain p-4' : 'object-cover'}`}
        />
      )}
    </motion.div>
  ))
}
