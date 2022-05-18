import { createSlice } from "@reduxjs/toolkit";

const staffSlice = createSlice({
  name: "staff",
  initialState: {
    listStaff: null,
    isFetching: true,
    error: false,
    idStaffSelected: null,
  },
  reducers: {
    getListStaffStart: (state) => {
      state.isFetching = true;
    },
    getListStaffSuccess: (state, action) => {
      state.isFetching = false;
      state.listStaff = action.payload;
      state.error = false;
    },
    getListStaffFailed: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    selectStaff: (state, action) => {
      state.idStaffSelected = action.payload;
    },
  },
});

export const {
  getListStaffStart,
  getListStaffSuccess,
  getListStaffFailed,
  selectStaff,
} = staffSlice.actions;

export default staffSlice.reducer;
