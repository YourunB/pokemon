import { TPokemonData } from "../../shared/types";
import { Box } from '@mui/material';
import { CardPokemon } from "./CardPokemon";
import { useEffect, useState } from "react";
//import { useSelector } from "react-redux";

const PageHistory = () => {
  const [dataPokemons, setDataPokemons] = useState([])
  //const dataReduxHistory = useSelector((state) => state.dataSlice.pokemons);
  //localStorage.setItem('pokemonsHistory', JSON.stringify(dataReduxHistory));
  const updateHistory = () => {
    const data: TPokemonData[] = JSON.parse(localStorage.getItem('pokemonsHistory'));
    if (data) setDataPokemons(data)
  }

  useEffect(() => {
    updateHistory()
  }, [])

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
          <CardPokemon pokemon={pokemon} updateHistory={updateHistory} key={i}/>
        )
      })}
    </Box>
  );
};

export default PageHistory;
