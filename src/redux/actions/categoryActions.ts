import api from "@utils/axiosInstance";
import asyncThunkRequest from "@utils/asyncThunkRequest";
import type { CategoryStates } from "@components/Modal/AddEditCategoryModal";

export const getAllCategories = asyncThunkRequest(
  "category/getAllCategories",
  async (queryParams: string) => {
    const response = await api.get(`/category/with/details${queryParams}`);
    console.log("Response data ==>", response.data.data);
    return response?.data?.data;
  }
);

export const createCategory = asyncThunkRequest(
  "category/createCategory",
  async (data: CategoryStates) => {
    const response = await api.post("/category", data);
    return response?.data?.data;
  }
);
