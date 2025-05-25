import { type ReactNode } from "react";

const PageHeader = ({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) => {
  return (
    <div className="mb-5 flex w-full items-start justify-between">
      <h1 className="poppins-600 dark:text-light text-sm sm:text-lg md:text-2xl">
        {text}
      </h1>
      {children}
    </div>
  );
};

export default PageHeader;
