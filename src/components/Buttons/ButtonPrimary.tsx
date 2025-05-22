import type { MouseEventHandler } from "react";

const ButtonPrimary = ({ text, onClick, type = "submit" }: { text: string, onClick?: MouseEventHandler, type?: "submit" | "button" }) => {
    return (
        <button type={type} onClick={onClick} className='border border-primary bg-primary text-light py-2 rounded-md mt-2 flex-grow text-sm sm:text-base poppins-600 transition-all ease-in-out duration-500 hover:bg-white hover:text-primary ' >
            {text}
        </button>
    );
}

export default ButtonPrimary;
