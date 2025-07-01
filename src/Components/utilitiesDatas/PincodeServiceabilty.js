"use client";

import { useState } from "react";
import { Select, Input, Button } from "antd";

const { Option } = Select;

const courierData = [
  {
    courier: "Delhivery",
    surface: true,
    pickup: true,
    prepaid: true,
    reverse: true,
    cod: true,
    ndd: false,
    zone: "A",
  },
  {
    courier: "Shadowfax",
    surface: true,
    pickup: true,
    prepaid: true,
    reverse: true,
    cod: true,
    ndd: false,
    zone: "D",
  },
  {
    courier: "Delhivery B2B 6CFT",
    surface: true,
    pickup: true,
    prepaid: true,
    reverse: true,
    cod: true,
    ndd: false,
    zone: "B",
  },
  {
    courier: "PIKNDEL",
    surface: true,
    pickup: true,
    prepaid: true,
    reverse: false,
    cod: true,
    ndd: false,
    zone: "E",
  },
  {
    courier: "Amazon",
    surface: true,
    pickup: true,
    prepaid: true,
    reverse: false,
    cod: true,
    ndd: false,
    zone: "D",
  },
  {
    courier: "Blu Dart Express",
    surface: true,
    pickup: true,
    prepaid: true,
    reverse: true,
    cod: true,
    ndd: false,
    zone: "C",
  },
];

export default function PincodeServiceabilty() {
  const [form, setForm] = useState({
    type: "--Select--",
    express: "Surface",
    source: "",
    destination: "",
  });

  const handleChange = (value, key) => {
    setForm({ ...form, [key]: value });
  };

  const resetForm = () => {
    setForm({ type: "", express: "", source: "", destination: "" });
  };

  const Icon = ({ active }) => (
    <span className={active ? "text-green-600" : "text-red-600"}>
      {active ? "✔️" : "❌"}
    </span>
  );

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg p-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          <div>
            <label className="font-semibold">
              Select Type<span className="text-red-500">*</span>
            </label>
            <Select
              value={form.type}
              onChange={(value) => handleChange(value, "type")}
              className="w-full"
              placeholder="select here"
            >
              <Option value="Courier Selection">Courier Selection</Option>
            </Select>
          </div>
          <div>
            <label className="font-semibold">
              Express Type<span className="text-red-500">*</span>
            </label>
            <Select
              value={form.express}
              onChange={(value) => handleChange(value, "express")}
              className="w-full"
              placeholder="select here"
            >
              <Option value="Surface">Surface</Option>
              <Option value="Air">Air</Option>
            </Select>
          </div>
          <div>
            <label className="font-semibold">
              Source Pincode<span className="text-red-500">*</span>
            </label>
            <Input
              value={form.source}
              onChange={(e) => handleChange(e.target.value, "source")}
              placeholder="Enter Pincode"
            />
          </div>
          <div>
            <label className="font-semibold">
              Destination Pincode<span className="text-red-500">*</span>
            </label>
            <Input
              value={form.destination}
              onChange={(e) => handleChange(e.target.value, "destination")}
              placeholder="Enter Pincode"
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4 lg:mt-0 items-center">
          <Button className="bg-green-950 text-white font-medium px-4">
             Get Details
          </Button>
          <Button
            onClick={resetForm}
            className="border-green-950 text-green-950 font-medium px-4"
          >
            ↻ Reset
          </Button>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6">Services Available</h2>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Courier</th>
              <th className="px-4 py-2 border">Surface</th>
              <th className="px-4 py-2 border">Pickup</th>
              <th className="px-4 py-2 border">Prepaid</th>
              <th className="px-4 py-2 border">Reverse</th>
              <th className="px-4 py-2 border">COD</th>
              <th className="px-4 py-2 border">NDD</th>
              <th className="px-4 py-2 border">Zone</th>
            </tr>
          </thead>
          <tbody>
            {courierData.map((c, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2 font-medium">{c.courier}</td>
                <td className="border px-4 py-2">
                  <Icon active={c.surface} />
                </td>
                <td className="border px-4 py-2">
                  <Icon active={c.pickup} />
                </td>
                <td className="border px-4 py-2">
                  <Icon active={c.prepaid} />
                </td>
                <td className="border px-4 py-2">
                  <Icon active={c.reverse} />
                </td>
                <td className="border px-4 py-2">
                  <Icon active={c.cod} />
                </td>
                <td className="border px-4 py-2">
                  <Icon active={c.ndd} />
                </td>
                <td className="border px-4 py-2 font-semibold">{c.zone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

