// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './exampleSlice'; // Replace with your actual slice

const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;