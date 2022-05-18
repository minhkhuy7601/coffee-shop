import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import staffReducer from "./staffSlice";
import customerReducer from "./customerSlice";

const store = configureStore({
  reducer: {
    staff: staffReducer,
    auth: authReducer,
    customer: customerReducer,
  },
});

export default store;
