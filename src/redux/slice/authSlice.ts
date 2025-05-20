import type { AuthState } from "@customTypes/index";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isLoggedIn: true,
  data: {
    role: "ADMIN",
    id: "1",
    name: "John Doe",
    email: "john@gmail.com",
    image: "https://example.com/image.jpg",
  },
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
});

export const { forceLogout } = authSlice.actions;
export default authSlice.reducer;
