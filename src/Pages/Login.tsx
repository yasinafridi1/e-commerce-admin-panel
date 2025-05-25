import { loginSchema } from "@validations";
import ButtonLoader from "@components/Buttons/ButtonLoader";
import ButtonPrimary from "@components/Buttons/ButtonPrimary";
import PasswordInput from "@components/Inputs/PasswordInput";
import TextInput from "@components/Inputs/TextInput";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import type { LoginInitialState } from "@customTypes/index";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import type {
  AppDispatch,
  RootState,
} from "@redux/store";
import { login } from "@redux/actions/authActions";

const Login: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector(
    (state: RootState) => state.auth,
  );
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik<LoginInitialState>({
    initialValues: {
      email: "yaseenafridi10875@gmail.com",
      password: "Admin@85Ecommerce",
      fcmToken: "hjashjajsjhajhsahj",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  return (
    <div className="dark:bg-boxdark flex h-screen w-screen items-center justify-center">
      <div className="w-[90%] rounded-md bg-white px-4 py-8 sm:w-[65%] xl:w-[35%]">
        <div className="flex items-center justify-center border-b-[1.5px] border-gray-400 pb-4">
          <h1 className="poppins-700 text-4xl">
            Login
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex w-full flex-col items-center justify-start py-5"
        >
          <TextInput
            name="email"
            type="email"
            label="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={errors?.email}
            touch={touched?.email}
            placeHolder="Email Address"
          />
          <PasswordInput
            name="password"
            label="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={errors?.password}
            touch={touched?.password}
            placeHolder="Password"
          />
          <div className="mt-3 flex w-[90%] items-center justify-end">
            <Link
              to="/forget-password"
              className="text-primary hover:text-primary-light text-sm transition-all duration-500 ease-in-out"
            >
              Forgot Password ?
            </Link>
          </div>
          <div className="flex w-[90%]">
            {isLoading ? (
              <ButtonLoader />
            ) : (
              <ButtonPrimary text="Login" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
