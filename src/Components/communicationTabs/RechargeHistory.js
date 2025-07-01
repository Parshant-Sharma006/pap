/** @format */

"use client";
import { useState } from "react";
import { DateRange } from "react-date-range";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const dummyData = [
  {
    id: 1,
    reference: "REF123",
    paymentId: "PAY987",
    type: "Credit",
    date: "2025-06-20",
    amount: 500,
    status: "Success",
    addedBy: "Admin",
    details: "UPI Payment",
  },
  {
    id: 2,
    reference: "REF456",
    paymentId: "PAY654",
    type: "Debit",
    date: "2025-06-25",
    amount: 1000,
    status: "Failed",
    addedBy: "User",
    details: "Card Declined",
  },
];

export default function Page() {
  const [amountFilter, setAmountFilter] = useState("Custom");
  const [referenceSearch, setReferenceSearch] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [filteredData, setFilteredData] = useState(dummyData);

  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date("2025-05-30"),
      endDate: new Date("2025-06-29"),
      key: "selection",
    },
  ]);

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const handleSearch = () => {
    const result = dummyData.filter((item) => {
      const inDateRange =
        new Date(item.date) >= dateRange[0].startDate &&
        new Date(item.date) <= dateRange[0].endDate;

      const inReference = referenceSearch
        ? item.reference.toLowerCase().includes(referenceSearch.toLowerCase())
        : true;

      const inAmountRange =
        amountFilter !== "Custom"
          ? true
          : (!fromAmount || item.amount >= Number(fromAmount)) &&
            (!toAmount || item.amount <= Number(toAmount));

      return inDateRange && inReference && inAmountRange;
    });

    setFilteredData(result);
  };

  const handleReset = () => {
    setReferenceSearch("");
    setFromAmount("");
    setToAmount("");
    setFilteredData(dummyData);
  };

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Payment Report", 14, 22);

    const tableColumn = [
      "Sh",
      "Reference ID",
      "Payment Id",
      "Transaction Type",
      "Transaction On",
      "Amount",
      "Status",
      "Added By",
      "Payment Details",
    ];

    const tableRows = filteredData.map((item, index) => [
      index + 1,
      item.reference,
      item.paymentId,
      item.type,
      item.date,
      `₹${item.amount}`,
      item.status,
      item.addedBy,
      item.details,
    ]);

    // ✅ Use the imported autoTable plugin directly and pass the doc
    autoTable(doc, {
      startY: 30,
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [22, 160, 133] },
    });

    doc.save("payment-report.pdf");
  };
  
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Filter Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 items-end relative">
        {/* Date */}
        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            readOnly
            value={`${formatDate(dateRange[0].startDate)} - ${formatDate(
              dateRange[0].endDate
            )}`}
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

        {/* Amount Filter */}
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <select
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            value={amountFilter}
            onChange={(e) => setAmountFilter(e.target.value)}
          >
            <option>Custom</option>
            <option>Below 500</option>
            <option>Above 500</option>
          </select>
        </div>

        {/* Reference + Search */}
        <div className="grid grid-cols-2 gap-2">
          <select className="border border-gray-300 rounded-md px-3 py-2">
            <option>Reference #</option>
          </select>
          <input
            type="text"
            placeholder="Search Here..."
            className="border border-gray-300 rounded-md px-4 py-2"
            value={referenceSearch}
            onChange={(e) => setReferenceSearch(e.target.value)}
          />
        </div>

        {/* From & To inputs (conditional) */}
        {amountFilter === "Custom" && (
          <>
            <input
              type="number"
              placeholder="From"
              className="border border-gray-300 rounded-md px-4 py-2"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
            />
            <input
              type="number"
              placeholder="To"
              className="border border-gray-300 rounded-md px-4 py-2"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
            />
          </>
        )}

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-800 transition"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="border border-green-500 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-200 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm font-medium">
            Showing: {filteredData.length} of {dummyData.length} record(s)
          </p>
          <button
            onClick={handleDownload}
            className="bg-green-500 text-white px-4 py-1.5 rounded-md hover:bg-green-800 text-sm"
          >
            Download
          </button>
        </div>

        <div className="overflow-auto">
          <table className="w-full table-auto border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="border px-4 py-2">Sh</th>
                <th className="border px-4 py-2">Reference ID</th>
                <th className="border px-4 py-2">Payment Id</th>
                <th className="border px-4 py-2">Transaction Type</th>
                <th className="border px-4 py-2">Transaction On</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Added By</th>
                <th className="border px-4 py-2">Payment Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-6 text-gray-500">
                    No data available for selected filter(s).
                  </td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{item.reference}</td>
                    <td className="border px-4 py-2">{item.paymentId}</td>
                    <td className="border px-4 py-2">{item.type}</td>
                    <td className="border px-4 py-2">{item.date}</td>
                    <td className="border px-4 py-2">₹{item.amount}</td>
                    <td className="border px-4 py-2">{item.status}</td>
                    <td className="border px-4 py-2">{item.addedBy}</td>
                    <td className="border px-4 py-2">{item.details}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
