import { NavLink } from "react-router-dom";
import { Link2, Camera, Play, MapPin, Phone, Mail, Sprout } from "lucide-react";
import { useVillageData } from "../../hooks/useVillageData";
import { Container } from "../ui/Section";

const LINKS = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil Desa" },
  { to: "/berita", label: "Berita & Pengumuman" },
  { to: "/potensi", label: "Potensi Desa" },
  { to: "/layanan", label: "Layanan" },
  { to: "/galeri", label: "Galeri" },
  { to: "/kontak", label: "Kontak" },
];

export default function Footer() {
  const village = useVillageData();

  return (
    <footer className="bg-sawah-900 text-sawah-100">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-padi-500 text-sawah-900">
              {/* <Sprout size={18} strokeWidth={2} /> */}
              <img src="/images/logo.png" alt="KKN 12" />
            </span>
            <span className="font-display text-lg font-semibold text-beras-50">
              {village.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sawah-200">
            {village.slogan}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={village.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-sawah-800 text-beras-50 transition-colors hover:bg-padi-500 hover:text-sawah-900">
              <Link2 size={16} />
            </a>
            <a
              href={village.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-sawah-800 text-beras-50 transition-colors hover:bg-padi-500 hover:text-sawah-900">
              <Camera size={16} />
            </a>
            <a
              href={village.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-sawah-800 text-beras-50 transition-colors hover:bg-padi-500 hover:text-sawah-900">
              <Play size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4 text-padi-300">Navigasi</p>
          <ul className="space-y-2.5 text-sm">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="text-sawah-200 transition-colors hover:text-beras-50">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-padi-300">Kontak</p>
          <ul className="space-y-3 text-sm text-sawah-200">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-padi-400" />
              <span>{village.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-padi-400" />
              <span>{village.phone}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-padi-400" />
              <span>{village.email}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-padi-300">Jam Layanan</p>
          <p className="text-sm text-sawah-200">{village.officeHours}</p>
          <p className="mt-4 text-sm text-sawah-200">
            {village.district}, {village.regency}, {village.province}
          </p>
        </div>
      </Container>

      <div className="border-t border-sawah-800 py-5">
        <Container>
          <p className="text-center text-xs text-sawah-300">
            © {new Date().getFullYear()} KKN 12 - {village.name}. Seluruh hak
            cipta dilindungi.
          </p>
        </Container>
      </div>
    </footer>
  );
}
