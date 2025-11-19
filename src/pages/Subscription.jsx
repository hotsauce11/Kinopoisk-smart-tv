export default function Subscription() {
    return (
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Подписка</h1>
        <p className="mb-4">Оформи подписку и получи доступ к полному каталогу фильмов, сериалов и каналов без рекламы.</p>
  
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-neutral-800 p-4 rounded">
            <h2 className="text-xl font-semibold">1 месяц</h2>
            <p className="text-gray-300">199 ₽ / мес</p>
          </div>
          <div className="bg-neutral-800 p-4 rounded border border-yellow-500">
            <h2 className="text-xl font-semibold">6 месяцев</h2>
            <p className="text-yellow-400">999 ₽ / 6 мес</p>
          </div>
          <div className="bg-neutral-800 p-4 rounded">
            <h2 className="text-xl font-semibold">12 месяцев</h2>
            <p className="text-gray-300">1790 ₽ / год</p>
          </div>
        </div>
      </div>
    );
  }
  