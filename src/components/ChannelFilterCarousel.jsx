import React from "react";
import clsx from "clsx";

const filters = [
  { label: "Все", value: "all" },
  { label: "Федеральные", value: "federal" },
  { label: "Спорт", value: "sports" },
  { label: "Кино и сериалы", value: "movies" },
  { label: "Познавательные", value: "education" },
  { label: "Детские", value: "kids" }
];

export default function ChannelFilterCarousel({ activeFilter, onChange }) {
  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-3 bg-neutral-900">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          className={clsx(
            "whitespace-nowrap px-4 py-2 rounded-full text-sm transition-colors duration-200",
            activeFilter === filter.value
              ? "bg-orange-500 text-white"
              : "bg-neutral-700 text-gray-200 hover:bg-neutral-600"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
