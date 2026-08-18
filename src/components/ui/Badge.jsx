const TONES = {
  padi: 'bg-padi-100 text-padi-700',
  sawah: 'bg-sawah-100 text-sawah-700',
  tanah: 'bg-tanah-100 text-tanah-700',
  neutral: 'bg-beras-200 text-ink-soft',
}

export default function Badge({ children, tone = 'sawah', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
