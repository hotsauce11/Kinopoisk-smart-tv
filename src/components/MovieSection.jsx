import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieSection({ title, movies }) {
  const navigate = useNavigate();
  const [focusedIndex, setFocusedIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex].focus();
    }
  }, [focusedIndex]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      setFocusedIndex((idx) => (idx + 1) % movies.length);
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      setFocusedIndex((idx) => (idx - 1 + movies.length) % movies.length);
      e.preventDefault();
    } else if (e.key === "Enter") {
      navigate(`/movies/${movies[focusedIndex].id}`);
    }
  };

  return (
    <div className="mb-8 text-white">
      {title && <h2 className="text-2xl font-semibold mb-4 px-2">{title}</h2>}
     <div
  className="flex overflow-x-auto overflow-y-hidden gap-4 px-2"
  onKeyDown={onKeyDown}
  tabIndex={0}
    style={{ maxHeight: "260px" }} // например, ограничим высоту контейнера

>


        {movies.map((movie, index) => (
          <div
            key={movie.id}
            ref={(el) => (itemRefs.current[index] = el)}
            tabIndex={-1}
            onClick={() => navigate(`/movies/${movie.id}`)}
            className={`cursor-pointer min-w-[150px] sm:min-w-[180px] md:min-w-[200px] flex-shrink-0 bg-neutral-800 rounded-xl p-3 transition-transform ${
              focusedIndex === index
                ? "scale-105 outline-yellow-400 outline outline-2"
                : ""
            }`}
            aria-selected={focusedIndex === index}
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
        ))}
      </div>
    </div>
  );
}




