import ModalFooter from '@components/Modal/ModalFooter';
import ClickOutside from '@components/Wrappers/ClickOutside';
import type { ModalLayoutProps } from '@customTypes/index';
import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const ModalLayout: React.FC<ModalLayoutProps> = ({
    headerText,
    open,
    onClose,
    children,
    onSubmit,
    loading,
    initialLoader = false,
    error = null,
}) => {
    return (
        <div
            className={`${open
                ? "w-full h-full fixed top-0 left-0 z-999 flex justify-center items-center modalBackground  "
                : "hidden"
                } transition-all duration-1000 ease-in-out `}
        >
            <div className="w-[98%] sm:w-[90%] md:w-[70%] max-h-[90%] lg:w-[60%] bg-white dark:bg-boxdark rounded-xl overflow-y-auto">
                <ClickOutside onClick={onClose}>
                    <div className="w-full mx-auto py-2 flex justify-end items-center bg-primary dark:bg-primary-thin pl-4">
                        <div className="w-full flex justify-between items-center">
                            <h5 className="poppins-600 text-xl capitalize text-light dark:text-boxdark2">
                                {headerText}
                            </h5>
                            <button onClick={onClose} className="p-4  text-3xl cursor-pointer">
                                <MdOutlineCancel className="text-light dark:text-boxdark2" />
                            </button>
                        </div>
                    </div>
                    {initialLoader ? (
                        <>
                            <div className="text-center py-20">
                                <div role="status">
                                    <svg
                                        aria-hidden="true"
                                        className="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-300 fill-primary "
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-[90%] mx-auto flex justify-center items-center gap-5 mt-10 mb-3">
                                <button
                                    onClick={onClose}
                                    className="flex-grow px-14 text-white poppin-500 text-lg py-2 rounded-md bg-primary dark:bg-primary-thin border border-primary dark:border-primary-thin
                                     hover:text-primary hover:bg-white hover:dark:bg-boxdark hover:dark:text-light transition-all ease-out duration-500"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : error ? (
                        <>
                            <div className="min-h-[200px] flex justify-center items-center flex-col text-red-600">
                                <h1 className="poppin-700 text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px]">
                                    OOPS !
                                </h1>
                                <p className="px-4 text-sm sm:text-base md:text-lg lg:text-xl">
                                    {error}
                                </p>
                            </div>
                            <div className="w-[90%] mx-auto flex justify-center items-center gap-5 mt-10 mb-3">
                                <button
                                    onClick={onClose}
                                    className="flex-grow px-14 text-white poppin-500 text-lg py-2 rounded-md bg-[--primary] border border-[--primary] hover:text-[--primary] hover:bg-white transition-all ease-out duration-500"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="py-5 w-[90%] mx-auto ">
                            {children}
                            <ModalFooter
                                onClose={onClose}
                                loading={loading}
                                onSubmit={onSubmit}
                            />
                        </div>
                    )}
                </ClickOutside>
            </div>
        </div>
    );
}

export default ModalLayout;
