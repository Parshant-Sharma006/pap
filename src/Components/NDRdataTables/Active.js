import React, { useState } from 'react';

const tableHeaders = [
  "Client Order ID",
  "Initiated Action",
  "Intiated Times",
  "Tracking Details",
  "Product Details",
  "Amount Details",
  "Address",
  "Current Location & Time",
  "NDR Remark",
  "Consignee remarks Whatsapp",
  "Consignee remarks Email",
  "Consignee remarks SMS",
  "Initiated date",
  "Time Lapse",
  "Initiated By",
  "Inititated Details",
];

const tempData = [
  {
    id: 1,
    clientOrderId: "CLNT-001",
    initiatedAction: "Call",
    intiatedTimes: "2",
    trackingDetails: "AWB123",
    productDetails: "Shoes",
    amountDetails: "₹1200",
    address: "Street 10",
    currentLocationTime: "Delhi - 12:30 PM",
    ndrRemark: "Customer unavailable",
    remarksWhatsapp: "Sent",
    remarksEmail: "Not Sent",
    remarksSMS: "Sent",
    initiatedDate: "2025-06-28",
    timeLapse: "2h",
    initiatedBy: "User A",
    initiatedDetails: "Attempted",
  },
  {
    id: 2,
    clientOrderId: "CLNT-001",
    initiatedAction: "Call",
    intiatedTimes: "2",
    trackingDetails: "AWB123",
    productDetails: "Shoes",
    amountDetails: "₹1200",
    address: "Street 10",
    currentLocationTime: "Delhi - 12:30 PM",
    ndrRemark: "Customer unavailable",
    remarksWhatsapp: "Sent",
    remarksEmail: "Not Sent",
    remarksSMS: "Sent",
    initiatedDate: "2025-06-28",
    timeLapse: "2h",
    initiatedBy: "User A",
    initiatedDetails: "Attempted",
  }
  // Add more rows as needed
];

const Active = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = tempData.map(row => row.id);
      setSelectedRows(allIds);
    } else {
      setSelectedRows([]);
    }
  };

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(prev => prev.filter(rowId => rowId !== id));
    } else {
      setSelectedRows(prev => [...prev, id]);
    }
  };

  return (
    <div className="overflow-x-auto w-full border border-gray-300 rounded-md">
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">
              <input
                type="checkbox"
                checked={selectedRows.length === tempData.length}
                onChange={handleSelectAll}
              />
            </th>
            {tableHeaders.map((header, index) => (
              <th key={index} className="p-2 border text-left whitespace-nowrap">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tempData.length === 0 ? (
            <tr>
              <td colSpan={tableHeaders.length + 1} className="text-center p-4">
                No Data Available For Selected Filters Or Date Range
              </td>
            </tr>
          ) : (
            tempData.map((row) => (
              <tr key={row.id} className="border-t">
                <td className="p-2 border">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </td>
                <td className="p-2 border">{row.clientOrderId}</td>
                <td className="p-2 border">{row.initiatedAction}</td>
                <td className="p-2 border">{row.intiatedTimes}</td>
                <td className="p-2 border">{row.trackingDetails}</td>
                <td className="p-2 border">{row.productDetails}</td>
                <td className="p-2 border">{row.amountDetails}</td>
                <td className="p-2 border">{row.address}</td>
                <td className="p-2 border">{row.currentLocationTime}</td>
                <td className="p-2 border">{row.ndrRemark}</td>
                <td className="p-2 border">{row.remarksWhatsapp}</td>
                <td className="p-2 border">{row.remarksEmail}</td>
                <td className="p-2 border">{row.remarksSMS}</td>
                <td className="p-2 border">{row.initiatedDate}</td>
                <td className="p-2 border">{row.timeLapse}</td>
                <td className="p-2 border">{row.initiatedBy}</td>
                <td className="p-2 border">{row.initiatedDetails}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Active;

