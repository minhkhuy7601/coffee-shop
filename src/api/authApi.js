import {
  loginFailed,
  loginStart,
  loginSuccess,
  logout,
} from "../redux/authSlice";
import apiConfig from "./apiConfig";
import axios from "axios";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  const url = apiConfig.baseUrl + "login";
  try {
    const res = await axios.post(url, user);
    dispatch(loginSuccess(res.data));
    if (res.data.message === "SUCCESSFUL") {
      navigate("/");
    }
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const logoutUser = (dispatch, navigate) => {
  dispatch(logout());
  navigate("/login");
};
