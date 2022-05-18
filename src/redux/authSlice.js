import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
      message: "",
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload.result;
      state.login.error = false;
      state.login.message = action.payload.message;
    },
    loginFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
    logout: (state) => {
      state.login.currentUser = null;
      state.login.isFetching = false;
      state.login.error = false;
      state.login.message = "";
    },
  },
});

export const { loginStart, loginSuccess, loginFailed, logout } =
  authSlice.actions;

export default authSlice.reducer;
