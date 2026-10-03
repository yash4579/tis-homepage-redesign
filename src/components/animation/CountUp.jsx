import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

// Counts smoothly from 0 to `to` the first time it scrolls into view (60 FPS).
// Writes straight to the DOM node, so the animation causes no React re-renders.
export default function CountUp({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!inView || !ref.current) return undefined
    const write = (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`
      }
    }

    const controls = animate(0, to, { duration: 1.4, ease: 'easeOut', onUpdate: write })
    return () => controls.stop()
  }, [inView, to, prefix, suffix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}
