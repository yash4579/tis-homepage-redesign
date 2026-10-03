import { motion } from 'framer-motion'
import { awards, collaborations, school } from '../../data/content'
import Reveal from '../animation/Reveal'
import Marquee from '../ui/Marquee'
import Photo from '../ui/Photo'
import Title from '../ui/Title'

export default function Awards() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <Title className="text-brandtext">Awards</Title>
        <p className="mt-3 text-lg">We believe in celebrating the hard work and perseverance of the best!</p>
      </Reveal>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {awards.map((a, i) => (
          <Reveal as="li" key={a.src} delay={i * 0.1}>
            <motion.div data-cursor whileHover={{ y: -8, rotate: i % 2 ? 1.5 : -1.5 }}>
              <Photo src={a.src} alt={a.alt} className="w-full rounded-3xl object-cover shadow-lg" />
            </motion.div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-16">
        <a href={school.tourUrl} target="_blank" rel="noopener noreferrer" className="group relative flex h-48 items-center justify-center gap-5 overflow-hidden rounded-3xl bg-ink text-white">
          <Photo src={school.campusImage} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <span aria-hidden="true" className="absolute inset-0 bg-black/55" />
          <span className="relative text-5xl font-light">360°</span>
          <span className="relative font-display text-2xl font-bold italic leading-tight sm:text-4xl">DIVE INTO OUR…<br />VIRTUAL TOUR</span>
        </a>
      </Reveal>

      <h3 className="mt-20 text-center font-display text-3xl font-bold italic text-brandtext">12+ Collaborations</h3>
      <Marquee
        className="mt-8"
        items={collaborations}
        render={(src) => (
          <span className="flex h-24 w-40 items-center justify-center rounded-2xl bg-white p-3 ring-1 ring-line/10">
            <Photo src={src} alt="Collaboration partner logo" className="max-h-full max-w-full object-contain" />
          </span>
        )}
      />
    </section>
  )
}
