import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import movies from "../data/movies.json";

export default function MovieDetailUnified() {
  const { id } = useParams();
  const movie = movies.find((m) => String(m.id) === id);

  if (!movie) return <div className="text-white p-4">Фильм не найден</div>;

  const similarMovies = movies.filter(
    (m) => m.genres.some((g) => movie.genres.includes(g)) && m.id !== movie.id
  );

  return (
    <div className="p-4 text-white">
      {/* Видео (трейлер с YouTube) */}
      <div className="mb-6">
        <ReactPlayer
          url={movie.trailerUrl}
          controls
          width="100%"
          height="60vh"
        />
      </div>

      {/* Информация */}
      <h1 className="text-3xl font-bold mb-2">{movie.title} ({movie.year})</h1>
      <p className="text-gray-400 mb-4">{movie.description}</p>
      <p className="mb-2"><strong>Рейтинг:</strong> {movie.rating}</p>
      <p className="mb-4"><strong>Жанры:</strong> {movie.genres.join(', ')}</p>

      {/* Похожие фильмы */}
      {similarMovies.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Похожие фильмы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {similarMovies.map((m) => (
              <div
                key={m.id}
                className="cursor-pointer bg-neutral-800 rounded-xl p-3"
              >
                <img
                  src={m.poster}
                  alt={m.title}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <h3 className="text-sm font-semibold">{m.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">{m.description}</p>
                <span className="text-yellow-400 text-sm">★ {m.rating}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}




