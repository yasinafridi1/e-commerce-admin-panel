import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import type { SidebarItem } from "@/types";


const sidebarData: SidebarItem[] = [
  {
    label: "Dashboard",
    url: "/",
    icon: <MdDashboard />,
  },
  {
    label: "Customer",
    url: "/customers",
    icon: <FaUser />,
  },
  //   {
  //     label: "Invoices",
  //     url: "/invoices",
  //     icon: <FaFileInvoice />,
  //   },
  //   {
  //     label: "Booking",
  //     url: "/bookings",
  //     icon: <BiSolidCalendar />,
  //   },

  //   {
  //     label: "Controllers",
  //     url: "/controllers",
  //     icon: <FaUserShield />,
  //   },
  //   {
  //     label: "Technicians",
  //     url: "/technicians",
  //     icon: <FaUserClock />,
  //   },
  //   {
  //     label: "Services",
  //     url: "/services",
  //     icon: <MdBuild />,
  //   },
  //   {
  //     label: "Categories",
  //     url: "/categories",
  //     icon: <FaListUl />,
  //   },
  //   {
  //     label: "Zones",
  //     url: "/zone",
  //     icon: <IoPieChart />,
  //   },
  //   {
  //     label: "Areas",
  //     url: "/areas",
  //     icon: <FaChartPie />,
  //   },

  //   {
  //     label: "Banners",
  //     url: "/banners",
  //     icon: <FaFileVideo />,
  //   },
  //   {
  //     label: "Queries",
  //     url: "/queries",
  //     icon: <FaCircleQuestion />,
  //   },
  {
    label: "Setting",
    url: "/setting",
    icon: <IoSettings />,
  },
];

export default sidebarData;
