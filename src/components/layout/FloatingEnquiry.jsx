import { MessageCircle } from 'lucide-react'

// Persistent shortcut to the enquiry form
export default function FloatingEnquiry() {
  return (
    <a href="#enquire" aria-label="Enquire about admissions" className="fixed bottom-4 right-4 z-40 flex items-center gap-3">
      <span className="hidden rounded-xl bg-white px-4 py-2 text-sm font-medium text-black shadow-lg md:block">
        Questions about admissions?
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-lg">
        <MessageCircle size={26} />
      </span>
    </a>
  )
}
