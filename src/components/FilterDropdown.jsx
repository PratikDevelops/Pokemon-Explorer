import React from 'react';

function FilterDropdown({ setSelectedType }) {
    const types = [
        'normal', 'fire', 'water', 'grass', 'electric',
        'poison', 'ground', 'flying', 'psychic', 'bug', 'rock',
        'dragon', 'steel', 'fairy'
    ];

    return (
        <div className="relative">
            <select
                onChange={(e) => setSelectedType(e.target.value)}
                className="appearance-none bg-white border-2 border-blue-400 text-blue-700 font-semibold rounded-full px-6 py-3 pr-10 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
            >
                <option value="">All Types</option>
                {types.map((type, idx) => (
                    <option key={idx} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-blue-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}

export default FilterDropdown;
