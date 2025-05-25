import React from 'react';
import ModalLayout from '../../layouts/ModalLayout';
import { useFormik } from 'formik';
import { categorySchema } from '@validations';
import type { AddEditModalProps } from '@customTypes/index';
import TextInput from '@components/Inputs/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@redux/store';
import { createCategory } from '@redux/actions/categoryActions';

export interface CategoryStates {
    title: string
}

const AddEditCategoryModal: React.FC<AddEditModalProps> = ({ open, onClose, data }) => {
    const dispatch: AppDispatch = useDispatch();
    const { isLoading } = useSelector((state: RootState) => state.categories)

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik<CategoryStates>({
        initialValues: {
            title: data?.title || '',
        },
        validationSchema: categorySchema,
        onSubmit: (values) => {
            dispatch(createCategory(values)).then((res: any) => {
                if (!res?.error) {
                    onClose()
                }
            })
        }
    })
    return (
        <ModalLayout open={open} loading={isLoading} headerText='Category' onClose={onClose} onSubmit={handleSubmit}>
            <div className='w-full flex justify-center'>
                <TextInput label="Category Name" name='title' value={values.title} onChange={handleChange} onBlur={handleBlur} error={errors?.title} touch={touched?.title} />

            </div>
        </ModalLayout>
    );
}

export default AddEditCategoryModal;
