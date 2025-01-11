import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    fetchPokemon: builder.query({
      query: (name: string) => `pokemon/${name}`,
    }),
    fetchPokemonList: builder.query({
      query: (offset = 0, limit = 20) => `pokemon?offset=${offset}&limit=${limit}`,
    }),
  }),
});

export const { useFetchPokemonQuery, useFetchPokemonListQuery } = apiSlice;
