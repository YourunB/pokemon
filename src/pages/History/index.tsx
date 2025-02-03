import { TPokemonData } from '../../shared/types';
import { Box, Typography, Button } from '@mui/material';
import { CardPokemon } from './CardPokemon';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconBack from '/icons/back.svg';
import Header from '../../shared/ui/header';
import { Footer } from '../../shared/ui/footer';
//import { useSelector } from "react-redux";

const PageHistory = () => {
  const [dataPokemons, setDataPokemons] = useState<TPokemonData[] | []>([]);
  //const dataReduxHistory = useSelector((state) => state.dataSlice.pokemons);
  //localStorage.setItem('pokemonsHistory', JSON.stringify(dataReduxHistory));
  const updateHistory = () => {
    const data: TPokemonData[] | [] = JSON.parse(localStorage.getItem('pokemonsHistory') || '[]');
    if (data) setDataPokemons(data);
  };

  useEffect(() => {
    updateHistory();
  }, []);

  return (
    <Box sx={{ userSelect: 'none' }}>
      <Header />
      <Link to="/pokemons">
        <img src={iconBack} alt="<-" height="30px" />
      </Link>
      <Box
        sx={{
          minHeight: 'calc(100vh - 84px)',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {dataPokemons.length > 0 ? (
            dataPokemons.map((pokemon, i) => {
              return <CardPokemon pokemon={pokemon} updateHistory={updateHistory} key={i} />;
            })
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
                You don't have a history of Pokemon views.
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
      </Box>

      <Footer />
    </Box>
  );
};

export default PageHistory;
