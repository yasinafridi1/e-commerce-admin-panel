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
                        className="flex-grow px-14 text-red-600 poppin-500 text-lg py-2 rounded-md bg-white border border-red-600 hover:text-white hover:bg-red-600 transition-all ease-out duration-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        className="flex-grow px-14 text-white poppin-500 text-lg py-2 rounded-md bg-red-600 border border-red-600 hover:text-red-600 hover:bg-white transition-all ease-out duration-500"
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}

export default DeleteModalFooter;
