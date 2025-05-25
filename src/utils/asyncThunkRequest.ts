import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorToast } from "./toasterUtil";

function asyncThunkRequest<Returned, ThunkArg = void>(
  typePrefix: string,
  callback: (args: ThunkArg) => Promise<Returned>
) {
  return createAsyncThunk<Returned, ThunkArg>(
    typePrefix,
    async (args, { rejectWithValue }) => {
      try {
        const result = await callback(args);
        return result;
      } catch (err: any) {
        errorToast(
          err?.response?.data?.message || err || "Something went wrong"
        );
        return rejectWithValue(
          err?.response?.data?.message || err.message || "Something went wrong"
        );
      }
    }
  );
}

export default asyncThunkRequest;
