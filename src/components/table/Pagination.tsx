import type { PaginationProps } from "@customTypes/index";
import type React from "react";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  handleNext,
  handleBack,
  goToPage,
  limit,
  totalRecords,
  currentPage,
}) => {
  return totalRecords > 0 ? (
    <div className="dark:bg-boxdark flex w-full items-center justify-between rounded-b-2xl border border-gray-200 bg-white px-3 py-5 dark:border-gray-600">
      <div>
        <p className="poppins-500 text-primary dark:text-primary-light">
          {" "}
          Showing{" "}
          {currentPage > 1
            ? (currentPage - 1) * limit
            : 1}{" "}
          to {(currentPage - 1) * limit + limit}{" "}
          of {totalRecords} entries
        </p>
      </div>
      <div className="flex items-center space-x-2">
        {/* Left Arrow */}
        <button
          onClick={handleBack}
          disabled={currentPage === 1}
          className={`cursor-pointer rounded px-3 py-[3px] text-xl transition-all duration-500 ease-in-out ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400"
              : "text-boxdark2 bg-gray-100 hover:bg-gray-300"
          }`}
        >
          &lt;
        </button>

        {/* First page */}
        <button
          onClick={() => goToPage(1)}
          className={`cursor-pointer rounded px-3 py-1 ${
            currentPage === 1
              ? "bg-primary text-light"
              : "text-primary"
          }`}
        >
          1
        </button>

        {/* Ellipsis before middle pages */}
        {currentPage > 3 && (
          <span className="text-primary dark:text-light px-3">
            ...
          </span>
        )}

        {/* Middle pages */}
        {Array.from(
          {
            length: 3,
          },
          (_, i) => {
            const page =
              currentPage === totalPages
                ? currentPage - 2 + i
                : currentPage - 1 + i;
            return page > 1 &&
              page < totalPages ? (
              <button
                key={page}
                onClick={() =>
                  currentPage !== page
                    ? goToPage(page)
                    : null
                }
                className={`text-light cursor-pointer rounded px-3 py-1 ${
                  currentPage === page
                    ? "bg-primary text-light"
                    : "text-primary dark:text-light"
                }`}
              >
                {page}
              </button>
            ) : null;
          },
        )}

        {/* Ellipsis after middle pages */}
        {currentPage < totalPages - 2 && (
          <span className="text-primary dark:text-light px-3">
            ...
          </span>
        )}

        {/* Last page */}
        {totalPages > 1 && (
          <button
            onClick={() => goToPage(totalPages)}
            className={`rounded px-3 py-1 ${
              currentPage === totalPages
                ? "bg-primary text-light"
                : "text-primary dark:text-light"
            }`}
          >
            {totalPages}
          </button>
        )}

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`cursor-pointer rounded px-3 py-[3px] text-xl transition-all duration-500 ease-in-out ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400"
              : "text-boxdark2 bg-gray-100 hover:bg-gray-300"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  ) : null;
};

export default Pagination;
