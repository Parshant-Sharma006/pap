/** @format */

import React, { useState } from "react";

const dummyData = [
  {
    invoice: "31898",
    date: "2025-07-01",
    taxable: 33762.93,
    tax: 607.31,
    total: 39840.24,
    shipment: 270,
    paid: 38422.62,
    due: 1417.62,
    status: "Paid",
    paymentDate: "2025-07-05",
    ageing: 0,
    transactionId: "TXN1234",
  },
  {
    invoice: "31899",
    date: "2025-06-18",
    taxable: 20000.0,
    tax: 1800.0,
    total: 21800.0,
    shipment: 120,
    paid: 0,
    due: 21800.0,
    status: "Due",
    paymentDate: "",
    ageing: 18,
    transactionId: "TXN1235",
  },
];

export default function OrdesInvoice() {
  const [startDate, setStartDate] = useState("2025-01-06");
  const [endDate, setEndDate] = useState("2025-07-06");
  const [filterStatus, setFilterStatus] = useState(""); // "Due", "Paid", ""
  const [showAll, setShowAll] = useState(false);

  const filteredData = dummyData.filter((item) => {
    const inRange = item.date >= startDate && item.date <= endDate;
    const statusMatch = filterStatus ? item.status === filterStatus : true;
    return inRange && (showAll || statusMatch);
  });

  const handleDownload = () => {
    const headers = [
      "Invoice #",
      "Invoice Date",
      "Taxable Amount",
      "Tax",
      "Total Amount",
      "Shipment Counts",
      "Paid",
      "Due",
      "Status",
      "Payment Date",
      "Ageing",
      "Payment Transaction ID",
    ];

    const rows = filteredData.map((item) => [
      item.invoice,
      item.date,
      item.taxable.toFixed(2),
      item.tax.toFixed(2),
      item.total.toFixed(2),
      item.shipment,
      item.paid.toFixed(2),
      item.due.toFixed(2),
      item.status,
      item.paymentDate || "-",
      item.ageing,
      item.transactionId,
    ]);

    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "sample-invoice.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 mx-auto space-y-6  bg-white shadow-md rounded-xl">
      {/* Top Controls */}
      <div className="flex flex-wrap items-center gap-4 justify-between">
        <div className="flex items-center gap-2">
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

        <div className="flex gap-2">
          <button
            onClick={() => {
              setFilterStatus("Due");
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded border-2 border-blue-900 cursor-pointer ${
              filterStatus === "Due"
                ? "bg-blue-900 text-white"
                : "bg-blue-300 text-blue-950"
            }`}
          >
            Due
          </button>
          <button
            onClick={() => {
              setFilterStatus("Paid");
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded border-2 border-green-500 cursor-pointer ${
              filterStatus === "Paid"
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-700"
            }`}
          >
            Paid
          </button>
        </div>

        <div className="flex gap-2">
          <label className="cursor-pointer bg-green-100 border-2 border-green-600 text-green-700 px-4 py-2 rounded">
            Choose file
            <input type="file" hidden />
          </label>
          <button
            onClick={handleDownload}
            className="bg-blue-900 cursor-pointer text-white px-4 py-2 rounded"
          >
            Download
          </button>
          <button
            onClick={() => {
              setFilterStatus("");
              setShowAll(true);
            }}
            className="bg-blue-900 cursor-pointer text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>

      {/* No Records / Table */}
      {filteredData.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl">😞</div>
          <p className="text-xl font-semibold mt-4">No records found</p>
        </div>
      ) : (
        <div>
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Invoice #</th>
                <th className="p-2 border">Invoice Date</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Shipment Counts</th>
                <th className="p-2 border">Settlements</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Payment Date</th>
                <th className="p-2 border">Ageing</th>
                <th className="p-2 border">Payment Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="p-2 border">{item.invoice}</td>
                  <td className="p-2 border">{item.date}</td>
                  <td className="p-2 border">
                    <div>Taxable Amt: {item.taxable.toFixed(2)}</div>
                    <div>Tax: {item.tax.toFixed(2)}</div>
                    <div className="font-semibold">
                      Total Amt: {item.total.toFixed(2)}
                    </div>
                  </td>
                  <td className="p-2 border">{item.shipment}</td>
                  <td className="p-2 border">
                    <div>Paid: {item.paid.toFixed(2)}</div>
                    <div>Due: {item.due.toFixed(2)}</div>
                  </td>
                  <td className="p-2 border">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        item.status === "Paid" ? "bg-green-500" : "bg-blue-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-2 border">{item.paymentDate || "-"}</td>
                  <td className="p-2 border">{item.ageing}</td>
                  <td className="p-2 border">{item.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
