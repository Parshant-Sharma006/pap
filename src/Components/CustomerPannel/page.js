
// "use client";
// import React, { useState } from "react";
// import {
//   FaTachometerAlt,
//   FaPlus,
//   FaTruck,
//   FaWallet,
//   FaFileAlt,
//   FaChartBar,
//   FaTools,
//   FaCogs,
//   FaComments,
//   FaTicketAlt,
//   FaUserCog,
//   FaMoneyCheckAlt,
//   FaUser,
// } from "react-icons/fa";
// import { MdOutlineDashboard, MdOutlineLocalShipping } from "react-icons/md";
// import { BsClipboardCheck } from "react-icons/bs";
// import { AiFillSetting } from "react-icons/ai";

// import { useRef, useEffect } from "react";
// import {
  
//   FaHome,
//   FaIdCard,
//   FaLock,
//   FaFileContract,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { MdVerified } from "react-icons/md";



// import AddOrders from "@/app/AddOrders/Page";
// import Shipment from "@/app/Shipment/Page";
// import Dashboard from "@/app/Dashboard/Page";
// import Reports from "@/app/Reports/Page";
// import Utilities from "@/app/Utilities/Page";
// import Setting from "@/app/Setting/Page";
// import NDR from "@/app/NDR/Page";
// import Billings from "@/app/Billings/Page";
// import Communications from "@/app/Communications/Page";
// import Wallet from "@/app/Wallet/Page";
// import CustomerPannelSupport from "@/app/CustomerPannelSupport/Page";
// import Profile from "@/Components/CustomerProfile/Profile";
// import { set } from "date-fns";

// // import AddOrders from "../../app/AddOrders/page";
// // import Shipment from "../../app/Shipment/page";
// // import Dashboard from "../../app/Dashboard/page";
// // import Reports from "../../app/Reports/page";
// // import Utilities from "../../app/Utilities/page";
// // import Setting from "../../app/Setting/page";
// // import NDR from "../../app/NDR/page";
// // import Billings from "../../app/Billings/page";
// // import Communications from "../../app/Communications/page";
// // import Tickets from "../../app/Tickets/page";
// // import Wallet from "../../app/Wallet/page";


// const tapperElements = {
//   Dashboard: {
//     label: "Dashboard",
//     icon: <FaTachometerAlt />,
//     component: <Dashboard />,
//   },
//   AddOrders: {
//     label: "Add Orders",
//     icon: <FaPlus />,
//     component: <AddOrders />,
//   },
//   Shipment: {
//     label: "Shipment",
//     icon: <MdOutlineLocalShipping />,
//     component: <Shipment />,
//   },
//   Wallet: { label: "Wallet", icon: <FaWallet />, component: <Wallet /> },
//   NDR: { label: "NDR", icon: <BsClipboardCheck />, component: <NDR /> },
//   Reports: { label: "Reports", icon: <FaChartBar />, component: <Reports /> },
//   Billings: { label: "Billings", icon: <FaFileAlt />, component: <Billings /> },
//   Utilities: {
//     label: "Utilities",
//     icon: <FaTools />,
//     component: <Utilities />,
//   },
//   Communications: {
//     label: "Communications",
//     icon: <FaComments />,
//     component: <Communications />,
//   },
//   // Tickets: { label: "Tickets", icon: <FaTicketAlt />, component: <Tickets /> },
//   // Setting: {
//   //   label: "Setting",
//   //   icon: <AiFillSetting />,
//   //   component: <Setting />,
//   // },
//   Support :{
//      label: "Support",
//      icon: <FaUserCog />,
//      component: <CustomerPannelSupport />,
//   },
//   Profile: {
//     label: "Profile",
//     icon: <FaUser />,
//     component: <Profile />,
//   },
// };

// const Page = () => {
//   const [selectedTab, setSelectedTab] = useState("Dashboard");
//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar />
//         {/* Data Section */}
//         <Outlet selectedTab={selectedTab} />
      
//       </main>
//     </div>
//   );
// };

// export default Page;

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef();
//   const handleAccountsClick = () => {
//     setIsOpen(!isOpen);
//   };
//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);
//   return (
//     <div className="relative ">
//       <nav
//         className="bg-white shadow px-4 py-3 flex gap-4 items-center justify-end"
//         ref={dropdownRef}
//       >
//         <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//           <FaTicketAlt /> Tickets
//         </button>
//         <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//           <FaWallet /> Wallet Cash
//         </button>
//         <button className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
//           <FaMoneyCheckAlt />
//           Pay Now
//         </button>
//         <button
//           onClick={handleAccountsClick}
//           className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//         >
//           <FaUser /> Accounts
//         </button>
//       </nav>
//       {/* User Account Dropdown Menu */}

//       {isOpen && (
//         <div className="absolute right-4 mt-0 w-64 bg-white rounded-md shadow-xl z-50">
//           <div className=" bg-blue-900 text-white p-3 font-semibold text-[11px] leading-tight rounded-t-md">
//             GAURAV EXPRESS LOGISTIC SERVICES
//             <div className="text-[11px] text-green-600 font-semibold mt-1">
//               GAURAV EXPRESS FARIDABAD
//             </div>
//           </div>
//           <ul className="text-gray-700 text-[13px] divide-y divide-gray-200">
//             <li>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
//               >
//                 <FaUser /> Profile
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
//               >
//                 <FaHome /> DC Addresses
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
//               >
//                 <MdVerified className="text-green-500" /> KYC
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
//               >
//                 <FaLock /> Change Password
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
//               >
//                 <FaFileContract /> Term & Conditions
//               </a>
//             </li>
//           </ul>
//           <button className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-b-md">
//             <FaSignOutAlt /> Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// function Sidebar({ setSelectedTab, selectedTab }) {
//   return (
//     <aside className="w-40 bg-gray-800 text-white p-4 scrollbar-hide overflow-y-auto">
//       <h2 className="text-xl font-bold mb-6">
//         <img src={"./CustomerPannelImages/CustomerPannel/logoo.png"}></img>
//       </h2>
//       <ul className="space-y-2">
//         {Object.keys(tapperElements).map((item) => (
//           <li
//             key={item}
//             onClick={() => setSelectedTab(item)}
//             className={`cursor-pointer p-2 rounded flex flex-col items-center gap-2 ${
//               selectedTab === item ? "bg-gray-600" : "hover:bg-gray-700"
//             }`}
//           >
//             <div className="text-4xl">{tapperElements[item].icon}</div>
//             <div className="text-[12px] font-semibold ">
//               {tapperElements[item].label}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }

// function Outlet({ selectedTab }) {
//   return (
//     <>
//       <section className="p-5 bg-gray-100 flex-1 overflow-auto">
//         {/* <h1 className="text-2xl font-semibold mb-4">{selectedTab}</h1> */}
//         {tapperElements[selectedTab].component}
//       </section>
//     </>
//   );
// }