import { createSlice } from '@reduxjs/toolkit';
// Creating global Redux state object with create slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        token: null,
        data: null,
        isFetching: false,
        error: false,
    },
    reducers: { // Reducers are actions that are dispatched in order to update the app's global state
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, payload) => {
            state.isFetching = false;
            state.currentUser = payload;
        },
        loginToken: (state, payload) => {
            state.isFetching = false;
            state.token = payload;
        },
        loginData: (state, payload) => {
            state.isFetching = false;
            state.data = payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.data = null;
            state.token = null;
            state.isFetching = false;
            state.error = false;
        },
    },
});

export const {
    loginStart,
    resetEmailStart,
    loginSuccess,
    loginFailure,
    loginToken,
    loginData,
    logout,
} = userSlice.actions;
export default userSlice.reducer;
