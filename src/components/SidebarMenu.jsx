import { Home, Tv, Music, Book, Search, User, Video, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: <Home />, label: 'Главное', path: '/' },
  { icon: <Search />, label: 'Поиск', path: '/search' },
  { icon: <Tv />, label: 'Каналы', path: '/channels' },
  { icon: <Video />, label: 'Спорт', path: '/sport' },
  { icon: <Music />, label: 'Музыка', path: '/music' },
  { icon: <Book />, label: 'Книги', path: '/books' },
  { icon: <Star />, label: 'Каталог', path: '/catalog' },
  { icon: <User />, label: 'Моё', path: '/my' },
];

export default function SidebarMenu({ expanded }) {
  const location = useLocation();

  return (
    <aside
      className={`
        h-full fixed left-0 top-0 z-30 bg-black/80 text-white py-4 overflow-hidden
        transition-all duration-700 ease-in-out
        ${expanded ? 'w-56 translate-x-0' : 'w-16 -translate-x-4 opacity-80'}
      `}
    >
      <div className="text-orange-500 text-xl font-bold px-4 mb-6 transition-opacity duration-300">
        {expanded && 'КИНОПОИСК'}
      </div>
      {menuItems.map(({ icon, label, path }) => (
        <Link
          key={path}
          to={path}
          className={`flex items-center gap-4 px-4 py-2 hover:bg-white/10 transition-all
            ${location.pathname === path ? 'bg-white/20' : ''}
          `}
        >
          <span>{icon}</span>
          {expanded && <span className="text-sm">{label}</span>}
        </Link>
      ))}
      <div className="mt-auto px-4 pt-6 text-xs text-gray-400">
        {expanded && (
          <>
            Наталья Черкасова<br />
            Сменить пользователя
          </>
        )}
      </div>
    </aside>
  );
}






