import { Sprout } from "lucide-react";
import Section from "../components/ui/Section";
import PotentialCard from "../components/features/PotentialCard";
import EmptyState from "../components/ui/EmptyState";
import { usePotentials, usePotentialCategories } from "../hooks/useVillageData";
import { useState } from "react";

export default function Potentials() {
  const categories = usePotentialCategories();
  const [category, setCategory] = useState("Semua");
  const items = usePotentials(category);

  return (
    <div>
      <section className="bg-sawah-800 py-14 text-beras-50 sm:py-16">
        <div className="container-desa">
          <p className="eyebrow !text-[#f2f0e6]">Kekayaan Desa</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Potensi Desa
          </h1>
          <p className="mt-3 max-w-xl text-sawah-100">
            UMKM, destinasi wisata, hasil pertanian, hingga kesenian yang tumbuh
            dari warga Sukamakmur.
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
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-sawah-700 text-beras-50"
                    : "border border-sawah-200 text-ink-soft hover:bg-sawah-50"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {items.length === 0 ? (
            <EmptyState
              icon={Sprout}
              title="Belum ada data pada kategori ini"
            />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <PotentialCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}
