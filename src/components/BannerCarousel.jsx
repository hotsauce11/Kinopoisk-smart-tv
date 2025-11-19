// src/components/BannerCarousel.jsx
import { useState, useEffect } from "react";

const banners = [
  "/banners/banner1.jpg",
  "/banners/banner2.jpg",
  "/banners/banner3.jpg"
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000); // каждые 4 секунды
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl mb-4">
      <img
        src={banners[index]}
        alt={`Баннер ${index + 1}`}
        className="w-full h-48 object-cover transition-all duration-700"
      />
    </div>
  );
}

