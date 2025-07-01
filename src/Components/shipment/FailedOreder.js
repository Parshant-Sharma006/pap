import React, { useState } from "react";
import { jsPDF } from "jspdf";

const FailedOreder = () => {
     // Faild order js start
      // dummy data
    const dummyOrders = [
      {
        id: "12736990",
        datetime: "12 Jun’25 | 16:56 pm",
        direction: "Forward",
        expressType: "Air",
        productSKU: "SEMPAL",
        qty: 1,
        warehouseId: "57253",
        consigneeName: "Piyush Priyadarshi",
        address: "Shibral Kunj, Makrain, Sasaram, Bihar-821305",
        phone: "8566855855",
        amount: 2520,
        weight: 1,
        dimensions: { L: 10, B: 10, H: 10 },
        failureReason: "Pincode is not serviceable!",
      },
      {
        id: "12736991",
        datetime: "13 Jun’25 | 10:20 am",
        direction: "Backward",
        expressType: "Surface",
        productSKU: "PROD-ABC",
        qty: 2,
        warehouseId: "57254",
        consigneeName: "Rakesh Kumar",
        address: "Adarsh Colony, Gaya, Bihar-823001",
        phone: "9098765432",
        amount: 3100,
        weight: 2,
        dimensions: { L: 20, B: 15, H: 12 },
        failureReason: "Door locked",
      },
      {
        id: "12736992",
        datetime: "14 Jun’25 | 09:15 am",
        direction: "Forward",
        expressType: "Air",
        productSKU: "PROD-DEF",
        qty: 1,
        warehouseId: "57255",
        consigneeName: "Sanjana Gupta",
        address: "Sadar Bazar, Muzaffarpur, Bihar-842001",
        phone: "8888888888",
        amount: 2200,
        weight: 1.5,
        dimensions: { L: 18, B: 18, H: 18 },
        failureReason: "Consignee not available",
      },
      {
        id: "12736993",
        datetime: "15 Jun’25 | 04:30 pm",
        direction: "Forward",
        expressType: "Surface",
        productSKU: "PROD-GHI",
        qty: 3,
        warehouseId: "57256",
        consigneeName: "Anil Verma",
        address: "Civil Lines, Patna, Bihar-800001",
        phone: "9334422110",
        amount: 4900,
        weight: 5,
        dimensions: { L: 30, B: 20, H: 15 },
        failureReason: "Damage to packaging",
      },
      {
        id: "12736994",
        datetime: "16 Jun’25 | 06:45 pm",
        direction: "Backward",
        expressType: "Air",
        productSKU: "PROD-JKL",
        qty: 1,
        warehouseId: "57257",
        consigneeName: "Vijay Gupta",
        address: "Boring Road, Patna, Bihar-800013",
        phone: "9330000000",
        amount: 3700,
        weight: 2.5,
        dimensions: { L: 25, B: 25, H: 20 },
        failureReason: "Damage during delivery",
      },
      {
        id: "12736995",
        datetime: "17 Jun’25 | 04:04 pm",
        direction: "Forward",
        expressType: "Surface",
        productSKU: "PROD-PQR",
        qty: 1,
        warehouseId: "57258",
        consigneeName: "Amit Patel",
        address: "R.K.Puram, Muzaffarpur, Bihar-842005",
        phone: "9430000000",
        amount: 5000,
        weight: 4,
        dimensions: { L: 40, B: 30, H: 20 },
        failureReason: "Unable to reach recipient",
      },
      {
        id: "12736996",
        datetime: "18 Jun’25 | 04:04 pm",
        direction: "Backward",
        expressType: "Surface",
        productSKU: "PROD-XYZ",
        qty: 1,
        warehouseId: "57259",
        consigneeName: "Ramesh Chandra",
        address: "Station Road, Gaya, Bihar-823002",
        phone: "9435000000",
        amount: 2800,
        weight: 1,
        dimensions: { L: 12, B: 12, H: 12 },
        failureReason: "Incomplete delivery address",
      },
      {
        id: "12736997",
        datetime: "19 Jun’25 | 04:04 pm",
        direction: "Forward",
        expressType: "Air",
        productSKU: "PROD-LMN",
        qty: 2,
        warehouseId: "57260",
        consigneeName: "Sushil Mehra",
        address: "Jagdeopath, Patna, Bihar-800014",
        phone: "9435666666",
        amount: 3050,
        weight: 2,
        dimensions: { L: 15, B: 15, H: 15 },
        failureReason: "Customs hold-up",
      },
    ];
    
    
      // pagination, filtering, search
      const [selectedIds, setSelectedIds] = useState([]);
      const [filterTime, setFilterTime] = useState("Today");
    
      const [filterDirection, setFilterDirection] = useState("Forward");
    
      const [filterExpressType, setFilterExpressType] = useState("Air");
    
      const [searchOption, setSearchOption] = useState("Order ID");
    
      const [searchTerm, setSearchTerm] = useState("");
    
      // handle select all
      const handleSelectAll = (e) => {
        if (e.target.checked) {
          setSelectedIds(dummyOrders.map((item) => item.id));
        } else {
          setSelectedIds([]);
        }
      };
    
      // handle row select
      const handleSelect = (id) => {
        if (selectedIds.includes(id)) {
          setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
        } else {
          setSelectedIds((prev) => [...prev, id]);
        }
      };
    
      // export to PDF
      const exportToPDF = () => {
        if (selectedIds.length === 0) return;
    
        const doc = new jsPDF();
    
        doc.text("Exported Orders", 10, 10);
    
        let y = 20;
    
        dummyOrders
          .filter((item) => selectedIds.includes(item.id))
          .forEach((item) => {
            doc.text(
              `Order: ${item.id} | Amount: ${item.amount} | Phone: ${item.phone}`,
              10,
              y
            );
            y += 10;
          });
    
        doc.save("orders.pdf");
    
        alert("Exported to PDF.");
      };
    
      // Filtered data
      const filtered = dummyOrders.filter((item) => {
        if (searchTerm.trim() === "") return true;
    
        if (searchOption === "Order ID") {
          return item.id.toString().includes(searchTerm);
        } else if (searchOption === "Product Name") {
          return item.productSKU.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchOption === "Product SKU") {
          return item.productSKU.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchOption === "Consignee Name") {
          return item.consigneeName
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        } else if (searchOption === "Mobile") {
          return item.phone.toString().includes(searchTerm);
        }
        return true;
      });
    
      // Faild order js end
    
    
  return (
    <div>
      <div className="flex gap-8 border-b-2 border-gray-200 p-2 items-center mt-4 mb-4">
        <div className="p-4">
          {/* Filters */}
          <h1 className="text-2xl font-semibold mb-4">Orders</h1>

          <div className="flex justify-between mb-4">
            <div className="flex gap-5">
              {/* Filter by Direction */}
              <select
                className="border p-2 rounded"
                value={filterDirection}
                onChange={(e) => setFilterDirection(e.target.value)}
              >
                <option>Forward</option>
                <option>Backward</option>
              </select>

              {/* Filter by Express Type */}
              <select
                className="border p-2 rounded"
                value={filterExpressType}
                onChange={(e) => setFilterExpressType(e.target.value)}
              >
                <option>Air</option>
                <option>Surface</option>
              </select>

              {/* Search by */}
              <select
                className="border p-2 rounded"
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
              >
                <option>Order ID</option>
                <option>Product Name</option>
                <option>Product SKU</option>
                <option>Consignee Name</option>
                <option>Mobile</option>
              </select>

              <input
                className="border p-2 rounded"
                placeholder={`Search by ${searchOption}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-7">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterTime("Today");
                  setFilterDirection("Forward");
                  setFilterExpressType("Air");
                  setSearchOption("Order ID");
                }}
                className="bg-gray-700 text-gray-50 px-7 cursor-pointer rounded ml-2"
              >
                Reset
              </button>

              <button
                onClick={exportToPDF}
                disabled={selectedIds.length === 0}
                className="bg-green-950 disabled:bg-gray-500 cursor-pointer disabled:cursor-not-allowed text-gray-50 px-7 rounded ml-2"
              >
                Export
              </button>
            </div>
          </div>

          {/* Table */}
          <table className="min-w-full table-auto border border-gray-500">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">
                  <input type="checkbox" onChange={(e) => handleSelectAll(e)} />
                </th>
                <th className="border px-4 py-2">Order</th>
                <th className="border px-4 py-2">Direction</th>
                <th className="border px-4 py-2">Product</th>
                <th className="border px-4 py-2">Consignee</th>
                <th className="border px-4 py-2">Weight</th>
                <th className="border px-4 py-2">Other</th>
                <th className="border px-4 py-2">Failure</th>
                <th className="border px-4 py-2">Re-Order</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.id} className="border">
                  <td className="border px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => handleSelect(item.id)}
                    />
                  </td>
                  <td className="border px-4 py-2">
                    {item.id} <br /> {item.datetime}
                  </td>
                  <td className="border px-4 py-2"> {item.direction} </td>
                  <td className="border px-4 py-2">
                    SKU: {item.productSKU} | QTY: {item.qty}
                  </td>
                  <td className="border px-4 py-2">
                    {item.consigneeName} <br /> {item.address}
                    <br /> {item.phone}
                  </td>
                  <td className="border px-4 py-2">
                    {item.weight} KG <br />
                    L: {item.dimensions.L} cm, B: {item.dimensions.B} cm, H:{" "}
                    {item.dimensions.H} cm
                  </td>
                  <td className="border px-4 py-2"> {/* Other */} 📱 </td>
                  <td className="border px-4 py-2"> {item.failureReason} </td>
                  <td className="border px-4 py-2">
                    <button>🔁 Re-Order</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination can be implemented here if needed */}
        </div>
      </div>
    </div>
  );
}

export default FailedOreder
