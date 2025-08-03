"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// React Icons (Grouped by source)
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
  FaHome,
  FaIdCard,
  FaLock,
  FaFileContract,
  FaSignOutAlt,
} from "react-icons/fa";

import { MdOutlineLocalShipping, MdVerified } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

// Fonts and Styles
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";

// Providers and UI
import ReduxProvider from "@/redux/provider";
import { Toaster } from "react-hot-toast";

// Others
import { set } from "date-fns";

// === Font Setup ===
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// === Sidebar Configuration ===
const tapperElements = {
  "aap/Dashboard": { label: "Dashboard", icon: <FaTachometerAlt /> },
  "app/AddOrders": { label: "Add Orders", icon: <FaPlus /> },
  "app/Shipment": { label: "Shipment", icon: <MdOutlineLocalShipping /> },
  "app/Wallet": { label: "Wallet", icon: <FaWallet /> },
  "app/NDR": { label: "NDR", icon: <BsClipboardCheck /> },
  "app/Reports": { label: "Reports", icon: <FaChartBar /> },
  "app/Billings": { label: "Billings", icon: <FaFileAlt /> },
  "app/Utilities": { label: "Utilities", icon: <FaTools /> },
  "app/Communications": { label: "Communications", icon: <FaComments /> },
  "app/Tickets": { label: "Tickets", icon: <FaTicketAlt /> },
  "app/Setting": { label: "Setting", icon: <AiFillSetting /> },
  "app/Profile": {
    label: "Profile",
    icon: <FaUser />,
  },
};

// === Main Root Layout ===
export default function RootLayout({ children }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const value = document.cookie;
    setValue(value);
  }, []);
  const getCookie = (name) => {
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const token = getCookie("token");

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <ReduxProvider>
        <div className="flex h-screen">
          {<Sidebar />}
          <main className="flex-1 flex flex-col">
            {<Navbar />}
            <section className="bg-gray-100 flex-1 overflow-auto">
              {children}
            </section>
          </main>
        </div>
      </ReduxProvider>
    </>
  );
}

// === Navbar ===
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  const handleAccountsClick = () => {
    setIsOpen(!isOpen);
  };
  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative ">
      <nav
        className="bg-white shadow px-4 py-3 flex gap-4 items-center justify-end"
        ref={dropdownRef}
      >
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
        <button
          onClick={handleAccountsClick}
          className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          <FaUser /> Accounts
        </button>
      </nav>
      {/* User Account Dropdown Menu */}

      {isOpen && (
        <div className="absolute right-4 mt-0 w-64 bg-white rounded-md shadow-xl z-50">
          <div className=" bg-blue-900 text-white p-3 font-semibold text-[11px] leading-tight rounded-t-md">
            GAURAV EXPRESS LOGISTIC SERVICES
            <div className="text-[11px] text-green-600 font-semibold mt-1">
              GAURAV EXPRESS FARIDABAD
            </div>
          </div>
          <ul className="text-gray-700 text-[13px] divide-y divide-gray-200">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
              >
                <FaUser /> Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
              >
                <FaHome /> DC Addresses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
              >
                <MdVerified className="text-green-500" /> KYC
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
              >
                <FaLock /> Change Password
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
              >
                <FaFileContract /> Term & Conditions
              </a>
            </li>
          </ul>
          <button className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-b-md">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
// === Sidebar ===
function Sidebar() {
  const pathname = usePathname();
  const current = pathname.split("/")[1] || "Dashboard";

  return (
    <aside className="w-40 bg-gray-800 text-white p-4 scrollbar-hide overflow-y-auto">
      <h2 className="text-xl font-bold mb-6">
        <img src="/CustomerPannelImages/CustomerPannel/logoo.png" alt="Logo" />
      </h2>
      <ul className="space-y-2">
        {Object.entries(tapperElements).map(([key, item]) => (
          <li key={key}>
            <Link
              href={`/${key}`}
              className={`cursor-pointer p-2 rounded flex flex-col items-center gap-2 ${
                current.toLowerCase() === key.toLowerCase()
                  ? "bg-gray-600"
                  : "hover:bg-gray-700"
              }`}
            >
              <div className="text-4xl">{item.icon}</div>
              <div className="text-[12px] font-semibold">{item.label}</div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
