"use client"
import React, { useState } from "react";
import LabelSetting from "@/Components/settingTabs/LabelSetting";
import SecureYourShipment from "@/Components/settingTabs/SecureYourShipment";
import ManageTeam from "@/Components/settingTabs/ManageTeam";
import InvoiceSettings from "@/Components/settingTabs/InvoiceSettings";




// Main component
const Page = () => {
  const tabs = [
    "Label Setting",
    "Secure Your Shipment",
    "Manage Team",
    "Invoice Settings",
  ];

  const [activeTab, setActiveTab] = useState("Label Setting");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Label Setting":
        return <LabelSetting />;
      case "Secure Your Shipment":
        return  <SecureYourShipment />;
      case "Manage Team":
        return <ManageTeam />;
      case "Invoice Settings":
        return <InvoiceSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow border border-gray-100 mx-auto">
      <h2 className="text-xl font-semibold mb-4 bg-white px-4 py-2 rounded-t-lg shadow-sm w-fit">
        Settings
      </h2>
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
