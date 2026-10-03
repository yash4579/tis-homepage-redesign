import { useState } from 'react'

// Remote or local photo. Lazy by default; pass `priority` for above-the-fold images.
// If the file fails to load, shows the alt text in a neutral box (or nothing for decorative images)
// instead of a broken-image icon.
export default function Photo({ src, alt = '', className = '', priority = false, width, height }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return alt ? (
      <span role="img" aria-label={alt} className={`flex items-center justify-center overflow-hidden bg-card p-2 text-center text-xs font-medium text-muted ${className}`}>
        {alt}
      </span>
    ) : null
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
