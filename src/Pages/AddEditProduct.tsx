import {
    FieldArray,
    FormikProvider,
    useFormik,
    getIn,
    type FormikErrors,
    type FormikTouched,
} from "formik";
import { IoIosAdd } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";

import ButtonAdd from "@components/Buttons/ButtonAdd";
import PageHeader from "@components/Headers/PageHeader";
import ColorPicker from "@components/Inputs/ColorPicker";
import FileInput from "@components/Inputs/FileInput";
import SelectInput from "@components/Inputs/SelectInput";
import TextInput from "@components/Inputs/TextInput";

import { PRODUCT_SIZE, PRODUCT_TYPES } from "@constants/index";
import { productSchema } from "@validations";

import type {
    AddEditProductState,
    SizesState,
    VariantState,
} from "@customTypes/index";
import { useState } from "react";
import type { AppDispatch } from "@redux/store";
import { useDispatch } from "react-redux";
import { addProduct } from "@redux/actions/productActions";

const classes = "flex flex-col gap-1 sm:gap-5 sm:flex-row";


const defaultSize: SizesState = { size: "", stock: 0, image: null as any };
const defaultVariant: VariantState = {
    colorName: "",
    colorCode: "#043349",
    sizes: [defaultSize],
};

const initialState: AddEditProductState = {
    productName: "",
    categoryId: "",
    price: 0,
    productType: "",
    status: "",
    variants: [defaultVariant],
};

const AddEditProduct = ({ onClose }: { data?: null; onClose: () => void; }) => {
    const dispatch: AppDispatch = useDispatch()
    const [categories] = useState([
        { categoryId: 1, title: "Shirts" },
        { categoryId: 2, title: "Caps" },
        { categoryId: 3, title: "Pants" },
        { categoryId: 4, title: "Jeans" },
    ]);

    // ──────────────────────────────────────────────────────────
    const formik = useFormik<AddEditProductState>({
        initialValues: initialState,
        validationSchema: productSchema,
        onSubmit: (vals) => {
            dispatch(addProduct(vals)).then((res) => {
                console.log("Hello from product", res)
            })

        },
    });

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        setFieldValue,
        handleSubmit,
    } = formik;

    /** Helpers to fetch nested error / touched */
    const err = (path: string) => getIn(errors as FormikErrors<any>, path);
    const tch = (path: string) => !!getIn(touched as FormikTouched<any>, path);

    /* ───────────────────────── RENDER ──────────────────────── */
    return (
        <div className="w-full">
            <PageHeader text="Add/Update Product">
                <button
                    onClick={onClose}
                    type="button"
                    className="cursor-pointer border-primary dark:border-primary-thin poppins-500
                     bg-primary text-light dark:bg-primary-thin dark:text-boxdark2  
                     flex items-center justify-center rounded-md border px-4 py-[5px]
                     transition-all hover:text-primary hover:bg-light
                     hover:dark:text-primary-thin hover:dark:bg-boxdark2"
                >
                    <span className="text-sm sm:text-base lg:text-lg">Go Back</span>
                </button>
            </PageHeader>

            <div className="bg-white dark:bg-boxdark rounded-md py-4 px-6">
                <FormikProvider value={formik}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* ───── Top‑level fields ──── */}
                        <div className={classes}>
                            <TextInput
                                label="Product Name"
                                name="productName"
                                value={values.productName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={err("productName")}
                                touch={tch("productName")}
                                placeHolder="Enter product name"
                            />

                            <TextInput
                                label="Price"
                                type="number"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={err("price")}
                                touch={tch("price")}
                                placeHolder="Product Cost"
                            />
                        </div>

                        <div className={classes}>
                            <SelectInput
                                name="status"
                                label="Status"
                                value={values.status}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={err("status")}
                                touch={tch("status")}
                                placeHolder="Choose Status"
                                options={[
                                    { label: "Show", value: "SHOW" },
                                    { label: "Hide", value: "HIDE" },
                                ]}
                            />

                            <SelectInput
                                name="productType"
                                label="Type"
                                value={values.productType}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={err("productType")}
                                touch={tch("productType")}
                                placeHolder="Choose Type"
                                options={PRODUCT_TYPES.map((p) => ({
                                    label: p,
                                    value: p,
                                }))}
                            />
                        </div>

                        <div className={classes}>
                            <SelectInput
                                name="categoryId"
                                label="Category"
                                value={values.categoryId}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={err("categoryId")}
                                touch={tch("categoryId")}
                                placeHolder="Choose Category"
                                options={categories.map((c: any) => ({
                                    label: c.title,
                                    value: c.categoryId,
                                }))}
                            />
                        </div>

                        {/* ───── Variants (FieldArray) ──── */}
                        <FieldArray name="variants">
                            {({ push: pushVariant, remove: removeVariant }) => (
                                <>
                                    {values.variants.map((variant, vIdx) => (
                                        <div
                                            key={vIdx}
                                            className="mt-5 rounded-md border border-gray-500 px-4 py-4 space-y-4"
                                        >
                                            <div className="flex items-center justify-between">
                                                <h1 className="poppins-500 text-sm sm:text-base dark:text-light xl:text-lg">
                                                    Variant ‑ {vIdx + 1}
                                                </h1>
                                                {values.variants.length > 1 && (
                                                    <RiDeleteBin6Fill
                                                        className="cursor-pointer text-base text-red-700 md:text-xl 2xl:text-2xl"
                                                        onClick={() => removeVariant(vIdx)}
                                                    />
                                                )}
                                            </div>

                                            {/* Color fields */}
                                            <div className={classes}>
                                                <TextInput
                                                    label="Color Name"
                                                    name={`variants[${vIdx}].colorName`}
                                                    value={variant.colorName}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={err(`variants[${vIdx}].colorName`)}
                                                    touch={tch(`variants[${vIdx}].colorName`)}
                                                    placeHolder="Name of color"
                                                />

                                                <ColorPicker
                                                    label="Color Code"
                                                    name={`variants[${vIdx}].colorCode`}
                                                    value={variant.colorCode}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* ── Sizes (nested FieldArray) ── */}
                                            <FieldArray name={`variants[${vIdx}].sizes`}>
                                                {({
                                                    push: pushSize,
                                                    remove: removeSize,
                                                }) => (
                                                    <>
                                                        {variant.sizes.map(
                                                            (size, sIdx) => (
                                                                <div
                                                                    key={sIdx}
                                                                    className="px-6 space-y-3"
                                                                >
                                                                    <div className={classes}>
                                                                        <SelectInput
                                                                            name={`variants[${vIdx}].sizes[${sIdx}].size`}
                                                                            label="Size"
                                                                            value={size.size}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            error={err(
                                                                                `variants[${vIdx}].sizes[${sIdx}].size`,
                                                                            )}
                                                                            touch={tch(
                                                                                `variants[${vIdx}].sizes[${sIdx}].size`,
                                                                            )}
                                                                            placeHolder="Choose Size"
                                                                            options={PRODUCT_SIZE.map(
                                                                                (p) => ({
                                                                                    label: p,
                                                                                    value: p,
                                                                                }),
                                                                            )}
                                                                        />

                                                                        <TextInput
                                                                            name={`variants[${vIdx}].sizes[${sIdx}].stock`}
                                                                            label="Available Stock"
                                                                            type="number"
                                                                            value={size.stock}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            error={err(
                                                                                `variants[${vIdx}].sizes[${sIdx}].stock`,
                                                                            )}
                                                                            touch={tch(
                                                                                `variants[${vIdx}].sizes[${sIdx}].stock`,
                                                                            )}
                                                                            placeHolder="Available Stock"
                                                                        />
                                                                    </div>
                                                                    {/* File upload */}
                                                                    <FileInput
                                                                        name={`variants[${vIdx}].sizes[${sIdx}].image`}
                                                                        onBlur={handleBlur}
                                                                        onChange={(file) =>
                                                                            setFieldValue(
                                                                                `variants[${vIdx}].sizes[${sIdx}].image`,
                                                                                file,
                                                                            )
                                                                        }
                                                                        error={err(
                                                                            `variants[${vIdx}].sizes[${sIdx}].image`,
                                                                        )}
                                                                        touch={tch(
                                                                            `variants[${vIdx}].sizes[${sIdx}].image`,
                                                                        )}
                                                                    />

                                                                    {/* size buttons */}
                                                                    <div className="mt-3 flex items-center gap-2">
                                                                        {sIdx ===
                                                                            variant.sizes.length -
                                                                            1 && (
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() =>
                                                                                        pushSize(
                                                                                            defaultSize,
                                                                                        )
                                                                                    }
                                                                                    className="flex items-center gap-2 rounded-md border border-green-700 px-2 py-1 text-green-700 transition hover:bg-green-700 hover:text-light dark:text-light"
                                                                                >
                                                                                    <IoIosAdd className="text-xl" />
                                                                                    <span className="text-sm xl:text-base">
                                                                                        New Size
                                                                                    </span>
                                                                                </button>
                                                                            )}

                                                                        {variant.sizes.length >
                                                                            1 && (
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() =>
                                                                                        removeSize(sIdx)
                                                                                    }
                                                                                    className="flex items-center gap-2 rounded-md border border-red-700 bg-red-800 px-2 py-1 text-light transition hover:bg-inherit hover:text-red-700 dark:hover:text-light"
                                                                                >
                                                                                    <RiDeleteBin6Fill className="text-base" />
                                                                                    <span className="text-sm xl:text-base">
                                                                                        Delete Size
                                                                                    </span>
                                                                                </button>
                                                                            )}
                                                                    </div>
                                                                </div>
                                                            ),
                                                        )}
                                                    </>
                                                )}
                                            </FieldArray>

                                            {/* Add Variant Button */}
                                            <div className="flex justify-end">
                                                <ButtonAdd
                                                    text="Add Variant"
                                                    onClick={() =>
                                                        pushVariant(defaultVariant)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                        </FieldArray>

                        {/* ───── Submit ──── */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                className="rounded bg-primary px-6 py-2 font-medium text-light transition hover:opacity-90"
                            >
                                Save Product
                            </button>
                        </div>
                    </form>
                </FormikProvider>
            </div>
        </div>
    );
};

export default AddEditProduct;
