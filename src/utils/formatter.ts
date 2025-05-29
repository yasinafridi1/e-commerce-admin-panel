import type {
  AddEditProductState,
  SizesState,
  VariantState,
} from "@customTypes/index";

function formatSize(item: SizesState[], colorCode: string, images: any) {
  const structureSize = item.map((prd: SizesState) => {
    const originalFile = prd.image;
    const newFileName = `${colorCode}-${prd.size}-${originalFile.name}`;
    const renamedFile = new File([originalFile], newFileName, {
      type: originalFile.type,
    });

    images.push(renamedFile);
    return {
      size: prd.size,
      stock: prd.stock,
      image: newFileName,
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
  return { imageArr, structuredVariants };
}
