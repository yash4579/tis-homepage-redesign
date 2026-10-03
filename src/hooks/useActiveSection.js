import { useEffect, useState } from 'react'

// Returns the id of the page section crossing the middle of the viewport ('' if it has no id).
// Every <section> in <main> is observed, so sections without a nav item (hero, awards...)
// correctly clear the highlight instead of leaving the previous one active.
export default function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    document.querySelectorAll('main > section').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}
