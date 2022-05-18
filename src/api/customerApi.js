import { axiosClient } from "./axiosClient";
import axios from "axios";
import apiConfig from "./apiConfig";
import {
  getListCustomerStart,
  getListCustomerSuccess,
  getListCustomerFailed,
  selectCustomer,
} from "../redux/customerSlice";

const url = "api/customer";

const cusotmerApi = {
  getListCustomer: async (dispatch, accessToken) => {
    dispatch(getListCustomerStart());
    try {
      const res = await axios.get(`${apiConfig.baseUrl + url}`, {
        headers: {
          token: `${accessToken}`,
        },
      });
      dispatch(getListCustomerSuccess(res.data.result));
      if (res.data.result) {
        let id = res.data.result[0].idCustomer;
        dispatch(selectCustomer(id));
      }
    } catch (err) {
      dispatch(getListCustomerFailed());
    }
  },

  selectCustomerRequest: (dispatch, id) => {
    dispatch(selectCustomer(id));
  },
};

export default cusotmerApi;
