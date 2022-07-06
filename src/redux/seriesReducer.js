import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    collection: [],
    isFetching: false,
    error: false
};

export const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        seriesStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        seriesFailure: (state) => {
            state.isFetching = false;
            state.error = true
        },
        getSeriesSuccess: (state, action) => {
            state.isFetching = false;
            state.collection = action.payload
        },
    }
});

export const { 
    seriesStart, 
    seriesFailure,
    getSeriesSuccess
  } = seriesSlice.actions;

export default seriesSlice.reducer;