import React from "react";

const dummyData = [
  {
    id: 1,
    trackingDetails: "TRK1234567890",
    clientOrderId: "CLNT-001",
    lastActionSource: "Customer",
    lastActionDateTime: "2025-06-28 10:30 AM",
    lastActionType: "Call Attempt",
    lastActionDetails:
      "123 Lane, Delhi / 110001 / 9876543210 / 2025-06-30 / Customer not available",
    courier: "BlueDart",
    currentStatus: "Out for Delivery",
  },
  {
    id: 2,
    trackingDetails: "TRK9876543210",
    clientOrderId: "CLNT-002",
    lastActionSource: "Courier",
    lastActionDateTime: "2025-06-27 04:20 PM",
    lastActionType: "Delivery Failed",
    lastActionDetails:
      "456 Avenue, Mumbai / 400001 / 9123456789 / 2025-07-01 / Wrong address",
    courier: "Delhivery",
    currentStatus: "Pending Reattempt",
  },
  {
    id: 3,
    trackingDetails: "TRK4561237890",
    clientOrderId: "CLNT-003",
    lastActionSource: "System",
    lastActionDateTime: "2025-06-26 12:00 PM",
    lastActionType: "SMS Sent",
    lastActionDetails:
      "789 Street, Bangalore / 560001 / 9988776655 / 2025-07-02 / N/A",
    courier: "XpressBees",
    currentStatus: "Awaiting Confirmation",
  },
];
const Closed = () => {
  return (
    <div>
      <div className="w-full overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Tracking Details</th>
              <th className="px-4 py-2 border">Client Order ID</th>
              <th className="px-4 py-2 border">Last Action Source</th>
              <th className="px-4 py-2 border">Last Action Date-Time</th>
              <th className="px-4 py-2 border">Last Action Type</th>
              <th className="px-4 py-2 border">
                Last Action Details (Address/Pincode/Mobile/ReAttempt Date/Extra
                Remarks)
              </th>
              <th className="px-4 py-2 border">Courier</th>
              <th className="px-4 py-2 border">Current Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.trackingDetails}</td>
                <td className="px-4 py-2 border">{item.clientOrderId}</td>
                <td className="px-4 py-2 border">{item.lastActionSource}</td>
                <td className="px-4 py-2 border">{item.lastActionDateTime}</td>
                <td className="px-4 py-2 border">{item.lastActionType}</td>
                <td className="px-4 py-2 border whitespace-pre-wrap">
                  {item.lastActionDetails}
                </td>
                <td className="px-4 py-2 border">{item.courier}</td>
                <td className="px-4 py-2 border">{item.currentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Closed;
