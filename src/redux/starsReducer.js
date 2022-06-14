import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: [],
    isFetching: false,
    error: false
};

export const starsSlice = createSlice({
    name: 'stars',
    initialState,
    reducers: {
        starsStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        starsFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        getStarsSuccess: (state, action) => {
            state.isFetching = false;
            state.collection = action.payload
        },
    }
});

export const { 
    starsStart, 
    starsFailure,
    getStarsSuccess
  } = starsSlice.actions;

export default starsSlice.reducer;