export function Container({ children, className = "" }) {
  return <div className={`container-desa ${className}`}>{children}</div>;
}

export default function Section({
  children,
  className = "",
  tone = "beras",
  eyebrow,
  title,
  description,
  align = "left",
  id,
}) {
  const TONES = {
    beras: "bg-beras-100",
    beras50: "bg-beras-50",
    sawah: "bg-sawah-800 text-beras-50",
    transparent: "",
  };

  return (
    <section id={id} className={`py-16 sm:py-20 ${TONES[tone]} ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <div
            className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <p
                className={`eyebrow mb-3 ${tone === "sawah" ? "text-padi-300" : ""}`}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`text-3xl font-semibold sm:text-4xl ${tone === "sawah" ? "text-beras-50" : "text-ink"}`}>
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-3 text-base leading-relaxed ${tone === "sawah" ? "text-sawah-100" : "text-ink-soft"}`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
