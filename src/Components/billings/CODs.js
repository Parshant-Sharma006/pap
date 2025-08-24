import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";


import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const dummyData = [
  {
    codTrn: "COD1001",
    codDate: "2025-07-01",
    awbCount: 5,
    amount: 1200,
    refund: 0,
    rtoReversal: 0,
    adjustWallet: 100,
    advancePaid: 0,
    invoiceAdjusted: 0,
    partialHold: 0,
    netPayable: 1100,
    transactionId: "TXN9988",
    status: "Settled",
    remittedAdjusted: "Yes",
  },
  {
    codTrn: "COD1002",
    codDate: "2025-07-05",
    awbCount: 3,
    amount: 600,
    refund: 50,
    rtoReversal: 30,
    adjustWallet: 20,
    advancePaid: 0,
    invoiceAdjusted: 0,
    partialHold: 0,
    netPayable: 500,
    transactionId: "TXN9989",
    status: "Settled",
    remittedAdjusted: "No",
  },
  {
    codTrn: "COD1003",
    codDate: "2025-06-29",
    awbCount: 2,
    amount: 400,
    refund: 0,
    rtoReversal: 0,
    adjustWallet: 0,
    advancePaid: 0,
    invoiceAdjusted: 0,
    partialHold: 0,
    netPayable: 400,
    transactionId: "TXN9990",
    status: "Settled",
    remittedAdjusted: "Yes",
  },
];

const generatedData = [
  {
    date: "21-Jun-2025",
    amount: 1650,
    orders: 1,
  },
];

const remittedData = [
  {
    date: "10-Jun-2025",
    amount: 1200,
    orders: 3,
  },
  {
    date: "15-Jun-2025",
    amount: 800,
    orders: 2,
  },
  {
    date: "18-Jun-2025",
    amount: 1450,
    orders: 4,
  },
];

export default function CODs() {

    // Top Data and Filters charts js start
  const [activeTab, setActiveTab] = useState("Generated");
  const [dateRange, setDateRange] = useState({
    start: "2025-07-01",
    end: "2025-07-06",
  });

  const getChartData = () => {
    if (activeTab === "Generated") return generatedData;
    if (activeTab === "Remitted") return remittedData;
    return [];
  };
  const chartData = getChartData();
//   Top Data and Filters charts js end


    // Bottom table and Filters js start
    const [startDate, setStartDate] = useState("2025-07-01");
    const [endDate, setEndDate] = useState("2025-07-06");
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = () => {
      const filtered = dummyData.filter(
        (item) => item.codDate >= startDate && item.codDate <= endDate
      );
      setFilteredData(filtered);
    };

    const exportToExcel = () => {
      const ws = XLSX.utils.json_to_sheet(filteredData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "COD Data");
      const excelBuffer = XLSX.write(wb, {
        bookType: "xlsx",
        type: "array",
      });
      const data = new Blob([excelBuffer], {
        type: "application/octet-stream",
      });
      saveAs(data, "TRN_COD_Export.xlsx");
    };
    // Bottom table and Filters js end  

  return (
    <div>
      {/* Top Data and Filters charts */}
      <div className="p-6 space-y-6  bg-white shadow-md rounded-xl">
        {/* Top Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Date Picker */}
          <div>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) =>
                setDateRange({ ...dateRange, start: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
            <span className="mx-2">-</span>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) =>
                setDateRange({ ...dateRange, end: e.target.value })
              }
              className="border px-3 py-2 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("Remitted")}
              className={`px-4 py-2 rounded border-2 ${
                activeTab === "Remitted"
                  ? "bg-green-500 text-white"
                  : "bg-white text-green-600 border-green-500"
              }`}
            >
              Remitted
            </button>
            <button
              onClick={() => setActiveTab("Generated")}
              className={`px-4 py-2 rounded border-2 ${
                activeTab === "Generated"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 border-blue-600"
              }`}
            >
              Generated
            </button>
            <button
              onClick={() => setActiveTab("Accruing")}
              className={`px-4 py-2 rounded border-2 ${
                activeTab === "Accruing"
                  ? "bg-blue-100 text-blue-700 border-blue-500"
                  : "bg-white text-blue-600 border-blue-400"
              }`}
            >
              Accruing
            </button>
          </div>

          {/* Dropdown + Upload + Download + Submit */}
          <div className="flex gap-2 items-center">
            <select className="border px-3 py-2 rounded">
              <option>Px order ID</option>
              <option>Ref ID</option>
              <option>COD TRN</option>
            </select>
            <label className="cursor-pointer  border-2 border-green-600 px-4 py-2 rounded text-green-700">
              ⬆ Choose file
              <input type="file" hidden />
            </label>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </div>

        {/* Chart or No Data */}
        <div className="bg-white border rounded p-4">
          {chartData.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl text-orange-500">😞</div>
              <p className="mt-4 text-xl font-semibold">No records found</p>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="date" />
                <YAxis tickFormatter={(val) => `₹${val}`} />
                <Tooltip formatter={(value, name) => [`₹${value}`, name]} />
                <Legend />
                <Bar dataKey="amount" fill="#3B82F6" name="Amount ₹" />
                <Bar dataKey="orders" fill="#93C5FD" name="Orders" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Chart Footer */}
        <div className="text-right text-xs text-gray-500">
          <span className="inline-block w-3 h-3 bg-blue-100 mr-1"></span>{" "}
          Generated COD Generation Cycle Date
        </div>
      </div>

      {/* Bottom table and Filters */}
      <div className="p-6 space-y-6  bg-white shadow-md rounded-xl mt-6">
        {/* Top Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Date Type</label>
            <select className="border px-3 py-2 rounded">
              <option>Settled On</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Date Filters</label>
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

          <button
            onClick={handleSearch}
            className="bg-blue-600 cursor-pointer hover:bg-blue-800 text-white px-4 py-2 rounded"
          >
            Search
          </button>

          <button
            onClick={exportToExcel}
            className=" bg-green-700 cursor-pointer hover:bg-green-800 text-white px-4 py-2 rounded"
          >
            Download
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">
                  <input type="checkbox" />
                </th>
                <th className="p-2 border">COD TRN</th>
                <th className="p-2 border">COD Date</th>
                <th className="p-2 border">AWB Count</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Refund</th>
                <th className="p-2 border">Delivered to RTO Reversal</th>
                <th className="p-2 border">Adjust In Wallet</th>
                <th className="p-2 border">Advance Paid/Excess Paid</th>
                <th className="p-2 border">Invoice Adjusted</th>
                <th className="p-2 border">Partial Hold</th>
                <th className="p-2 border">Net Payable</th>
                <th className="p-2 border">Transaction ID / Remarks</th>
                <th className="p-2 border">Remitted/Adjusted</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="15" className="text-center py-4">
                    No data available in table
                  </td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border">
                      <input type="checkbox" />
                    </td>
                    <td className="p-2 border">{item.codTrn}</td>
                    <td className="p-2 border">{item.codDate}</td>
                    <td className="p-2 border">{item.awbCount}</td>
                    <td className="p-2 border">₹{item.amount}</td>
                    <td className="p-2 border">₹{item.refund}</td>
                    <td className="p-2 border">₹{item.rtoReversal}</td>
                    <td className="p-2 border">₹{item.adjustWallet}</td>
                    <td className="p-2 border">₹{item.advancePaid}</td>
                    <td className="p-2 border">₹{item.invoiceAdjusted}</td>
                    <td className="p-2 border">₹{item.partialHold}</td>
                    <td className="p-2 border">₹{item.netPayable}</td>
                    <td className="p-2 border">{item.transactionId}</td>
                    <td className="p-2 border">{item.remittedAdjusted}</td>
                    <td className="p-2 border">{item.status}</td>
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


