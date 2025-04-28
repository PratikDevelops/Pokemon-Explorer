import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="w-24 h-24 relative animate-bounce">
        <div className="w-24 h-24 rounded-full bg-white border-4 border-black relative overflow-hidden shadow-lg">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-red-500"></div>
          <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-black rounded-full z-10"></div>
          <div className="absolute top-1/2 left-0 w-full h-1 border-2 bg-black"></div>
        </div>
      </div>
      <p className="mt-6 text-blue-700 font-bold text-lg tracking-widest">Loading Pokémons...</p>
    </div>
  );
}

export default Loading;
