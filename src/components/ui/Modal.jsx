import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function Modal({ open, onClose, children, className = '' }) {
  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-sawah-900/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className={`relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-beras-50 p-6 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-beras-200 text-ink hover:bg-sawah-100"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  )
}

export function Lightbox({ items, index, onClose, onNavigate }) {
  const open = index !== null && index !== undefined
  const item = open ? items[index] : null

  useEffect(() => {
    if (!open) return
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, index, items, onClose, onNavigate])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-sawah-900/85 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-beras-50/10 text-beras-50 hover:bg-beras-50/20"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index - 1 + items.length) % items.length)
        }}
        aria-label="Foto sebelumnya"
        className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-beras-50/10 text-beras-50 hover:bg-beras-50/20 sm:left-6"
      >
        <ChevronLeft size={22} />
      </button>

      <figure className="max-h-[85vh] max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[75vh] w-full rounded-lg object-contain"
        />
        <figcaption className="mt-3 text-center text-sm text-beras-100">{item.title}</figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index + 1) % items.length)
        }}
        aria-label="Foto berikutnya"
        className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-beras-50/10 text-beras-50 hover:bg-beras-50/20 sm:right-6"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}
