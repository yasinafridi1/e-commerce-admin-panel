import PageHeader from "@components/Headers/PageHeader";
import SelectInput from "@components/Inputs/SelectInput";
import TextInput from "@components/Inputs/TextInput";
import { PRODUCT_TYPES } from "@constants/index";
import type { AddEditProductState } from "@customTypes/index";
import { productSchema } from "@validations";
import { useFormik } from "formik";
import { useState } from "react";

const classess = "flex flex-col justify-between items-stretch gap-1 sm:gap-5 sm:flex-row"

const AddEditProduct = ({ onClose, data }: { data?: null, onClose: () => void }) => {
    const [categories, setCategories] = useState<any>([
        {
            categoryId: 1,
            title: "Shirts"
        },
        {
            categoryId: 2,
            title: "Caps"
        },
        {
            categoryId: 3,
            title: "Pants"
        },
        {
            categoryId: 4,
            title: "Jeans"
        },
    ])

    const initialState = {
        productName: "",
        categoryId: "",
        price: "",
        productType: "",
        status: "",
        variants: [
            {
                colorName: "",
                hex: "",
                sizes: [
                    {
                        size: "",
                        stock: ""
                    },
                ]
            }
        ]

    }

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik<AddEditProductState>({
        initialValues: initialState,
        validationSchema: productSchema,
        onSubmit: (values) => {
            console.log("Form Submitted", values);
        },
    });



    return (
        <div className="w-full">
            <PageHeader text="Add/Update Product">
                <button
                    onClick={onClose}
                    className="cursor-pointer border-primary dark:border-primary-thin poppins-500 bg-primary text-light dark:bg-primary-thin dark:text-boxdark2  
      flex items-center justify-center rounded-md border px-4 py-[5px] transition-all ease-in-out duration-300 hover:text-primary hover:bg-light hover:dark:text-primary-thin hover:dark:bg-boxdark2"
                >
                    <span className="text-sm sm:text-base lg:text-lg">Go Back</span>
                </button>
            </PageHeader>


            <div className="bg-white py-4 rounded-md px-6 dark:bg-boxdark min-h-[400px]">
                <form onSubmit={handleSubmit} className="w-full ">
                    <div className={classess}>
                        <TextInput label="Product Name" type="text" name="productName" value={values.productName} onChange={handleChange} onBlur={handleBlur} error={errors?.productName} touch={touched?.productName} placeHolder="Enter product name" />
                        <TextInput label="Price" type="number" name="price" value={values.price} onChange={handleChange} onBlur={handleBlur} error={errors?.price} touch={touched.price} placeHolder="Product Cost" />
                    </div>
                    <div className={classess}>
                        <SelectInput name="status" label="Status" error={errors?.status} touch={touched?.status} value={values.status} onChange={handleChange} onBlur={handleBlur} placeHolder="Choose Status " options={[{ label: "Show", value: "SHOW" }, { label: "HIDE", value: "HIDE" }]} />
                        <SelectInput name="productType" label="Type" error={errors?.productType} touch={touched?.productType} value={values.productType} onChange={handleChange} onBlur={handleBlur} placeHolder="Choose Type " options={PRODUCT_TYPES.map((item) => { return { label: item, value: item } })} />
                    </div>
                    <div className={classess}>
                        <SelectInput name="categoryId" label="Category" error={errors?.categoryId} touch={touched?.categoryId} value={values.categoryId} onChange={handleChange} onBlur={handleBlur} placeHolder="Choose Category " options={categories.map((item: any) => { return { label: item.title, value: item.categoryId } })} />
                    </div>
                    <div className={classess}>
                        <TextInput label="Color Name" name="colorName" onChange={handleChange} onBlur={handleBlur} value={values.variants[0].color} error="" touch={false} placeHolder="Name of color" />
                        <TextInput label="Color Code" type="color" name="colorName" onChange={handleChange} onBlur={handleBlur} value={values.variants[0].color} error="" touch={false} placeHolder="Name of color" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEditProduct;
