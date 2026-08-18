import { Target, Eye, ScrollText } from "lucide-react";
import Section from "../components/ui/Section";
import TerraceDivider from "../components/ui/TerraceDivider";
import OfficialCard from "../components/features/OfficialCard";
import { useVillageData, useOfficials } from "../hooks/useVillageData";
import { formatNumber } from "../utils/format";

export default function Profile() {
  const village = useVillageData();
  const officials = useOfficials();

  return (
    <div>
      <section
        tone="transparent"
        className="bg-sawah-800 py-16 text-beras-50 sm:py-20">
        <div className="container-desa">
          <p className="eyebrow text-padi-300">Profil Desa</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            {village.name}
          </h1>
          <p className="mt-4 max-w-2xl text-sawah-100">{village.description}</p>
        </div>
      </section>
      <TerraceDivider tone="sawah-to-beras" />

      <div className="relative z-0 overflow-hidden bg-beras-100">
        <img
          src="/images/logo.png"
          alt="watermark"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[600px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:w-[820px] lg:w-[1000px]"
        />
        {/* Sejarah */}
        <Section tone="transparent" eyebrow="Asal Usul" title="Sejarah Desa">
          <div className="flex gap-5">
            <div className="stempel hidden shrink-0 sm:flex">
              <ScrollText size={26} strokeWidth={1.6} />
            </div>
            <p className="max-w-3xl text-base leading-relaxed text-ink-soft">
              {village.history}
            </p>
          </div>
        </Section>

        {/* Visi Misi */}
        <Section
          tone="transparent"
          tone="beras50"
          eyebrow="Arah Pembangunan"
          title="Visi & Misi">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-sawah-100 bg-beras-50 p-7">
              <div className="stempel mb-4">
                <Eye size={24} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl font-medium text-ink">
                Visi
              </h3>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {village.vision}
              </p>
            </div>
            <div className="rounded-2xl border border-sawah-100 bg-beras-50 p-7">
              <div className="stempel mb-4">
                <Target size={24} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl font-medium text-ink">
                Misi
              </h3>
              <ol className="mt-3 space-y-2.5">
                {village.mission.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-relaxed text-ink-soft">
                    <span className="font-mono text-sm text-padi-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Section>

        {/* Demografi */}
        <Section
          tone="transparent"
          eyebrow="Data Wilayah"
          title="Demografi & Geografis">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                label: "Penduduk",
                value: formatNumber(village.stats.population),
              },
              { label: "Luas Wilayah", value: village.stats.area },
              { label: "Zona", value: village.stats.hamlets },
              {
                label: "Kepala Keluarga",
                value: formatNumber(village.stats.households),
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-sawah-100 bg-beras-50 p-5 text-center">
                <p className="font-display text-3xl font-semibold text-sawah-700">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Struktur organisasi */}
        <Section
          tone="tranparent"
          eyebrow="Perangkat Desa"
          title="Struktur Organisasi"
          description="Susunan perangkat Desa Cihideung Udik periode berjalan.">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {officials.map((official) => (
              <OfficialCard key={official.id} official={official} />
            ))}
          </div>
        </Section>

        {/* Peta */}
        <Section tone="transparent" eyebrow="Lokasi" title="Peta Desa">
          <div className="overflow-hidden rounded-2xl border border-sawah-100">
            <iframe
              title="Peta Lokasi Desa Cihideung Udik"
              src={village.mapEmbedUrl}
              className="h-[380px] w-full"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-sm text-ink-soft">{village.address}</p>
          <a
            href="https://maps.google.com/?q=Desa+Cihideung+Udik+Ciampea+Bogor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-padi-600 hover:underline">
            Buka di Google Maps &rarr;
          </a>
        </Section>
      </div>
    </div>
  );
}
