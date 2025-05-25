import { type ReactNode } from "react";

const TableHeader = ({
  children,
}: {
  children: ReactNode | ReactNode[];
}) => {
  return (
    <thead className="bg-primary-thin dark:bg-boxdark">
      <tr>{children}</tr>
    </thead>
  );
};

export default TableHeader;
