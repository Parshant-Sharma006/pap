"use client";

import React, { useState } from "react";
import FailedOreder from "@/Components/shipment/FailedOreder";
import ChannelOrder from "@/Components/shipment/ChannelOrder";
import ProcessedOrder from "@/Components/shipment/ProceesedOrder";

const Page = () => {
  const [activeOrder, setActiveOrder] = useState("ChannelsOrders");

  const ordersClickHandler = (orderType) => {
    setActiveOrder(orderType);
  };





  

  return (
    <div className="mx-auto">
      {/* Top three Buttons */}
      <div className="flex gap-8 border-b-2 border-gray-400 p-2 items-center mt-4 mb-4">
        <div
          onClick={() => ordersClickHandler("ChannelsOrders")}
          className={`text-xl cursor-pointer ${
            activeOrder === "ChannelsOrders"
              ? "text-green-900"
              : "text-black opacity-60"
          }`}
        >
          Channels Orders
        </div>
        <div
          onClick={() => ordersClickHandler("ProcessedOrders")}
          className={`text-xl cursor-pointer ${
            activeOrder === "ProcessedOrders"
              ? "text-green-900 "
              : "text-black opacity-60"
          }`}
        >
          Processed Orders
        </div>
        <div
          onClick={() => ordersClickHandler("FailedOrders")}
          className={`text-xl cursor-pointer ${
            activeOrder === "FailedOrders"
              ? "text-green-900"
              : "text-black opacity-60"
          }`}
        >
          Failed Orders
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full bg-white rounded-xl shadow-mb p-4">
        {/* Channels Orders */}
        {activeOrder === "ChannelsOrders" && (
          <ChannelOrder />
        )}

        {/* Processed Orders */}
        {activeOrder === "ProcessedOrders" && (
          <ProcessedOrder />
        )}

        {/* Failed Orders */}
        {activeOrder === "FailedOrders" && (
          <FailedOreder />
        )}
      </div>
    </div>
  );
};

export default Page;
