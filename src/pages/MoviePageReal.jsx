import { useParams, useNavigate } from "react-router-dom";
import moviesData from "../data/movies.json";
import ReactPlayer from "react-player";

export default function MoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = moviesData.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="text-white p-6">
        <h1 className="text-2xl font-bold">Фильм не найден</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded"
        >
          ⬅ Назад
        </button>
      </div>
    );
  }

  return (
    <div className="text-white p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-orange-400 hover:underline"
      >
        ⬅ Назад
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full md:w-1/3 rounded shadow-lg"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-300 mb-4">{movie.description}</p>

          <div className="mb-2">
            <span className="font-semibold">Год:</span> {movie.year}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Жанры:</span>{" "}
            {movie.genres?.join(", ")}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Рейтинг:</span>{" "}
            <span className="text-yellow-400">★ {movie.rating}</span>
          </div>
        </div>
      </div>

      {movie.trailerUrl && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Трейлер</h2>
          <div className="aspect-w-16 aspect-h-9">
            <ReactPlayer url={movie.trailerUrl} controls width="100%" />
          </div>
        </div>
      )}
    </div>
  );
}


