import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { navItems, school } from '../../data/content'
import useActiveSection from '../../hooks/useActiveSection'
import ThemeToggle from '../animation/ThemeToggle'
import Button from '../ui/Button'
import Photo from '../ui/Photo'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const toggleRef = useRef(null)
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <div className="mx-auto max-w-6xl rounded-3xl border border-line/10 bg-bg/80 shadow-lg backdrop-blur-md">
        <div className="flex h-16 items-center justify-between gap-3 px-3">
          <a href="#top" aria-label="Tulas International School, home" className="shrink-0 rounded-full border border-line/10 bg-white p-0.5">
            <Photo src={school.logo} alt="Tulas International School" width={44} height={44} priority className="h-11 w-11 object-contain" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={`relative py-1 text-sm font-medium transition-colors ${active === item.href.slice(1) ? 'text-brandtext' : 'text-muted hover:text-fg'}`}>
                {item.label}
                {active === item.href.slice(1) && (
                  <motion.span layoutId="nav-underline" className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-brand" />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={school.phoneHref} aria-label={`Call admissions helpline ${school.phone}`} className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-black">
              <Phone size={18} />
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <Button href={school.applyUrl} className="hidden sm:inline-flex">Apply Now</Button>
            <button
              type="button"
              ref={toggleRef}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line/20 lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Always mounted and animated with CSS: unmounting it mid-scroll (Framer exit animation)
            cancels the browser's smooth scroll to the tapped section. `invisible` removes the
            closed menu from the tab order and the accessibility tree. */}
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`overflow-hidden transition-[max-height,opacity,visibility] duration-300 motion-reduce:transition-none lg:hidden ${open ? 'visible max-h-[28rem] opacity-100' : 'invisible max-h-0 opacity-0'}`}
        >
          <ul className="flex flex-col px-5 pb-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close} className="flex min-h-12 items-center border-b border-line/10 text-base font-medium">{item.label}</a>
              </li>
            ))}
            <li className="pt-4"><Button href={school.applyUrl} className="w-full">Apply Now</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
