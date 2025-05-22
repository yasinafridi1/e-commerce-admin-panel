import type { LoginInitialState } from "@customTypes/index";
import api from "@utils/axiosInstance";
import asyncThunkRequest from "@utils/asyncThunkRequest";
import { storeTokens } from "@utils/localstorageutil";

export const login = asyncThunkRequest(
  "auth/login",
  async (body: LoginInitialState) => {
    const response = await api.post("/admin/login", body);
    console.log("Response.data --->", response?.data);
    storeTokens(response?.data?.data);
    return response?.data?.data;
  }
);
