/** @format */

import { useState } from "react";

const tabs = ["Order Status", "NDR", "Channel Order Confirmation"];

const tableData = {
  "Order Status": [
    { event: "Packed", sms: "0.2", email: "0.1", whatsapp: "1", ivr: "-" },
    { event: "Pick up", sms: "FREE", email: "FREE", whatsapp: "1", ivr: "-" },
    {
      event: "Shipped (In Transit)",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "-",
    },
    {
      event: "Out for Delivery",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "-",
    },
    { event: "Delivered", sms: "FREE", email: "FREE", whatsapp: "1", ivr: "-" },
  ],
  NDR: [
    {
      event: "Address Incorrect/Wrong",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "0.9",
    },
    {
      event: "Consignee Unavailable",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "0.9",
    },
    {
      event: "Consignee Refused to Accept",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "0.9",
    },
    {
      event: "Requested Future Delivery",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "-",
    },
    {
      event: "ODA/Self Collect",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "-",
    },
    {
      event: "Other Exceptions",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "0.9",
    },
    {
      event: "Address closed / entry restric",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "-",
    },
    {
      event: "Amount not ready",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "0.9",
    },
    {
      event: "Re-validate",
      sms: "0.2",
      email: "0.1",
      whatsapp: "1",
      ivr: "0.9",
    },
  ],
  "Channel Order Confirmation": [
    {
      event: "Confirmation Call",
      sms: "-",
      email: "-",
      whatsapp: "1",
      ivr: "0.9",
    },
  ],
};

export default function NotificationSettings() {
  const [activeTab, setActiveTab] = useState("Order Status");
  const [toggles, setToggles] = useState({});

  const handleToggle = (event, channel) => {
    const key = `${event}-${channel}`;
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderToggle = (event, channel, label) => (
    <div className="flex items-center gap-1">
      <button
        onClick={() => handleToggle(event, channel)}
        className={`w-10 h-5 flex items-center rounded-full p-1 duration-300 ease-in-out ${
          toggles[`${event}-${channel}`]
            ? "bg-orange-500 justify-end"
            : "bg-gray-300 justify-start"
        }`}
      >
        <div className="bg-white w-4 h-4 rounded-full shadow-md"></div>
      </button>
      <span className="text-xs font-medium">{label}</span>
      <span className="text-blue-500 text-xs cursor-pointer ml-1">&#9432;</span>
    </div>
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <p className="mb-4 text-gray-700">
        Your changes have resulted in a deduction of credits.
      </p>

      {/* Tabs */}
      <div className="flex gap-6 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 font-semibold ${
              activeTab === tab
                ? "text-orange-600 border-b-2 border-orange-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-4 overflow-auto bg-white border rounded-xl shadow-sm">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Events</th>
              <th className="border px-4 py-2 text-left">SMS</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">WhatsApp</th>
              <th className="border px-4 py-2 text-left">IVR</th>
            </tr>
          </thead>
          <tbody>
            {tableData[activeTab].map((row, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{row.event}</td>
                <td className="border px-4 py-2">
                  {renderToggle(row.event, "sms", row.sms)}
                </td>
                <td className="border px-4 py-2">
                  {renderToggle(row.event, "email", row.email)}
                </td>
                <td className="border px-4 py-2">
                  {renderToggle(row.event, "whatsapp", row.whatsapp)}
                </td>
                <td className="border px-4 py-2">
                  {renderToggle(row.event, "ivr", row.ivr)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Message */}
      {activeTab === "Channel Order Confirmation" && (
        <div className="mt-4 p-4 border-t text-sm text-red-600 italic">
          Kindly note that if this event is enabled, IVR calls or WhatsApp
          messages will automatically be triggered for channel orders awaiting
          confirmation whenever a new order is synchronized in our application.
        </div>
      )}

      <div className="mt-4 text-right">
        <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
          Set Status
        </button>
      </div>
    </div>
  );
}
