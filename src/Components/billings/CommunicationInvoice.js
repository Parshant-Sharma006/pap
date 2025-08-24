/** @format */

import React, { useState } from "react";
import { format } from "date-fns";

const dummyData = [
  {
    invoice: "INV-001",
    date: "2025-01-12",
    amount: "$100",
    events: 3,
    settlements: "Settled",
    status: "Paid",
    actions: "View",
  },
  {
    invoice: "INV-002",
    date: "2025-02-05",
    amount: "$200",
    events: 5,
    settlements: "Pending",
    status: "Unpaid",
    actions: "View",
  },
  {
    invoice: "INV-003",
    date: "2025-04-18",
    amount: "$150",
    events: 4,
    settlements: "Settled",
    status: "Paid",
    actions: "View",
  },
];

export default function CommunicationInvoice() {
  const [startDate, setStartDate] = useState("2025-01-06");
  const [endDate, setEndDate] = useState("2025-07-06");

  const filteredData = dummyData.filter((item) => {
    return item.date >= startDate && item.date <= endDate;
  });

  return (
    <div className="p-6 mx-auto  bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Date Filters</h2>
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <span className="text-gray-500">to</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Invoice #</th>
              <th className="p-3 border">Invoice Date</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Event Counts</th>
              <th className="p-3 border">Settlements</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border">{item.invoice}</td>
                  <td className="p-3 border">
                    {format(new Date(item.date), "PPP")}
                  </td>
                  <td className="p-3 border">{item.amount}</td>
                  <td className="p-3 border">{item.events}</td>
                  <td className="p-3 border">{item.settlements}</td>
                  <td className="p-3 border">{item.status}</td>
                  <td className="p-3 border">
                    <button className="text-blue-600 hover:underline">
                      {item.actions}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 border text-center" colSpan="7">
                  No data available in table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


