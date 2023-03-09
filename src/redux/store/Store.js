import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
