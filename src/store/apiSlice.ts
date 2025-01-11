import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    fetchPokemon: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    fetchPokemonList: builder.query({
      query: (limit = 20, offset = 0) => `pokemon?limit=${limit}&offset=${offset}`,
    }),
  }),
});

export const { useFetchPokemonQuery, useFetchPokemonListQuery } = apiSlice;
