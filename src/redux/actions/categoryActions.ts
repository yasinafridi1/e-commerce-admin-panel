import api from "@utils/axiosInstance";
import asyncThunkRequest from "@utils/asyncThunkRequest";
import type { CategoryStates } from "@components/Modal/AddEditCategoryModal";
import { successToast } from "@utils/toasterUtil";

export const getAllCategories = asyncThunkRequest(
  "category/getAllCategories",
  async (queryParams: string) => {
    const response = await api.get(`/category/with/details${queryParams}`);
    return response?.data?.data;
  }
);

export const createCategory = asyncThunkRequest(
  "category/createCategory",
  async (data: CategoryStates) => {
    const response = await api.post("/category", data);
    successToast("Category added successfully");
    return response?.data?.data;
  }
);

export const deleteCategory = asyncThunkRequest(
  "category/deleteCategory",
  async (id: number) => {
    const response = await api.delete(`/category/${id}`);
    successToast("Category deleted successfully");
    return response?.data?.data;
  }
);

export const updateCategory = asyncThunkRequest(
  "category/updateCategory",
  async (data: { categoryId: number; title: string }) => {
    const { categoryId, title } = data;
    const response = await api.patch(`/category/${categoryId}`, { title });
    successToast("Category updated successfully");
    return response?.data?.data;
  }
);
