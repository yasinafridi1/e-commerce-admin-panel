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
