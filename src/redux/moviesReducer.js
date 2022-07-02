import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: [],
    isFetching: false,
    error: false
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        moviesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        moviesFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        getMoviesSuccess: (state, action) => {
            state.isFetching = false;
            state.collection = action.payload
        },
    }
});

export const { 
    moviesStart, 
    moviesFailure,
    getMoviesSuccess
  } = moviesSlice.actions;

export default moviesSlice.reducer;