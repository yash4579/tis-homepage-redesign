export default function Title({ children, className = '' }) {
  return <h2 className={`font-display text-4xl font-extrabold italic leading-tight sm:text-6xl ${className}`}>{children}</h2>
}
