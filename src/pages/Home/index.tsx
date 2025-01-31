import React, { useState } from 'react';
import { useFetchPokemonQuery, useFetchPokemonListQuery } from '../../store/apiSlice';
import { Box, Button, Input, Typography } from '@mui/material';
import { ModalPokemon } from '../../shared/ui/modal/ModalPokemon';
import { TPokemonData } from '../../shared/types';
import iconBack from '/icons/back.svg';
import { Link } from 'react-router-dom';
import Header from '../../shared/ui/header';
//import { useDispatch } from 'react-redux';
//import { updateHistory } from '../../store/dataSlice';

const PageHome: React.FC = () => {
  /*const dispatch = useDispatch();
  const addPokemonToSlice = (pokemon: TPokemonData) => {
    dispatch(
      updateHistory({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        sprites: pokemon.sprites,
      })
    );
  }*/

  const saveToLocalStorage = (pokemon: TPokemonData) => {
    if (localStorage.pokemonsHistory) {
      const dataPokemons: TPokemonData[] = JSON.parse(localStorage.getItem('pokemonsHistory') || '[]');
      dataPokemons.push(pokemon);
      localStorage.setItem('pokemonsHistory', JSON.stringify(dataPokemons));
    } else {
      localStorage.setItem('pokemonsHistory', JSON.stringify([pokemon]));
    }
  };

  const [pokemonName, setPokemonName] = useState<string>('pikachu');
  const [page, setPage] = useState<number>(0);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { data: pokemonList, error: listError, isLoading: isLoadingList } = useFetchPokemonListQuery(page * 20);
  const { data: pokemonData } = useFetchPokemonQuery(pokemonName);

  const handlePokemonChange = (name: string) => {
    setPokemonName(name);
    handleOpenModal();
    if (pokemonData && 'name' in pokemonData) {
      //addPokemonToSlice(pokemonData);
      saveToLocalStorage(pokemonData);
    }
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
  if (listError) return <div>Error loading list...</div>;

  return (
    <Box>
      <Header />
      <Box  sx={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
      }}>
        <Link to="/"><img src={iconBack} alt="<-" height='30px'/></Link>
        <Input
          sx={{ padding: '5px', fontWeight: '700' }}
          value={pokemonName.toUpperCase()}
          onChange={(e) => setPokemonName(e.target.value)}
        />
  
        {pokemonData && 'name' in pokemonData && (
          <Button variant="contained" color="primary" onClick={handleOpenModal} sx={{marginRight: '40px'}}>
            Show Pokemon Info
          </Button>
        )}
      </Box>

      <Box
        sx={{
          height: 'calc(100vh - 62px)',
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
              '@media (max-width: 768px)': {
                transform: 'none',
              },
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
              <Button
                sx={{ transform: 'rotate(10deg)' }}
                variant="outlined"
                color="secondary"
                onClick={() => handlePageChange(-1)}
              >
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
              <Button
                sx={{ transform: 'rotate(10deg)' }}
                variant="outlined"
                color="secondary"
                onClick={() => handlePageChange(1)}
              >
                next
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {pokemonData && 'name' in pokemonData && (
        <ModalPokemon openModal={openModal} handleCloseModal={handleCloseModal} pokemonData={pokemonData} />
      )}
    </Box>
  );
};

export default PageHome;
