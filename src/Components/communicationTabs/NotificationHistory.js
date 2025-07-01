/** @format */
import { useState } from "react";
import { FiEye } from "react-icons/fi";

const tabs = ["SMS", "Email"];

const dummyData = {
  SMS: [
    {
      orderId: "11112233",
      date: "28 Jun'25 | 10:30 am",
      trackingCompany: "BlueDart",
      trackingId: "BD99887766",
      channelOrderId: "CH001",
      email: "rahul@example.com",
      name: "RAHUL SHARMA",
      phone: "9876543210",
      address: "Mumbai - 400001",
      eventTime: "28 Jun'25 | 14:00 pm",
      status: "SMS Delivered",
      action: "Debit",
      credits: 1,
      orderType: "Manual Order",
      eventCategory: "Order Status",
      eventName: "Shipment Picked Up",
    },
  ],
  Email: [
    {
      orderId: "22223344",
      date: "29 Jun'25 | 09:00 am",
      trackingCompany: "Ecom Express",
      trackingId: "EC55667788",
      channelOrderId: "CH002",
      email: "anita@example.com",
      name: "ANITA VERMA",
      phone: "9988776655",
      address: "Chennai - 600001",
      eventTime: "29 Jun'25 | 17:30 pm",
      status: "Email Sent",
      action: "Debit",
      credits: 2,
      orderType: "Channel Order",
      eventCategory: "NDR",
      eventName: "Shipment Delivered",
    },
  ],
};

export default function NotificationHistory() {
  const [activeTab, setActiveTab] = useState("SMS");
  const [filters, setFilters] = useState({
    orderType: "",
    dateRange: "",
    searchType: "",
    searchValue: "",
    eventCategory: "",
    eventName: "",
  });
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {
    const {
      orderType,
      dateRange,
      searchType,
      searchValue,
      eventCategory,
      eventName,
    } = filters;

    if (
      !orderType ||
      !dateRange ||
      !searchType ||
      !searchValue ||
      !eventCategory ||
      !eventName
    ) {
      alert("Please fill all filter fields before searching.");
      return;
    }

    const [startDate, endDate] = dateRange
      .split("-")
      .map((d) => new Date(d.trim()));

    const data = dummyData[activeTab];
    const result = data.filter((item) => {
      const itemDate = new Date(item.date.split("|")[0].trim());
      const inRange = itemDate >= startDate && itemDate <= endDate;

      const matchesSearch = item[searchType]
        ?.toLowerCase()
        .includes(searchValue.toLowerCase());

      return (
        item.orderType === orderType &&
        inRange &&
        matchesSearch &&
        item.eventCategory === eventCategory &&
        item.eventName === eventName
      );
    });

    setFilteredData(result);
  };

  const exportCSV = () => {
    const data = filteredData.length ? filteredData : dummyData[activeTab];
    const csv = [
      [
        "Order ID",
        "Date",
        "Tracking Company",
        "Tracking ID",
        "Name",
        "Phone",
        "Address",
        "Event Time",
        "Status",
        "Action",
        "Credits",
      ],
      ...data.map((row) => [
        row.orderId,
        row.date,
        row.trackingCompany,
        row.trackingId,
        row.name,
        row.phone,
        row.address,
        row.eventTime,
        row.status,
        row.action,
        row.credits,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", `${activeTab}_notifications.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <select
          className="p-2 border rounded"
          onChange={(e) =>
            setFilters({ ...filters, orderType: e.target.value })
          }
        >
          <option value="">Select Order Type</option>
          <option value="Manual Order">Manual Order</option>
          <option value="Channel Order">Channel Order</option>
        </select>

        <input
          type="text"
          className="p-2 border rounded"
          placeholder="June 28, 2025 - June 29, 2025"
          onChange={(e) =>
            setFilters({ ...filters, dateRange: e.target.value })
          }
        />

        <select
          className="p-2 border rounded"
          onChange={(e) =>
            setFilters({ ...filters, searchType: e.target.value })
          }
        >
          <option value="">Select Search Type</option>
          <option value="trackingId">Tracking ID</option>
          <option value="orderId">Order ID</option>
          <option value="channelOrderId">Channel Order ID</option>
          <option value="name">Consignee Name</option>
          <option value="email">Consignee Email</option>
        </select>

        <input
          type="text"
          className="p-2 border rounded"
          placeholder="Enter Value"
          onChange={(e) =>
            setFilters({ ...filters, searchValue: e.target.value })
          }
        />

        <select
          className="p-2 border rounded"
          onChange={(e) =>
            setFilters({ ...filters, eventCategory: e.target.value })
          }
        >
          <option value="">Select Event Category</option>
          <option value="Order Status">Order Status</option>
          <option value="NDR">NDR</option>
          <option value="Channel Order Confirmation">
            Channel Order Confirmation
          </option>
        </select>

        <input
          type="text"
          className="p-2 border rounded"
          placeholder="Event Name"
          onChange={(e) =>
            setFilters({ ...filters, eventName: e.target.value })
          }
        />

        <button
          onClick={handleSearch}
          className="p-2 bg-green-700 text-white rounded"
        >
          Search
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b text-sm font-semibold mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 transition border-b-2 ${
              activeTab === tab
                ? "text-green-700 border-green-700"
                : "text-gray-600 border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-4 bg-white border rounded-lg overflow-auto">
        <div className="flex justify-between items-center p-4">
          <span className="font-semibold text-lg">Notifications History</span>
          <button
            onClick={exportCSV}
            className="bg-green-700 text-white px-4 py-1 rounded-md hover:bg-green-800"
          >
            💾 Export
          </button>
        </div>
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-2">#</th>
              <th className="border px-2 py-2">Order Details</th>
              <th className="border px-2 py-2">Tracking Details</th>
              <th className="border px-2 py-2">Consignee Details</th>
              <th className="border px-2 py-2">Event</th>
              <th className="border px-2 py-2">Status</th>
              <th className="border px-2 py-2">Action</th>
              <th className="border px-2 py-2">Credits</th>
            </tr>
          </thead>
          <tbody>
            {(filteredData.length ? filteredData : []).map((row, i) => (
              <tr key={i} className="text-center">
                <td className="border px-2 py-2">{i + 1}</td>
                <td className="border px-2 py-2 text-left">
                  <div>{row.date}</div>
                  <div className="text-green-700 font-semibold">
                    {row.orderId}
                  </div>
                </td>
                <td className="border px-2 py-2 text-left">
                  <div className="font-semibold">{row.trackingCompany}</div>
                  <div className="text-green-700 font-semibold">
                    {row.trackingId}
                  </div>
                </td>
                <td className="border px-2 py-2 text-left">
                  <div className="font-semibold uppercase">{row.name}</div>
                  <div className="text-green-700">{row.phone}</div>
                  <div className="whitespace-pre-line">{row.address}</div>
                </td>
                <td className="border px-2 py-2">
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                    {row.eventCategory}
                  </span>
                  <div>{row.eventTime}</div>
                </td>
                <td className="border px-2 py-2">
                  {row.status}
                  <div className="text-green-700 text-xl flex justify-center">
                    <FiEye />
                  </div>
                </td>
                <td className="border px-2 py-2">{row.action}</td>
                <td className="border px-2 py-2">{row.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
