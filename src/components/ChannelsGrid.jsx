import React from 'react';
import channels from '../data/channels.json';

export default function ChannelsGrid({ onSelectChannel }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {channels.map(channel => (
        <div
          key={channel.id}
          className="bg-neutral-800 rounded p-3 cursor-pointer hover:bg-neutral-700"
          onClick={() => onSelectChannel(channel)}
        >
          <img src={channel.logo} alt={channel.name} className="h-16 mx-auto mb-2" />
          <p className="text-center text-white">{channel.name}</p>
        </div>
      ))}
    </div>
  );
}
