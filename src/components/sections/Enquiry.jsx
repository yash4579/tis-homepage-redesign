import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { classes, school, states } from '../../data/content'
import { submitEnquiry } from '../../services/submitEnquiry'
import Reveal from '../animation/Reveal'
import Button from '../ui/Button'
import Title from '../ui/Title'

const STEPS = ['Class', 'State', 'Contact']
const empty = { grade: '', state: '', name: '', phone: '', agree: false }
const field = 'mt-1 min-h-11 w-full rounded-xl border bg-bg px-4 text-base'

// One validator per step; each returns an object of { fieldName: message }
const validators = [
  (d) => (d.grade ? {} : { grade: 'Please select a class.' }),
  (d) => (d.state ? {} : { state: 'Please select your state.' }),
  (d) => ({
    ...(d.name.trim().length < 2 && { name: 'Please enter your full name.' }),
    ...(!/^[6-9]\d{9}$/.test(d.phone) && { phone: 'Enter a valid 10-digit Indian mobile number.' }),
    ...(!d.agree && { agree: 'Please tick the box to continue.' }),
  }),
]

function FieldError({ id, message }) {
  return message ? <p id={id} role="alert" className="mt-1 text-sm font-medium text-brandtext">{message}</p> : null
}

export default function Enquiry() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const formRef = useRef(null)
  const stepRef = useRef(null)
  const firstRender = useRef(true)
  const last = step === STEPS.length - 1

  const set = (key, value) => {
    setData((d) => ({ ...d, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  // Move focus to the new step (not on first load) so keyboard and screen-reader users follow along
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    stepRef.current?.focus({ preventScroll: true })
  }, [step])

  // After a failed validation, focus the first invalid control
  useEffect(() => {
    if (Object.values(errors).some(Boolean)) formRef.current?.querySelector('[data-invalid="true"]')?.focus()
  }, [errors])

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validators[step](data)
    setErrors(found)
    if (Object.keys(found).length) return
    if (!last) {
      setStep(step + 1)
      return
    }
    setStatus('sending')
    try {
      await submitEnquiry(data)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const invalid = (name) => (errors[name] ? { 'aria-invalid': true, 'data-invalid': 'true', 'aria-describedby': `enq-${name}-error` } : {})
  const border = (name) => (errors[name] ? 'border-brand' : 'border-line/25')

  return (
    <section id="enquire" className="relative overflow-hidden bg-brand py-20 text-brandfg sm:py-28">
      <div aria-hidden="true" className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-teal/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal>
          <Title>Enquire Now!</Title>
          <p className="mt-4 max-w-md text-lg text-white/90">Admissions are open for Class 4 to 12. Answer three quick questions and our team will call you back.</p>
          <ul className="mt-8 grid gap-4 text-sm">
            <li className="flex gap-3"><Phone size={18} className="shrink-0" /><a href={school.phoneHref} className="underline">Admission Helpline No. {school.phone}</a></li>
            <li className="flex gap-3"><Mail size={18} className="shrink-0" /><a href={`mailto:${school.email}`} className="underline">{school.email}</a></li>
            <li className="flex gap-3"><MapPin size={18} className="shrink-0" /><span>{school.address}</span></li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl bg-bg p-6 text-fg shadow-2xl sm:p-8">
          {status === 'done' ? (
            <div role="status" className="py-8 text-center">
              <p className="font-display text-3xl font-bold italic text-brandtext">Thank you, {data.name.trim().split(' ')[0]}.</p>
              <p className="mt-2 text-muted">We’ll call you about {data.grade} admissions soon.</p>
              <p className="mt-4 text-xs text-muted">Prototype note: this demo form does not send data to a server.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} noValidate>
              <ol className="flex gap-2" aria-label="Enquiry progress">
                {STEPS.map((label, i) => (
                  <li key={label} className="flex-1" aria-current={i === step ? 'step' : undefined}>
                    <div className="h-1.5 overflow-hidden rounded bg-line/15">
                      <motion.div className="h-full bg-brand" initial={false} animate={{ width: i <= step ? '100%' : '0%' }} transition={{ duration: 0.4 }} />
                    </div>
                    <p className={`mt-1 text-xs font-bold ${i === step ? 'text-brandtext' : 'text-muted'}`}>{i + 1}. {label}</p>
                  </li>
                ))}
              </ol>

              <motion.div
                key={step}
                ref={stepRef}
                tabIndex={-1}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 min-h-52 outline-none"
              >
                {step === 0 && (
                  <fieldset>
                    <legend className="font-display text-2xl font-bold italic">Which class?</legend>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {classes.map((c, i) => (
                        <button
                          key={c}
                          type="button"
                          aria-pressed={data.grade === c}
                          data-invalid={errors.grade && i === 0 ? 'true' : undefined}
                          onClick={() => set('grade', c)}
                          className={`min-h-11 rounded-xl border text-sm font-bold transition-colors ${data.grade === c ? 'border-brand bg-brand text-brandfg' : 'border-line/25 hover:border-brand'}`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                    <FieldError id="enq-grade-error" message={errors.grade} />
                  </fieldset>
                )}
                {step === 1 && (
                  <div>
                    <label htmlFor="enq-state" className="font-display text-2xl font-bold italic">Which state?</label>
                    <select id="enq-state" name="state" required value={data.state} onChange={(e) => set('state', e.target.value)} className={`${field} mt-4 ${border('state')}`} {...invalid('state')}>
                      <option value="" disabled>Select State</option>
                      {states.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    <FieldError id="enq-state-error" message={errors.state} />
                  </div>
                )}
                {step === 2 && (
                  <div className="grid gap-3">
                    <div>
                      <label htmlFor="enq-name" className="text-sm font-medium">Full name</label>
                      <input id="enq-name" name="name" required autoComplete="name" value={data.name} onChange={(e) => set('name', e.target.value)} className={`${field} ${border('name')}`} {...invalid('name')} />
                      <FieldError id="enq-name-error" message={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="enq-phone" className="text-sm font-medium">Mobile number (+91)</label>
                      <input id="enq-phone" name="phone" type="tel" inputMode="numeric" required autoComplete="tel-national" value={data.phone} onChange={(e) => set('phone', e.target.value.replace(/\D/g, '').slice(0, 10))} className={`${field} ${border('phone')}`} {...invalid('phone')} />
                      <FieldError id="enq-phone-error" message={errors.phone} />
                    </div>
                    <div>
                      <label className="flex items-start gap-3 text-sm text-muted">
                        <input type="checkbox" checked={data.agree} onChange={(e) => set('agree', e.target.checked)} className="mt-1 h-5 w-5 shrink-0" {...invalid('agree')} />
                        I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun
                      </label>
                      <FieldError id="enq-agree-error" message={errors.agree} />
                    </div>
                  </div>
                )}
              </motion.div>

              {status === 'error' && (
                <p role="alert" className="mt-2 text-sm font-medium text-brandtext">We couldn’t send your enquiry. Please call {school.phone}.</p>
              )}
              <div className="mt-4 flex justify-between gap-3">
                <Button type="button" variant="dark" onClick={() => setStep(step - 1)} className={step === 0 ? 'invisible' : ''} tabIndex={step === 0 ? -1 : undefined}>Back</Button>
                <Button type="submit" disabled={status === 'sending'} className="disabled:opacity-50">
                  {status === 'sending' ? 'Sending…' : last ? 'Enquire Now' : 'Next'}
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
