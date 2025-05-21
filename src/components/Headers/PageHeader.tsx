import { type ReactNode } from 'react';

const PageHeader = ({ text, children }: { text: string, children?: ReactNode }) => {
    return (
        <div className="w-full flex justify-between items-start mb-5">
            <h1 className="poppins-600 text-sm sm:text-lg md:text-2xl dark:text-white">
                {text}
            </h1>
            {children}
        </div>
    );
}

export default PageHeader;
