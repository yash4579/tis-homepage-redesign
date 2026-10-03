import { useRef } from 'react'
import { useInView } from 'framer-motion'

// Infinite horizontal loop; pauses on hover and while off-screen.
// The second copy is hidden from screen readers.
export default function Marquee({ items, render, duration = '40s', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <div ref={ref} className={`group marquee-wrap overflow-hidden ${className}`}>
      <div
        data-offscreen={!inView}
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] data-[offscreen=true]:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 gap-4 pr-4">
            {items.map((item, i) => <li key={i}>{render(item)}</li>)}
          </ul>
        ))}
      </div>
    </div>
  )
}
