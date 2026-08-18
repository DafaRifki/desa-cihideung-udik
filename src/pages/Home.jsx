import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Users,
  MapPinned,
  Home as HomeIcon,
  Building2,
} from "lucide-react";
import Section, { Container } from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import TerraceDivider from "../components/ui/TerraceDivider";
import NewsCard from "../components/features/NewsCard";
import PotentialCard from "../components/features/PotentialCard";
import {
  useVillageData,
  useLatestNews,
  usePotentials,
} from "../hooks/useVillageData";
import { formatNumber } from "../utils/format";

export default function Home() {
  const village = useVillageData();
  const latestNews = useLatestNews(3);
  const featuredPotentials = usePotentials("Semua").slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-sawah-800 text-beras-50">
        {/* <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, transparent 0px, transparent 46px, rgba(214,164,25,0.5) 46px, rgba(214,164,25,0.5) 47px)",
          }}
          aria-hidden="true"
        /> */}
        <img
          src="/images/hero.jpg"
          alt="hero images"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sawah-900/90 via-sawah-800/70 to-sawah-800/50"
          aria-hidden="true"
        />

        <Container className="relative grid grid-cols-1 gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow !text-[#f2f0e6]">
              {village.district}, {village.regency}
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
              {village.name}
            </h1>
            <p className="mt-3 font-display text-xl italic text-padi-300">
              {village.slogan}
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-sawah-100">
              {village.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="/profil" variant="secondary" size="lg">
                Kenali Desa Kami
                <ArrowUpRight size={17} />
              </Button>
              <Button
                as={Link}
                to="/kontak"
                variant="outline"
                size="lg"
                className="border-beras-50 bg-sawah-900/30 text-white hover:bg-beras-50 hover:text-sawah-900">
                Hubungi Kami
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard
              icon={Users}
              value={formatNumber(village.stats.population)}
              label="Jumlah Penduduk"
            />
            <StatCard
              icon={MapPinned}
              value={village.stats.area}
              label="Luas Wilayah"
            />
            <StatCard
              icon={HomeIcon}
              value={formatNumber(village.stats.households)}
              label="Kepala Keluarga"
            />
            <StatCard
              icon={Building2}
              value={village.stats.hamlets}
              label="Zona"
            />
          </div>
        </Container>
      </section>
      <TerraceDivider tone="sawah-to-beras" />

      {/* Latest news */}
      <div className="relative z-0 overflow-hidden bg-beras-100">
        <img
          src="/images/logo.png"
          alt="watermark"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[600px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:w-[820px] lg:w-[1000px]"
        />
        <Section
          tone="transparent"
          eyebrow="Terkini"
          title="Berita & Pengumuman"
          description="Kabar terbaru seputar kegiatan, layanan, dan pengumuman resmi dari pemerintah desa."
          className="text-beras-50">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button as={Link} to="/berita" variant="outline">
              Lihat Semua Berita
              <ArrowUpRight size={15} />
            </Button>
          </div>
        </Section>

        {/* Potensi desa */}
        <Section
          tone="transparent"
          eyebrow="Unggulan"
          title="Potensi Desa"
          description="lorem">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPotentials.map((item) => (
              <PotentialCard key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button as={Link} to="/potensi" variant="outline">
              Jelajahi Semua Potensi
              <ArrowUpRight size={15} />
            </Button>
          </div>
        </Section>
      </div>

      {/* CTA */}
      <section className="bg-sawah-800 py-16 text-beras-50">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl font-display text-3xl font-semibold sm:text-4xl">
            Punya aspirasi atau butuh layanan administrasi?
          </h2>
          <p className="max-w-lg text-sawah-100">
            Tim desa siap membantu. Kunjungi balai desa pada jam layanan, atau
            sampaikan pesan Anda secara daring.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button as={Link} to="/layanan" variant="secondary" size="lg">
              Lihat Layanan Desa
            </Button>
            <Button
              as={Link}
              to="/kontak"
              variant="outline"
              size="lg"
              className="border-beras-50 bg-sawah-900/30 text-white hover:bg-beras-50 hover:text-sawah-900">
              Kirim Aspirasi
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <Card className="border-sawah-700 bg-sawah-700/60 p-5" hover={false}>
      <Icon size={20} className="text-padi-400" strokeWidth={1.8} />
      <p className="mt-3 font-display text-2xl font-semibold text-beras-50">
        {value}
      </p>
      <p className="mt-1 text-xs text-sawah-200">{label}</p>
    </Card>
  );
}
