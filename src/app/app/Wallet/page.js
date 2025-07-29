"use client";
import React, { useState } from "react";
import { Button, Input, Checkbox } from "antd";
import Image from "next/image";

const Page = () => {
  const [show, setShow] = useState(0);

  return (
    <div className="bg-[#f6f6f6]">
      <div className="m-4  pt-4 flex gap-3 border-b-1 border-b-neutral-300 ">
        <button
          className={
            show === 0
              ? "border-b-1 border-orange-600 text-orange-600 px-4"
              : "border-b-0 px-4"
          }
          onClick={() => {
            setShow(0);
          }}
        >
          Add Money
        </button>
        <button
          className={
            show === 1
              ? "border-b-1 border-orange-600 text-orange-600 px-4"
              : "border-b-0 px-4"
          }
          onClick={() => {
            setShow(1);
          }}
        >
          Recharge history
        </button>
        <button
          className={
            show === 2
              ? "border-b-1 border-orange-600 text-orange-600 px-4"
              : "border-b-0 px-4"
          }
          onClick={() => {
            setShow(2);
          }}
        >
          Wallet Deduction
        </button>
      </div>
      <div>
        {show == 0 && (
          <>
            <div className="bg-white p-4 m-4 shadow-md">
              <div className="w-1/2">
                <h3>
                  Enter Your amount<span className="text-red-600">*</span>
                </h3>
                <Input className="w-full" name="amount" placeholder="50000" />
              </div>
              <div className="w-1/2">
                <h3>
                  Promo Code<span className="text-red-600">*</span>
                </h3>
                <div className="flex gap-5 ">
                  <Input
                    className="w-full"
                    name="code"
                    placeholder="Enter Promocode..."
                  />
                  <button
                    // type="default"
                    className="border border-orange-500 text-orange-500 px-6  rounded hover:bg-orange-50"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <div>
                <Checkbox checked={true}>
                  <Image
                    src="/razorpay.png"
                    alt="img"
                    width={150}
                    height={50}
                  />
                </Checkbox>
              </div>
              <div>
                <div className="flex gap-4">
                  <button className="border border-orange-500 text-orange-500 px-4 py-2  rounded hover:bg-orange-50">
                    Add Money
                  </button>
                  <button className="border border-{#fff} rounded px-4">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {show == 1 && (
          <>
            <div className="mt-4 mx-4 bg-white p-4 shadow-md">
              <div className="flex gap-6 justify-evenly">
                <div className="w-full">
                  <h3>Date Filter</h3>
                  <Input type="date" />
                </div>
                <div className="w-full">
                  <h3>Amount</h3>
                  <Input />
                </div>
                <div className="w-full">
                  <h3>Amount To</h3>
                  <Input />
                </div>
                <div className="w-full">
                  <h3>Search</h3>
                  <Input className="w-full" />
                </div>
              </div>
              <div className="mt-4">
                <button className="border border-orange-600 bg-orange-600 text-white rounded px-3 py-1">
                  Search
                </button>
                <button className="border border-orange-600 bg-white text-orange-600 rounded ml-4 px-3 py-1">
                  Reset
                </button>
              </div>
            </div>
            <div className="mx-4 mt-8 bg-white p-4 shadow-md ">
              <div className="flex justify-between">
                <h3>View Recharge History</h3>
                <button className="border border-orange-600 text-white rounded bg-orange-600 px-3 py-1">
                  Export
                </button>
              </div>
              <h6 className="text-[13px]">
                showing <bold className="font-bold">4 of 4 record(s)</bold>
              </h6>
              <div>
                <table className="w-full table-auto border border-gray-300 text-center shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr className="text-gray-700 font-semibold">
                      <th className="border border-gray-300 px-4 py-2">#</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Reference #
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Payment ID
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Transaction Type
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Transaction On
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Amount
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Status
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Added By
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">
                        REF123456
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        PAY987654
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Credit
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        2025-06-25
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ₹12,000
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-green-600 font-bold">
                        Success
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Admin
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
        {show == 2 && (
          <>
            <div>
              <div className="flex  gap-4 items-start m-4 bg-white shadow-md p-4 rounded-xl">
                <div className="w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="date"
                  >
                    Date
                  </label>
                  <Input
                    id="date"
                    type="date"
                    placeholder="Select a date"
                    className="w-full"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="amountFrom"
                  >
                    Amount From
                  </label>
                  <Input
                    id="amountFrom"
                    placeholder="Enter minimum amount"
                    className="w-full"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="amountTo"
                  >
                    Amount To
                  </label>
                  <Input
                    id="amountTo"
                    placeholder="Enter maximum amount"
                    className="w-full"
                  />
                </div>

                <div className="w-full">
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="selectId"
                  >
                    Select Your ID
                  </label>
                  <Input
                    id="selectId"
                    type="text"
                    placeholder="Enter or select ID"
                    className="w-full"
                  />
                </div>

                <div className="self-end">
                  <button className="border border-orange-600 bg-orange-600 text-white rounded px-4 py-1">
                    Search
                  </button>
                </div>

                <div className="self-end">
                  <button className="border border-orange-600 text-orange-600 bg-white px-4 py-1 rounded">
                    Reset
                  </button>
                </div>
              </div>

              <div className="m-4 mt-8 p-4 bg-white shadow-md">
                <div className="flex justify-between">
                  <h3>View Wallet Deduction</h3>
                  <div>
                    <button className="border border-orange-600 bg-orange-600 text-white rounded px-4 py-2">
                      Export Changes
                    </button>
                    <button className="border ml-4 border-orange-600 bg-orange-600 text-white rounded px-4 py-2">
                      Export Ledger
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-[13px]">
                    Showing <bold className="font-bold">4 of 4 record(s)</bold>
                  </h3>
                  <div className="w-full overflow-x-auto">
                    <table className=" w-full border border-gray-300 text-sm">
                      <thead className="bg-gray-50">
                        <tr className="text-center">
                          <th className="w-[50px] border p-2">
                            <input type="checkbox" />
                          </th>
                          <th className="w-[160px] border p-2">
                            Order Details
                          </th>
                          <th className="w-[160px] border p-2">
                            Tracking Details
                          </th>
                          <th className="w-[180px] border p-2">
                            Transaction Details
                          </th>
                          <th className="w-[220px] border p-2">
                            <div>
                              Transaction
                              <br />
                              <div className="flex justify-between px-4">
                                <span className="text-xs text-gray-500">
                                  OPN.
                                </span>
                                <span className="text-xs text-gray-500">
                                  CLS.
                                </span>
                                <span className="text-xs text-gray-500">
                                  AMT.
                                </span>
                              </div>
                            </div>
                          </th>
                          <th className="w-[160px] border p-2">
                            Amount Details
                          </th>
                          <th className="w-[100px] border p-2">Zone</th>
                          <th className="w-[120px] border p-2">
                            Billing Weight
                          </th>
                          <th className="w-[120px] border p-2">Forward</th>
                          <th className="w-[240px] border p-2">
                            <div>
                              Charges
                              <br />
                              <div className="flex justify-between px-4">
                                <span className="text-xs text-gray-500">
                                  Forward
                                </span>
                                <span className="text-xs text-gray-500">
                                  RTO
                                </span>
                                <span className="text-xs text-gray-500">
                                  Cancel
                                </span>
                                <span className="text-xs text-gray-500">
                                  Weight
                                </span>
                              </div>
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-center">
                        <tr className="border-t">
                          <td className="p-2 border">
                            <input type="checkbox" />
                          </td>
                          <td className="p-2 border">
                            <div className="text-blue-500">2 July</div>
                            <div className="text-orange-600 font-semibold">
                              DR. SWATI
                            </div>
                          </td>
                          <td className="p-2 border">
                            <div className="text-orange-500">
                              ✈️ <span className="font-semibold">DTDC</span>
                            </div>
                            <div className="text-blue-600 font-medium">
                              7X106519673
                            </div>
                            <div className="text-green-600">Manifested</div>
                          </td>
                          <td className="p-2 border">
                            <div className="text-orange-600 font-medium">
                              61851751443373D1989
                            </div>
                            <div className="text-blue-500">2 July</div>
                          </td>
                          <td className="p-0 border">
                            <div className="flex justify-center space-x-4 border-b">
                              <span>₹106.55</span>
                              <span>₹62.89</span>
                              <span>₹43.66</span>
                            </div>
                            <h3 className="mt-2 text-orange-400">
                              Order Processing
                            </h3>
                          </td>
                          <td className="p-2 border">
                            ₹70.00
                            <div className="inline-block ml-2 text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                              PPD
                            </div>
                          </td>
                          <td className="p-2 border">B</td>
                          <td className="p-2 border">0.50Kg(s)</td>
                          <td className="p-2 border">₹43.66</td>
                          <td className="p-2 border">
                            <div className="flex justify-center space-x-4 text-xs text-gray-700">
                              <span>₹20.00</span>
                              <span>₹10.00</span>
                              <span>₹0.00</span>
                              <span>₹5.00</span>
                            </div>
                          </td>
                        </tr>

                        <tr className="border-t">
                          <td className="p-2 border">
                            <input type="checkbox" />
                          </td>
                          <td className="p-2 text-gray-400 border">-</td>
                          <td className="p-2 text-gray-400 border">-</td>
                          <td className="p-2 border">
                            <div className="text-orange-600 font-medium">
                              o7ritcVVw3jYcC26185
                            </div>
                            <div className="text-blue-500">2 July</div>
                          </td>
                          <td className="p-0 border">
                            <div className="flex justify-center space-x-4 border-b">
                              <span>₹56.55</span>
                              <span>₹106.55</span>
                              <span>₹50.00</span>
                            </div>
                            <h3 className="mt-2 text-green-600">
                              Payment Added via QR
                            </h3>
                          </td>
                          <td className="p-2 text-gray-400 border">-</td>
                          <td className="p-2 text-gray-400 border">-</td>
                          <td className="p-2 text-gray-400 border">-</td>
                          <td className="p-2 text-gray-400 border">-</td>
                          <td className="p-2 border">
                            <div className="flex justify-center space-x-4 text-xs text-gray-700">
                              <span>₹15.00</span>
                              <span>₹0.00</span>
                              <span>₹5.00</span>
                              <span>₹2.00</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
