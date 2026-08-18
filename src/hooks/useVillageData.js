import { useMemo, useState } from "react";
import village from "../data/village.json";
import newsData from "../data/news.json";
import officials from "../data/officials.json";
import potentials from "../data/potentials.json";
import services from "../data/services.json";
import gallery from "../data/gallery.json";

export function useVillageData() {
  return village;
}

export function useOfficials() {
  return officials;
}

export function useServices() {
  return services;
}

export function useGallery(album = "Semua") {
  return useMemo(() => {
    if (album === "Semua") return gallery;
    return gallery.filter((item) => item.album === album);
  }, [album]);
}

export function useGalleryAlbums() {
  return useMemo(
    () => ["Semua", ...new Set(gallery.map((item) => item.album))],
    [],
  );
}

export function usePotentials(category = "Semua") {
  return useMemo(() => {
    if (category === "Semua") return potentials;
    return potentials.filter((item) => item.category === category);
  }, [category]);
}

export function usePotentialCategories() {
  return useMemo(
    () => ["Semua", ...new Set(potentials.map((item) => item.category))],
    [],
  );
}

export function useNewsBySlug(slug) {
  return newsData.find((item) => item.slug === slug);
}

export function useLatestNews(count = 3) {
  return useMemo(
    () =>
      [...newsData]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, count),
    [count],
  );
}

const PAGE_SIZE = 6;

export function useNews() {
  const [category, setCategory] = useState("Semua");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => ["Semua", ...new Set(newsData.map((item) => item.category))],
    [],
  );

  const filtered = useMemo(() => {
    const sorted = [...newsData].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );
    if (category === "Semua") return sorted;
    return sorted.filter((item) => item.category === category);
  }, [category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function changeCategory(next) {
    setCategory(next);
    setPage(1);
  }

  return {
    news: paged,
    categories,
    category,
    setCategory: changeCategory,
    page,
    setPage,
    totalPages,
  };
}
