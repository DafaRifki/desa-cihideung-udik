export function LoadingSpinner({ label = 'Memuat…', className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-12 text-ink-soft ${className}`} role="status">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-sawah-200 border-t-sawah-700" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

export function Skeleton({ className = '' }) {
  return <div className={`animate-pulse rounded-lg bg-sawah-100 ${className}`} />
}

export function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-sawah-100 bg-beras-50">
      <Skeleton className="aspect-[4/3] rounded-none" />
      <div className="space-y-2 p-5">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
      </div>
    </div>
  )
}
