import { Clock3, MapPin } from "lucide-react";
import Section from "../components/ui/Section";
import ServiceCard from "../components/features/ServiceCard";
import { useServices, useVillageData } from "../hooks/useVillageData";

export default function Services() {
  const services = useServices();
  const village = useVillageData();

  return (
    <div>
      <section className="bg-sawah-800 py-14 text-beras-50 sm:py-16">
        <div className="container-desa">
          <p className="eyebrow text-padi-300">Kantor Desa</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Layanan Desa
          </h1>
          <p className="mt-3 max-w-xl text-sawah-100">
            Daftar layanan administrasi yang tersedia di kantor Desa Sukamakmur
            beserta syarat dan estimasi waktunya.
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
          <div className="mb-10 grid grid-cols-1 gap-4 rounded-2xl border border-sawah-100 bg-beras-50 p-6 sm:grid-cols-2">
            <p className="flex items-start gap-3 text-sm text-ink-soft">
              <Clock3 size={17} className="mt-0.5 shrink-0 text-sawah-700" />
              <span>
                <span className="block font-medium text-ink">Jam Layanan</span>
                {village.officeHours}
              </span>
            </p>
            <p className="flex items-start gap-3 text-sm text-ink-soft">
              <MapPin size={17} className="mt-0.5 shrink-0 text-sawah-700" />
              <span>
                <span className="block font-medium text-ink">Lokasi</span>
                {village.address}
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
