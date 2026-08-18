import { ZoomIn } from 'lucide-react'

export default function GalleryItem({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-square overflow-hidden rounded-xl bg-sawah-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-padi-600"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-sawah-900/80 via-sawah-900/0 to-sawah-900/0 p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ZoomIn size={16} className="mb-1 text-beras-50" />
        <p className="text-xs font-medium text-beras-50">{item.title}</p>
      </div>
    </button>
  )
}
