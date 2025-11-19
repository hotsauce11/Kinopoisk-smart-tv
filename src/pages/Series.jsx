import seriesData from "../data/series.json";

export default function Series() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Сериалы</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {seriesData.map((series) => (
          <div
            key={series.id}
            className="bg-neutral-800 rounded-xl p-4 text-center hover:scale-105 transition-transform"
          >
            <img
              src={series.poster}
              alt={series.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-semibold text-white">{series.title}</h3>
            <p className="text-sm text-gray-400 mt-1 line-clamp-2">{series.description}</p>
            <span className="text-yellow-400 mt-2 block">★ {series.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

