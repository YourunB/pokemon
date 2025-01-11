import React, { useState } from 'react';
import { useFetchPokemonQuery, useFetchPokemonListQuery } from '../../store/apiSlice';

const PageHome: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>('pikachu');
  
  const { data: pokemonList, error: listError, isLoading: isLoadingList } = useFetchPokemonListQuery(10, 0);
  
  const { data: pokemonData, error: pokemonError, isLoading: isLoadingPokemon } = useFetchPokemonQuery(pokemonName);

  const handlePokemonChange = (name: string) => {
    setPokemonName(name);
  };

  if (isLoadingList) return <div>Loading Pokemon List...</div>;
  if (listError) return <div>Error loading list: {listError.message}</div>;

  if (isLoadingPokemon) return <div>Loading {pokemonName}...</div>;
  if (pokemonError) return <div>Error loading {pokemonName}: {pokemonError.message}</div>;

  return (
    <div>
      <h2>Pokemon List:</h2>
      <ul>
        {pokemonList?.results?.map((pokemon: any) => (
          <li key={pokemon.name}>
            <button onClick={() => handlePokemonChange(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>

      {pokemonData && (
        <div>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      )}
    </div>
  );
};

export default PageHome;
