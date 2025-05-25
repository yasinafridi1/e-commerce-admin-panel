import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  NavLink,
  useLocation,
} from "react-router-dom";
import logoWhite from "@images/logoWhite.png";
import {
  getLocalStorageValue,
  storeInLocalStorage,
} from "@utils/localstorageutil";
import CONSTANTS from "@constants/index";
import sidebarData from "@data/sidebardata";
import type { SidebarItem } from "@customTypes/index";

const Index = ({
  sideBarOpen,
  setSideBar,
}: {
  sideBarOpen: boolean;
  setSideBar: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger =
    useRef<HTMLButtonElement | null>(null);
  const sidebar = useRef<HTMLDivElement | null>(
    null,
  );

  const storedSidebarExpanded =
    getLocalStorageValue(
      CONSTANTS.sidebarExpanded,
    );
  const [sidebarExpanded, setSidebarExpanded] =
    useState(
      storedSidebarExpanded === null
        ? false
        : storedSidebarExpanded === "true",
    );

  // close on click outside
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (!sidebar.current || !trigger.current)
        return;

      // `e.target` is of type `EventTarget | null`, so we need to cast it
      const target = e.target as Node;

      if (
        !sideBarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;

      setSideBar(false);
    };

    document.addEventListener(
      "click",
      clickHandler,
    );
    return () =>
      document.removeEventListener(
        "click",
        clickHandler,
      );
  }, [sideBarOpen, setSideBar]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (!sideBarOpen || e.key !== "Escape")
        return;
      setSideBar(false);
    };

    document.addEventListener(
      "keydown",
      keyHandler,
    );
    return () =>
      document.removeEventListener(
        "keydown",
        keyHandler,
      );
  }, []);

  useEffect(() => {
    storeInLocalStorage(
      CONSTANTS.sidebarExpanded,
      sidebarExpanded.toString(),
    );
    if (sidebarExpanded) {
      document
        .querySelector("body")
        ?.classList.add("sidebar-expanded");
    } else {
      document
        .querySelector("body")
        ?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  return (
    <aside
      ref={sidebar}
      className={`bg-primary dark:bg-boxdark absolute top-0 left-0 z-99 flex h-screen w-64 flex-col overflow-y-hidden duration-300 ease-linear lg:static lg:translate-x-0 ${
        sideBarOpen
          ? "translate-x-0"
          : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:justify-center lg:py-6">
        <NavLink to="/">
          <img
            src={logoWhite}
            alt="Logo"
            className="h-24 w-24"
          />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSideBar(!sideBarOpen)}
          aria-controls="sidebar"
          aria-expanded={sideBarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-3 px-2 py-4 lg:mt-3 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {sidebarData?.map(
                (
                  item: SidebarItem,
                  index: number,
                ) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={item.url}
                        className={`group poppins-500 text-light hover:bg-primary-light dark:hover:bg-boxdark2 relative flex items-center gap-2.5 rounded-full px-5 py-3 text-lg duration-300 ease-in-out ${
                          pathname === item.url &&
                          "bg-primary-light dark:bg-boxdark2"
                        }`}
                      >
                        <span className="text-2xl">
                          {item.icon}
                        </span>
                        {item.label}
                      </NavLink>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Index;
