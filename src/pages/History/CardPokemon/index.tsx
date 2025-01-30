import { TPokemonData } from '../../../shared/types';
import { Box, Button, Typography } from '@mui/material';

type PokemonProps = {
  pokemon: TPokemonData;
  updateHistory: () => void;
};

export const CardPokemon = ({ pokemon, updateHistory }: PokemonProps) => {
  const deletePokemon = () => {
    const dataPokemons: TPokemonData[] = JSON.parse(localStorage.getItem('pokemonsHistory'));
    const filteredDataPokemons = dataPokemons.filter((el) => el.id != pokemon.id);
    localStorage.setItem('pokemonsHistory', JSON.stringify(filteredDataPokemons));
    updateHistory();
  };

  return (
    <Box
      sx={{
        width: '200px',
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 2,
        boxShadow: 24,
      }}
      key={pokemon.id}
    >
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
        {pokemon?.name.toUpperCase()}
      </Typography>
      <img
        src={pokemon?.sprites.front_default}
        alt={pokemon?.name}
        style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }}
      />
      <Typography sx={{ marginTop: 2 }}>Height: {pokemon?.height}</Typography>
      <Typography>Weight: {pokemon?.weight}</Typography>
      <Box sx={{ textAlign: 'center', marginTop: 3 }}>
        <Button variant="contained" color="primary" onClick={deletePokemon}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};
