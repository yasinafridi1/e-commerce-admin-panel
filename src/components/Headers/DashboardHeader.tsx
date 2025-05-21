import React from 'react';
import { Link } from 'react-router-dom';
import logoPrimary from "@images/logoPrimary.png";
import ModeSwitcher from '@components/Headers/ModeSwitcher';
import DropdowNotification from '@components/Headers/DropdownNotification';
import DropdownUser from '@components/Headers/DropdownUser';

const DashboardHeader = ({ sideBarOpen, setSideBar }: { sideBarOpen: boolean, setSideBar: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <header className="sticky top-0 z-99 flex w-full bg-primary drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between lg:justify-end px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSideBar(!sideBarOpen);
                        }}
                        className="z-99 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                    >
                        <span className="relative block h-5.5 w-5.5 cursor-pointer">
                            <span className="du-block absolute right-0 h-full w-full">
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!sideBarOpen && "!w-full delay-300"
                                        }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!sideBarOpen && "delay-400 !w-full"
                                        }`}
                                ></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!sideBarOpen && "!w-full delay-500"
                                        }`}
                                ></span>
                            </span>
                            <span className="absolute right-0 h-full w-full rotate-45">
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!sideBarOpen && "!h-0 !delay-[0]"
                                        }`}
                                ></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!sideBarOpen && "!h-0 !delay-200"
                                        }`}
                                ></span>
                            </span>
                        </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}

                    <Link className="block flex-shrink-0 lg:hidden" to="/">
                        <img
                            src={logoPrimary}
                            alt="Logo"
                            className="w-10 h-7 sm:w-15 sm:h-9 md:w-19 md:h-13"
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        <ModeSwitcher />
                        <DropdowNotification />
                    </ul>
                    <DropdownUser />
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;
