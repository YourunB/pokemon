import React, { useState } from 'react';
import { useFetchPokemonQuery, useFetchPokemonListQuery } from '../../store/apiSlice';

import { Modal, Box, Button, Input, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#000',
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
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { data: pokemonList, error: listError, isLoading: isLoadingList } = useFetchPokemonListQuery(page * 20);
  const { data: pokemonData, error: pokemonError, isLoading: isLoadingPokemon } = useFetchPokemonQuery(pokemonName);

  const handlePokemonChange = (name: string) => {
    setPokemonName(name);
    handleOpenModal();
  };

  const handlePageChange = (n: number) => {
    const resultPage = page + n;
    if (resultPage >= 0) setPage(resultPage);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  if (isLoadingList) return <div>Loading Pokemon List...</div>;
  if (listError) return <div>Error loading list: {listError.message}</div>;

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Input sx={{padding: '5px'}} value={pokemonName} onChange={(e) => setPokemonName(e.target.value)} />

        {pokemonData && 'name' in pokemonData && (
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Show Pokemon Info
          </Button>
        )}

          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
          <Box>         
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              marginBottom: 4,
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            POKEMONS
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(-10deg)',
              overflow: 'hidden',
              padding: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 2,
              }}
            >
              <Button sx={{ transform: 'rotate(10deg)' }} variant="outlined" color="secondary" onClick={() => handlePageChange(-1)}>
                prev
              </Button>
              {pokemonList?.results?.map((pokemon: TPokemonData) => (
                <Button
                  key={pokemon.name}
                  variant="text"
                  color="secondary"
                  onClick={() => handlePokemonChange(pokemon.name)}
                  sx={{
                    transform: 'rotate(10deg)',
                    fontSize: '1.2rem',
                    padding: '12px 20px',
                  }}
                >
                  {pokemon.name}
                </Button>
              ))}
              <Button sx={{ transform: 'rotate(10deg)' }} variant="outlined" color="secondary" onClick={() => handlePageChange(1)}>
                next
              </Button>
            </Box>
          </Box>
          </Box>
        </Box>

        {pokemonData && 'name' in pokemonData && (
          <Modal open={openModal} onClose={handleCloseModal}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                padding: 3,
                borderRadius: 2,
                boxShadow: 24,
              }}
            >
              <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
                {pokemonData?.name.toUpperCase()}
              </Typography>
              <img src={pokemonData?.sprites.front_default} alt={pokemonData?.name} style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }} />
              <Typography sx={{ marginTop: 2 }}>Height: {pokemonData?.height}</Typography>
              <Typography>Weight: {pokemonData?.weight}</Typography>
              <Box sx={{ textAlign: 'center', marginTop: 3 }}>
                <Button variant="contained" color="primary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Box>
            </Box>
          </Modal>
          )}
      </ThemeProvider>
    </Box>
  );
};

export default PageHome;
