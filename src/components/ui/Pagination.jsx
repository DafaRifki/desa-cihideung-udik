import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="mt-10 flex items-center justify-center gap-1.5" aria-label="Navigasi halaman">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-sawah-200 text-sawah-700 transition-colors hover:bg-sawah-50 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Halaman sebelumnya"
      >
        <ChevronLeft size={16} />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          aria-current={p === page ? 'page' : undefined}
          className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
            p === page ? 'bg-sawah-700 text-beras-50' : 'text-ink-soft hover:bg-sawah-50'
          }`}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-sawah-200 text-sawah-700 transition-colors hover:bg-sawah-50 disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Halaman berikutnya"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  )
}
