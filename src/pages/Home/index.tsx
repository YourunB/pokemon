import React, { useState } from 'react';
import { useFetchPokemonQuery, useFetchPokemonListQuery } from '../../store/apiSlice';

import { Box, Button, Input, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

type TPokemonData = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
};

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
    <Box>
      <ThemeProvider theme={theme}>
        <div>
          <Typography>POKEMON:</Typography>
          <Input value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />
          {pokemonError && <div>not found pokemon...</div>}
        </div>

        <Typography>POKEMONS:</Typography>
        {pokemonList?.results?.map((pokemon: TPokemonData) => (
          <Button variant="outlined" color="secondary" onClick={() => handlePokemonChange(pokemon.name)}>
            {pokemon.name}
          </Button>
        ))}

        {pokemonData && 'name' in pokemonData && (
          <div>
            <Typography>{pokemonData.name}</Typography>
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <Typography>Height: {pokemonData.height}</Typography>
            <Typography>Weight: {pokemonData.weight}</Typography>
          </div>
        )}

        <div>
          page: {page + 1}
          <Button variant="contained" color="primary" onClick={() => handlePageChange(-1)}>
            prev
          </Button>
          <Button variant="contained" color="primary" onClick={() => handlePageChange(1)}>
            next
          </Button>
        </div>
      </ThemeProvider>
    </Box>
  );
};

export default PageHome;
