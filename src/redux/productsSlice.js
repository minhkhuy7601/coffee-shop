import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    isFetching: false,
    error: false,
    listProduct: [],
  },
  reducers: {
    getProductsStart: (state) => {
      state.login.isFetching = true;
    },
    getProductsSuccess: (state, action) => {
      state.login.isFetching = false;
      state.login.listProduct = action.payload;
      state.login.error = false;
    },
    getProductsFailed: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },
  },
});

export const { getProductsStart, getProductsSuccess, getProductsFailed } =
  productsSlice.actions;

export default productsSlice.reducer;
