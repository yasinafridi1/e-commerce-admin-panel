import { MdDashboard } from "react-icons/md";
import { FaListUl, FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import type { SidebarItem } from "@customTypes/index";
import { GiJigsawBox } from "react-icons/gi";
import { BiSolidCalendar } from "react-icons/bi";
import { BsCreditCardFill } from "react-icons/bs";

const sidebarData: SidebarItem[] = [
  {
    label: "Dashboard",
    url: "/",
    icon: <MdDashboard />,
  },
  {
    label: "Orders",
    url: "/orders",
    icon: <BiSolidCalendar />,
  },
  {
    label: "Customer",
    url: "/customers",
    icon: <FaUser />,
  },
  {
    label: "Products",
    url: "/products",
    icon: <GiJigsawBox />,
  },
  {
    label: "Categories",
    url: "/categories",
    icon: <FaListUl />,
  },
  {
    label: "Payment",
    url: "/payments",
    icon: <BsCreditCardFill />,
  },
  {
    label: "Setting",
    url: "/setting",
    icon: <IoSettings />,
  },

  //   {
  //     label: "Invoices",
  //     url: "/invoices",
  //     icon: <FaFileInvoice />,
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
];

export default sidebarData;
