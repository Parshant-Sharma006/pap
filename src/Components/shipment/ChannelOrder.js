import React from 'react'
import { useState } from 'react'    


// All orders datas 
const TABS = [
  "Pending",
  "Ready to ship",
  "Reship",
  "Failed",
  "Fulfilled",
  "Cancel Order",
  "All Orders",
  "On Process",
];

const dummyData = {
  Pending: [
    {
      id: "12345",
      store: "Store A",
      product: "Mobile Phone ×1",
      amount: "₹15,000",
      address: "Delhi, India",
      remarks: "Urgent",
      contact: "+91-9876543210",
      date: "21 Jun 2025",
    },
    {
      id: "12346",
      store: "Store B",
      product: "Book ×2",
      amount: "₹500",
      address: "Mumbai, India",
      remarks: "COD",
      contact: "+91-9123456789",
      date: "22 Jun 2025",
    },
  ],
  "Ready to ship": [],
  Reship: [],
  Failed: [],
  Fulfilled: [],
  "Cancel Order": [],
  "All Orders": [],
  "On Process": [],
};
  

const ChannelOrder = () => {
    const [activeChannelOrdersButton, setActiveChannelOrdersButton] =
        useState("AllOrders");
    const channelOrdersButtonsHandler = (channelButtonType) => {
      setActiveChannelOrdersButton(channelButtonType);
    };

    // All orders JS code start
    const [activeTab, setActiveTab] = useState("Pending");
    const [filters, setFilters] = useState({
      dateType: "Fetch Order Date",
      dateRange: "Today",
      searchType: "Order ID",
      searchValue: "",
    });
    const [selectedRows, setSelectedRows] = useState([]);

    const currentData = dummyData[activeTab] || [];

    const isAllSelected =
      currentData.length > 0 && selectedRows.length === currentData.length;

    const toggleSelectAll = () => {
      if (isAllSelected) {
        setSelectedRows([]);
      } else {
        setSelectedRows(currentData.map((_, i) => i));
      }
    };

    const toggleRow = (index) => {
      setSelectedRows((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    };

    const handleChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
      console.log("Filters:", filters);
    };

    const handleReset = () => {
      setFilters({
        dateType: "Fetch Order Date",
        dateRange: "Today",
        searchType: "Order ID",
        searchValue: "",
      });
    };

    const handleExport = () => {
      if (selectedRows.length === 0) return;

      const selectedData = selectedRows.map((i) => currentData[i]);
      const csv =
        "Order ID,Store,Product,Amount,Address,Remarks,Contact,Date\n" +
        selectedData
          .map(
            (row) =>
              `${row.id},${row.store},${row.product},${row.amount},${row.address},${row.remarks},${row.contact},${row.date}`
          )
          .join("\n");

      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${activeTab}-Orders.csv`;
      a.click();
      URL.revokeObjectURL(url);
    };
  
    // All orders JS code end  

    // Channels js code start
        const [activeChannelButton, setActiveChannelButton] =
          useState("AllChannels");
    
        const channelButtonHandler = (processedButtonType) => {
            setActiveChannelButton(processedButtonType);
        };
    // Channels js code end    
  return (
    <div>
      <div className="flex gap-8 border-b-2 border-gray-200 p-2 items-center mt-4 mb-4">
        <div
          onClick={() => channelOrdersButtonsHandler("AllOrders")}
          className={` text-xl cursor-pointer ${
            activeChannelOrdersButton === "AllOrders"
              ? "text-green-900"
              : "text-black opacity-60"
          }`}
        >
          All Orders
        </div>
        <div
          onClick={() => channelOrdersButtonsHandler("Channels")}
          className={` text-xl cursor-pointer ${
            activeChannelOrdersButton === "Channels"
              ? "text-green-900"
              : "text-black opacity-60"
          }`}
        >
          Channels
        </div>
      </div>
      {activeChannelOrdersButton === "AllOrders" && (
        <div>
          {/* All Order items and Table */}
          <div className="p-6 bg-gray-50">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <select
                name="dateType"
                value={filters.dateType}
                onChange={handleChange}
                className="border px-3 py-2 rounded w-52"
              >
                <option>Fetch Order Date</option>
                <option>Order Date</option>
                <option>Delivery Date</option>
              </select>
              <select
                name="dateRange"
                value={filters.dateRange}
                onChange={handleChange}
                className="border px-3 py-2 rounded w-60"
              >
                <option>Today</option>
                <option>Yesterday</option>
                <option>Last 7 Days</option>
                <option>Last 1 Month</option>
                <option>Last Month</option>
              </select>
              <div className="flex items-center gap-2">
                <select
                  name="searchType"
                  value={filters.searchType}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded w-48"
                >
                  <option>Order ID</option>
                  <option>Product SKU</option>
                  <option>Consignment Name</option>
                  <option>Consignment Mobile</option>
                  <option>Consignment Email</option>
                  <option>Pincode</option>
                  <option>Address</option>
                </select>
                <input
                  type="text"
                  name="searchValue"
                  value={filters.searchValue}
                  onChange={handleChange}
                  placeholder="Enter value"
                  className="border px-3 py-2 rounded w-64"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Search
              </button>
              <button
                onClick={handleReset}
                className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50"
              >
                Reset
              </button>
            </div>

            {/* Header and Export */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Channel Orders</h2>
              <button
                onClick={handleExport}
                disabled={selectedRows.length === 0}
                className={`px-4 py-2 rounded ${
                  selectedRows.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                Export
              </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-4 border-b border-gray-200 pb-2">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSelectedRows([]);
                  }}
                  className={`px-2 py-1 border-b-2 ${
                    activeTab === tab
                      ? "border-orange-500 text-orange-500 font-semibold"
                      : "border-transparent text-gray-600 hover:text-orange-500 hover:border-orange-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto border rounded bg-white">
              <table className="min-w-full text-sm border border-gray-300">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="p-3 border border-gray-300">
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={toggleSelectAll}
                      />
                    </th>
                    <th className="p-3 border border-gray-300 text-left">
                      Order Details
                    </th>
                    <th className="p-3 border border-gray-300 text-left">
                      Store Details
                    </th>
                    <th className="p-3 border border-gray-300 text-left">
                      Product Details
                    </th>
                    <th className="p-3 border border-gray-300 text-left">
                      Amount
                    </th>
                    <th className="p-3 border border-gray-300 text-left">
                      Address
                    </th>
                    <th className="p-3 border border-gray-300 text-left">
                      Remarks
                    </th>
                    <th className="p-3 border border-gray-300 text-left">
                      Contact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.length > 0 ? (
                    currentData.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3 border border-gray-300">
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(index)}
                            onChange={() => toggleRow(index)}
                          />
                        </td>
                        <td className="p-3 border border-gray-300">
                          #{item.id} <br /> Placed: {item.date}
                        </td>
                        <td className="p-3 border border-gray-300">
                          {item.store}
                        </td>
                        <td className="p-3 border border-gray-300">
                          {item.product}
                        </td>
                        <td className="p-3 border border-gray-300">
                          {item.amount}
                        </td>
                        <td className="p-3 border border-gray-300">
                          {item.address}
                        </td>
                        <td className="p-3 border border-gray-300">
                          {item.remarks}
                        </td>
                        <td className="p-3 border border-gray-300">
                          {item.contact}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        className="text-center py-6 text-gray-500 border border-gray-300"
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
      )}
      {activeChannelOrdersButton === "Channels" && (
        <div>
          {/* Channels Table */}
          <div>
            {/* Two buttons  */}
            <div className="flex gap-8 border-b-2 border-gray-200 p-2 items-center mt-4 mb-4">
              <div
                onClick={() => channelButtonHandler("AllChannels")}
                className={` text-xl cursor-pointer ${
                  activeChannelButton === "AllChannels"
                    ? "text-green-900"
                    : "text-black opacity-60"
                }`}
              >
                All Channels
              </div>
              <div
                onClick={() => channelButtonHandler("Addnewchannel")}
                className={` text-xl cursor-pointer ${
                  activeChannelButton === "Addnewchannel"
                    ? "text-green-900"
                    : "text-black opacity-60"
                }`}
              >
                Add new channel
              </div>
            </div>
            {activeChannelButton === "Addnewchannel" && (
              <div>
                {/* Forward  Table */}
                <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white rounded-xl p-4">
                  <div className="h-[180px] border border-gray-200 rounded-xl shadow-md flex justify-center items-center">
                    jkrfbejrgkej
                  </div>
                  <div className="h-[180px] border border-gray-200 rounded-xl shadow-md flex justify-center items-center">
                    jkrfbejrgkej
                  </div>
                  <div className="h-[180px] border border-gray-200 rounded-xl shadow-md flex justify-center items-center">
                    jkrfbejrgkej
                  </div>
                  <div className="h-[180px] border border-gray-200 rounded-xl shadow-md flex justify-center items-center">
                    jkrfbejrgkej
                  </div>
                  <div className="h-[180px] border border-gray-200 rounded-xl shadow-md flex justify-center items-center">
                    jkrfbejrgkej
                  </div>
                  <div className="h-[180px] border border-gray-200 rounded-xl shadow-md flex justify-center items-center">
                    jkrfbejrgkej
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChannelOrder
