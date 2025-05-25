import ButtonLoader from '@components/Buttons/ButtonLoader';
import type { ModalFooterProps } from '@customTypes/index';
import React from 'react';

const DeleteModalFooter: React.FC<ModalFooterProps> = ({
    onClose,
    onSubmit,
    loading,
}) => {
    return (
        <div className="w-[90%] mx-auto flex justify-center items-center gap-5 mt-10">
            {loading ? (
                <ButtonLoader />
            ) : (
                <>
                    <button
                        onClick={onClose}
                        className="flex-grow px-14 text-red-800 dark:text-red-500  poppins-500 text-lg py-2 rounded-md bg-white dark:bg-boxdark border border-red-800 hover:text-white hover:bg-red-800 transition-all ease-out duration-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        className="flex-grow px-14 text-light poppins-500 text-lg py-2 rounded-md bg-red-800 border border-red-800 hover:dark:text-red-500 hover:text-red-800 hover:bg-white hover:dark:bg-boxdark transition-all ease-out duration-500"
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}

export default DeleteModalFooter;
