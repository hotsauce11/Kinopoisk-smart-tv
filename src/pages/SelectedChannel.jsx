import { useParams } from "react-router-dom";
import channelsData from "../data/channels.json";

export default function SelectedChannel() {
  const { id } = useParams();
  const channel = channelsData.find((c) => c.id === id);

  if (!channel) return <div className="p-4">Канал не найден</div>;

  const similarChannels = channelsData.filter(
    (c) => c.category === channel.category && c.id !== channel.id
  );

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 📺 Баннер на фоне */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
        style={{ backgroundImage: `url(${channel.banner})` }}
      />

      {/* 📦 Контент поверх баннера */}
      <div className="relative z-10 p-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* ЗАГЛУШКА ПЛЕЕРА */}
          <div className="bg-black w-full md:w-2/3 aspect-video rounded-xl flex items-center justify-center text-white text-xl">
            🔒 Видео плеер (заглушка)
          </div>

          {/* ИНФО */}
          <div className="w-full md:w-1/3 space-y-2">
            <h2 className="text-2xl font-bold">{channel.name}</h2>
            <p className="text-sm text-gray-300">{channel.description}</p>
            <p className="text-sm text-gray-400">
              {channel.currentProgram} — {channel.duration}
            </p>
          </div>
        </div>

        {/* СХОЖИЕ КАНАЛЫ */}
        {similarChannels.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Похожие каналы</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {similarChannels.map((c) => (
                <div
                  key={c.id}
                  className="bg-neutral-800 p-3 rounded-xl hover:scale-105 transition-transform"
                >
                  <img
                    src={c.icon}
                    alt={c.name}
                    className="w-full h-20 object-contain mb-2"
                  />
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-gray-400">{c.currentProgram}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


