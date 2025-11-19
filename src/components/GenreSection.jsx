// src/components/GenreSection.jsx
import { useRef, useEffect, useMemo } from "react";
import MovieCard from "./MovieCard";

export default function GenreSection({ id, title, movies }) {
  const scrollRef = useRef(null);

  // Выбираем случайный фильм для фонового баннера
  const backgroundMovie = useMemo(() => {
    if (movies.length === 0) return null;
    return movies[Math.floor(Math.random() * movies.length)];
  }, [movies]);

  // Навигация по карусели стрелками
  useEffect(() => {
    const handleKey = (e) => {
      if (document.activeElement.tagName === "INPUT") return;

      if (e.key === "ArrowRight") {
        scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!backgroundMovie) return null;

  return (
    <section
      id={id}
      className="relative min-h-screen w-full bg-cover bg-center flex flex-col justify-end"
      style={{ backgroundImage: `url(${backgroundMovie.poster})` }}
    >
      {/* Полупрозрачный слой для читаемости текста */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-24 pb-8 flex flex-col justify-end h-full">
        {/* Информация о случайном фильме */}
        <div className="mb-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-2">{backgroundMovie.title}</h2>
          <p className="text-gray-300 text-sm mb-2">
            {backgroundMovie.year} • {backgroundMovie.genres.join(", ")} • {backgroundMovie.duration || "120 мин"}
          </p>
          <p className="text-gray-400 text-sm">{backgroundMovie.description}</p>
          <p className="text-yellow-400 font-bold mt-1">★ {backgroundMovie.rating}</p>
        </div>

        {/* Название категории и карусель */}
        <div className="mt-auto">
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
          >
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}








