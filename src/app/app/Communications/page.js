"use client";
import React, { useState } from "react";
import CreditRecharge from "@/Components/communicationTabs/CreditRecharge";
import ChannelsandPrice from "@/Components/communicationTabs/ChannelsandPrice";
import Ledger from "@/Components/communicationTabs/Ledger";
import NDR from "@/Components/communicationTabs/NDR";
import NotificationHistory from "@/Components/communicationTabs/NotificationHistory";
import NotificationSettings from "@/Components/communicationTabs/NotificationSettings";
import RechargeHistory from "@/Components/communicationTabs/RechargeHistory";
import Statistics from "@/Components/communicationTabs/Statistics";

// Main component
const Page = () => {
  const tabs = [
    "Credit Recharge",
    "Recharge History",
    "Notification Settings",
    "Notification History",
    "Channels and Price",
    "Ledger",
    "NDR",
  ];

  const [activeTab, setActiveTab] = useState("Credit Recharge");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Credit Recharge":
        return <CreditRecharge />;
      case "Recharge History":
        return <RechargeHistory />;
      case "Notification Settings":
        return <NotificationSettings />;
      case "Notification History":
        return <NotificationHistory />;
      case "Channels and Price":
        return <ChannelsandPrice />;
      case "Ledger":
        return <Ledger />;
      case "Statistics":
        return <Statistics />;
      case "NDR":
        return <NDR />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center bg-white px-6 py-4 rounded-xl shadow-sm w-full mt-6">
        <span className="font-semibold text-lg text-gray-800">
          Communication Module
        </span>
        <span className="font-medium text-green-600 flex items-center">
          📗 <span className="ml-2">Communication Balance ₹0</span>
        </span>
      </div>

      {/* Tabs */}
      <div className="w-full mt-6">
        <ul className="flex flex-wrap gap-12 border-b border-gray-300 px-4 text-sm font-medium text-gray-700">
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer font-semibold pb-2 ${
                activeTab === tab
                  ? "text-blue-900 border-b-2 border-blue-600"
                  : "hover:text-green-700"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="mt-6 p-4 rounded-md bg-white shadow">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Page;
