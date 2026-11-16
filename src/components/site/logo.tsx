export function LogoMark({ className = 'size-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="9" className="fill-card" />
      <path d="M9 27V14l7 8 5-6" fill="none" stroke="white" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 16l3 4 8-10" fill="none" className="stroke-primary" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Logo() {
  return (
    <a href="#top" aria-label="Marktide home" className="flex items-center gap-2.5 font-heading text-lg font-semibold tracking-tight">
      <LogoMark />
      Marktide
    </a>
  )
}
