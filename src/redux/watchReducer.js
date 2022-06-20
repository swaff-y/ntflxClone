import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: [],
    isFetching: false,
    error: false
};

export const watchSlice = createSlice({
    name: 'watch',
    initialState,
    reducers: {
        watchStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        watchFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        getWatchSuccess: (state, action) => {
            state.isFetching = false;
            state.collection = action.payload
        }
    }
});

export const { 
    watchStart, 
    watchFailure,
    getWatchSuccess
  } = watchSlice.actions;

export default watchSlice.reducer;