import ButtonAdd from "@components/Buttons/ButtonAdd";
import PageHeader from "@components/Headers/PageHeader";
import type { AddEditModalState } from "@customTypes/index";
import { useState } from "react";
import AddEditProduct from "./AddEditProduct";

const Products = () => {
  const [addEditPage, setAddEditPage] = useState<AddEditModalState>({
    status: true,
    data: null,
  })


  function openAddEditPage(data: any) {
    setAddEditPage({
      status: true,
      data: data,
    });
  }

  function closeAddEditPage() {
    setAddEditPage({
      status: false,
      data: null,
    });
  }






  return (
    <>
      {
        addEditPage.status ? <AddEditProduct onClose={closeAddEditPage} /> :
          <>
            <PageHeader text="Products">
              <ButtonAdd
                onClick={() => openAddEditPage(null)}
                text="Add Product"
              />
            </PageHeader>
          </>
      }

    </>
  );
};

export default Products;
