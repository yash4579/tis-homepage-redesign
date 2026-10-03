import { parents, reviews } from '../../data/content'
import Reveal from '../animation/Reveal'
import Marquee from '../ui/Marquee'
import Photo from '../ui/Photo'
import Title from '../ui/Title'

export default function Parents() {
  return (
    <section id="voices" className="bg-card py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <Title className="text-brandtext">From The Parents</Title>
          <p className="mt-5 leading-relaxed">{parents.text}</p>
        </Reveal>
        <ul className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:px-0">
          {parents.videos.map((src, i) => (
            <Reveal as="li" key={src} delay={i * 0.1} className="w-44 shrink-0 snap-start sm:w-auto">
              <video src={src} controls preload="metadata" playsInline aria-label={`Parent testimonial video ${i + 1}`} className="aspect-[9/16] w-full rounded-2xl border-4 border-black bg-black object-cover sm:rounded-3xl sm:border-[6px]" />
            </Reveal>
          ))}
        </ul>
      </div>

      <h3 className="mt-20 text-center font-display text-3xl font-bold italic">Google Reviews</h3>
      <Marquee
        className="mt-8"
        duration="80s"
        items={reviews}
        render={(r) => (
          <figure className="flex h-full w-80 flex-col rounded-3xl bg-bg p-6 ring-1 ring-line/10">
            <blockquote className="flex-1 text-sm leading-relaxed">{r.text}</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <Photo src={r.src} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
              <span><span className="block font-bold">{r.name}</span><span className="block text-xs text-muted">{r.role}</span></span>
            </figcaption>
          </figure>
        )}
      />
    </section>
  )
}
