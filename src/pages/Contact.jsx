import { useState } from "react";
import { MapPin, Phone, Mail, Clock3, Send, CheckCircle2 } from "lucide-react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import { useVillageData } from "../hooks/useVillageData";

export default function Contact() {
  const village = useVillageData();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // dev mode
    console.log("=== Data Pesan ===");
    console.log("Nama : ", form.name);
    console.log("Email : ", form.email);
    console.log("Pesan : ", form.message);

    // const subject = encodeURIComponent(`Aspirasi dari ${form.name || 'Warga'}`)
    // const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    // window.location.href = `mailto:${village.email}?subject=${subject}&body=${body}`
    setSent(true);
  }

  return (
    <div>
      <section className="bg-sawah-800 py-14 text-beras-50 sm:py-16">
        <div className="container-desa">
          <p className="eyebrow !text-[#f2f0e6]">Terhubung</p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Kontak & Aspirasi
          </h1>
          <p className="mt-3 max-w-xl text-sawah-100">
            Sampaikan pertanyaan, masukan, atau aspirasi Anda kepada pemerintah
            Desa Cihideung Udik.
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
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <InfoRow icon={MapPin} label="Alamat" value={village.address} />
              <InfoRow icon={Phone} label="Telepon" value={village.phone} />
              <InfoRow icon={Mail} label="Email" value={village.email} />
              <InfoRow
                icon={Clock3}
                label="Jam Layanan"
                value={village.officeHours}
              />

              <div className="overflow-hidden rounded-2xl border border-sawah-100">
                <iframe
                  title="Peta Kantor Desa"
                  src={village.mapEmbedUrl}
                  className="h-[260px] w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-sawah-100 bg-beras-50 p-7">
              <h2 className="font-display text-xl font-medium text-ink">
                Kirim Pesan
              </h2>
              <p className="mt-1 text-sm text-ink-soft">
                Formulir ini akan membuka aplikasi email Anda dengan pesan yang
                sudah terisi.
              </p>

              {sent ? (
                <div className="mt-6 flex items-start gap-3 rounded-xl bg-sawah-50 p-5 text-sawah-800">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                  <p className="text-sm">
                    Aplikasi email Anda seharusnya sudah terbuka dengan pesan
                    terisi. Jika tidak, silakan kirim langsung ke{" "}
                    <span className="font-medium">{village.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <Field
                    label="Nama"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-ink">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-sawah-200 bg-beras-50 px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/50 focus:border-sawah-500 focus:outline-none"
                      placeholder="Tuliskan pertanyaan atau aspirasi Anda…"
                    />
                  </div>
                  <Button type="submit">
                    Kirim Pesan
                    <Send size={15} />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sawah-50 text-sawah-700">
        <Icon size={17} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wide text-ink-soft/70">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-ink">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-sawah-200 bg-beras-50 px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/50 focus:border-sawah-500 focus:outline-none"
      />
    </div>
  );
}
