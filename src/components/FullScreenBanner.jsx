// src/components/FullScreenBanner.jsx
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

  return (
    <div id="top-banner" className="relative w-full h-screen overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end items-start px-8 md:px-16 lg:px-32 pb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{banner.title}</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl">{banner.description}</p>
            <div className="flex gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-xl text-white font-semibold">
                ▶ Смотреть
              </button>
              <button className="bg-neutral-700 hover:bg-neutral-600 px-6 py-2 rounded-xl text-white">
                ☆ Буду смотреть
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}







