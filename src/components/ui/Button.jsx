const styles = {
  primary: 'bg-brand text-brandfg hover:brightness-110',
  light: 'bg-white text-[#b80025] hover:bg-white/90',
  teal: 'bg-teal text-black hover:brightness-95',
  dark: 'bg-black text-white hover:bg-black/80',
  ghost: 'border border-white/70 text-white hover:bg-white/10',
}

export default function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-lg px-6 py-2.5 text-sm font-bold transition ${styles[variant]} ${className}`

  if (href) {
    const external = href.startsWith('http')
    return (
      <a href={href} className={classes} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
