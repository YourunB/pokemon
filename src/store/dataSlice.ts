import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pokemons: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateHistory: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const { updateHistory } = dataSlice.actions;

export default dataSlice.reducer;