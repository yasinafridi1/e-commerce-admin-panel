import { loginSchema } from "@validations";
import ButtonLoader from "@components/Buttons/ButtonLoader";
import ButtonPrimary from "@components/Buttons/ButtonPrimary";
import PasswordInput from "@components/Inputs/PasswordInput";
import TextInput from "@components/Inputs/TextInput";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import type { LoginInitialState } from "@customTypes/index";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@redux/store";
import { login } from "@redux/actions/authActions";

const Login: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const { isLoading } = useSelector((state: RootState) => state.auth)
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik<LoginInitialState>({
        initialValues: {
            email: "yaseenafridi10875@gmail.com",
            password: "Admin@85Ecommerce",
            fcmToken: "hjashjajsjhajhsahj",
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(login(values));
        }
    })
    return (
        <div className="w-screen h-screen flex justify-center items-center dark:bg-boxdark">
            <div className="px-4 py-8 bg-white rounded-md w-[90%] sm:w-[65%] xl:w-[35%]">
                <div className="flex justify-center items-center pb-4 border-b-[1.5px] border-gray-400">
                    <h1 className="poppins-700 text-4xl">Login</h1>
                </div>
                <form onSubmit={handleSubmit} className="w-full mt-10 py-5 flex items-center justify-start flex-col">
                    <TextInput name="email" type="email" label="Email" onChange={handleChange} onBlur={handleBlur} value={values.email} error={errors?.email} touch={touched?.email} placeHolder="Email Address" />
                    <PasswordInput name="password" label="Password" onChange={handleChange} onBlur={handleBlur} value={values.password} error={errors?.password} touch={touched?.password} placeHolder="Password" />
                    <div className="flex justify-end items-center w-[90%] mt-3">
                        <Link to="/forget-password" className="text-sm text-primary hover:text-primary-light transition-all ease-in-out duration-500">
                            Forgot Password ?
                        </Link>
                    </div>
                    <div className="w-[90%] flex">
                        {isLoading ? <ButtonLoader /> : <ButtonPrimary text="Login" />}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
