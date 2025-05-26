import ErrorText from '@components/Typography/ErrorText';
import InputWrapper from '@components/Wrappers/InputWrapper';
import type { SelectInputProps } from '@customTypes/index';
import React from 'react';

const SelectInput: React.FC<SelectInputProps> = ({ label, name, options, placeHolder, onChange, onBlur, value, error, touch }) => {
    return (
        <InputWrapper>
            <label className="poppins-500 text-boxdark dark:text-light mb-1 text-sm xl:text-base">
                {label}
            </label>
            <select name={name} id={name} onChange={onChange} onBlur={onBlur} value={value} className="focus:border-primary block w-full rounded-md border p-3 text-gray-900 dark:text-gray-200 outline-none focus:dark:border-primary-thin placeholder:text-gray-500 sm:text-sm">

                <option value="" disabled>{placeHolder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value} className='lowercase'>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && touch && (
                <ErrorText text={error} />
            )}
        </InputWrapper>
    );
}

export default SelectInput;
