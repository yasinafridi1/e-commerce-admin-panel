import { useState } from 'react';
import { IoMdNotifications } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ClickOutside from '@components/Wrappers/ClickOutside';

const DropdowNotification = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notifying, setNotifying] = useState(true);

    return (
        <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
            <li>
                <Link
                    onClick={() => {
                        setNotifying(false);
                        setDropdownOpen(!dropdownOpen);
                    }}
                    to="#"
                    className="relative flex h-9 w-9 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 items-center justify-center rounded-full bg-primary-light dark:bg-primary text-white"
                >
                    <span
                        className={`absolute -top-0 right-0 z-1 h-3 w-3 rounded-full bg-primary-light  border border-primary ${notifying === false ? "hidden" : "inline"
                            }`}
                    >
                        <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-light  opacity-75"></span>
                    </span>

                    <IoMdNotifications className="text-3xl " />
                </Link>

                {dropdownOpen && (
                    <div
                        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col  bg-white rounded-sm  dark:bg-boxdark sm:right-0 sm:w-80`}
                    >
                        <div className="px-4.5 py-3">
                            <h5 className="text-sm font-medium text-bodydark2 dark:text-white">
                                Notification
                            </h5>
                        </div>

                        <ul className="flex h-auto flex-col overflow-y-auto">
                            <li>
                                <Link
                                    className="text-boxdark dark:text-light flex flex-col gap-2.5 border-t border-gray-200 px-4.5 py-3 hover:bg-gray-2 dark:border-gray-500 dark:hover:bg-meta-4"
                                    to="#"
                                >
                                    <p className="text-sm ">
                                        It is a long established fact
                                        that a reader will be distracted by the readable.
                                    </p>

                                    <p className="text-xs text-black dark:text-white">24 Feb, 2025</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </li>
        </ClickOutside>
    );
}

export default DropdowNotification;
