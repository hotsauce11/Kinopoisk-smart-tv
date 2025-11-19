export default function ChannelCard({ channel, onFocus }) {
  return (
    <div
      className="flex flex-col items-center p-4 bg-neutral-900 hover:bg-neutral-800 rounded-xl transition"
      onMouseEnter={() => onFocus(channel)}
    >
      <img src={channel.logo} alt={channel.name} className="h-16 mb-2" />
      <div className="text-sm text-center">{channel.name}</div>
    </div>
  );
}
