"use client";

import { useState } from "react";
import { Button, Input, Divider, Select, DatePicker } from "antd";

const { Option } = Select;

export default function ReverseOrder() {
  const [activeTab, setActiveTab] = useState("single");

  return (
    <>
      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-6 mt-3 ml-3">
        <Button
          type={activeTab === "single" ? "primary" : "default"}
          onClick={() => setActiveTab("single")}
        >
          Single Pickup
        </Button>
        <Button
          type={activeTab === "quick" ? "primary" : "default"}
          onClick={() => setActiveTab("quick")}
        >
          Quick Order
        </Button>
        <Button
          type={activeTab === "bulk" ? "primary" : "default"}
          onClick={() => setActiveTab("bulk")}
        >
          Bulk Return
        </Button>
      </div>

      {/* Single Pickup Form */}
      {activeTab === "single" && (
        <div className="step-container p-8 bg-white rounded-lg shadow-lg space-y-8">
          <h3>Order Details</h3>
          <div className="w-full flex flex-row gap-5">
            <div className="w-full">
              <h3>Order Id</h3>
              <Input placeholder="Order Id" />
            </div>
            <div className="w-full">
              <h3>AWB #</h3>
              <Input placeholder="AWB #" />
            </div>
            <div className="w-full flex flex-row gap-3 items-end">
              <Button>Get Details</Button>
              <Button>Reset</Button>
            </div>
          </div>

          <Divider />
          <h3>Pick-up Details</h3>
          <div className="flex flex-row w-full gap-7">
            <div className="w-full">
              <h3>
                Customer Name<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Customer Name" />
            </div>
            <div className="w-full">
              <h3>
                Customer Mobile<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Customer Mobile" />
            </div>
            <div className="w-full">
              <h3>Alt. Contact</h3>
              <Input placeholder="Alt. Contact" />
            </div>
          </div>

          <div className="flex flex-row w-full gap-7">
            <div className="w-full">
              <h3>
                Customer Email<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Customer Email" />
            </div>
            <div className="w-full">
              <h3>
                Customer Address Line 1<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Customer Address Line 1" />
            </div>
            <div className="w-full">
              <h3>Customer Address Line 2</h3>
              <Input placeholder="Customer Address Line 2" />
            </div>
          </div>

          <div className="flex flex-row w-full gap-7">
            <div className="w-full">
              <h3>
                Address Type<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Address Type" />
            </div>
            <div className="w-full">
              <h3>
                Pincode<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Pincode" />
            </div>
            <div className="w-full">
              <h3>City</h3>
              <Input placeholder="City" />
            </div>
          </div>

          <div className="flex flex-row w-full gap-7">
            <div className="w-full">
              <h3>
                State<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="State" />
            </div>
            <div className="w-full">
              <h3>
                Country<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Country" />
            </div>
          </div>

          <Divider />
          <h1>Package Details</h1>
          <div className="flex flex-row w-full gap-5">
            <div className="w-[28.5%]">
              <h3>
                Product Name<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Product Name" />
            </div>
            <div className="w-[14.25%]">
              <h3>
                Quantity<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Quantity" />
            </div>
            <div className="w-[14.25%]">
              <h3>
                Value<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Value" />
            </div>
            <div className="w-[28.5%]">
              <h3>Category</h3>
              <Input placeholder="Category" />
            </div>
            <div className="w-[14.25%]">
              <h3>SKU</h3>
              <Input placeholder="SKU" />
            </div>
          </div>

          <div className="flex flex-row w-full gap-7 items-end">
            <div className="w-full">
              <h3>
                Actual Weight<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Actual Weight" />
            </div>
            <div className="w-full">
              <h3>
                Dimensions<span className="text-red-600">*</span>
              </h3>
              <Input placeholder="Dimensions" />
            </div>
            <div className="w-full">
              <Input placeholder="Input" />
            </div>
            <div className="w-full">
              <Input placeholder="Input" />
            </div>
          </div>

          <Divider />
          <h1 className="mb-4">Return Address:</h1>
          <div className="flex flex-row w-full gap-7 ">
            <div className="w-full">
              <h3>
                Select Return Address<span className="text-red-600">*</span>
              </h3>
              <div className="w-full">
                <Select className="w-[200px]">
                  <Option>Option 1</Option>
                </Select>
              </div>
              <div className="mt-6 ">
                <Button
                  style={{
                    background: "#1677ff",
                    marginRight: "30px",
                    color: "white",
                  }}
                >
                  Place Reverse Order
                </Button>
                <Button>Reset</Button>
              </div>
            </div>
            <div className="w-full">
              <div className="border rounded-2xl p-5">
                <h1>Return Address</h1>
                <h2>Title</h2>
                <h2>Full Address</h2>
                <h2>Phone</h2>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Order Form */}
      {activeTab === "quick" && (
        <div className="step-container p-8 bg-white rounded-lg shadow-lg space-y-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Search Orders
          </h1>

          <div className="flex flex-wrap gap-8">
            <div className="w-full sm:w-1/4">
              <h3 className="text-lg">AWS #</h3>
              <Input placeholder="Enter AWS number" className="w-full" />
            </div>

            <div className="w-full sm:w-1/4">
              <h3 className="text-lg">From Date</h3>
              <DatePicker className="w-full" />
            </div>

            <div className="w-full sm:w-1/4">
              <h3 className="text-lg">To Date</h3>
              <DatePicker className="w-full" />
            </div>

            <div className="w-full sm:w-1/4">
              <h3 className="text-lg">Date Range</h3>
              <Select className="w-full">
                <Option value="range1">Range 1</Option>
                <Option value="range2">Range 2</Option>
              </Select>
            </div>
          </div>

          <div className="flex gap-6 mt-6">
            <Button
              className="bg-[#1677ff] text-white hover:bg-[#1468c7]"
              style={{ background: "#1677ff", color: "white" }}
            >
              Search
            </Button>
            <Button className="bg-[#1677ff] text-white hover:bg-[#1468c7]">
              Reset
            </Button>
          </div>

          <h1 className="text-2xl font-semibold text-gray-800 mt-8">
            Quick Return
          </h1>
        </div>
      )}

      {/* Bulk Return Form */}
      {activeTab === "bulk" && (
        <div className="step-container p-8 bg-white rounded-lg shadow-lg space-y-8 h-[80vh]">
          <div className="w-full flex flex-row gap-12">
            <div className="w-1/4 space-y-6">
              <h3>
                Upload Return Excel<span className="text-red-600">*</span>
              </h3>
              <Input type="file" />
              <div className="flex gap-4 mt-6">
                <Button style={{ background: "#1677ff", color: "white" }}>
                  Save
                </Button>
                <Button>Reset</Button>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      )}
    </>
  );
}
