"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaPlus,
  FaWallet,
  FaFileAlt,
  FaChartBar,
  FaTools,
  FaComments,
  FaTicketAlt,
  FaUser,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

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
  Dashboard: { label: "Dashboard", icon: <FaTachometerAlt /> },
  AddOrders: { label: "Add Orders", icon: <FaPlus /> },
  Shipment: { label: "Shipment", icon: <MdOutlineLocalShipping /> },
  Wallet: { label: "Wallet", icon: <FaWallet /> },
  NDR: { label: "NDR", icon: <BsClipboardCheck /> },
  Reports: { label: "Reports", icon: <FaChartBar /> },
  Billings: { label: "Billings", icon: <FaFileAlt /> },
  Utilities: { label: "Utilities", icon: <FaTools /> },
  Communications: { label: "Communications", icon: <FaComments /> },
  Tickets: { label: "Tickets", icon: <FaTicketAlt /> },
  Setting: { label: "Setting", icon: <AiFillSetting /> },
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
        <html lang="en">
          <body>
            <ReduxProvider>
              <div className="flex h-screen">
                <main className="flex-1 flex flex-col">
                  <section className="bg-gray-100 flex-1 overflow-auto">
                    {children}
                  </section>
                </main>
              </div>
            </ReduxProvider>
          </body>
        </html>
    </>
  );
}

// === Navbar ===
function Navbar() {
  return (
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
