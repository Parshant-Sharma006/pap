"use client";

/** @format */

import { useState } from "react";
import { Download, Info } from "lucide-react";

const sampleData = [
  {
    orderId: "13013535",
    date: "2025-06-28T13:38:00",
    courier: "DTDC",
    trackingId: "7X105750178",
    invoice: "SUMIT SHARMA",
    sku: "DOCUMENT",
    qty: 1,
    amount: 220.0,
    status: "Manifested",
    addressTitle: "GAURAV EXPRESS LOGISTIC SERVICE GREEN FIELD - 121010",
    addressDetails:
      "ERP Force India, 52 AC Banerjee Road Ariadaha,Dakshineshwar Kolkata, Kolkata, West Bengal-700057",
    phone: "8450069724",
    tab: "Manifested",
  },
  {
    orderId: "13010232",
    date: "2025-06-28T12:21:00",
    courier: "DTDC",
    trackingId: "7X105750138",
    invoice: "SKYSA INDIA",
    sku: "DOCUMENT",
    qty: 1,
    amount: 120.0,
    status: "Manifested",
    addressTitle: "GAURAV EXPRESS LOGISTIC SERVICE GREEN FIELD - 121010",
    addressDetails:
      "MR. SAILENDRA PAWAR NEW PHALTAN SUGAR WORKS DISTILLERY DIVISION PVT LTD NO.476/477..., Phaltan, Maharashtra-415523",
    phone: "9552115544",
    tab: "Manifested",
  },
];

const tabs = [
  "All",
  "Booked",
  "Manifested",
  "Picked",
  "In Transit",
  "Dispatched",
  "NDR",
  "Delivered",
  "RTO",
  "RTS",
  "Cancelled",
  "Lost",
];

export default function ShipmentDashboard() {
  const [selectedFields, setSelectedFields] = useState({});
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [activeTab, setActiveTab] = useState("All");
  const [express, setExpress] = useState("");
  const [type, setType] = useState("");
  const [insurance, setInsurance] = useState("");
  const [placement, setPlacement] = useState("");
  const [tracking, setTracking] = useState("");

  const fields = {
    weightDetails: [
      "Length x Breadth x Height",
      "Item Weight",
      "Volumetric Dimensions",
      "Charged Weight",
      "Updated Weight",
    ],
    masterChildDetails: [
      "Is MPS?",
      "Master / Child status",
      "Master / child waybill",
      "Dimension and Weight",
      "Number of child waybills",
    ],
    shipmentEventDates: [
      "First Attempt Date",
      "Last Attempt Date",
      "RTO Marked Date",
      "RTO Delivered Date",
      "First NDR Remark",
      "Last NDR Remark",
    ],
    others: [
      "IS NDD",
      "Zone",
      "Delivery TAT",
      "RTO Reason",
      "Attempt Counts",
      "COD TRN",
      "Shipping Charges",
    ],
  };

  const toggleField = (field) => {
    setSelectedFields((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const filteredData = sampleData.filter((item) => {
    return (
      (activeTab === "All" || item.tab === activeTab) &&
      (tracking === "" || item.trackingId.includes(tracking))
    );
  });

  return (
    <div className="w-full p-4">
      <div className="w-full p-6 bg-white shadow-md rounded-xl mb-6">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-green-700 text-white px-4 py-2 rounded flex items-center">
            <Download className="w-4 h-4 mr-2" /> Download
          </button>
          <div className="flex gap-6">
            <input
              type="file"
              className="border-2 border-dashed border-green-700 rounded px-2 py-1"
            />
            <button className="bg-green-700 text-white px-4 py-2 rounded">
              Upload
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-4">
          {Object.entries(fields).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-bold text-blue-800 mb-2 capitalize  border-b-2 border-green-950">
                {group.replace(/([A-Z])/g, " $1")}
              </h3>
              {items.map((item) => (
                <div key={item} className="flex items-center space-x-2 mb-1">
                  <input
                    type="checkbox"
                    id={item}
                    checked={!!selectedFields[item]}
                    onChange={() => toggleField(item)}
                    className="w-4 h-4 text-green-950"
                  />
                  <label htmlFor={item}>{item}</label>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <select
            onChange={(e) => setExpress(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          >
            <option value="">Search by Express</option>
            <option value="DHL">DHL</option>
            <option value="FedEx">FedEx</option>
            <option value="Blue Dart">Blue Dart</option>
          </select>
          <select
            onChange={(e) => setType(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          >
            <option value="">Search by Shipment Type</option>
            <option value="Express">Express</option>
            <option value="Standard">Standard</option>
          </select>
          <select
            onChange={(e) => setInsurance(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          >
            <option value="">Search by Insurance</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <select
            onChange={(e) => setPlacement(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          >
            <option value="">Placed</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        <div className="flex gap-6 mb-4">
          <input
            type="text"
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            placeholder="Tracking ID"
            className="border px-3 py-2 rounded w-64"
          />
          Start Date:
          <input
            type="date"
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, start: e.target.value }))
            }
            className="border px-3 py-2 rounded"
          />
          End Date:
          <input
            type="date"
            onChange={(e) =>
              setDateRange((prev) => ({ ...prev, end: e.target.value }))
            }
            className="border px-3 py-2 rounded"
          />
          <button className="bg-green-700 hover:bg-green-950 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>
      </div>

      <div className="w-full p-6 bg-white shadow-md rounded-xl">
        <div className="flex flex-wrap gap-2 my-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`border text-sm px-3 py-1 rounded ${
                activeTab === tab
                  ? "bg-green-950 text-white"
                  : " border-2 border-green-700"
              }`}
            >
              {tab} (
              {sampleData.filter((d) => tab === "All" || d.tab === tab).length})
            </button>
          ))}
        </div>
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="p-2 border">Order Details</th>
                <th className="p-2 border">Tracking Details</th>
                <th className="p-2 border">Product Details</th>
                <th className="p-2 border">Amount Details</th>
                <th className="p-2 border">Current Status</th>
                <th className="p-2 border">Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-2">
                    <div className="text-sm">
                      {new Date(item.date).toLocaleString()}
                    </div>
                    <div className="text-blue-700 font-bold cursor-pointer">
                      {item.orderId}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="font-semibold">{item.courier}</div>
                    <div className="text-blue-700 font-semibold cursor-pointer">
                      {item.trackingId}
                    </div>
                    <div className="text-xs">Invoice No.: {item.invoice}</div>
                  </td>
                  <td className="p-2">
                    <div>
                      SKU: <span className="font-semibold">{item.sku}</span>
                    </div>
                    <div>QTY: {item.qty}</div>
                  </td>
                  <td className="p-2">
                    <div className="bg-blue-200 text-blue-800 inline-block px-2 py-1 rounded text-xs font-bold mb-1">
                      PPD
                    </div>
                    <div>{item.amount.toFixed(2)}</div>
                  </td>
                  <td className="p-2">
                    <div className="bg-green-200 text-green-800 inline-block px-2 py-1 rounded text-xs font-bold mb-1">
                      {item.status}
                    </div>
                    <div>{new Date(item.date).toLocaleTimeString()}</div>
                  </td>
                  <td className="p-2">
                    <div className="font-semibold">{item.addressTitle}</div>
                    <div> {item.addressDetails}</div>
                    <div>
                      <span className="text-blue-700 font-medium">
                        {item.phone}
                      </span>
                    </div>
                    <div className="text-right">
                      <Info className="inline w-4 h-4 text-gray-500" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
