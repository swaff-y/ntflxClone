import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: [],
    isFetching: false,
    error: false
};

export const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        displayStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        displayFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        getDisplaySuccess: (state, action) => {
            state.isFetching = false;
            state.collection = action.payload
        },
    }
});

export const { 
    displayStart, 
    displayFailure,
    getDisplaySuccess
  } = displaySlice.actions;

export default displaySlice.reducer;