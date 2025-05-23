import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@redux/slice/authSlice";
import { attachStore } from "@utils/axiosInstance";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
attachStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
