import cartoonsData from "../data/cartoons.json";

export default function Cartoons() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Мультфильмы</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {cartoonsData.map((cartoon) => (
          <div
            key={cartoon.id}
            className="bg-neutral-800 rounded p-4 flex flex-col items-center text-center"
          >
            <img
              src={cartoon.poster}
              alt={cartoon.title}
              className="w-32 h-48 mb-2 object-cover rounded"
            />
            <h3 className="text-white font-medium">{cartoon.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{cartoon.description}</p>
            <span className="text-yellow-400 mt-1">★ {cartoon.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
