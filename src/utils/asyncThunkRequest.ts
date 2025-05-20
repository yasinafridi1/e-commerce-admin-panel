import { createAsyncThunk } from "@reduxjs/toolkit";

function asyncThunkRequest<Returend, ThunkArg = void>(
  typePrefix: string,
  asyncFunction: (arg: ThunkArg) => Promise<Returend>
) {
  return createAsyncThunk<Returend, ThunkArg>(
    typePrefix,
    async (arg, { rejectWithValue }) => {
      try {
        return await asyncFunction(arg);
      } catch (err: any) {
        console.log("Error ==>", err);
        return rejectWithValue(err.response?.data || "Something went wrong");
      }
    }
  );
}
