import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, CalendarDays, UserRound } from 'lucide-react'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { Container } from '../components/ui/Section'
import { useNewsBySlug } from '../hooks/useVillageData'
import { formatDate } from '../utils/format'

export default function NewsDetail() {
  const { slug } = useParams()
  const news = useNewsBySlug(slug)

  if (!news) return <Navigate to="/berita" replace />

  return (
    <article className="py-14 sm:py-16">
      <Container className="max-w-3xl">
        <Button as={Link} to="/berita" variant="ghost" size="sm" className="px-0">
          <ArrowLeft size={15} />
          Kembali ke Berita
        </Button>

        <div className="mt-6">
          <Badge tone="padi">{news.category}</Badge>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {news.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={15} />
              {formatDate(news.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <UserRound size={15} />
              {news.author}
            </span>
          </div>
        </div>

        <div className="mt-8 aspect-video overflow-hidden rounded-2xl bg-sawah-100">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        <div className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
          <p>{news.content}</p>
        </div>
      </Container>
    </article>
  )
}
