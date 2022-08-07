import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { 
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentState = null;
        },
        //start and failure
        userStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        userFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
            state.msg = action.payload
        },
        //Get All
        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload
        },
        //Delete
        deleteUserSuccess: (state, action) => {
            let idx = state.users.findIndex((item)=>item._id === action.payload);
            state.isFetching = false;
            state.users.splice(idx,1);
        },
        //Update
        updateUserSuccess: (state, action) => {
            let idx = state.users.findIndex((item)=>item._id === action.payload);
            state.isFetching = false;
            state.users[idx] = action.payload.User
        },
        //Add
        addUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.push(action.payload)
        }
    }
});

export const { 
    loginStart, 
    loginSuccess, 
    loginFailure,
    userStart, 
    userFailure, 
    getUserSuccess, 
    deleteUserSuccess,
    updateUserSuccess,
    addUserSuccess
} = userSlice.actions;
export default userSlice.reducer