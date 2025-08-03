"use client";

import { useState } from "react";
import { Select, Input, Button } from "antd";

const { Option } = Select;

const Page = () => {
  const [createTickteActive, setCreateTickteActive] = useState(false);
  function createTicketHandler() {
    setCreateTickteActive(true);
  }

  const [form, setForm] = useState({
    orderId: "12324325",
    awb: "",
    escalationType: "",
    subject: "",
    message: "",
  });

  const handleChange = (value, key) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full relative mt-4">
      {/* Show All Tickets  */}
      <div className="w-full">
        <div className="flex justify-between px-5">
          <h2 className="font-extrabold text-3xl text-blue-950">Tickets</h2>
          <button
            onClick={() => {
              createTicketHandler();
            }}
            className="font-bold bg-green-900 cursor-pointer hover:bg-blue-950 text-white rounded-md px-6"
          >
            Create Tickets
          </button>
        </div>
        {/* Show Tickets Here */}
        <div className="show bg-white rounded-xl p-6 my-6">
          No data available for selected filter(s).
        </div>
      </div>

      {/* Create tickets here */}
      <div>
        {createTickteActive && (
          <div className="w-full absolute top-0 p-6 bg-white rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h1 className="font-extrabold text-3xl text-blue-950">
                Create Ticket
              </h1>
              <Button onClick={() => setCreateTickteActive(false)}>
                Back to Ticket
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  Order ID
                </label>
                <Input
                  value={form.orderId}
                  onChange={(e) => handleChange(e.target.value, "orderId")}
                />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-1">
                  AWB #
                </label>
                <Input
                  value={form.awb}
                  onChange={(e) => handleChange(e.target.value, "awb")}
                  placeholder="Enter AWB Number"
                />
              </div>
            </div>

            <hr className="my-6 opacity-25" />

            {/* Product Details */}
            <div className="bg-gray-100 p-4 font-semibold">Product Details</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
              <p>Order ID: - 45665468</p>
              <p>Invoice Amount: - 15512 rupees</p>
              <p>AWB: - dkfmglkdhtsh</p>
              <p>Current Status: - sdfgdhdgbnsjfbsjfhs</p>
              <p>Order Date: - 25/25/2012</p>
              <p>Payment Mode: - kferger/kfnjknfre</p>
              <p className="col-span-2">
                Product Information: -
                adfbahwbjgrgquergafjhvbaufgybaefuvaefgbauergbuaef
              </p>
              <p>Courier: - sjgnskjdfbsfdbsgf</p>
            </div>

            <hr className="my-6 opacity-25" />

            {/* Customer Details */}
            <div className="bg-gray-100 p-4 font-semibold">
              Customer Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
              <p>Name: - DJFV</p>
              <p>Email: - jnsjkashdfs@gmail.com</p>
              <p>Mobile: - 59429925554</p>
              <p>Address: - kdfksdhgsiughsrtjgnsgs5552</p>
            </div>

            <hr className="my-6 opacity-25" />

            {/* Escalation Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">
                  Escalation Type
                </label>
                <Select
                  className="w-full"
                  value={form.escalationType}
                  onChange={(value) => handleChange(value, "escalationType")}
                >
                  <Option value="">---Escalation Type---</Option>
                  <Option value="delay">Delivery Delay</Option>
                  <Option value="damage">Damaged Product</Option>
                  <Option value="other">Other</Option>
                </Select>
              </div>
              <div>
                <label className="block font-medium mb-1">Subject</label>
                <Input
                  placeholder="Enter Subject"
                  value={form.subject}
                  onChange={(e) => handleChange(e.target.value, "subject")}
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Any Attachment</label>
                <Input type="file" multiple />
              </div>
            </div>

            <div className="mt-6">
              <label className="block font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Message"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange(e.target.value, "message")}
              ></textarea>
            </div>

            <div className="mt-6 text-center">
              <Button
                onClick={handleSubmit}
                className="bg-green-950 text-3xl text-white px-6 py-2"
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
