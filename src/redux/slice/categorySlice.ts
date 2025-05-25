import type { CategoryState } from "@customTypes/index";
import {
  createCategory,
  getAllCategories,
} from "@redux/actions/categoryActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CategoryState = {
  isLoading: false,
  error: null,
  data: [],
  page: 1,
  limit: 10,
  totalPages: 0,
  totalRecords: 0,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.data = payload.categories;
        state.page = payload.currentPage;
        state.limit = payload.limit;
        state.totalPages = payload.totalPages;
        state.totalRecords = payload.totalRecords;
      })
      .addCase(getAllCategories.rejected, (state, { payload, error }) => {
        state.isLoading = false;
        state.error =
          (payload as string | undefined) ??
          error?.message ??
          "Something went wrong";
      })
      .addCase(createCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = [payload, ...state.data];
      })
      .addCase(createCategory.rejected, (state, { payload, error }) => {
        state.isLoading = false;
        state.error =
          (payload as string | undefined) ??
          error?.message ??
          "Something went wrong";
      });
  },
});

export default categorySlice.reducer;
