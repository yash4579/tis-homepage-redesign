import { useState } from 'react'
import { motion } from 'framer-motion'
import { sports } from '../../data/content'
import Reveal from '../animation/Reveal'
import CrossfadeStack from '../ui/CrossfadeStack'
import Title from '../ui/Title'

export default function Sports() {
  const [active, setActive] = useState(0)
  const current = sports[active]

  return (
    <section id="sports" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Title className="text-brandtext">Sports?</Title>
          <p className="mt-4 max-w-2xl text-xl leading-relaxed">
            It’s not just a facility. At Tulas it’s the foundation! 16+ sports curated to bring joy and discipline to your life.
          </p>
        </Reveal>

        <div className="mt-12 lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          <div className="sticky top-24 z-10 mb-6 aspect-[4/3] overflow-hidden rounded-3xl bg-bg shadow-lg lg:top-28 lg:mb-0 lg:self-start">
            <CrossfadeStack items={sports} active={active} />
            <p className="absolute bottom-4 left-4 rounded-full bg-brand px-5 py-2 font-display text-xl font-bold italic text-brandfg">{current.name}</p>
          </div>

          <ul className="grid grid-cols-2 content-start gap-x-6">
            {sports.map((s, i) => (
              <li key={s.name}>
                <button
                  type="button"
                  aria-pressed={i === active}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative flex min-h-12 w-full items-center border-b border-line/15 text-left font-display text-lg font-bold transition-colors sm:text-2xl ${i === active ? 'text-brandtext' : 'text-fg'}`}
                >
                  {s.name}
                  {i === active && <motion.span layoutId="sport-line" className="absolute inset-x-0 -bottom-px h-0.5 bg-brand" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
