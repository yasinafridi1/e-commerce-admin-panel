import * as Yup from "yup";

const stringValidation = (message = "Field is required") =>
  Yup.string().required(message);

/** Helper: image must exist & be a valid image‑type */
const imageValidation = Yup.mixed<File>()
  .required("Image is required") // but require on submit
  .test(
    "fileFormat",
    "Only JPEG, PNG, WEBP images are allowed",
    (file) =>
      !!file && ["image/jpeg", "image/png", "image/webp"].includes(file.type)
  )
  .test(
    "fileSize",
    "Image must be ≤ 2 MB",
    (file) => !!file && file.size <= 2 * 1024 * 1024
  );

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
  variants: Yup.array()
    .of(
      Yup.object({
        colorName: stringValidation("Color name is required"),
        colorCode: stringValidation("Color code is required"),
        sizes: Yup.array()
          .of(
            Yup.object({
              size: stringValidation("Product size is required"),
              stock: Yup.number().min(1, "Stock must be greater than 0"),
              image: imageValidation,
            })
          )
          .min(1, "Please add atleast one size of product")
          .required(),
      })
    )
    .min(1, "At least 1 variant is required")
    .required(),
});
