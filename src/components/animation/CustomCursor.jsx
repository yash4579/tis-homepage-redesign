import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useFinePointer from '../../hooks/useFinePointer'

const FIELDS = 'input, select, textarea'
const INTERACTIVE = 'a, button, label, [data-cursor], [role="button"], input[type="submit"], input[type="button"]'

// Standout Feature A: Custom Cursor
// Concept: A custom circular ring or dot following the mouse position.
// UX Rules:
// 1. Hide on touch/mobile devices (pointer: coarse).
// 2. Scales / changes opacity when hovering over interactive elements (<a>, <button>, etc.).
// 3. Keep native cursor over text fields (input, textarea).
// 4. Maintains 60 FPS performance via hardware-accelerated transforms and Framer Motion useSpring.
export default function CustomCursor() {
  const finePointer = useFinePointer()
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isField, setIsField] = useState(false)
  const [isTouchActive, setIsTouchActive] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Smooth trailing spring for the follower ring (60 FPS)
  const ringX = useSpring(mouseX, { stiffness: 500, damping: 30, mass: 0.25 })
  const ringY = useSpring(mouseY, { stiffness: 500, damping: 30, mass: 0.25 })

  useEffect(() => {
    if (!finePointer) return undefined

    const root = document.documentElement

    const onPointerMove = (e) => {
      // Hide on pure touch input
      if (e.pointerType === 'touch') {
        setIsTouchActive(true)
        setIsVisible(false)
        root.classList.remove('has-cursor')
        return
      }

      setIsTouchActive(false)
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      if (!isVisible) {
        setIsVisible(true)
        root.classList.add('has-cursor')
      }

      const el = e.target instanceof Element ? e.target : null
      if (el) {
        const inField = !!el.closest(FIELDS)
        const inInteractive = !inField && !!el.closest(INTERACTIVE)
        setIsField((prev) => (prev !== inField ? inField : prev))
        setIsHovered((prev) => (prev !== inInteractive ? inInteractive : prev))
      }
    }

    const onPointerDown = (e) => {
      if (e.pointerType === 'touch') {
        setIsTouchActive(true)
        setIsVisible(false)
        root.classList.remove('has-cursor')
      }
    }

    const onMouseLeave = () => {
      setIsVisible(false)
      root.classList.remove('has-cursor')
    }

    const onMouseEnter = () => {
      if (!isTouchActive) {
        setIsVisible(true)
        root.classList.add('has-cursor')
      }
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      root.classList.remove('has-cursor')
    }
  }, [finePointer, isVisible, isTouchActive, mouseX, mouseY])

  if (!finePointer || isTouchActive || !isVisible) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Outer Follower Ring - centered via -left-5 -top-5 */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="pointer-events-none absolute -left-5 -top-5 h-10 w-10 flex items-center justify-center will-change-transform"
      >
        <motion.div
          animate={{
            scale: isField ? 0.3 : isHovered ? 1.65 : 1,
            opacity: isField ? 0.15 : isHovered ? 1 : 0.8,
            borderColor: isHovered ? '#b80025' : '#c8a45c',
            backgroundColor: isHovered ? 'rgba(184, 0, 37, 0.18)' : 'rgba(200, 164, 92, 0.08)',
          }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="h-full w-full rounded-full border-2 shadow-[0_0_15px_rgba(184,0,37,0.35)]"
        />
      </motion.div>

      {/* Inner Precision Dot - centered via -left-1.5 -top-1.5 */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="pointer-events-none absolute -left-1.5 -top-1.5 h-3 w-3 flex items-center justify-center will-change-transform"
      >
        <motion.div
          animate={{
            scale: isField ? 0 : isHovered ? 0.6 : 1,
          }}
          transition={{ duration: 0.12 }}
          className="h-2.5 w-2.5 rounded-full bg-[#b80025] ring-2 ring-white shadow-md"
        />
      </motion.div>
    </div>
  )
}
