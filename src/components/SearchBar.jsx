import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-72 md:w-96 px-6 py-3 rounded-full border-2 border-blue-400 text-blue-700 font-semibold shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-300"
    />
  );
}

export default SearchBar;
