import type {
  AddEditProductState,
  SizesState,
  VariantState,
} from "@customTypes/index";

function formatSize(item: SizesState[], colorCode: string, images: any) {
  const structureSize = item.map((prd: SizesState) => {
    images.push(prd.image);
    return {
      size: prd.size,
      stock: prd.stock,
      imageRef: `${colorCode}-${prd.size}-${prd.image.name}`,
    };
  });

  return structureSize;
}

export function formatProductFormData(data: AddEditProductState) {
  const variants = data.variants;
  const imageArr: any = [];
  const structuredVariants = variants.map((item: VariantState) => {
    const structureSize = formatSize(item.sizes, item.colorCode, imageArr);
    return {
      ...item,
      sizes: structureSize,
    };
  });

  console.log(imageArr);
}
