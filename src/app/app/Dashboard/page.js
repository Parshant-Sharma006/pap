"use client";

import {
  FaPlus,
  FaCalculator,
  FaCloudUploadAlt,
  FaMapMarkedAlt,
  FaCloud,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaRupeeSign,
  FaChartPie, // Total
  FaHourglassHalf, // Unprocessed
  FaBoxOpen, // Picked
  FaCheckCircle, // Delivered
  FaUndoAlt, // RTO
  FaShippingFast, // In-Transit
  FaTimesCircle, // Cancelled
  FaExclamationTriangle, // Failed
  FaChartBar,
  FaListOl,
  FaPlayCircle,
  // FaCheckCircle,
} from "react-icons/fa";

import React, { useState } from "react";
import {
  format,
  subDays,
  startOfMonth,
  endOfMonth,
  startOfToday,
  subMonths,
} from "date-fns";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const initialData = [
  { name: "Zone A", orders: -5 },
  { name: "Zone B", orders: 0 },
  { name: "Zone C", orders: 10 },
  { name: "Zone D", orders: 15 },
  { name: "Zone E", orders: 8 },
];

const zoneColors = {
  default: "#607D8B",
  highlight: "#1E88E5",
};

const Page = () => {
  // For Filters start
  const [selectedRange, setSelectedRange] = useState("Today");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");

  const today = new Date();

  const getDateRange = () => {
    switch (selectedRange) {
      case "Today":
        return [today, today];
      case "Yesterday":
        const yesterday = subDays(today, 1);
        return [yesterday, yesterday];
      case "Last 7 Days":
        return [subDays(today, 6), today];
      case "Last 30 Days":
        return [subDays(today, 29), today];
      case "This Month":
        return [startOfMonth(today), endOfMonth(today)];
      case "Last Month":
        const lastMonth = subMonths(today, 1);
        return [startOfMonth(lastMonth), endOfMonth(lastMonth)];
      case "Custom Range":
        return [new Date(customFrom), new Date(customTo)];
      default:
        return [today, today];
    }
  };

  const [fromDate, toDate] = getDateRange();

  // For Filters end

  // For the Order Summary start
  const [activeTab, setActiveTab] = useState("ALL");

  const data = [
    {
      cancelled: 0,
      placed: 8,
      notPicked: 4,
      date: "11-Jun, 2025",
      picked: 4,
      pickedP: "100%",
      inTransit: 0,
      inTransitP: "0%",
      dispatched: 0,
      dispatchedP: "0%",
      ndr: 0,
      ndrP: "0%",
      delivered: 0,
      deliveredP: "0%",
      rto: 0,
      rtoP: "0%",
      shipped: 4,
    },
    {
      cancelled: 0,
      placed: 10,
      notPicked: 0,
      date: "10-Jun, 2025",
      picked: 1,
      pickedP: "10%",
      inTransit: 5,
      inTransitP: "50%",
      dispatched: 1,
      dispatchedP: "10%",
      ndr: 0,
      ndrP: "0%",
      delivered: 3,
      deliveredP: "30%",
      rto: 0,
      rtoP: "0%",
      shipped: 10,
    },
    {
      cancelled: 1,
      placed: 14,
      notPicked: 1,
      date: "09-Jun, 2025",
      picked: 0,
      pickedP: "0%",
      inTransit: 4,
      inTransitP: "33.33%",
      dispatched: 1,
      dispatchedP: "8.33%",
      ndr: 1,
      ndrP: "8.33%",
      delivered: 6,
      deliveredP: "50%",
      rto: 0,
      rtoP: "0%",
      shipped: 12,
    },
    {
      cancelled: 0,
      placed: 6,
      notPicked: 0,
      date: "07-Jun, 2025",
      picked: 0,
      pickedP: "0%",
      inTransit: 1,
      inTransitP: "16.67%",
      dispatched: 0,
      dispatchedP: "0%",
      ndr: 0,
      ndrP: "0%",
      delivered: 5,
      deliveredP: "83.33%",
      rto: 0,
      rtoP: "0%",
      shipped: 6,
    },
    {
      cancelled: 0,
      placed: 9,
      notPicked: 0,
      date: "06-Jun, 2025",
      picked: 0,
      pickedP: "0%",
      inTransit: 0,
      inTransitP: "0%",
      dispatched: 0,
      dispatchedP: "0%",
      ndr: 0,
      ndrP: "0%",
      delivered: 9,
      deliveredP: "100%",
      rto: 0,
      rtoP: "0%",
      shipped: 9,
    },
  ];

  const tabs = ["ALL", "PREPAID", "COD"];
  // For the Order Summary end

  //  Total Carrier Performance start
  const logisticsData = [
    { name: "DTDC", orders: 4, cancelled: 0, delivered: 0, rto: 0 },
    { name: "Delhivery", orders: 1, cancelled: 0, delivered: 0, rto: 0 },
  ];
  //  Total Carrier Performance end

  // product/cariouer Delivery Performance start
  const [showUnprocessed, setShowUnprocessed] = useState(true);
  // product/cariouer Delivery Performance end

  // Zone Selection and Blink Effect start
  const [selectedZone, setSelectedZone] = useState("");

  const handleZoneClick = (zoneName) => {
    setSelectedZone(zoneName);
    setTimeout(() => {
      setSelectedZone("");
    }, 1500); // blink effect
  };
  // Zone Selection and Blink Effect end

  return (
    <div className="mx-auto ">
      {/* Top Images  */}
      <div className="w-full flex gap-7 justify-between">
        {/* Left Part */}
        <div className="w-1/2 relative flex items-center justify-center text-white rounded-xl p-6 space-y-4 bg-gradient-to-r from-[#0f2027] to-[#2c5364]">
          {/* Text */}
          <div className="relative z-20">
            <h1 className="text-3xl font-bold">
              Welcome Back, GAURAV EXPRESS LOGISTIC SERVICES!
            </h1>
            <p className="my-6">Choose The Most Convenient Delivery</p>
            <div className="flex gap-4 ">
              <button className="mt-4 px-4 py-2 bg-[#2c5364] text-white rounded hover:bg-[#11998e]">
                Add New Parcel
                <FaPlus className="inline-block ml-2 text-lg" />
              </button>

              <button className="mt-4 px-4 py-2 bg-transparent border-2 border-white text-white rounded hover:bg-[#11998e]">
                Rate Calculator
                <FaCalculator className="inline-block ml-2 text-lg" />
              </button>
            </div>
            {/* extra icons */}
          </div>
          <div className=" absolute top-[50%] right-0 z-0">
            <FaCloudUploadAlt className="text-8xl text-[#11998e] inline-block mr-4" />
            <FaMapMarkedAlt className="text-8xl text-[#11998e] inline-block mr-4" />
            <FaCloud className="text-8xl text-[#11998e] inline-block mr-4" />
          </div>
          {/* </div> */}
        </div>

        {/* Right Part */}
        <div className="w-1/2 relative flex items-center justify-center text-[#2c5364] rounded-xl p-6 bg-gradient-to-l from-[#11998e] to-[#38ef7d]">
          {/* Text */}
          <img
            src="./CustomerPannelImages/CustomerPannel/map.png"
            alt="Map"
            className="absolute w-[500px] h-[250px] -top-0 right-0 opacity-60 z-0 filter invert brightness-0 sepia hue-rotate-180"
          />

          {/* Text content above image */}
          <div className="relative z-10">
            <h1 className="text-5xl font-bold">E-Smart Shopping Solution</h1>
            <p className="text-xl my-2 font-bold">
              An AI-based platform with end-to-end shopping solution.
            </p>
          </div>
        </div>
      </div>
      {/* COD Status */}
      <div className="w-full mt-6">
        <h2 className="text-2xl font-semibold mb-2">COD Status</h2>
        <div className="w-full flex justify-between items-start gap-7">
          {/* 👈 Left Part: COD Details */}
          <div className="w-full md:w-1/2 bg-white p-4 rounded-xl shadow">
            <div className="flex justify-between items-center bg-blue-200 p-3 rounded-xl mb-4">
              <div className="w-full flex flex-col gap-4">
                <p className="text-xl">Next COD On:</p>
                <h2 className="text-2xl font-bold">15 June 2025</h2>
              </div>
              <FaCalendarAlt className="text-2xl text-gray-700" />
            </div>
            <div className="flex justify-between items-center  bg-gray-200 p-3 rounded-xl mb-4">
              <div className="w-full flex flex-col gap-4">
                <p className="text-xl">Next COD On:</p>
                <h2 className="text-2xl font-bold">--</h2>
              </div>
              <FaMoneyBillWave className="text-2xl text-green-600" />
            </div>
            <div className="flex justify-between items-center  bg-green-200 p-3 rounded-xl mb-4">
              <div className="w-full flex flex-col gap-4">
                <p className="text-xl">Next COD On:</p>
                <h2 className="text-2xl font-bold">--</h2>
              </div>
              <FaRupeeSign className="text-2xl text-blue-600" />
            </div>
          </div>

          {/* 👉 Right Part: Filters */}
          <div className="w-full md:w-1/2 bg-white p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            {/* Warehouse Dropdown */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                Select Your Warehouse
              </label>
              <select className="w-full border p-2 rounded-xl bg-gray-100">
                <option value="">Select Warehouse</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>

            {/* Date Filter Dropdown */}
            <h2 className="text-xl font-semibold mb-4">Date Range</h2>

            {/* Dropdown for selecting range */}
            <select
              className="w-full border p-2 rounded-xl bg-gray-100 mb-4"
              onChange={(e) => setSelectedRange(e.target.value)}
            >
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
              <option>Last Month</option>
              <option>Custom Range</option>
            </select>

            {/* Custom Date Inputs */}
            {selectedRange === "Custom Range" && (
              <div className="flex gap-2 mb-4">
                <input
                  type="date"
                  className="border p-2 rounded-xl w-full"
                  onChange={(e) => setCustomFrom(e.target.value)}
                />
                <input
                  type="date"
                  className="border p-2 rounded-xl w-full"
                  onChange={(e) => setCustomTo(e.target.value)}
                />
              </div>
            )}

            {/* Result */}
            <div className="text-gray-700 font-medium">
              <p>
                {format(fromDate, "MMMM d, yyyy")} -{" "}
                {format(toDate, "MMMM d, yyyy")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Shipment Status */}
      <div className="w-full mt-6 ">
        <h2 className="text-2xl font-semibold mb-2">Shipment </h2>
        <div className="flex justify-between items-start gap-3 flex-wrap">
          <div className="flex gap-2 justify-center items-center bg-white p-4 rounded-xl shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
              <FaChartPie className="text-2xl text-blue-400 mb-2" />
            </div>
            <p>Total</p>
          </div>
          <div className="flex gap-2 justify-center items-center bg-white p-4 rounded-xl shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
              <FaHourglassHalf className="text-xl text-yellow-400 mb-2" />
            </div>
            <p>Unprocessed</p>
          </div>
          <div className="flex gap-2 justify-center items-center bg-white p-4 rounded-xl shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
              <FaBoxOpen className="text-xl text-green-400 mb-2" />
            </div>
            <p>Picked</p>
          </div>
          <div className="flex gap-2 justify-center items-center bg-white p-4 rounded-xl shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
              <FaCheckCircle className="text-xl text-green-400 mb-2" />
            </div>
            <p>Delivered</p>
          </div>
          <div className="flex gap-2 justify-center items-center bg-white p-4 rounded-xl shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
              <FaUndoAlt className="text-xl text-red-400 mb-2" />
            </div>
            <p>RTO</p>
          </div>
          <div className="flex gap-2 justify-center items-center bg-white p-4 rounded-xl shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
              <FaShippingFast className="text-xl text-blue-400 mb-2" />
            </div>
            <p>In-Transit</p>
          </div>
          <div className="flex gap-2 justify-center items-center bg-white p-4 rounded-xl shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
              <FaTimesCircle className="text-xl text-gray-400 mb-2" />
            </div>
            <p>Cancelled</p>
          </div>
          <div className="flex gap-2 justify-center items-center bg-white p-4 rounded-xl shadow">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
              <FaExclamationTriangle className="text-xl text-orange-400 mb-2" />
            </div>
            <p>Failed</p>
          </div>
        </div>
      </div>
      {/* Order Summary */}
      <div className="w-full mt-6">
        <div className="p-4 bg-white rounded-xl shadow-md text-sm">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-end gap-2 mb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded border font-medium ${
                  activeTab === tab
                    ? " bg-blue-950 text-white border-blue-500"
                    : "text-blue-500 border-blue-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-center border border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th colSpan="3" className="border px-2 py-1">
                    Unprocessed Order
                  </th>
                  <th className="border px-2 py-1"></th>
                  <th colSpan="7" className="border px-2 py-1">
                    Total Shipped Orders
                  </th>
                </tr>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Cancelled</th>
                  <th className="border px-2 py-1">Placed Order</th>
                  <th className="border px-2 py-1">Not Picked</th>
                  <th className="border px-2 py-1">Date</th>
                  <th className="border px-2 py-1">Picked</th>
                  <th className="border px-2 py-1">In Transit</th>
                  <th className="border px-2 py-1">Dispatched</th>
                  <th className="border px-2 py-1">NDR</th>
                  <th className="border px-2 py-1">Delivered</th>
                  <th className="border px-2 py-1">RTO</th>
                  <th className="border px-2 py-1">Shipped Order</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="border px-2 py-1 text-green-800">
                      {row.cancelled}
                    </td>
                    <td className="border px-2 py-1 text-green-800">
                      {row.placed}
                    </td>
                    <td className="border px-2 py-1 text-green-800">
                      {row.notPicked}
                    </td>
                    <td className="border px-2 py-1">
                      <div>{row.date}</div>
                      <button className="mt-1 px-2 py-1 bg-[#0b2447] text-white text-xs rounded">
                        View
                      </button>
                    </td>
                    <td className="border px-2 py-1">
                      <div>{row.picked}</div>
                      <div className="text-green-800">{row.pickedP}</div>
                    </td>
                    <td className="border px-2 py-1">
                      <div>{row.inTransit}</div>
                      <div className="text-cyan-600">{row.inTransitP}</div>
                    </td>
                    <td className="border px-2 py-1">
                      <div>{row.dispatched}</div>
                      <div className="text-orange-500">{row.dispatchedP}</div>
                    </td>
                    <td className="border px-2 py-1">
                      <div>{row.ndr}</div>
                      <div className="text-orange-500">{row.ndrP}</div>
                    </td>
                    <td className="border px-2 py-1">
                      <div>{row.delivered}</div>
                      <div className="text-green-600">{row.deliveredP}</div>
                    </td>
                    <td className="border px-2 py-1">
                      <div>{row.rto}</div>
                      <div className="text-red-500">{row.rtoP}</div>
                    </td>
                    <td className="border px-2 py-1">{row.shipped}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Total Carrier Performance */}
      <div className="w-full mt-6">
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Total Carrier Performance
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Left Side */}
            <div className="col-span-2 bg-[#f7f9fc] rounded-lg p-4 flex flex-col gap-4">
              <div className="flex gap-10 items-center">
                <div className="flex items-center gap-4">
                  <FaChartBar className="text-6xl text-[#11998e]  " />
                  <div>
                    <p className="text-2xl font-bold">6</p>
                    <p className="text-gray-500 text-sm">Total Count</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="border-4 border-green-900 rounded-full w-16 h-16 flex items-center justify-center text-blue-500 font-bold">
                    00%
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Delivered</p>
                </div>
                <div className="text-center">
                  <div className="border-4 border-green-900 rounded-full w-16 h-16 flex items-center justify-center text-blue-500 font-bold">
                    00%
                  </div>
                  <p className="text-sm text-gray-600 mt-1">RTO</p>
                </div>
              </div>

              {/* Table */}
              <table className="w-full mt-4 text-sm">
                <thead>
                  <tr className="bg-white text-left">
                    <th className="p-2">Logistics</th>
                    <th className="p-2">Total Orders</th>
                    <th className="p-2">Cancelled</th>
                    <th className="p-2">Delivered</th>
                    <th className="p-2">RTO</th>
                  </tr>
                </thead>
                <tbody>
                  {logisticsData.map((item, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">{item.orders} Order(s)</td>
                      <td className="p-2">{item.cancelled}</td>
                      <td className="p-2">{item.delivered}</td>
                      <td className="p-2">{item.rto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right Side */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">
                Non-Delivery Report
              </h3>
              <div className="flex items-center justify-between mb-4 p-2 bg-[#f7f9fc] rounded">
                <div>
                  <p className="text-gray-500">NDR Count</p>
                  <p className="text-lg font-bold">0</p>
                </div>
                <FaListOl className="text-6xl text-[#11998e]  " />
              </div>
              <div className="flex items-center justify-between mb-4 p-2 bg-[#f7f9fc] rounded">
                <div>
                  <p className="text-gray-500">NDR Initiated</p>
                  <p className="text-lg font-bold">0</p>
                </div>
                <FaPlayCircle className="text-6xl text-[#11998e]  " />
              </div>
              <div className="flex items-center justify-between p-2 bg-[#f7f9fc] rounded">
                <div>
                  <p className="text-gray-500">NDR Closed</p>
                  <p className="text-sm font-medium">
                    Delivered: <span className="text-green-600">0</span>{" "}
                    &nbsp;&nbsp; RTO: <span className="text-red-500">0</span>
                  </p>
                </div>
                <FaCheckCircle className="text-6xl text-[#11998e]  " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Delivery Performance */}
      <div className="w-full mt-6">
        <div className=" p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              Courier Delivery Performance
            </h2>

            <label className="flex items-center space-x-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={showUnprocessed}
                onChange={() => setShowUnprocessed(!showUnprocessed)}
                className="form-checkbox text-blue-600"
              />
              <span>Show Unprocessed Tab</span>
            </label>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex justify-center items-center min-h-[100px]">
            {showUnprocessed ? (
              <p className="text-gray-700 font-medium">
                No data available for selected filter(s).
              </p>
            ) : (
              <p className="text-gray-500 font-medium">
                Unprocessed Tab Hidden.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Courier  Delivery Performance */}
      <div className="w-full mt-6">
        <div className=" p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">
              Courier Delivery Performance
            </h2>

            <label className="flex items-center space-x-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={showUnprocessed}
                onChange={() => setShowUnprocessed(!showUnprocessed)}
                className="form-checkbox text-blue-600"
              />
              <span>Show Unprocessed Tab</span>
            </label>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 flex justify-center items-center min-h-[100px]">
            {showUnprocessed ? (
              <p className="text-gray-700 font-medium">
                No data available for selected filter(s).
              </p>
            ) : (
              <p className="text-gray-500 font-medium">
                Unprocessed Tab Hidden.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Zone Selection and Blink Effect */}
      <div className="w-full mt-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Zone Wise Shipped Orders
          </h2>

          <div className="flex flex-col lg:flex-row">
            {/* Chart */}
            <div className="w-full lg:w-2/3 h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={initialData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="orders" name="Zone">
                    {initialData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          selectedZone === entry.name
                            ? zoneColors.highlight
                            : zoneColors.default
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Zone Buttons */}
            <div className="w-full lg:w-1/3 flex flex-col space-y-2 mt-6 lg:mt-0 lg:ml-8">
              {initialData.map((zone, index) => (
                <button
                  key={index}
                  onClick={() => handleZoneClick(zone.name)}
                  className={`text-white py-2 px-4 rounded-md transition ${
                    zone.name === "Zone A"
                      ? "bg-green-400"
                      : zone.name === "Zone B"
                      ? "bg-green-500"
                      : zone.name === "Zone C"
                      ? "bg-green-600"
                      : zone.name === "Zone D"
                      ? "bg-green-700"
                      : "bg-green-800"
                  } hover:opacity-90`}
                >
                  {zone.name} – {Math.abs(zone.orders)} Order(s)
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
