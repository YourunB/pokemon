import { useFetchPokemonQuery } from '../../store/apiSlice';
import { useParams } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import iconYoutube from '/icons/youtube.svg';
import iconGoogle from '/icons/google.svg';
import { TMoveData } from '../../shared/types';
import iconBack from '/icons/back.svg';
import Header from '../../shared/ui/header';
import { Footer } from '../../shared/ui/footer';

const styleBox = { display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap', borderRadius: '5px' };

export const PageDynamic = () => {
  const { id } = useParams();
  const { data: pokemonData } = useFetchPokemonQuery(id || '');

  return (
    <Box sx={{ userSelect: 'none' }}>
      <Header />
      <Link to="/pokemons">
        <img src={iconBack} alt="<-" height="30px" />
      </Link>
      <Box sx={{ minHeight: 'calc(100dvh - 84px)' }}>
        {pokemonData ? (
          <Box>
            <img
              src={pokemonData?.sprites.front_default}
              alt={pokemonData?.name}
              style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }}
            />
            <Box sx={{ ...styleBox, justifyContent: 'center' }}>
              <Link to={`https://www.youtube.com/results?search_query=${pokemonData.name}`} target="_blank">
                <img src={iconYoutube} alt="Youtube" width="30px" />
              </Link>
              <Link to={`https://www.google.com/search?q=pokemon ${pokemonData.name}`}>
                <img src={iconGoogle} alt="Google" width="30px" />
              </Link>
              <Typography variant="h4">{pokemonData.name.toUpperCase()}</Typography>
            </Box>
            <Typography textAlign={'center'}>
              Height: {pokemonData.height} Weight: {pokemonData.weight}
            </Typography>
            <Typography variant="h4">Moves</Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {pokemonData.moves.map((v: TMoveData, i: number) => {
                return (
                  <Box key={i} sx={{ ...styleBox, padding: '10px' }}>
                    <Link
                      key={i}
                      to={`https://www.youtube.com/results?search_query=pokemon ${v.move.name}`}
                      target="_blank"
                    >
                      <img src={iconYoutube} alt="Youtube" width="30px" />
                    </Link>
                    <Link to={`https://www.google.com/search?q=pokemon ${v.move.name}`} target="_blank">
                      <img src={iconGoogle} alt="Google" width="30px" />
                    </Link>
                    {v.move.name.toUpperCase()}
                  </Box>
                );
              })}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
              No such Pokemon was found.
              <Link to="/pokemons">
                <Box>
                  <Button variant="contained" color="primary">
                    Back
                  </Button>
                </Box>
              </Link>
            </Typography>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};
