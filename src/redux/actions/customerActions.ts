import api from "@utils/axiosInstance";
import asyncThunkRequest from "@utils/asyncThunkRequest";

export const getAllCustomers = asyncThunkRequest(
  "customer/getAllCustomers",
  async (queryParams: string) => {
    const response = await api.get(
      `/admin/customer${queryParams}`,
    );
    return response?.data?.data;
  },
);
