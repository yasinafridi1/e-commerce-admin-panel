import ButtonLoader from '@components/Buttons/ButtonLoader';
import type { ModalFooterProps } from '@customTypes/index';
import React from 'react';

const ModalFooter: React.FC<ModalFooterProps> = ({ loading, onClose, onSubmit }) => {
    return (
        <div className="w-[90%] mx-auto flex justify-center items-center gap-5 mt-10">
            {loading ? (
                <ButtonLoader />
            ) : (
                <>
                    <button
                        onClick={onClose}
                        className="flex-grow px-14 text-primary poppins-500 text-lg py-2 rounded-md bg-white dark:bg-boxdark dark:text-light  border border-primary dark:border-primary-thin
                         hover:text-light hover:dark:text-boxdark hover:bg-primary hover:dark:bg-primary-thin transition-all ease-out duration-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSubmit}
                        className="flex-grow px-14 text-white poppins-500 text-lg py-2 rounded-md bg-primary dark:bg-primary-thin border border-primary dark:border-primary-thin dark:text-boxdark2
                         hover:text-primary hover:bg-white hover:dark:bg-boxdark hover:dark:text-light transition-all ease-out duration-500"
                    >
                        Submit
                    </button>
                </>
            )}
        </div>
    );
}

export default ModalFooter;
