/** @format */

import { Button, Select, Switch, Input, Steps } from "antd";
import { useState } from "react";
import { Checkbox } from "antd";
// import ReverseOrder from "@/Components/addParcel/ReverseOrder";
const { Option } = Select;
const { Step } = Steps;

export default function Forword() {
  const [orderType, setOrderType] = useState("single");
  const [current, setCurrent] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const options = ["0.5 KG", "1 KG", "2 KG", "5 KG", "Other"];
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const handleToggle = (checked) => {
    setIsEnabled(checked); // updates state based on switch
    console.log("Switch is:", checked ? "ON" : "OFF");
  };

  const [selected, setSelected] = useState("");

  const handleChange = (value) => {
    // If clicking the currently selected one, uncheck it (optional)
    if (selected === value) {
      setSelected("");
    } else {
      setSelected(value);
    }
  };

  return (
    <>
      <>
        <div className="p-3 bg-white">
          {/* Navigation */}
          <div className="flex justify-between mb-6">
            <div>
              <Button
                type={orderType === "single" ? "primary" : "default"}
                onClick={() => setOrderType("single")}
              >
                Single Order
              </Button>
              <Button
                style={{ marginLeft: "20px" }}
                type={orderType === "bulk" ? "primary" : "default"}
                onClick={() => setOrderType("bulk")}
              >
                Bulk Order
              </Button>
            </div>
            <Button>Add Warehouse</Button>
          </div>

          {/* Single Order Page */}
          {orderType === "single" && (
            <>
              <div>
                <Steps
                  current={current}
                  className="mb-8"
                  onChange={(value) => setCurrent(value)} // This line enables clicking on steps
                >
                  <Step title="Pickup & Return Address" />
                  <Step title="Consignee Info" />
                  <Step title="Product & Order Details" />
                  <Step title="Package Details" />
                  <Step title="Courier" />
                </Steps>
              </div>

              {current === 0 && (
                <div>
                  {/* Step 1: Pickup & Return Address */}
                  <div className="flex flex-row">
                    <div className="w-5/12">
                      <h3>
                        Select Pickup Address
                        <span className="text-red-700">*</span>
                      </h3>
                      <Select
                        className="w-full"
                        placeholder="Select Pickup Address"
                      >
                        <Option value="option1">Option 1</Option>
                        <Option value="option2">Option 2</Option>
                      </Select>
                      <div className="block mt-4">
                        <Switch
                          checked={isEnabled}
                          onChange={handleToggle}
                          checkedChildren="ON"
                          unCheckedChildren="OFF"
                        />
                        <span className="ml-2">Return Address (if any)</span>
                        <Button
                          style={{
                            fontSize: "16px",
                            display: "block",
                            background: "#edeff4",
                            marginTop: "20px",
                          }}
                        >
                          + Add Address
                        </Button>
                      </div>
                    </div>
                    <div className="w-7/12 pl-5">
                      <div className="h-[200px] border-1 rounded-2xl p-6">
                        <h1>Pickup Address</h1>
                      </div>
                      <div className="h-[200px] border-1 rounded-2xl mt-4 p-6">
                        <h1>Return Address</h1>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {current === 1 && (
                <div>
                  <div>
                    <div className="flex flex-row gap-14 ">
                      <div className="w-full">
                        <h3>
                          Consignee Name<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Consignee Name"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          Contact<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Contact Number"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          Alt. Num.<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Alternate Number"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row gap-14 pt-10">
                      <div className="w-full">
                        <h3>
                          Address 1<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Address Line 1"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          Address 2<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Address Line 2"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          Address Type<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Address Type"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          Email<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row gap-14 pt-10 ">
                      <div className="w-full">
                        <h3>
                          Pin Code<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Pin Code"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          City<span className="text-red-700">*</span>
                        </h3>
                        <Input className="w-full" placeholder="Enter City" />
                      </div>
                      <div className="w-full">
                        <h3>
                          State<span className="text-red-700">*</span>
                        </h3>
                        <Input className="w-full" placeholder="Enter State" />
                      </div>
                      <div className="w-full">
                        <h3>
                          Country<span className="text-red-700">*</span>
                        </h3>
                        <Input className="w-full" placeholder="Enter Country" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {current === 2 && (
                <div>
                  <div>
                    <div className="flex flex-row gap-14 pt-10 ">
                      <div className="w-full">
                        <h3>
                          Invoice #/Ref. Id
                          <span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Invoice Number or Ref. ID"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          Payment Mode<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Payment Mode"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          Next Day Delivery
                          <span className="text-red-700">*</span>
                        </h3>
                        <Input className="w-full" placeholder="Yes/No" />
                      </div>
                      <div className="w-full">
                        <h3>
                          Pre Generated Waybill
                          <span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Waybill Number"
                        />
                      </div>
                    </div>

                    <h1>Product Details:</h1>
                    <div className="flex flex-row gap-14 pt-10 ">
                      <div className="w-full">
                        <h3>
                          Product Name<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Product Name"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          Quantity<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Quantity"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          Product Value<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Product Value"
                        />
                      </div>
                    </div>

                    <div className="flex flex-row gap-14 pt-10 ">
                      <div className="w-full">
                        <h3>
                          Category<span className="text-red-700">*</span>
                        </h3>
                        <Input
                          className="w-full"
                          placeholder="Enter Product Category"
                        />
                      </div>
                      <div className="w-full">
                        <h3>
                          SKU<span className="text-red-700">*</span>
                        </h3>
                        <Input className="w-full" placeholder="Enter SKU" />
                      </div>
                      <div className="w-full"></div>
                    </div>

                    <div className="flex flex-row justify-between">
                      <div>
                        <h3>Mps:</h3>
                        <Input placeholder="Enter MPS (if any)" />
                      </div>
                      <div>
                        <h3>Add New</h3>
                      </div>
                    </div>

                    <div>
                      <h1>Order Details:</h1>
                      <div className="flex flex-row gap-14 pt-10 ">
                        <div className="w-full">
                          <h3>
                            Order Amount<span className="text-red-700">*</span>
                          </h3>
                          <Input
                            className="w-full"
                            placeholder="Enter Order Amount"
                          />
                        </div>
                        <div className="w-full">
                          <h3>
                            GST Amount<span className="text-red-700">*</span>
                          </h3>
                          <Input
                            className="w-full"
                            placeholder="Enter GST Amount"
                          />
                        </div>
                        <div className="w-full">
                          <h3>
                            Extra Charges (if any)
                            <span className="text-red-700">*</span>
                          </h3>
                          <Input placeholder="Enter Extra Charges" />
                        </div>
                      </div>

                      <div className="flex flex-row gap-14 pt-10 ">
                        <div className="w-full">
                          <h3>
                            Total Amount<span className="text-red-700">*</span>
                          </h3>
                          <Input
                            className="w-full"
                            placeholder="Enter Total Amount"
                          />
                        </div>
                        <div className="w-full">
                          <h3>
                            Collectible COD Amount
                            <span className="text-red-700">*</span>
                          </h3>
                          <Input
                            className="w-full"
                            placeholder="Enter COD Amount"
                          />
                        </div>
                        <div className="w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {current === 3 && (
                <div>
                  {/* Step 4: Shipping Options */}
                  <div className="flex flex-row justify-between mt-5">
                    {options.map((option) => (
                      <Checkbox
                        key={option}
                        checked={selected === option}
                        onChange={() => handleChange(option)}
                      >
                        {option}
                      </Checkbox>
                    ))}
                  </div>
                  <div className="flex flex-row gap-14 pt-10 items-end ">
                    <div className="w-full">
                      <h3>
                        Actual Weight<span className="text-red-700">*</span>
                      </h3>
                      <Input
                        className="w-full"
                        placeholder="Enter Total Amount"
                      />
                    </div>
                    <div className="w-full">
                      <h3>
                        Dimensions
                        <span className="text-red-700">*</span>
                      </h3>
                      <Input
                        className="w-full"
                        placeholder="Enter COD Amount"
                      />
                    </div>
                    <div className="w-full">
                      <Input />
                    </div>
                    <div className="w-full">
                      <Input />
                    </div>
                  </div>
                </div>
              )}
              {current === 4 && (
                <div>
                  <div className="flex flex-row w-full gap-4 justify-between mt-6">
                    <div className="w-full">
                      <h3>Select Express Option</h3>
                      <Select className="" placeholder="Select Express Option">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              <div className=" mt-10">
                {current > 0 && <Button onClick={prev}>Previous</Button>}
                {current < 4 && (
                  <div className="float-right">
                    <Button type="primary" onClick={next}>
                      Next
                    </Button>
                  </div>
                )}
                {current === 4 && (
                  <Button style={{ float: "right" }} type="primary">
                    Submit
                  </Button>
                )}
              </div>
            </>
          )}

          {/* Bulk Order Page */}
          {orderType === "bulk" && (
            <>
              {/* bulk order  */}
              <div className="w-full flex flex-row">
                <div className="w-full md:w-5/12">
                  <div className="flex flex-row justify-between">
                    <div className="w-7/12">
                      <h3>
                        Upload Order Excel
                        <span className="text-red-700">*</span>
                      </h3>
                      <Input type="file" />
                      <Button className="mt-4">Download Sample</Button>
                      <h3>
                        Express<span className="text-shadow-red-600">*</span>
                      </h3>
                      <div className="w-full">
                        <Select className="w-full">
                          <Option>Option 1</Option>
                          <Option>Option 1</Option>
                        </Select>
                      </div>
                    </div>
                    <div className="w-4/12">
                      <div className="float-right">
                        <Button
                          style={{
                            background: "#1677ff",
                            color: "white",
                            marginBottom: "10px",
                          }}
                        >
                          Save
                        </Button>
                        <Button>Reset</Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="p-6 bg-white  max-w-xl mx-auto">
                      <h2 class="text-xl font-semibold mb-4">
                        Bulk Upload Instructions
                      </h2>

                      <div class="space-y-4">
                        <div>
                          <h3 class="font-medium">Step 1:</h3>
                          <p>
                            Add a warehouse by entering the pickup details to
                            generate a warehouse ID.
                          </p>
                        </div>

                        <div>
                          <h3 class="font-medium">Step 2:</h3>
                          <p>
                            Fields marked with a star (
                            <span class="text-red-500">*</span>) are mandatory,
                            while fields without a star are optional.
                          </p>
                        </div>

                        <div>
                          <h3 class="font-medium">Step 3:</h3>
                          <p>
                            Fill in all the relevant fields in the appropriate
                            format and upload the file in CSV format.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-7/12">
                  <h1>Note</h1>
                  <div class="p-6 bg-white  max-w-3xl mx-auto space-y-6">
                    <h2 class="text-xl font-semibold mb-4">
                      Bulk Upload Field Descriptions
                    </h2>

                    <ol class="list-decimal list-inside space-y-4 text-gray-800">
                      <li>
                        <strong>Pickup Address ID:</strong> A numeric value that
                        serves as the digital identifier for your or your
                        vendors pickup address.
                      </li>

                      <li>
                        <strong>COD Amount:</strong> Refers to the amount to be
                        collected from the consignee at the time of delivery. If
                        the input value is <code>0</code>, the payment mode is
                        considered to be <strong>prepaid</strong> and no amount
                        will be collected from the consignee.
                      </li>

                      <li>
                        <strong>MPS (Multiple Piece Shipments):</strong>{" "}
                        Shipments that consist of multiple individual pieces
                        shipped together under a single LR/Master AWB.
                        <br />
                        Input <code>Y</code> under the column <em>MPS (Y/N)</em>{" "}
                        to book the shipment as MPS.
                        <br />
                        <span class="block mt-1 text-sm text-gray-600">
                          <strong>Condition:</strong>
                          <br />
                          &bull; Minimum Weight: <strong>10 kg</strong>
                          <br />
                          &bull; Quantity: <strong>more than 1</strong>
                        </span>
                      </li>

                      <li>
                        <strong>Insurance:</strong> Secures your high-value
                        invoice shipments against loss and damage. Please go to
                        settings to automatically secure all your shipments.
                        <br />
                        Input <code>Y</code> under the column{" "}
                        <em>Insurance (Y/N)</em> to secure your shipment.
                      </li>

                      <li>
                        <strong>Product Value:</strong> Refers to the declared
                        amount of the shipment. If the amount is more than{" "}
                        <strong>₹50,000</strong>, then uploading an{" "}
                        <strong>E-waybill number</strong> is mandatory.
                      </li>
                    </ol>
                  </div>
                </div>
                <div></div>
              </div>
            </>
          )}
        </div>
      </>
    </>
  );
}
