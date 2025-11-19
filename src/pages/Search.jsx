import { useState } from 'react';
import moviesData from '../data/movies.json';

const genres = ['Все жанры', 'Фантастика', 'Драма', 'Комедия', 'Боевик'];

export default function Search() {
  const [query, setQuery] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [isNewOnly, setIsNewOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [sortOrder, setSortOrder] = useState('desc'); // desc или asc

  const filteredMovies = moviesData
    .filter(movie => {
      return (
        movie.title.toLowerCase().includes(query.toLowerCase()) &&
        movie.rating >= minRating &&
        (!isNewOnly || movie.isNew) &&
        (selectedGenre === 'Все жанры' || movie.genre === selectedGenre)
      );
    })
    .sort((a, b) => (sortOrder === 'desc' ? b.rating - a.rating : a.rating - b.rating));

  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl mb-4">Поиск фильмов</h1>

      <input
        type="text"
        placeholder="Поиск по названию"
        className="p-2 rounded bg-neutral-800 mb-4 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <label>
          Минимальный рейтинг:
          <input
            type="number"
            min="0"
            max="10"
            step="0.1"
            className="ml-2 p-1 rounded bg-neutral-800 w-16"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
          />
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isNewOnly}
            onChange={(e) => setIsNewOnly(e.target.checked)}
          />
          Только новинки
        </label>

        <label>
          Жанр:
          <select
            className="ml-2 p-1 rounded bg-neutral-800"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </label>

        <label>
          Сортировка по рейтингу:
          <select
            className="ml-2 p-1 rounded bg-neutral-800"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">По убыванию</option>
            <option value="asc">По возрастанию</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredMovies.length === 0 ? (
          <p>Ничего не найдено</p>
        ) : (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="bg-neutral-800 rounded p-3">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="font-semibold">{movie.title}</h3>
              <p className="text-xs text-gray-400">{movie.description}</p>
              <span className="text-yellow-400">★ {movie.rating}</span>
              <p className="text-xs italic text-gray-500 mt-1">{movie.genre}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}


  