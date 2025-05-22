import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios";
import { getLocalStorageValue, removeTokens } from "@utils/localstorageutil";
import CONSTANTS from "@constants/index";
import { forceLogout } from "@redux/slice/authSlice";

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

export const attachStore = (
  store: import("@reduxjs/toolkit").EnhancedStore
) => {
  /** ───── Request ───── */
  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getLocalStorageValue(CONSTANTS.accessToken);
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  /** ───── Response ───── */
  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const original = error.config as RetryConfig;
      if (error.response?.status === 401 && !original._retry) {
        original._retry = true;

        const refresh = getLocalStorageValue(CONSTANTS.refreshToken);
        if (!refresh) {
          removeTokens();
          store.dispatch(forceLogout());
          return Promise.reject(error);
        }

        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/auth/refresh`,
            {},
            { withCredentials: true }
          );
          // write new tokens to storage…
          original.headers = {
            ...original.headers,
            Authorization: `Bearer ${data.accessToken}`,
          };
          return api(original); // retry original call
        } catch {
          removeTokens();
          store.dispatch(forceLogout());
        }
      }
      return Promise.reject(error);
    }
  );
};

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
