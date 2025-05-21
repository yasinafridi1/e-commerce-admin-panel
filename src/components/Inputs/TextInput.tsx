import InputWrapper from "@components/Wrappers/InputWrapper";
import ErrorText from "../Typography/ErrorText";
import type { TextInputProps } from "@customTypes/index";

const TextInput: React.FC<TextInputProps> = ({
    name,
    value,
    onChange,
    placeHolder,
    error,
    onBlur,
    touch,
    label,
    type = "text"
}) => {
    return (
        <InputWrapper>
            <label className="text-sm xl:text-base poppins-500 mb-1 text-boxdark ">{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeHolder}
                onBlur={onBlur}
                className="border  outline-none text-gray-900 sm:text-sm rounded-md focus:border-primary block w-full p-3 placeholder:text-gray-500"
            />
            {error && touch && <ErrorText text={error} />}
        </InputWrapper>
    );
};

export default TextInput;