import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import Loading from '../components/Loading';

function Home() {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const pokemonsPerPage = 8;

    async function fetchPokemons() {
        try {
            setLoading(true);
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
            const data = await res.json();
            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    const details = await res.json();
                    return {
                        id: details.id,
                        name: details.name,
                        image: details.sprites.front_default,
                        types: details.types.map(t => t.type.name),
                    };
                })
            );
            setPokemons(pokemonDetails);
            setFilteredPokemons(pokemonDetails);
        } catch (error) {
            setError('Failed to fetch Pokémon');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    useEffect(() => {
        let updatedList = pokemons;
        if (searchTerm) {
            updatedList = updatedList.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        if (selectedType) {
            updatedList = updatedList.filter(pokemon =>
                pokemon.types.includes(selectedType)
            );
        }
        setFilteredPokemons(updatedList);
    }, [searchTerm, selectedType, pokemons]);

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    const totalPages = Math.ceil(filteredPokemons.length / pokemonsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <Header />
            <div className="flex flex-col md:flex-row gap-4 my-4">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <FilterDropdown setSelectedType={setSelectedType} />
            </div>
            {loading && <Loading />}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && filteredPokemons.length === 0 && <p>No Pokémon found.</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentPokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <div className="flex justify-between w-full mt-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Home;
