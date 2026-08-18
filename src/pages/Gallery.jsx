import { useState } from "react";
import { Images } from "lucide-react";
import Section from "../components/ui/Section";
import GalleryItem from "../components/features/GalleryItem";
import EmptyState from "../components/ui/EmptyState";
import { Lightbox } from "../components/ui/Modal";
import { useGallery, useGalleryAlbums } from "../hooks/useVillageData";

export default function Gallery() {
  const albums = useGalleryAlbums();
  const [album, setAlbum] = useState("Semua");
  const items = useGallery(album);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <section className="bg-sawah-800 py-14 text-beras-50 sm:py-16">
        <div className="container-desa">
          <p className="eyebrow text-padi-300">Dokumentasi</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Galeri Desa
          </h1>
          <p className="mt-3 max-w-xl text-sawah-100">
            Momen kegiatan warga, keindahan alam, dan budaya Desa Sukamakmur
            dalam gambar.
          </p>
        </div>
      </section>
      <div className="relative z-0 overflow-hidden bg-beras-100">
        <img
          src="/images/logo.png"
          alt="watermark"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[600px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:w-[820px] lg:w-[1000px]"
        />
        <Section tone="transparent">
          <div className="mb-8 flex flex-wrap gap-2">
            {albums.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAlbum(a)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  album === a
                    ? "bg-sawah-700 text-beras-50"
                    : "border border-sawah-200 text-ink-soft hover:bg-sawah-50"
                }`}>
                {a}
              </button>
            ))}
          </div>

          {items.length === 0 ? (
            <EmptyState icon={Images} title="Belum ada foto di album ini" />
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((item, i) => (
                <GalleryItem
                  key={item.id}
                  item={item}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        </Section>

        <Lightbox
          items={items}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      </div>
    </div>
  );
}
