import { rankings } from '../../data/content'
import CountUp from '../animation/CountUp'
import Reveal from '../animation/Reveal'
import Title from '../ui/Title'

export default function Rankings() {
  return (
    <section id="rankings" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <Title>Our Rankings</Title>
          <p className="mt-3 text-lg text-white/70">Top Boarding School</p>
        </Reveal>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((r, i) => (
            // The <li> stays solid so the divider colour never shows through while the content fades in
            <li key={`${r.place}-${r.source}`} className="bg-ink p-8">
              <Reveal delay={i * 0.08}>
                <p className="font-display text-7xl font-extrabold text-gold"><CountUp to={r.rank} prefix="#" /></p>
                <h3 className="mt-3 font-display text-2xl font-bold italic">{r.place}</h3>
                <p className="mt-2 text-sm font-medium text-teal">{r.source}</p>
                <p className="mt-1 text-sm text-white/70">{r.category}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
