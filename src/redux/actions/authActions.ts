import type { LoginInitialState } from "@customTypes/index";
import api from "@utils/axiosInstance";
import asyncThunkRequest from "@utils/asyncThunkRequest";
import { getLocalStorageValue, storeTokens } from "@utils/localstorageutil";
import CONSTANTS from "@constants/index";

export const login = asyncThunkRequest(
  "auth/login",
  async (body: LoginInitialState) => {
    const response = await api.post("/admin/login", body);
    storeTokens(response?.data?.data);
    return response?.data?.data;
  }
);

export const refreshSession = asyncThunkRequest(
  "auth/refreshSession",
  async () => {
    const refreshToken = getLocalStorageValue(CONSTANTS.refreshToken);
    const response = await api.post("/auth/refresh", {
      refreshToken,
    });
    storeTokens(response?.data?.data);
    return response?.data?.data;
  }
);
