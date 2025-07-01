import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Active from "@/Components/NDRdataTables/Active";
import Initiated from "@/Components/NDRdataTables/Initiated";
import Closed from "@/Components/NDRdataTables/Closed";

const Page = () => {
  // Top Element js here start
  const [searchType, setSearchType] = useState("Tracking ID");
  const [searchValue, setSearchValue] = useState("");
  const [dateType, setDateType] = useState("Pickup Date");
  const [startDate, setStartDate] = useState(new Date("2025-05-29"));
  const [endDate, setEndDate] = useState(new Date("2025-06-28"));
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSearch = () => {
    alert(
      `Searching for ${searchType}: ${searchValue}, Date Type: ${dateType}, From: ${format(
        startDate,
        "MMM dd, yyyy"
      )} To: ${format(endDate, "MMM dd, yyyy")}`
    );
  };

  const handleReset = () => {
    setSearchType("Tracking ID");
    setSearchValue("");
    setDateType("Pickup Date");
    setStartDate(new Date("2025-05-29"));
    setEndDate(new Date("2025-06-28"));
  };
  // Top Element js here end

  // Bottom Element js here start
  const [activeTab, setActiveTab] = useState("Active");
  const ClickHandler = (data) => {
    setActiveTab(data);
  };

  return (
    <>
      {/* Top Element here */}
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Search NDR Shipments</h2>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Search Type</label>
            <div className="flex border rounded-md">
              <select
                className="px-2 py-1 rounded-l-md border-r"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option>Tracking ID</option>
                <option>Order ID</option>
              </select>
              <input
                type="text"
                placeholder="Search Here..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="px-2 py-1 outline-none rounded-r-md"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium">Date Filter Type</label>
            <select
              className="px-2 py-1 rounded-md border"
              value={dateType}
              onChange={(e) => setDateType(e.target.value)}
            >
              <option>Pickup Date</option>
              <option>First NDR Date</option>
            </select>
          </div>

          <div className="flex flex-col relative">
            <label className="text-sm font-medium">Date Filter</label>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="px-3 py-1 border rounded-md bg-white"
            >
              {`${format(startDate, "MMM dd, yyyy")} - ${format(
                endDate,
                "MMM dd, yyyy"
              )}`}
            </button>

            {showCalendar && (
              <div className="absolute top-16 z-10 bg-white shadow-md p-4 rounded-md flex gap-4">
                <div>
                  <span className="text-sm font-medium">Start Date</span>
                  <Calendar date={startDate} onChange={setStartDate} />
                </div>
                <div>
                  <span className="text-sm font-medium">End Date</span>
                  <Calendar date={endDate} onChange={setEndDate} />
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleSearch}
            className="border-2 border-green-700  px-4 py-2 rounded-md hover:bg-green-950 hover:text-white"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="border-2 border-green-700 px-4 py-2 rounded-md hover:bg-green-950 hover:text-white"
          >
            Reset
          </button>
        </div>
      </div>
      {/* Bottom Element here */}
      <div className="mt-6 p-6 bg-white rounded-md shadow-md">
        <div className=" flex justify-between">
          <div className="flex justify-between gap-2 items-center mb-4">
            <div
              onClick={() => ClickHandler("Active")}
              className="font-bold border-2 border-green-700 rounded-md px-4 p-1 cursor-pointer hover:bg-green-950 hover:text-white   "
            >
              Active
            </div>
            <div
              onClick={() => ClickHandler("Initiated")}
              className="font-bold border-2 border-green-700 rounded-md px-4 p-1 cursor-pointer hover:bg-green-950 hover:text-white   "
            >
              Initiated
            </div>
            <div
              onClick={() => ClickHandler("Closed")}
              className="font-bold border-2 border-green-700 rounded-md px-4 p-1 cursor-pointer hover:bg-green-950 hover:text-white   "
            >
              Closed
            </div>
          </div>

          <div>
            <div className="font-bold border-2 border-green-700 rounded-md px-4 p-1 cursor-pointer hover:bg-green-950 hover:text-white   ">
              Export
            </div>
          </div>
        </div>

        {/* All Data is printed here based on the active tab */}

        <div className="mt-4">
          {/* Active Tab Content */}
          {activeTab === "Active" && (
            <>
              <Active />
            </>
          )}

          {/* Initiated Tab Content */}
          {activeTab === "Initiated" && (
            <>
              <Initiated />
            </>
          )}

          {/* Closed Tab Content */}
          {activeTab === "Closed" && (
            <>
              <Closed />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
