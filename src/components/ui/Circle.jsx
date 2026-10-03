import Photo from './Photo'

// Round photo cut-out on a coloured disc (TIS signature look)
export default function Circle({ src, alt = '', color = 'bg-teal', className = '' }) {
  return (
    <div className={`overflow-hidden rounded-full ${color} ${className}`}>
      <Photo src={src} alt={alt} className="h-full w-full object-cover object-top" />
    </div>
  )
}
