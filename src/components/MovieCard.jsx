import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-neutral-800 rounded-xl p-3 cursor-pointer hover:scale-105 transition-transform"
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h3 className="text-sm font-semibold">{movie.title}</h3>
      <p className="text-xs text-gray-400 line-clamp-2">
        {movie.description}
      </p>
      <span className="text-yellow-400 text-sm">★ {movie.rating}</span>
    </div>
  );
}
