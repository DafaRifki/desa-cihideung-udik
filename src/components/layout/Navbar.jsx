import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sprout } from "lucide-react";
import { useVillageData } from "../../hooks/useVillageData";
import { Container } from "../ui/Section";

const LINKS = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil" },
  { to: "/berita", label: "Berita" },
  { to: "/potensi", label: "Potensi" },
  { to: "/layanan", label: "Layanan" },
  { to: "/galeri", label: "Galeri" },
  { to: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const village = useVillageData();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-sawah-100 bg-beras-100/95 backdrop-blur"
          : "border-transparent bg-beras-100/70 backdrop-blur"
      }`}>
      <Container className="flex h-16 items-center justify-between sm:h-[72px]">
        <NavLink to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sawah-700 text-beras-50">
            <img src="/images/logo.png" alt="KKN 12" />
          </span>
          <span className="font-display text-lg font-semibold leading-none text-sawah-800">
            {village.name}
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sawah-700 text-beras-50"
                    : "text-ink-soft hover:bg-sawah-50 hover:text-sawah-800"
                }`
              }>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-sawah-800 hover:bg-sawah-50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Buka menu navigasi">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <nav className="border-t border-sawah-100 bg-beras-100 px-5 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? "bg-sawah-700 text-beras-50"
                      : "text-ink-soft hover:bg-sawah-50"
                  }`
                }>
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
