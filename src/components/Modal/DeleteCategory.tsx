import type { AddEditModalProps } from '@customTypes/index';
import React from 'react';
import DeleteModalLayout from '../../layouts/DeleteModalLayout';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '@redux/actions/categoryActions';
import type { AppDispatch, RootState } from '@redux/store';


const DeleteCategory: React.FC<AddEditModalProps> = ({ open, onClose, data }) => {
    const dispatch: AppDispatch = useDispatch();
    const { isLoading } = useSelector((state: RootState) => state.categories)
    function handleDeleteClick() {
        dispatch(deleteCategory(data)).then(() => {
            onClose();
        })
    }
    return (
        <DeleteModalLayout open={open} onClose={onClose} onSubmit={handleDeleteClick} headerText='Delete Category' loading={isLoading}>
            <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[60%] px-4 mx-auto text-center'>
                <p className='text-base sm-text-lg md:text-xl'>
                    Do you want to delete category ?
                </p>
            </div>
        </DeleteModalLayout>
    );
}

export default DeleteCategory;
