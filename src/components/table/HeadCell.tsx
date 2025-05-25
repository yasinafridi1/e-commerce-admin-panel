import type { TableHeadCellProps } from "@customTypes/index";
import React from "react";
import {
  HiMiniChevronUp,
  HiMiniChevronDown,
} from "react-icons/hi2";
import {
  IoIosArrowRoundDown,
  IoIosArrowRoundUp,
} from "react-icons/io";

const HeadCell: React.FC<TableHeadCellProps> = ({
  text,
  customClassess,
}) => {
  return (
    <th
      className={`poppin-600 dark:text-light py-5 text-left text-sm ${customClassess}`}
    >
      {text}
    </th>
  );
};

export default HeadCell;
