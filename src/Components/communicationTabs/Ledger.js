"use client";
// cd; /** @format */

import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Ledger() {
  const [trackingIdType, setTrackingIdType] = useState("Tracking ID");
  const [trackingId, setTrackingId] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [action, setAction] = useState("");
  const [channel, setChannel] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy data for demonstration
  const allData = [
    {
      id: 1,
      orderDetails: "Order #1234",
      trackingDetails: "TRK1234",
      event: "Recharge",
      opn: "100",
      cls: "90",
      amt: "10",
    },
    {
      id: 2,
      orderDetails: "Order #5678",
      trackingDetails: "TRK5678",
      event: "Topup",
      opn: "200",
      cls: "150",
      amt: "50",
    },
  ];

  const filteredData = allData.filter(
    (item) =>
      item.trackingDetails.toLowerCase().includes(trackingId.toLowerCase()) &&
      item.orderDetails.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full mt-4 relative">
      {/* Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow flex flex-wrap gap-4 items-end mb-5 relative">
        {/* Tracking ID with dropdown */}
        <div className="flex-1 flex gap-2">
          <select
            value={trackingIdType}
            onChange={(e) => setTrackingIdType(e.target.value)}
            className="border rounded px-3 py-2"
          >
            <option>Tracking ID</option>
            <option>Order ID</option>
          </select>
          <input
            type="text"
            placeholder="Search Here..."
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Date */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            readOnly
            value={`${format(
              dateRange[0].startDate,
              "MMM dd, yyyy"
            )} - ${format(dateRange[0].endDate, "MMM dd, yyyy")}`}
            onClick={() => setShowCalendar(!showCalendar)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-100 cursor-pointer"
          />
          {showCalendar && (
            <div className="absolute z-50 mt-2">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDateRange([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
              />
            </div>
          )}
        </div>

        {/* Action */}
        <div>
          <label className="block text-sm font-medium mb-1">Action</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value)}
            className="w-full border rounded px-3 py-2"
          >
            <option>Select</option>
            <option>Recharge</option>
            <option>Topup</option>
          </select>
        </div>

        {/* Channels */}
        <div>
          <label className="block text-sm font-medium mb-1">Channels</label>
          <input
            type="text"
            placeholder="Search by Channels..."
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="bg-green-500 cursor-pointer hover:bg-green-800 text-white px-4 py-2 rounded flex items-center gap-2">
            Search
          </button>
          <button
            onClick={() => {
              setTrackingId("");
              setTrackingIdType("Tracking ID");
              setDateRange([
                {
                  startDate: new Date(),
                  endDate: new Date(),
                  key: "selection",
                },
              ]);
              setAction("");
              setChannel("");
              setSearchQuery("");
            }}
            className="border border-green-500 cursor-pointer text-green-500 hover:bg-green-200 px-4 py-2 rounded flex items-center gap-2"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="bg-white p-6 rounded-lg shadow ">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold">Ledger</h2>
          </div>
          <button className="bg-green-500 cursor-pointer hover:bg-green-800 text-white px-4 py-2 rounded flex items-center gap-2">
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">SH</th>
                <th className="px-4 py-2 border">Order Details</th>
                <th className="px-4 py-2 border">Tracking Details</th>
                <th className="px-4 py-2 border">Event</th>
                <th className="px-4 py-2 border">OPN.</th>
                <th className="px-4 py-2 border">CLS.</th>
                <th className="px-4 py-2 border">AMT.</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{item.id}</td>
                    <td className="px-4 py-2 border">{item.orderDetails}</td>
                    <td className="px-4 py-2 border">{item.trackingDetails}</td>
                    <td className="px-4 py-2 border">{item.event}</td>
                    <td className="px-4 py-2 border">{item.opn}</td>
                    <td className="px-4 py-2 border">{item.cls}</td>
                    <td className="px-4 py-2 border">{item.amt}</td>
                    <td className="px-4 py-2 border">
                      <button className="text-blue-600 underline">View</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={8}
                    className="text-center px-4 py-8 border text-gray-500"
                  >
                    No data available in table
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
