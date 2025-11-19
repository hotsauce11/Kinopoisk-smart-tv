import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profiles from "../data/profiles.json";

const banners = [
  "/banners/banner1.jpg",
  "/banners/banner2.jpg",
  "/banners/banner3.jpg",
];

export default function ProfileSelection() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (profile) => {
    if (profile.id === 1) {
      navigate("/home"); // или "/", если главная
    } else {
      alert("Этот профиль пока недоступен");
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 transition-all duration-1000"
        style={{ backgroundImage: `url(${banners[currentBanner]})` }}
      ></div>

      <div className="relative z-10 flex items-center h-full px-10">
        <div className="flex flex-col gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => handleSelect(profile)}
              className="flex items-center cursor-pointer hover:scale-105 transition-transform"
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
              <span className="ml-4 text-xl text-white font-semibold">{profile.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
