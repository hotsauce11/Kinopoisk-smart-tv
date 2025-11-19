import { useParams, Link } from 'react-router-dom';
import channelsData from '../data/channels.json';

export default function ChannelDetail() {
  const { id } = useParams();
  const channel = channelsData.find(c => String(c.id) === id);

  if (!channel) {
    return (
      <div className="p-6 text-red-400 text-xl">
        Канал не найден • <Link to="/channels" className="underline">к списку каналов</Link>
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      {/* ► Кнопка «Назад» */}
      <Link
        to="/channels"
        className="inline-block mb-6 px-4 py-2 bg-neutral-800 rounded hover:bg-neutral-700 transition"
      >
        ← Назад к каналам
      </Link>

      {/* ► Информация о канале */}
      <div className="flex flex-col items-center">
        <img
          src={channel.icon}
          alt={channel.name}
          className="w-24 h-24 object-contain mb-4"
        />

        <h1 className="text-3xl font-bold mb-2">{channel.name}</h1>
        <p className="text-neutral-400 mb-6">
          Описание канала появится позже. Здесь вы сможете увидеть программу и другие детали.
        </p>

        {/* ► Заглушка-плеер */}
        <div className="w-full max-w-xl h-64 bg-neutral-900 rounded flex items-center justify-center text-neutral-500">
          Видео-плеер (скоро)
        </div>
      </div>
    </div>
  );
}


