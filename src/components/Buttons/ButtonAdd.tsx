import { type MouseEventHandler } from "react";
import { IoIosAdd } from "react-icons/io";

const ButtonAdd = ({
    text,
    onClick,
}: {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer border-primary dark:border-primary-thin poppins-500 bg-primary text-light dark:bg-primary-thin dark:text-boxdark2  
      flex items-center justify-center rounded-md border px-4 py-[5px] transition-all ease-in-out duration-300 hover:text-primary hover:bg-light hover:dark:text-primary-thin hover:dark:bg-boxdark2"
        >
            <IoIosAdd className="text-2xl sm:text-3xl" />
            <span className="text-sm sm:text-base lg:text-lg">{text}</span>
        </button>
    );
};

export default ButtonAdd;
