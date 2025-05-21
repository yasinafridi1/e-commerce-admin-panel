import PasswordInput from "@components/Inputs/PasswordInput";
import TextInput from "@components/Inputs/TextInput";

const Login = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center dark:bg-boxdark">
            <div className="px-4 py-8 bg-white rounded-md xl:w-[35%]">
                <div className="flex justify-center items-center pb-4 border-b-[1.5px] border-gray-400">
                    <h1 className="poppins-700 text-4xl">Login</h1>
                </div>
                <form className="w-full border border-red-500 mt-10 py-5 flex items-center justify-start flex-col">
                    <TextInput name="email" type="email" label="Email" onChange={() => { }} onBlur={() => { }} value="" placeHolder="Email Address" />
                    <PasswordInput name="password" label="Password" onChange={() => { }} onBlur={() => { }} value="" placeHolder="Password" />
                </form>
            </div>
        </div>
    );
}

export default Login;
