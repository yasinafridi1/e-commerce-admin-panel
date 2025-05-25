import PageHeader from "@components/Headers/PageHeader";
import { getAllCustomers } from "@redux/actions/customerActions";
import type { AppDispatch } from "@redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import TableWrapper from "@components/Wrappers/TableWrapper";
import TableHeader from "@components/Headers/TableHeader";
import { customerHeaders } from "@data/tablesCells";
import HeadCell from "@components/table/HeadCell";
import TableBody from "@components/table/TableBody";
import Avatar from "@components/Avatar/Avatar";
import { USER_STATUS } from "@constants/index";
import ActionsCol from "@components/table/ActionCol";

const Customer = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    isLoading,
    data,
    page,
    totalPages,
    limit,
    totalRecords,
  } = useSelector(
    (state: RootState) => state.customer,
  );

  useEffect(() => {
    const getCustomer = () => {
      dispatch(
        getAllCustomers(
          `?page=${page}&limit=${limit}`,
        ),
      );
    };
    return () => {
      getCustomer();
    };
  }, [limit, page]);

  return (
    <>
      <PageHeader text="Customers" />
      <TableWrapper
        limit={limit}
        currentPage={page}
        totalPages={totalPages}
        totalRecords={totalRecords}
        goToPage={() => {}}
        handleBack={() => {}}
        handleNext={() => {}}
        customWidthClass={"!min-w-[750px]"}
      >
        <TableHeader>
          {customerHeaders?.map((item, index) => {
            return index === 0 ? (
              <HeadCell
                text={item}
                key={index}
                customClassess="rounded-tl-3xl pl-5"
              />
            ) : index ===
              customerHeaders.length - 1 ? (
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
          colSpan={customerHeaders.length}
          noData={!data.length}
        >
          {data?.map((item, index) => {
            return (
              <tr
                key={index}
                className="dark:text-light border-b-2 text-sm 2xl:text-base dark:border-gray-600"
              >
                <td>
                  <Avatar
                    imgSrc={item?.profilePicture}
                  />
                </td>
                <td className="px-1">
                  {item?.fullName}
                </td>
                <td className="px-1">
                  {item?.email}
                </td>
                <td className="px-1">
                  {item?.phoneNumber}
                </td>
                <td className="px-1 py-5">
                  {item?.gender}
                </td>
                <td className="px-2 text-white">
                  {item?.status ===
                  USER_STATUS.active ? (
                    <p className="rounded-full bg-green-600 py-[5px] text-center">
                      Active
                    </p>
                  ) : (
                    <p className="rounded-full bg-orange-600 py-[5px] text-center">
                      Blocked
                    </p>
                  )}
                </td>
                <td className="px-1 !pl-3">
                  {item?.isVerified
                    ? "Yes"
                    : "No"}
                </td>
                <ActionsCol
                  edit={false}
                  deleteOpt={true}
                  view={true}
                  onDelete={() => {}}
                />
              </tr>
            );
          })}
        </TableBody>
      </TableWrapper>
    </>
  );
};

export default Customer;
