import ErrorText from '@components/Typography/ErrorText';
import React, { useState, type FocusEvent } from 'react';
import { GrCloudUpload } from 'react-icons/gr';

interface FileInputProps {
    name: string;
    onChange?: (file: File | null) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    error: null | string;
    touch: boolean;
}

const FileInput: React.FC<FileInputProps> = ({ name, onChange, error, touch, onBlur }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setSelectedFile(file);

        if (file && file.type.startsWith('image/')) {
            const fileUrl = URL.createObjectURL(file);
            setPreviewUrl(fileUrl);
        } else {
            setPreviewUrl(null);
        }

        if (onChange) onChange(file);
    };

    return (
        <div className="w-full rounded-md mt-2 border border-dashed border-gray-500 dark:border-gray-300 text-center cursor-pointer">
            <label
                htmlFor={name}
                className="flex flex-col items-center justify-center py-6 cursor-pointer"
            >
                {!previewUrl && (
                    <GrCloudUpload className="text-3xl sm:text-4xl md:text-[70px] mb-2 text-boxdark2 dark:text-light" />
                )}

                {previewUrl && (
                    <img
                        src={previewUrl}
                        alt="Preview"
                        className="mb-2 h-30 w-50 object-fill rounded-md"
                    />
                )}

                <span className="text-gray-500 dark:text-gray-300 text-sm break-words max-w-xs">
                    {selectedFile ? selectedFile.name : 'Click to upload a file'}
                </span>
            </label>

            <input
                id={name}
                name={name}
                type="file"
                hidden
                accept="image/*"
                onBlur={onBlur}
                onChange={handleFileChange}
            />

            {error && touch ? (
                <ErrorText text={error} />
            ) : null}
        </div>
    );
};

export default FileInput;
