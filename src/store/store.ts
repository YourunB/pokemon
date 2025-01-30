import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import { dataSlice } from './dataSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [dataSlice.reducerPath]: dataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
