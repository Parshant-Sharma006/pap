"use client"
import React, {useState} from 'react'
import CODs from '@/Components/billings/CODs';
import OrdesInvoice from '@/Components/billings/OrdesInvoice';
import CommunicationInvoice from '@/Components/billings/CommunicationInvoice';
import TrackingOrder from '@/Components/billings/TrackingOrder';

const Page = () => {
   const [activeTab, setActiveTab] = useState(" CODs");

  const clickHandler = (tab) => {
    setActiveTab(tab);  
  }


  return (
    <div className="w-full p-4">
      <div className="w-full flex gap-6 border-b-2 border-gray-200 mb-6">
        <div
          onClick={() => clickHandler(" CODs")}
          className={`font-bold p-2 cursor-pointer  ${
            activeTab === " CODs" ? "border-b-4 border-green-800  " : ""
          }`}
        >
          CODs
        </div>
        <div
          onClick={() => clickHandler(" OrderInvoice")}
          className={`font-bold p-2 cursor-pointer  ${
            activeTab === " OrderInvoice" ? "border-b-4 border-green-800 " : ""
          }`}
        >
          Order Invoice
        </div>
        <div
          onClick={() => clickHandler(" CommunicationInvoice")}
          className={`font-bold p-2 cursor-pointer  ${
            activeTab === " CommunicationInvoice"
              ? "border-b-4 border-green-800  "
              : ""
          }`}
        >
          Communication Invoice
        </div>

        {/* temparary TrackingOrder page is here */}
        <div
          onClick={() => clickHandler(" tempTracking")}
          className={`font-bold p-2 cursor-pointer  ${
            activeTab === " tempTracking" ? "border-b-4 border-green-800  " : ""
          }`}
        >
          tempTracking
        </div>
      </div>
      {/* Tab Content here */}
      <div className="w-full p-4">
        {/* Rate Calculator content goes here */}
        {activeTab === " CODs" && (
          <div>
            <CODs />
          </div>
        )}
        {/* Pincode Serviceabilty content goes here */}
        {activeTab === " OrderInvoice" && (
          <div>
            <OrdesInvoice />
          </div>
        )}
        {/* Rate Card content goes here */}
        {activeTab === " CommunicationInvoice" && (
          <div>
            <CommunicationInvoice />
          </div>
        )}
        {/* Temporary TrackingOrder page is here  */}
        {/* Rate Card content goes here */}
        {activeTab === " tempTracking" && (
          <div>
            <TrackingOrder />
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
