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
                    className="relative flex h-9 w-9 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 items-center justify-center rounded-full bg-[--secondary]  hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                >
                    <span
                        className={`absolute -top-0 right-0 z-1 h-4 w-4 rounded-full bg-[--primary-light] border border-[--primary] ${notifying === false ? "hidden" : "inline"
                            }`}
                    >
                        <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-[--secondary]  opacity-75"></span>
                    </span>

                    <IoMdNotifications className="text-3xl text-[--primary]" />
                </Link>

                {dropdownOpen && (
                    <div
                        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80`}
                    >
                        <div className="px-4.5 py-3">
                            <h5 className="text-sm font-medium text-bodydark2">
                                Notification
                            </h5>
                        </div>

                        <ul className="flex h-auto flex-col overflow-y-auto">
                            <li>
                                <Link
                                    className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                                    to="#"
                                >
                                    <p className="text-sm">
                                        <span className="text-black dark:text-white">
                                            Edit your information in a swipe
                                        </span>{" "}
                                        Sint occaecat cupidatat non proident, sunt in culpa qui
                                        officia deserunt mollit anim.
                                    </p>

                                    <p className="text-xs">12 May, 2025</p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                                    to="#"
                                >
                                    <p className="text-sm">
                                        <span className="text-black dark:text-white">
                                            It is a long established fact
                                        </span>{" "}
                                        that a reader will be distracted by the readable.
                                    </p>

                                    <p className="text-xs">24 Feb, 2025</p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                                    to="#"
                                >
                                    <p className="text-sm">
                                        <span className="text-black dark:text-white">
                                            There are many variations
                                        </span>{" "}
                                        of passages of Lorem Ipsum available, but the majority have
                                        suffered
                                    </p>

                                    <p className="text-xs">04 Jan, 2025</p>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                                    to="#"
                                >
                                    <p className="text-sm">
                                        <span className="text-black dark:text-white">
                                            There are many variations
                                        </span>{" "}
                                        of passages of Lorem Ipsum available, but the majority have
                                        suffered
                                    </p>

                                    <p className="text-xs">01 Dec, 2024</p>
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
