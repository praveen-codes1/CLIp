import React from 'react';

const tagColors = {
  brown: 'bg-yellow-900',
  blue: 'bg-blue-500',
};

const TAG_WIDTH = 32; // w-8 in px
const CARD_WIDTH = 160; // w-40 in px

const IDCard = ({ name, role, description, avatar, tagColor = 'brown', lanyardText = '' }) => {
  return (
    <div className="flex flex-col items-center select-none relative" style={{ width: 180, height: 220 }}>
      {/* Eclipse/Glow effect behind card */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 180,
          height: 180,
          background: 'radial-gradient(circle, rgba(156,163,175,0.18) 0%, rgba(0,0,0,0.0) 70%)',
          filter: 'blur(2px)',
          zIndex: 0,
        }}
      />
      {/* Card (stationary, centered, with tag) */}
      <div
        className="flex flex-col items-center z-10"
        style={{ position: 'absolute', left: 0, top: 20, width: 180 }}
      >
        {/* Tag (centered in group) */}
        <div className={`w-8 h-3 rounded-b-lg ${tagColors[tagColor]} shadow-md z-10 mx-auto`} style={{ marginLeft: (180 - TAG_WIDTH) / 2 }} />
        {/* Card */}
        <div className="glass rounded-xl p-4 shadow-2xl mt-[-8px] w-40 flex flex-col items-center border border-white/20 relative" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', marginLeft: (180 - CARD_WIDTH) / 2 }}>
          <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-gray-400 mb-2 grayscale">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-base font-bold text-gray-300 mb-1 text-center">{name}</h3>
          <p className="text-xs text-gray-200 font-mono mb-1 text-center">{role}</p>
          <p className="text-[10px] text-gray-100 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default IDCard; 