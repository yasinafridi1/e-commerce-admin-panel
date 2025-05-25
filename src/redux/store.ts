import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@redux/slice/authSlice";
import { attachStore } from "@utils/axiosInstance";
import customerSlice from "@redux/slice/customerSlice";
import categorySlice from "./slice/categorySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    customer: customerSlice,
    categories: categorySlice,
  },
});
attachStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
