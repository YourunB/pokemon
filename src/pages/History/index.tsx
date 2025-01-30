import { TPokemonData } from "../../shared/types";
import { Box, Button, Typography } from '@mui/material';
//import { useSelector } from "react-redux";

const PageHistory = () => {
  //const dataReduxHistory = useSelector((state) => state.dataSlice.pokemons);
  //localStorage.setItem('pokemonsHistory', JSON.stringify(dataReduxHistory));
  const dataPokemons: TPokemonData[] = JSON.parse(localStorage.getItem('pokemonsHistory'));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
      }}
    >
      {dataPokemons.map((pokemon, i) => {
        return (
          <Box
            sx={{
              width: '200px',
              backgroundColor: 'white',
              padding: 3,
              borderRadius: 2,
              boxShadow: 24,
            }}
            key={i}
          >
          <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
            {pokemon?.name.toUpperCase()}
          </Typography>
          <img src={pokemon?.sprites.front_default} alt={pokemon?.name} style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }} />
          <Typography sx={{ marginTop: 2 }}>Height: {pokemon?.height}</Typography>
          <Typography>Weight: {pokemon?.weight}</Typography>
        <Box sx={{ textAlign: 'center', marginTop: 3 }}>
          <Button variant="contained" color="primary">
            Delete
          </Button>
        </Box>
          </Box>
        )
      })}
    </Box>
  );
};

export default PageHistory;
