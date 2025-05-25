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
  type = "text",
}) => {
  return (
    <InputWrapper>
      <label className="poppins-500 text-boxdark dark:text-light mb-1 text-sm xl:text-base">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        onBlur={onBlur}
        className="focus:border-primary block w-full rounded-md border p-3 text-gray-900 dark:text-gray-200 outline-none focus:dark:border-primary-thin placeholder:text-gray-500 sm:text-sm"
      />
      {error && touch && (
        <ErrorText text={error} />
      )}
    </InputWrapper>
  );
};

export default TextInput;
