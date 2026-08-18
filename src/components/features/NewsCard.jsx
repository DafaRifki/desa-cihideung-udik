import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { formatDate } from '../../utils/format'

export default function NewsCard({ news }) {
  return (
    <Card as={Link} to={`/berita/${news.slug}`} className="group flex flex-col">
      <Card.Media>
        <img
          src={news.image}
          alt={news.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <div className="absolute left-3 top-3">
          <Badge tone="padi">{news.category}</Badge>
        </div>
      </Card.Media>
      <Card.Body className="flex flex-1 flex-col">
        <p className="font-mono text-xs uppercase tracking-wide text-ink-soft/70">{formatDate(news.date)}</p>
        <h3 className="mt-2 font-display text-lg font-medium leading-snug text-ink group-hover:text-sawah-700">
          {news.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-soft">{news.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sawah-700">
          Baca selengkapnya
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Card.Body>
    </Card>
  )
}
