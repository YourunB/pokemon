import { useFetchPokemonQuery } from "../../store/apiSlice";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { TPokemonData } from "../../shared/types";
import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const PageDynamic = () => {
  const { id } = useParams();
  const { data: pokemonData } = useFetchPokemonQuery(id || '');

  console.log(pokemonData)

  return (
    <>
      {pokemonData ? 
        <Box>
          <Typography>Pokemon: {pokemonData.name}</Typography>
          <Typography>Height: {pokemonData.height}</Typography>
          <Typography>Weight: {pokemonData.weight}</Typography>
          <Link to={`https://www.youtube.com/results?search_query=${pokemonData.name}`} target="_blank">Show on Youtube</Link>
        </Box>
       : null}
    </>
  )
}