import { useEffect, useState } from 'react'

// Always true on desktop/laptop; dynamically hides if only touch is active
export default function useFinePointer() {
  const [hasPointer, setHasPointer] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    // Only strictly disable if pure mobile touch without any fine pointer
    const isPureTouch =
      window.matchMedia('(pointer: coarse)').matches &&
      !window.matchMedia('(any-pointer: fine)').matches

    if (isPureTouch) {
      setHasPointer(false)
    }

    const onPointer = (e) => {
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
        setHasPointer(true)
      } else if (e.pointerType === 'touch') {
        // Pure touch action
      }
    }
    window.addEventListener('pointermove', onPointer, { passive: true })
    window.addEventListener('pointerdown', onPointer, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('pointerdown', onPointer)
    }
  }, [])

  return hasPointer
}
