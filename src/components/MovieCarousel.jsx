import MovieCard from "./MovieCard";

export default function MovieCarousel({ title, movies }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3 px-2">{title}</h2>
      <div className="flex overflow-x-auto gap-4 px-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

