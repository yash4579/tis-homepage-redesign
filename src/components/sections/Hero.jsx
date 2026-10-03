import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { hero, interests, school } from '../../data/content'
import Button from '../ui/Button'
import CrossfadeStack from '../ui/CrossfadeStack'

const words = hero.title.split(' ')

export default function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false) // stop auto-rotation once the visitor picks one
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef) // don't rotate while the hero is off-screen

  useEffect(() => {
    if (paused || !inView) return undefined
    const id = setInterval(() => setActive((i) => (i + 1) % interests.length), 3200)
    return () => clearInterval(id)
  }, [paused, inView])

  const current = interests[active]

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden="true" className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-teal/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl">
            {words.map((word, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {hero.lead}
          </motion.p>

          <p className="mt-8 font-display text-3xl font-bold italic sm:text-4xl" aria-live={paused ? 'polite' : undefined}>
            <span>Let’s do</span>{' '}
            <span className="inline-block text-brandtext">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={current.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  {current.name.toLowerCase()}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            <span>with Tulas</span>
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {interests.map((it, i) => (
              <li key={it.name}>
                <button
                  type="button"
                  aria-pressed={i === active}
                  onClick={() => { setActive(i); setPaused(true) }}
                  className={`min-h-11 rounded-full border px-5 text-sm font-bold transition-colors ${i === active ? 'border-brand bg-brand text-brandfg' : 'border-line/25 hover:border-brand'}`}
                >
                  {it.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={school.applyUrl}>Apply Now</Button>
            <Button href="#enquire" variant="teal">Enquire Now</Button>
            <Button href={school.tourUrl} variant="dark">Virtual Tour</Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="animate-orbit absolute -right-8 -top-8 h-44 w-44 rounded-full border-2 border-dashed border-gold" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-3xl"
            initial={false}
            animate={{ backgroundColor: current.tint }}
            transition={{ duration: 0.5 }}
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-card shadow-2xl ring-1 ring-line/10">
            <CrossfadeStack items={interests} active={active} contain priority />
            <AnimatePresence mode="wait">
              <motion.p
                key={current.tag}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-4 right-4 rounded-full bg-ink px-4 py-1.5 text-xs font-bold text-white"
              >
                {current.tag}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="absolute -bottom-5 -left-3 max-w-[15rem] rounded-2xl bg-bg p-4 shadow-xl ring-1 ring-line/10 sm:-left-8">
            <p className="font-display text-4xl font-extrabold text-brandtext">#{top.rank}</p>
            <p className="mt-1 text-xs font-medium leading-snug">{top.category} in {top.place} by {top.source}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
