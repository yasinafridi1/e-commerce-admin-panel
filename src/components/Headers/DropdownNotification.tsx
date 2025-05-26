import { useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";
import ClickOutside from "@components/Wrappers/ClickOutside";

const DropdowNotification = () => {
  const [dropdownOpen, setDropdownOpen] =
    useState(false);
  const [notifying, setNotifying] =
    useState(true);

  return (
    <ClickOutside
      onClick={() => setDropdownOpen(false)}
      className="relative"
    >
      <li>
        <Link
          onClick={() => {
            setNotifying(false);
            setDropdownOpen(!dropdownOpen);
          }}
          to="#"
          className="bg-primary-light dark:bg-primary relative flex h-9 w-9 items-center justify-center rounded-full text-white sm:h-10 sm:w-10 md:h-12 md:w-12 xl:h-14 xl:w-14"
        >
          <span
            className={`bg-primary-light border-primary absolute -top-0 right-0 z-1 h-3 w-3 rounded-full border ${notifying === false
              ? "hidden"
              : "inline"
              }`}
          >
            <span className="bg-light absolute -z-1 inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
          </span>

          <IoMdNotifications className="text-3xl" />
        </Link>

        {dropdownOpen && (
          <div
            className={`dark:bg-boxdark absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm bg-white border border-gray-300 dark:border-gray-500  sm:right-0 sm:w-80`}
          >
            <div className="px-4.5 py-3">
              <h5 className="text-bodydark2 text-sm font-medium dark:text-white">
                Notification
              </h5>
            </div>

            <ul className="flex h-auto flex-col overflow-y-auto">
              <li>
                <Link
                  className="text-boxdark dark:text-light hover:bg-gray-2 dark:hover:bg-meta-4 flex flex-col gap-2.5 border-t border-gray-200 px-4.5 py-3 dark:border-gray-500"
                  to="#"
                >
                  <p className="text-sm">
                    It is a long established fact
                    that a reader will be
                    distracted by the readable.
                  </p>

                  <p className="text-xs text-black dark:text-white">
                    24 Feb, 2025
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default DropdowNotification;
