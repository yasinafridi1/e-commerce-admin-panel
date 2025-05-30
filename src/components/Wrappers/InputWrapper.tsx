import { type ReactNode } from "react";

const InputWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className="mt-6 mb-2 flex w-full flex-col items-start justify-start">
      {children}
    </div>
  );
};

export default InputWrapper;
