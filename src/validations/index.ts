import * as Yup from "yup";

const stringValidation = (message = "Field is required") =>
  Yup.string().required(message);

export const loginSchema = Yup.object({
  email: stringValidation()
    .email()
    .max(60, "Email must be less than 60 characters"),
  password: stringValidation(),
});

export const categorySchema = Yup.object({
  title: stringValidation("Title is required"),
});

export const productSchema = Yup.object({
  productName: stringValidation("Product Name is required")
    .min(2, "Product name must be atleast 2 character")
    .max(80, "Product name must not exceed 80 characters"),
  price: Yup.number()
    .required("Price is required")
    .min(1, "Price must be greater than 0"),
  status: stringValidation("Status is required"),
  productType: stringValidation("Type is required"),
  categoryId: stringValidation("Category is required"),
});
