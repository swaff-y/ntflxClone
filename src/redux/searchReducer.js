import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: [],
    isFetching: false,
    error: false
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        searchFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        getSearchSuccess: (state, action) => {
            state.isFetching = false;
            state.collection = action.payload
        },
    }
});

export const { 
    searchStart, 
    searchFailure,
    getSearchSuccess
  } = searchSlice.actions;

export default searchSlice.reducer;