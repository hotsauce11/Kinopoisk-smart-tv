import { useEffect, useState } from "react";
import FullScreenBanner from "../components/FullScreenBanner";
import GenreSection from "../components/GenreSection";
import moviesData from "../data/movies.json";

const sectionIds = ["top-banner", "genre-фантастика", "genre-ужасы", "genre-новинки"];

export default function Home() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(-1); // -1 для баннера

  // Обработка клавиш и скролла для навигации по секциям
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveSectionIndex((i) => Math.min(i + 1, sectionIds.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveSectionIndex((i) => Math.max(i - 1, -1));
      }
    };

    const handleWheel = (e) => {
      if (e.deltaY > 30) {
        setActiveSectionIndex((i) => Math.min(i + 1, sectionIds.length - 1));
      } else if (e.deltaY < -30) {
        setActiveSectionIndex((i) => Math.max(i - 1, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Скроллим к активной секции
  useEffect(() => {
    if (activeSectionIndex === -1) {
      // баннер — скролл вверх
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const id = sectionIds[activeSectionIndex];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeSectionIndex]);

  // Фильтры для жанров
  const fantasyMovies = moviesData.filter((m) => m.genres.includes("Фантастика"));
  const horrorMovies = moviesData.filter((m) => m.genres.includes("Ужасы"));
  const newMovies = moviesData.filter((m) => m.isNew);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Баннер */}
      <FullScreenBanner />

      {/* Жанровые секции с id */}
      <GenreSection id="genre-фантастика" title="Фантастика" movies={fantasyMovies} />
      <GenreSection id="genre-ужасы" title="Ужасы" movies={horrorMovies} />
      <GenreSection id="genre-новинки" title="Новинки" movies={newMovies} />
    </div>
  );
}
