"use client";

import React, { useState } from "react";
import RateCalculator from "@/Components/utilitiesDatas/RateCalculator";
import PincodeServiceabilty from "@/Components/utilitiesDatas/PincodeServiceabilty";
import RateCard from "@/Components/utilitiesDatas/RateCard";

const Page = () => {
  const [activeTab, setActiveTab] = useState(" RateCalculator");

  const clickHandler = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full p-4">
      <div className="w-full flex gap-6 border-b-2 border-gray-200 mb-6">
        <div
          onClick={() => clickHandler(" RateCalculator")}
          className={`font-bold p-2 cursor-pointer  ${
            activeTab === " RateCalculator"
              ? "border-b-4 border-green-800  "
              : ""
          }`}
        >
          Rate Calculator
        </div>
        <div
          onClick={() => clickHandler(" PincodeServiceabilty")}
          className={`font-bold p-2 cursor-pointer  ${
            activeTab === " PincodeServiceabilty"
              ? "border-b-4 border-green-800 "
              : ""
          }`}
        >
          Pincode Serviceabilty
        </div>
        <div
          onClick={() => clickHandler(" RateCard")}
          className={`font-bold p-2 cursor-pointer  ${
            activeTab === " RateCard" ? "border-b-4 border-green-800  " : ""
          }`}
        >
          Rate Card
        </div>
      </div>

      {/* Tab Content here */}
      <div className="w-full p-4 bg-white shadow-md rounded-xl">
        {/* Rate Calculator content goes here */}
        {activeTab === " RateCalculator" && (
          <div>
            <RateCalculator />
          </div>
        )}
        {/* Pincode Serviceabilty content goes here */}
        {activeTab === " PincodeServiceabilty" && (
          <div>
            <PincodeServiceabilty />
          </div>
        )}
        {/* Rate Card content goes here */}
        {activeTab === " RateCard" && (
          <div>
            <RateCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
