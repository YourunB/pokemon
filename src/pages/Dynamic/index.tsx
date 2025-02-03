import { useFetchPokemonQuery } from "../../store/apiSlice";
import { useParams } from 'react-router-dom';
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import iconYoutube from '/icons/youtube.svg';
import iconGoogle from '/icons/google.svg';
import { TPokemonData, TMoveData } from "../../shared/types";

const styleBox = {display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap', borderRadius: '5px'}

export const PageDynamic = () => {
  const { id } = useParams();
  const { data: pokemonData } = useFetchPokemonQuery(id || '');

  console.log(pokemonData)

  return (
    <>
      {pokemonData ? 
        <Box>
          <img
            src={pokemonData?.sprites.front_default}
            alt={pokemonData?.name}
            style={{ width: '100px', height: '100px', display: 'block', margin: '0 auto' }}
          />
          <Box sx={{...styleBox, justifyContent: 'center'}}>
            <Link to={`https://www.youtube.com/results?search_query=${pokemonData.name}`} target="_blank">
              <img src={iconYoutube} alt='Youtube' width='30px' />
            </Link>
            <Link to={`https://www.google.com/search?q=pokemon ${pokemonData.name}`}>
              <img src={iconGoogle} alt="Google" width='30px' />
            </Link>
            <Typography variant="h4">{pokemonData.name.toUpperCase()}</Typography>
          </Box>
          <Typography textAlign={'center'}>Height: {pokemonData.height} Weight: {pokemonData.weight}</Typography>
          <Typography variant="h4">Moves</Typography>
          <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
            {pokemonData.moves.map((v: TMoveData, i: number) => {
              return (
                <Box key={i} sx={{...styleBox, padding: '10px'}}>
                  <Link key={i} to={`https://www.youtube.com/results?search_query=pokemon ${v.move.name}`} target="_blank">
                    <img src={iconYoutube} alt='Youtube' width='30px' />
                  </Link>
                  <Link to={`https://www.google.com/search?q=pokemon ${v.move.name}`} target="_blank">
                    <img src={iconGoogle} alt="Google" width='30px' />
                  </Link>
                  {v.move.name.toUpperCase()}
                </Box>
              )
            })}
          </Box>
        </Box>
       : null}
    </>
  )
}