const categories = [
  { key: "all", label: "Все каналы", icon: "📺" },
  { key: "federal", label: "Федеральные", icon: "🏛" },
  { key: "sports", label: "Спорт", icon: "🏅" },
  { key: "movies", label: "Кино", icon: "🎬" },
  { key: "education", label: "Познавательные", icon: "📚" },
  { key: "kids", label: "Детские", icon: "🧸" }
];

export default function ChannelFilters({ selected, onChange }) {
  return (
    <div className="flex overflow-x-auto gap-4 p-4 bg-black/80 rounded-xl">
      {categories.map((cat) => (
        <button
          key={cat.key}
          className={`flex items-center gap-2 py-2 px-4 rounded-full transition-all ${
            selected === cat.key ? "bg-white text-black" : "bg-neutral-800 text-white"
          }`}
          onClick={() => onChange(cat.key)}
        >
          <span>{cat.icon}</span>
          <span className="whitespace-nowrap">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
