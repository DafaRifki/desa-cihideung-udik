export function formatDate(dateStr, options = {}) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    ...options,
  });
}

export function formatNumber(num) {
  return new Intl.NumberFormat("id-ID").format(num);
}

export function truncate(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
