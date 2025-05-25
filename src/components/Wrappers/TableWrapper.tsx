import Pagination from "@components/table/Pagination";
import type { TableWarperProps } from "@customTypes/index";
import type React from "react";

const TableWrapper: React.FC<
  TableWarperProps
> = ({
  limit,
  totalPages,
  currentPage,
  totalRecords,
  handleBack,
  handleNext,
  goToPage,
  customWidthClass,
  children,
}) => {
  return (
    <div className="dashboardTableWrapper mt-7">
      <table
        className={`w-full min-w-[800px] border-collapse !overflow-x-auto ${customWidthClass}`}
      >
        {children}
      </table>
      <Pagination
        limit={limit}
        totalPages={totalPages}
        currentPage={currentPage}
        totalRecords={totalRecords}
        handleBack={handleBack}
        handleNext={handleNext}
        goToPage={goToPage}
      />
    </div>
  );
};

export default TableWrapper;
