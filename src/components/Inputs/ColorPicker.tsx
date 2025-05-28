import ClickOutside from "@components/Wrappers/ClickOutside";
import { useState } from "react";
import { ChromePicker } from "react-color";

interface Props {
    label?: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ColorPicker = ({ label, value, name, onChange }: Props) => {
    const [showPicker, setShowPicker] = useState(false);

    const handleColorChange = (color: any) => {
        const syntheticEvent = {
            target: {
                name,
                value: color.hex,
            },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
    };

    return (

        <div className="relative w-[100px] mt-6">
            <label className="poppins-500 text-boxdark dark:text-light mb-1 text-sm xl:text-base">
                {label}
            </label>
            <div
                className="py-6 w-full rounded-md border cursor-pointer"
                style={{ backgroundColor: value }}
                onClick={() => setShowPicker((prev) => !prev)}
            />

            {showPicker && (
                <ClickOutside onClick={() => { setShowPicker(false) }}>
                    <div className="absolute top-0 -left-[100%] z-50">
                        <ChromePicker color={value} onChange={handleColorChange} disableAlpha />
                    </div>
                </ClickOutside>
            )}
        </div>
    );
};

export default ColorPicker;
