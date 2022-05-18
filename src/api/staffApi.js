import { axiosClient } from "./axiosClient";
import axios from "axios";
import apiConfig from "./apiConfig";
import {
  getListStaffStart,
  getListStaffSuccess,
  getListStaffFailed,
  selectStaff,
} from "../redux/staffSlice";

const url = "api/staff";

const staffApi = {
  getListStaff: async (dispatch, accessToken) => {
    dispatch(getListStaffStart());
    try {
      const res = await axios.get(`${apiConfig.baseUrl + url}`, {
        headers: {
          token: `${accessToken}`,
        },
      });
      dispatch(getListStaffSuccess(res.data.result));
      if (res.data.result) {
        let id = res.data.result[0].idStaff;
        dispatch(selectStaff(id));
      }
    } catch (err) {
      dispatch(getListStaffFailed());
    }
  },

  selectStaffRequest: (dispatch, id) => {
    dispatch(selectStaff(id));
  },
};

export default staffApi;
