import type { CustomerState } from "@customTypes/index";
import { createSlice } from "@reduxjs/toolkit";
import { getAllCustomers } from "@redux/actions/customerActions";

const initialState: CustomerState = {
  data: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 25,
  totalPages: 0,
  totalRecords: 0,
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getAllCustomers.pending,
        (state) => {
          state.isLoading = true;
          state.error = null;
        },
      )
      .addCase(
        getAllCustomers.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.data = payload?.users || [];
          state.page = payload?.currentPage;
          state.limit = payload?.limit;
          state.totalPages = payload?.totalPages;
          state.totalRecords =
            payload?.totalRecords;
        },
      )
      .addCase(
        getAllCustomers.rejected,
        (state, { payload, error }) => {
          state.isLoading = false;
          state.error =
            (payload as string | undefined) ??
            error?.message ??
            "Something went wrong";
        },
      );
  },
});

export default customerSlice.reducer;
