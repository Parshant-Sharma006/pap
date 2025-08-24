import React, { useState } from "react";
import { Switch } from "antd";

export default function SecureYourShipment() {
  const [autoSecure, setAutoSecure] = useState(false);

  return (
    <div className="p-6 mx-auto">
      {/* Table */}
      <table className="w-full border border-gray-200 mb-8">
        <thead className="hidden"></thead>
        <tbody>
          <tr className="border-b">
            <td className="p-4 font-medium">Insurance Charges (%)</td>
            <td className="p-4 text-sm">1.00%</td>
            <td className="p-4 text-sm">
              Insurance charges will be 1.00% (plus GST) of the invoice value.{" "}
              <br />
              <strong>Example –</strong> If the invoice amount is Rs 10000, Rs
              100 + GST will be the insurance charges.
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium">Risk Free Liability Amount</td>
            <td className="p-4 text-sm">Rs. 1500.00</td>
            <td className="p-4 text-sm">
              No insurance charges are applicable till Rs 1500.00. <br />
              <strong>Example –</strong> If a shipment of Rs 1000 is lost,
              ParcelX will provide the full claim with no insurance charges.
            </td>
          </tr>
          <tr>
            <td className="p-4 font-medium">
              Lost Reimbursement Deduction Percentage
            </td>
            <td className="p-4 text-sm">2.00%</td>
            <td className="p-4 text-sm">
              2.00% of total invoice amount will be deducted in case of claim
              reimbursement. <br />
              <strong>Example –</strong> If a shipment with invoice value Rs
              10000 is to be claimed then ParcelX will reimburse Rs 10000 -
              2.00% = Rs 9800
            </td>
          </tr>
        </tbody>
      </table>

      {/* Toggle Section */}
      <div className="flex justify-between items-center mb-8">
        <span className="text-sm font-medium text-gray-600">
          Auto "Secure" all shipment
        </span>
        <div className="flex items-center gap-3">
          <span className="text-green-600 underline font-semibold text-sm cursor-pointer">
            Terms & Conditions
          </span>
          <Switch
            checked={autoSecure}
            onChange={(checked) => setAutoSecure(checked)}
          />
        </div>
      </div>

      {/* Explanation Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            What is Secure Shipment?
          </h2>
          <p className="text-gray-700 mt-2">
            You can secure your shipment with invoice value greater than Rs.
            1500 against lost and damages.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Why to secure your shipment?
          </h2>
          <p className="text-gray-700 mt-2">
            If a high value shipment is lost in-transit then overall operating
            cost increases significantly. Protecting the shipments from getting
            lost or damaged helps you to reduce the overall operation cost and
            provide replacement products to the end customers.
          </p>
        </div>
      </div>
    </div>
  );
}


