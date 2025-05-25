import DeleteModalFooter from '@components/Modal/DeleteModalFooter';
import ClickOutside from '@components/Wrappers/ClickOutside';
import type { ModalLayoutProps } from '@customTypes/index';
import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

const DeleteModalLayout: React.FC<ModalLayoutProps> = ({
    onClose,
    onSubmit,
    loading,
    headerText,
    open,
    children
}) => {
    return (
        <div
            className={`${open
                ? "w-full h-full fixed top-0 left-0 z-999 flex justify-center items-center modalBackground  "
                : "hidden"
                } transition-all duration-1000 ease-in-out`}
        >
            <div className="w-[98%] sm:w-[90%] md:w-[70%] max-h-[90%] lg:w-[60%] bg-white dark:bg-boxdark rounded-xl overflow-y-auto">
                <ClickOutside onClick={onClose}>
                    <div className="w-full mx-auto py-2 flex justify-end items-center bg-red-800  pl-4">
                        <div className="w-full flex justify-between items-center">
                            <h5 className="poppins-600 text-xl capitalize text-light">
                                {headerText}
                            </h5>
                            <button onClick={onClose} className="p-4  text-3xl ]">
                                <MdOutlineCancel className="text-light " />
                            </button>
                        </div>
                    </div>
                    <div className="py-5 w-[90%] mx-auto text-boxdark2 dark:text-light">
                        {children}
                        <DeleteModalFooter
                            onClose={onClose}
                            loading={loading}
                            onSubmit={onSubmit}
                        />
                    </div>
                </ClickOutside>
            </div>
        </div>
    );
}

export default DeleteModalLayout;
