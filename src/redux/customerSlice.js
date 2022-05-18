import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    listCustomer: null,
    isFetching: true,
    error: false,
    idCustomerSelected: null,
  },
  reducers: {
    getListCustomerStart: (state) => {
      state.isFetching = true;
    },
    getListCustomerSuccess: (state, action) => {
      state.isFetching = false;
      state.listCustomer = action.payload;
      state.error = false;
    },
    getListCustomerFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    selectCustomer: (state, action) => {
      state.idCustomerSelected = action.payload;
    },
  },
});

export const {
  getListCustomerStart,
  getListCustomerSuccess,
  getListCustomerFailed,
  selectCustomer,
} = customerSlice.actions;

export default customerSlice.reducer;
