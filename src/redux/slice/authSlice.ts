import type { AuthState } from "@customTypes/index";
import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/authActions";

const initialState: AuthState = {
  isLoggedIn: false,
  data: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    forceLogout: (state) => {
      state.isLoggedIn = false;
      state.data = null;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.data = payload.adminData;
      })
      .addCase(login.rejected, (state, { payload, error }) => {
        state.isLoading = false;
        state.error =
          (payload as string | undefined) ??
          error?.message ??
          "Something went wrong";
      });
  },
});

export const { forceLogout } = authSlice.actions;
export default authSlice.reducer;
