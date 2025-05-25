import React from "react";
import type { TableBodyProps } from "@customTypes/index";
import TableLoader from "@components/loader/TableLoader";

const TableBody: React.FC<TableBodyProps> = ({
  loading,
  noData,
  colSpan,
  children,
}) => {
  return (
    <tbody className="dark:bg-boxdark border-x border-gray-200 bg-white dark:border-t dark:border-gray-600">
      {loading ? (
        <tr className="border-b border-gray-400 text-sm 2xl:text-base dark:border-gray-600">
          <td
            colSpan={colSpan}
            className="h-[170px] text-center"
          >
            <TableLoader />
          </td>
        </tr>
      ) : !loading && noData ? (
        <tr className="border-b border-gray-300 text-sm 2xl:text-base dark:border-gray-600">
          <td
            colSpan={colSpan}
            className="poppin-800 dark:text-light h-[120px] text-center text-2xl text-gray-400"
          >
            Data not found
          </td>
        </tr>
      ) : (
        children
      )}
    </tbody>
  );
};

export default TableBody;
