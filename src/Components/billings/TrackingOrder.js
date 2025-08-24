/** @format */

import React from "react";
import { Steps, Radio, Input, Button } from "antd";
import { SearchOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Step } = Steps;

const trackingData = {
  trackingNumber: "13630911475460",
  orderId: "13192199",
  destination: "743299, Swarupnagar",
  fulfilledBy: "Delhivery",
  placedDate: "05 Jul, 25",
  steps: [
    { title: "Booked", date: "05 Jul,25", time: "07:13 PM" },
    { title: "Manifested", date: "05 Jul,25", time: "07:13 PM" },
    { title: "Picked" },
    { title: "In-Transit" },
    { title: "Out for Delivery" },
    { title: "Delivered" },
  ],
};

export default function TrackingOrder() {
  const [selectedOption, setSelectedOption] = React.useState("Waybill");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-teal-100 rounded-xl p-4 sm:p-10">
      {/* Search Box */}
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-6 sm:p-8 border border-blue-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          📦 Track Your Shipment
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-4 justify-center mb-4">
          <Radio.Group
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            buttonStyle="solid"
          >
            <Radio.Button value="Waybill">Waybill Number</Radio.Button>
            <Radio.Button value="Channel">Channel Order ID</Radio.Button>
            <Radio.Button value="Mobile">Mobile Number</Radio.Button>
          </Radio.Group>
        </div>

        <div className="flex flex-col md:flex-row gap-3 justify-center">
          <Input
            placeholder="Enter tracking number"
            className="w-full md:w-2/3 shadow-sm"
            size="large"
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="large"
            className="bg-blue-600 hover:bg-blue-700 transition"
          >
            Track
          </Button>
        </div>
      </div>

      {/* Tracking Result */}
      <div className="max-w-5xl mx-auto bg-white mt-10 p-6 sm:p-10 rounded-xl shadow-lg border border-blue-100">
        <div className=" bg-gray-100 px-6 py-12 rounded-xl flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Tracking Number:{" "}
              <span className="text-blue-600">
                {trackingData.trackingNumber}
              </span>
            </h3>
            <p className="mt-2 text-gray-600">
              <strong>Destination:</strong> {trackingData.destination}
            </p>
            <p className="text-gray-600">
              <strong>Fulfilled By:</strong> {trackingData.fulfilledBy}
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 mt-2">
              <strong>Order Placed:</strong>
            </p>
            <p className="text-gray-800">Order ID: {trackingData.orderId}</p>
          </div>
        </div>

        {/* Stepper */}
        <div className="mt-10 bg-gray-100 px-6 py-10 rounded-xl">
          <h1 className=" text-2xl font-extrabold underline ">Delivery</h1>
          <Steps
            current={2} // current progress
            labelPlacement="vertical"
            responsive
            size="small"
          >
            {trackingData.steps.map((step, index) => (
              <Step
                key={index}
                title={step.title}
                icon={index < 2 ? <CheckCircleOutlined /> : undefined}
                description={
                  step.date && step.time ? (
                    <div className="text-gray-500 text-sm">
                      {step.date}
                      <br />
                      {step.time}
                    </div>
                  ) : null
                }
              />
            ))}
          </Steps>
        </div>
      </div>
    </div>
  );
}
