import { createSlice } from '@reduxjs/toolkit';
import { TPokemonData } from '../shared/types';

const initialState = {
  pokemons: [] as TPokemonData[],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateHistory: (state, action) => {
      state.pokemons.push(action.payload)
    },
  },
});

export const { updateHistory } = dataSlice.actions;

export default dataSlice.reducer;