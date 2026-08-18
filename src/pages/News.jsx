import { Newspaper } from 'lucide-react'
import Section from '../components/ui/Section'
import NewsCard from '../components/features/NewsCard'
import EmptyState from '../components/ui/EmptyState'
import Pagination from '../components/ui/Pagination'
import { useNews } from '../hooks/useVillageData'

export default function News() {
  const { news, categories, category, setCategory, page, setPage, totalPages } = useNews()

  return (
    <div>
      <section className="bg-sawah-800 py-14 text-beras-50 sm:py-16">
        <div className="container-desa">
          <p className="eyebrow text-padi-300">Informasi Resmi</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Berita & Pengumuman</h1>
          <p className="mt-3 max-w-xl text-sawah-100">
            Ikuti perkembangan kegiatan dan pengumuman resmi Desa Sukamakmur.
          </p>
        </div>
      </section>

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-sawah-700 text-beras-50'
                  : 'border border-sawah-200 text-ink-soft hover:bg-sawah-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {news.length === 0 ? (
          <EmptyState
            icon={Newspaper}
            title="Belum ada berita di kategori ini"
            description="Coba pilih kategori lain untuk melihat berita dan pengumuman."
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </Section>
    </div>
  )
}
