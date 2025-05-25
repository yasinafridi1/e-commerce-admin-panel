import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import type { ActionColumnProps } from "@customTypes/index";

const ActionsCol: React.FC<ActionColumnProps> = ({
  edit,
  deleteOpt,
  view,
  onEdit,
  onDelete,
  detailUrl,
}) => {
  return (
    <td className="flex items-center justify-end gap-2 py-3 pr-2">
      {view && detailUrl && (
        <Link
          to={detailUrl}
          className="flex cursor-pointer items-center justify-center rounded-full bg-blue-100 p-[5px] transition-all duration-500 ease-in-out hover:bg-blue-300 xl:p-2"
        >
          <IoEyeSharp className="text-base text-blue-600 xl:text-xl" />
        </Link>
      )}
      {edit && (
        <div
          onClick={onEdit}
          className="flex cursor-pointer items-center justify-center rounded-full bg-yellow-100 p-[5px] transition-all duration-500 ease-in-out hover:bg-yellow-300 xl:p-2"
        >
          <MdModeEditOutline className="text-base text-yellow-700 xl:text-xl" />
        </div>
      )}
      {deleteOpt && (
        <div
          onClick={onDelete}
          className="flex cursor-pointer items-center justify-center rounded-full bg-red-100 p-[5px] transition-all duration-500 ease-in-out hover:bg-red-300 xl:p-2"
        >
          <RiDeleteBin6Fill className="text-base text-red-700 xl:text-xl" />
        </div>
      )}
    </td>
  );
};

export default ActionsCol;
