import { type ReactNode } from 'react';

const InputWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className='w-[90%] flex justify-start items-start flex-col mb-2 mt-6'>
            {children}
        </div>
    );
}

export default InputWrapper;
