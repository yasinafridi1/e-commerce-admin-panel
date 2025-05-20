import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios";
import store from "../store";
import {
  getLocalStorageValue,
  removeTokens,
} from "../../utils/localstorageutil";
import CONSTANTS from "../../constants";
import { forceLogout } from "../slice/authSlice";

import.meta.env.VITE_API_URL;

interface RetryConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const accessToken = getLocalStorageValue(CONSTANTS.accessToken);
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryConfig;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getLocalStorageValue(CONSTANTS.refreshToken);
      if (!refreshToken) {
        removeTokens();
        store.dispatch(forceLogout());
        return Promise.reject(error);
      }

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/refresh`,
          {}
        );
      } catch (_) {
        removeTokens();
        store.dispatch(forceLogout());
        return Promise.reject(error);
      }
    }
  }
);

export default api;

// api.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config as RetryConfig;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       const refreshToken = getRefreshToken();

//       if (!refreshToken) {
//         store.dispatch(forceLogout());
//         return Promise.reject(error);
//       }

//       try {
//         const res = await store.dispatch(refreshSession(refreshToken)).unwrap();
//         originalRequest.headers = {
//           ...originalRequest.headers,
//           Authorization: `Bearer ${res.accessToken}`,
//         };
//         return api(originalRequest);
//       } catch (_) {
//         store.dispatch(forceLogout());
//         return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
