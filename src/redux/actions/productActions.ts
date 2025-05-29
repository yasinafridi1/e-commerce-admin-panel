import type { AddEditProductState } from "@customTypes/index";
import asyncThunkRequest from "@utils/asyncThunkRequest";
import api from "@utils/axiosInstance";
import { formatProductFormData } from "@utils/formatter";

export const addProduct = asyncThunkRequest(
  "product/addProduct",
  async (data: AddEditProductState) => {
    const { imageArr, structuredVariants } = formatProductFormData(data);
    const formData = new FormData();
    formData.append("productName", data.productName);
    formData.append("price", String(data.price));
    formData.append("productType", data.productType);
    formData.append("categoryId", data.categoryId);
    formData.append("status", data.status);
    formData.append("variants", JSON.stringify(structuredVariants));
    imageArr.forEach((image: File) => {
      formData.append("images", image);
    });

    const response = await api.post("/products", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log("Response", response.data);

    return response;
  }
);
