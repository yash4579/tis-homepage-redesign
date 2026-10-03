import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { influencers, leaders } from '../../data/content'
import Reveal from '../animation/Reveal'
import Photo from '../ui/Photo'
import Title from '../ui/Title'

const groups = [
  { label: 'Sports Person/Social Media Influencers', people: influencers },
  { label: 'Leaders of India', people: leaders },
]
const arrow = 'flex h-11 w-11 items-center justify-center rounded-full bg-brand text-brandfg'

export default function Visitors() {
  const [tab, setTab] = useState(0)
  const track = useRef(null)
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  const pick = (i) => {
    setTab(i)
    track.current?.scrollTo({ left: 0 })
  }

  return (
    <section id="visitors" className="overflow-hidden bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <Title className="max-w-2xl text-brandtext">Influential Personalities On Campus</Title>
          <div className="flex gap-3">
            <button type="button" onClick={() => scroll(-1)} aria-label="Scroll left" className={arrow}><ChevronLeft /></button>
            <button type="button" onClick={() => scroll(1)} aria-label="Scroll right" className={arrow}><ChevronRight /></button>
          </div>
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-2">
          {groups.map((g, i) => (
            <button key={g.label} type="button" aria-pressed={i === tab} onClick={() => pick(i)} className={`min-h-11 rounded-full border px-5 text-sm font-bold transition-colors ${i === tab ? 'border-brand bg-brand text-brandfg' : 'border-line/25 hover:border-brand'}`}>
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <motion.ul key={tab} ref={track} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="no-scrollbar mt-8 flex snap-x gap-4 overflow-x-auto px-5">
        {groups[tab].people.map((p) => (
          <li key={p.name} data-cursor className="relative aspect-[3/4] w-64 shrink-0 snap-start overflow-hidden rounded-3xl bg-bg sm:w-72">
            <Photo src={p.src} alt={p.name} className="absolute inset-0 h-full w-full object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-16 text-white">
              <h3 className="font-display text-lg font-bold italic">{p.name}</h3>
              <p className="mt-1 text-xs leading-snug text-white/85">{p.note}</p>
            </div>
          </li>
        ))}
      </motion.ul>
    </section>
  )
}
