import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: [],
    isFetching: false,
    error: false
};

export const newSlice = createSlice({
    name: 'newVids',
    initialState,
    reducers: {
        newStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        newFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        getNewSuccess: (state, action) => {
            state.isFetching = false;
            state.collection = action.payload
        },
    }
});

export const { 
    newStart, 
    newFailure,
    getNewSuccess
  } = newSlice.actions;

export default newSlice.reducer;