import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

let axiosClient;

const createAxiosClient = (accessToken) => {
  console.log(accessToken);
  axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    // headers: {
    //   // "Content-Type": "application/json",
    //   token: `$eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFN0YWZmIjoxLCJzdGFmZk5hbWUiOiJOZ3V54buFbiBOaMOibiIsImlkUm9sZSI6MSwiaWF0IjoxNjUyNjg2NDIzLCJleHAiOjE2NTI3MTUyMjN9.zWJwLdGcS8LtW0ak5v0w2A-2rrINGOgD2GLyjeo5POo`,
    // },
    paramsSerializer: (params) => queryString.stringify({ ...params }),
  });
  // axiosClient.defaults.headers.common["token"] = accessToken;

  axiosClient.interceptors.request.use(async (config) => config);

  axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data;
      }
      return response;
    },
    (error) => {
      throw error;
    }
  );
};

export { axiosClient, createAxiosClient };
