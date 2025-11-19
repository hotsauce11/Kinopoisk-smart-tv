import { useState } from "react";
import moviesData from "../data/movies.json";
import MovieSection from "../components/MovieSection";

const allGenres = [...new Set(moviesData.flatMap((m) => m.genres || []))];

export default function Movies() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("rating-desc");

  const filtered = moviesData
    .filter((m) =>
      selectedGenre ? m.genres.includes(selectedGenre) : true
    )
    .filter((m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortedMovies = [...filtered].sort((a, b) => {
    if (sortOption === "rating-desc") return b.rating - a.rating;
    if (sortOption === "rating-asc") return a.rating - b.rating;
    if (sortOption === "title-asc") return a.title.localeCompare(b.title);
    if (sortOption === "title-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Фильмы</h1>

      {/* Поиск и сортировка */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Поиск по названию..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 rounded bg-neutral-800 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-orange-500"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="bg-neutral-800 text-white p-2 rounded"
        >
          <option value="rating-desc">Рейтинг ↓</option>
          <option value="rating-asc">Рейтинг ↑</option>
          <option value="title-asc">Название A-Z</option>
          <option value="title-desc">Название Z-A</option>
        </select>
      </div>

      {/* Жанры */}
      <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-none">
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            selectedGenre === null
              ? "bg-orange-500"
              : "bg-neutral-700 hover:bg-neutral-600"
          }`}
          onClick={() => setSelectedGenre(null)}
        >
          Все жанры
        </button>
        {allGenres.map((genre) => (
          <button
            key={genre}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedGenre === genre
                ? "bg-orange-500"
                : "bg-neutral-700 hover:bg-neutral-600"
            }`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Результаты */}
      <MovieSection
        title={
          searchQuery
            ? `Результаты для «${searchQuery}»`
            : selectedGenre || "Все фильмы"
        }
        movies={sortedMovies}
      />
    </div>
  );
}



