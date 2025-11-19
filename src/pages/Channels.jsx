import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 добавляем импорт
import channelsData from "../data/channels.json";
import ChannelFilterCarousel from "../components/ChannelFilterCarousel";

export default function Channels() {
  const [channels, setChannels] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setChannels(channelsData);
  }, []);

  const filteredChannels =
    activeFilter === "all"
      ? channels
      : channels.filter((c) => c.category === activeFilter);

  return (
    <div className="p-4">
      <ChannelFilterCarousel
        activeFilter={activeFilter}
        onChange={setActiveFilter}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredChannels.map((channel) => (
          <Link to={`/channels/${channel.id}`} key={channel.id}>
            <div className="bg-neutral-800 rounded-xl p-3 hover:scale-105 transition-transform cursor-pointer">
              <img src={channel.icon} alt={channel.name} className="w-full h-24 object-contain mb-2" />
              <div className="text-sm font-semibold">{channel.name}</div>
              <div className="text-xs text-gray-400">{channel.currentProgram}</div>
              <div className="text-xs text-gray-500">{channel.duration}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}







