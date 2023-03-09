import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ApiKey} from '../../Utils/ApiKey';

const initialState = {
  movies: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async categorie => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${categorie}?api_key=${ApiKey}&&page=1`,
    );
    return response.data.results;
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
