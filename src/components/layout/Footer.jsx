import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { footerLinks, school, socials } from '../../data/content'
import Button from '../ui/Button'
import Photo from '../ui/Photo'

const icons = { Facebook, Twitter, LinkedIn: Linkedin, Instagram, YouTube: Youtube }
const MAP = 'https://maps.google.com/maps?q=Tulas%20International%20School%20Dhoolkot%20Dehradun&t=m&z=10&output=embed'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <Photo src={school.campusImage} className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 py-14">
        <p className="mb-12 text-center font-display text-4xl font-extrabold leading-tight sm:text-6xl">
          LET’S DO <em>it</em><br />With <em>Tulas</em>
        </p>

        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr_1fr_auto]">
          <iframe
            title="Map showing Tulas International School, Dhoolkot, Dehradun"
            src={MAP}
            loading="lazy"
            className="h-52 w-full rounded-2xl border-0 md:h-full md:min-h-52"
          />
          <div>
            <Photo src={school.footerLogo} alt="Tulas International School" className="h-16 w-auto" />
            <address className="mt-4 text-sm not-italic leading-relaxed">
              {school.address}<br />
              Landline No. {school.landlines.join(', ')}<br />
              Admission Helpline No. <a className="underline" href={school.phoneHref}>{school.phone}</a><br />
              <a className="underline" href={`mailto:${school.email}`}>{school.email}</a>
            </address>
          </div>
          <nav aria-label="Footer">
            <ul className="grid text-sm">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-block py-1 opacity-90 hover:underline">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3">
            <Button href={school.tourUrl} variant="light">Virtual Tour</Button>
            <Button href={school.applyUrl} variant="light">Apply Now</Button>
            <Button href={school.fedenaUrl} variant="light">Fedena Login</Button>
          </div>
        </div>

        <div className="mt-12 text-center text-sm">
          <p>Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved</p>
          <p className="mt-1">
            Designed and Managed By <a className="underline" href="https://netpuppys.com" target="_blank" rel="noopener noreferrer">NetPuppys</a>
          </p>
          <ul className="mt-4 flex justify-center gap-3">
            {socials.map((s) => {
              const Icon = icons[s.label]
              return (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-[#b80025] hover:bg-white">
                    <Icon size={18} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}
