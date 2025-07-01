import React from 'react'
import { useState } from 'react';
import ForwordOrder from '../shipmentProcessedOrder/ForwordOrder';
import ReverseOrder from "@/Components/shipmentProcessedOrder/ReverseOrder"



const ProceesedOrder = () => {
  const [activeProcessedOrdersButton, setActiveProcessedOrdersButton] =
    useState("Forward");

  const processedOrderButtonHandler = (processedButtonType) => {
    setActiveProcessedOrdersButton(processedButtonType);
  };

 
  return (
    <div>
      <div>
        {/* Two buttons  */}
        <div className="flex gap-8 border-b-2 border-gray-200 p-2 items-center mt-4 mb-4">
          <div
            onClick={() => processedOrderButtonHandler("Forward")}
            className={` text-xl cursor-pointer ${
              activeProcessedOrdersButton === "Forward"
                ? "text-green-900"
                : "text-black opacity-60"
            }`}
          >
            Forward
          </div>
          <div
            onClick={() => processedOrderButtonHandler("Reverse")}
            className={` text-xl cursor-pointer ${
              activeProcessedOrdersButton === "Reverse"
                ? "text-green-900"
                : "text-black opacity-60"
            }`}
          >
            Reverse
          </div>
        </div>
        {activeProcessedOrdersButton === "Forward" && (
          <div>
            {/* Forward  Table */}
            <ForwordOrder />
          </div>
        )}
        {activeProcessedOrdersButton === "Reverse" && (
          <div>
            {/* Reverse Table */}
            <ReverseOrder />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProceesedOrder
