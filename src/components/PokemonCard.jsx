import React from 'react';

function PokemonCard({ pokemon }) {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl flex flex-col items-center shadow-xl hover:scale-105 hover:shadow-2xl transition transform duration-300 w-72 h-80">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-36 h-36 object-contain mb-4 bg-amber-50 rounded-full shadow-md"
      />
      <h2 className="capitalize text-3xl font-bold text-blue-800 mb-2">
        {pokemon.name}
      </h2>
      <p className="text-gray-600 text-sm mb-3">ID: #{pokemon.id}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-yellow-300 text-yellow-900 rounded-full text-xs font-semibold capitalize shadow-sm"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
