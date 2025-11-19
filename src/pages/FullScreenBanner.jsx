import { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    title: "Фильм «Вызов»",
    description: "Реальная космическая миссия и уникальный медицинский эксперимент.",
    image: "/posters/challenge.jpg",
  },
  {
    id: 2,
    title: "Фильм «Батя»",
    description: "Комедия о непростых, но родных отношениях отца и сына.",
    image: "/posters/father.jpg",
  },
  {
    id: 3,
    title: "Фильм «Майор Гром»",
    description: "История о честном полицейском, противостоящем преступности в Питере.",
    image: "/posters/major.jpg",
  },
];

export default function FullScreenBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const banner = banners[currentIndex];

  const scrollToNextSection = () => {
    const next = document.getElementById("genre-фантастика");
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="top-banner"
      className="h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${banner.image})` }}
    >
      <div className="w-full h-full bg-black/50 flex flex-col justify-end items-start px-10 pb-20">
        <h1 className="text-5xl font-bold text-white mb-6">{banner.title}</h1>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl">{banner.description}</p>
        <div className="flex gap-4 mb-8">
          <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-xl text-white font-semibold">
            ▶ Смотреть
          </button>
          <button className="bg-neutral-700 hover:bg-neutral-600 px-6 py-2 rounded-xl text-white">
            ☆ Буду смотреть
          </button>
        </div>

        {/* Кнопка вниз */}
        <button
          onClick={scrollToNextSection}
          className="text-white text-2xl animate-bounce"
          aria-label="Вниз"
        >
          ↓
        </button>
      </div>
    </div>
  );
}

