import React, { useState } from 'react';
import { useFetchPokemonQuery, useFetchPokemonListQuery } from '../../store/apiSlice';

type TPokemonData = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}


const PageHome: React.FC = () => {
  const [pokemonName, setPokemonName] = useState<string>('pikachu');
  const [page, setPage] = useState<number>(0);

  const { data: pokemonList, error: listError, isLoading: isLoadingList } = useFetchPokemonListQuery(page * 20);
  const { data: pokemonData, error: pokemonError, isLoading: isLoadingPokemon } = useFetchPokemonQuery(pokemonName);

  const handlePokemonChange = (name: string) => {
    setPokemonName(name);
  };

  const handlePageChange = (n: number) => {
    const resultPage = page + n;
    if (resultPage >= 0) setPage(resultPage);
  };

  if (isLoadingList) return <div>Loading Pokemon List...</div>;
  if (listError) return <div>Error loading list: {listError.message}</div>;

  console.log('render', pokemonList);
  console.log('search', pokemonData);

  return (
    <div>
      <div>
        <h3>Pokemon:</h3>
        <input value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
        {pokemonError && <div>not found pokemon...</div>}
      </div>

      <h2>Pokemon List:</h2>
      <ul>
        {pokemonList?.results?.map((pokemon: TPokemonData) => (
          <li key={pokemon.name}>
            <button onClick={() => handlePokemonChange(pokemon.name)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </ul>

      {pokemonData && 'name' in pokemonData && (
        <div>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
        </div>
      )}

      <div>
        page: {page}
        <button onClick={() => handlePageChange(-1)}>prev</button>
        <button onClick={() => handlePageChange(1)}>next</button>
      </div>
    </div>
  );
};

export default PageHome;
