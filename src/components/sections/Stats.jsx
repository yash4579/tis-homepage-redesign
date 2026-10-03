import { about, hero, stats, statPhoto } from '../../data/content'
import CountUp from '../animation/CountUp'
import Reveal from '../animation/Reveal'
import Photo from '../ui/Photo'
import Title from '../ui/Title'

const tones = ['col-span-2 bg-brand text-brandfg', 'bg-teal text-black', 'bg-ink text-white', 'bg-gold text-black']

function StatCell({ stat, tone, delay }) {
  return (
    <Reveal as="li" delay={delay} className={`flex min-h-44 flex-col justify-between rounded-3xl p-6 sm:p-8 ${tone}`}>
      <p className="font-display text-6xl font-extrabold sm:text-7xl"><CountUp to={stat.to} suffix={stat.suffix} /></p>
      <p className="mt-4 text-sm font-bold">{stat.label}</p>
    </Reveal>
  )
}

export default function Stats() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
      <Reveal className="grid items-end gap-6 md:grid-cols-2">
        <Title className="text-brandtext">{about.heading}</Title>
        <p className="text-lg leading-relaxed text-muted">{about.body}</p>
      </Reveal>

      <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.slice(0, 3).map((s, i) => <StatCell key={s.label} stat={s} tone={tones[i]} delay={i * 0.08} />)}
        <Reveal as="li" delay={0.24} className="col-span-2 flex items-center rounded-3xl bg-card p-6 sm:p-8">
          <p className="font-display text-xl font-bold italic leading-snug sm:text-2xl">{hero.founded}</p>
        </Reveal>
        <StatCell stat={stats[3]} tone={tones[3]} delay={0.32} />
        <Reveal as="li" delay={0.4} className="overflow-hidden rounded-3xl">
          <Photo src={statPhoto} alt="Students at Tulas International School" className="h-full min-h-44 w-full object-cover" />
        </Reveal>
      </ul>
    </section>
  )
}
