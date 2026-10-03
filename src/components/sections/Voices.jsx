import { voices } from '../../data/content'
import Reveal from '../animation/Reveal'
import Circle from '../ui/Circle'

const cards = [
  { ...voices.first, tone: 'bg-brand text-brandfg', disc: 'bg-[#f08ca0]' },
  { ...voices.second, tone: 'bg-teal text-black', disc: 'bg-[#10acc4]' },
]

export default function Voices() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
      <ul className="grid gap-6 lg:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal as="li" key={c.quote} delay={i * 0.1} className={`rounded-3xl p-8 sm:p-10 ${c.tone}`}>
            <Circle src={c.image} color={c.disc} className="mb-6 h-28 w-28" />
            <blockquote className="font-display text-2xl font-bold italic leading-snug sm:text-3xl">“{c.quote}”</blockquote>
            <p className="mt-4 leading-relaxed">{c.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
