import ButtonAdd from "@components/Buttons/ButtonAdd";
import PageHeader from "@components/Headers/PageHeader";
import TableHeader from "@components/Headers/TableHeader";
import AddEditCategoryModal from "@components/Modal/AddEditCategoryModal";
import TableWrapper from "@components/Wrappers/TableWrapper";
import ActionsCol from "@components/table/ActionCol";
import HeadCell from "@components/table/HeadCell";
import TableBody from "@components/table/TableBody";
import type { AddEditModalState } from "@customTypes/index";
import { categoryHeaders } from "@data/tablesCells";
import { getAllCategories } from "@redux/actions/categoryActions";
import type { AppDispatch, RootState } from "@redux/store";
import { formatDate } from "@utils/DateTimeFormatter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading, limit, page, data, totalPages, totalRecords } = useSelector((state: RootState) => state.categories)
  const [addEditModal, setAddEditModal] = useState<AddEditModalState>({ status: false, data: null })

  function handleAddEditModal(status = false, data = null) {
    setAddEditModal({
      status,
      data: data
    })
  }


  useEffect(() => {
    const getData = () => {
      dispatch(getAllCategories(`?page=${page}&limit=${limit}`));
    }

    return () => {
      getData();
    }
  }, [page, limit])
  return (
    <>
      {
        addEditModal.status ? <AddEditCategoryModal open={addEditModal.status} onClose={() => { handleAddEditModal() }} /> : null
      }

      <PageHeader text="Categories">
        <ButtonAdd text="Add Category" onClick={() => { handleAddEditModal(true) }} />
      </PageHeader>
      <TableWrapper
        limit={limit}
        currentPage={page}
        totalPages={totalPages}
        totalRecords={totalRecords}
        goToPage={() => { }}
        handleBack={() => { }}
        handleNext={() => { }}
        customWidthClass={"!min-w-[750px]"}
      >
        <TableHeader>
          {categoryHeaders?.map((item, index) => {
            return index === 0 ? (
              <HeadCell
                text={item}
                key={index}
                customClassess="rounded-tl-3xl pl-5"
              />
            ) : index ===
              categoryHeaders.length - 1 ? (
              <HeadCell
                key={index}
                text={item}
                customClassess="rounded-tr-3xl px-1 text-right pr-5"
              />
            ) : (
              <HeadCell
                key={index}
                text={item}
                customClassess={"px-1"}
              />
            );
          })}
        </TableHeader>
        <TableBody
          loading={isLoading}
          colSpan={categoryHeaders.length}
          noData={!data.length}
        >
          {data?.map((item, index) => {
            return (
              <tr key={index} className="text-boxdark2 dark:text-light">
                <td className="px-1 pl-3">{item.categoryId}</td>
                <td className="px-1">{item.title}</td>
                <td className="px-1">{formatDate(item.createdAt)}</td>
                <td className="px-1">{formatDate(item.updatedAt)}</td>
                <ActionsCol
                  edit={false}
                  deleteOpt={true}
                  view={true}
                  onDelete={() => { }}
                />
              </tr>
            );
          })}

        </TableBody>
      </TableWrapper>
    </>
  );
};

export default Categories;
