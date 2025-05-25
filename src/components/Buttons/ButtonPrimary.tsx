import type { MouseEventHandler } from "react";

const ButtonPrimary = ({
  text,
  onClick,
  type = "submit",
}: {
  text: string;
  onClick?: MouseEventHandler;
  type?: "submit" | "button";
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="border-primary bg-primary text-light poppins-600 hover:text-primary mt-2 flex-grow rounded-md border py-2 text-sm transition-all duration-500 ease-in-out hover:bg-white sm:text-base"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
