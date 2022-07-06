import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: [],
    isFetching: false,
    error: false
};

export const popularSlice = createSlice({
    name: 'popular',
    initialState,
    reducers: {
        popularStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        popularFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        getPopularSuccess: (state, action) => {
            state.isFetching = false;
            state.collection = action.payload
        },
    }
});

export const { 
    popularStart, 
    popularFailure,
    getPopularSuccess
  } = popularSlice.actions;

export default popularSlice.reducer;