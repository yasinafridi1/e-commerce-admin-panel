import { useEffect, useState } from "react";
import {
  Outlet,
  useLocation,
} from "react-router-dom";
import { storeInLocalStorage } from "@utils/localstorageutil";
import CONSTANTS from "@constants/index";
import Sidebar from "@components/sidebar";
import DashboardHeader from "@components/Headers/DashboardHeader";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);
  const location = useLocation();

  useEffect(() => {
    storeInLocalStorage(
      CONSTANTS.location,
      location.pathname,
    );
  }, [location]);

  return (
    <div className="h-screen w-screen">
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar
          sideBarOpen={sidebarOpen}
          setSideBar={setSidebarOpen}
        />
        {/* <!-- ===== Sidebar End ===== --> */}

        <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          <DashboardHeader
            sideBarOpen={sidebarOpen}
            setSideBar={setSidebarOpen}
          />
          <main>
            <div className="mx-auto max-w-screen p-3 md:p-5 2xl:p-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
