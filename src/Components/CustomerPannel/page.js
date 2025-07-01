/** @format */

"use client";
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaPlus,
  FaTruck,
  FaWallet,
  FaFileAlt,
  FaChartBar,
  FaTools,
  FaCogs,
  FaComments,
  FaTicketAlt,
  FaUserCog,
  FaMoneyCheckAlt,
  FaUser,
} from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineLocalShipping } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

import AddOrders from "../../app/AddOrders/page";
import Shipment from "../../app/Shipment/page";
import Dashboard from "../../app/Dashboard/page";
import Reports from "../../app/Reports/page";
import Utilities from "../../app/Utilities/page";
import Setting from "../../app/Setting/page";
import NDR from "../../app/NDR/page";
import Billings from "../../app/Billings/page";
import Communications from "../../app/Communications/page";
import Tickets from "../../app/Tickets/page";
import Wallet from "../../app/Wallet/page";

// import AddOrders from "../../app/AddOrders/page";
// import Shipment from "../../app/Shipment/page";
// import Dashboard from "../../app/Dashboard/page";
// import Reports from "../../app/Reports/page";
// import Utilities from "../../app/Utilities/page";
// import Setting from "../../app/Setting/page";
// import NDR from "../../app/NDR/page";
// import Billings from "../../app/Billings/page";
// import Communications from "../../app/Communications/page";
// import Tickets from "../../app/Tickets/page";
// import Wallet from "../../app/Wallet/page";

const tapperElements = {
  Dashboard: {
    label: "Dashboard",
    icon: <FaTachometerAlt />,
    component: <Dashboard />,
  },
  AddOrders: {
    label: "Add Orders",
    icon: <FaPlus />,
    component: <AddOrders />,
  },
  Shipment: {
    label: "Shipment",
    icon: <MdOutlineLocalShipping />,
    component: <Shipment />,
  },
  Wallet: { label: "Wallet", icon: <FaWallet />, component: <Wallet /> },
  NDR: { label: "NDR", icon: <BsClipboardCheck />, component: <NDR /> },
  Reports: { label: "Reports", icon: <FaChartBar />, component: <Reports /> },
  Billings: { label: "Billings", icon: <FaFileAlt />, component: <Billings /> },
  Utilities: {
    label: "Utilities",
    icon: <FaTools />,
    component: <Utilities />,
  },
  Communications: {
    label: "Communications",
    icon: <FaComments />,
    component: <Communications />,
  },
  Tickets: { label: "Tickets", icon: <FaTicketAlt />, component: <Tickets /> },
  Setting: {
    label: "Setting",
    icon: <AiFillSetting />,
    component: <Setting />,
  },
};

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Data Section */}
        <Outlet selectedTab={selectedTab} />
      </main>
    </div>
  );
};

export default Page;

function Navbar() {
  return (
    <>
      <nav className="bg-white shadow px-4 py-3 flex gap-4 items-center justify-end">
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <FaTicketAlt /> Tickets
        </button>
        <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          <FaWallet /> Wallet Cash
        </button>
        <button className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
          <FaMoneyCheckAlt />
          Pay Now
        </button>
        <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          <FaUser /> Accounts
        </button>
      </nav>
    </>
  );
}

function Sidebar({ setSelectedTab, selectedTab }) {
  return (
    <aside className="w-40 bg-gray-800 text-white p-4 scrollbar-hide overflow-y-auto">
      <h2 className="text-xl font-bold mb-6">
        <img src={"./CustomerPannelImages/CustomerPannel/logoo.png"}></img>
      </h2>
      <ul className="space-y-2">
        {Object.keys(tapperElements).map((item) => (
          <li
            key={item}
            onClick={() => setSelectedTab(item)}
            className={`cursor-pointer p-2 rounded flex flex-col items-center gap-2 ${
              selectedTab === item ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            <div className="text-4xl">{tapperElements[item].icon}</div>
            <div className="text-[12px] font-semibold ">
              {tapperElements[item].label}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Outlet({ selectedTab }) {
  return (
    <>
      <section className="p-5 bg-gray-100 flex-1 overflow-auto">
        {/* <h1 className="text-2xl font-semibold mb-4">{selectedTab}</h1> */}
        {tapperElements[selectedTab].component}
      </section>
    </>
  );
}
