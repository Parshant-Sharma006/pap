"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedMethod, setSelectedMethod] = useState("waybil_number");
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    console.log("Tracking ID:", trackingId);
    // Replace with actual API call
  };

  return (
    <>
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center flex-wrap py-3">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center justify-center text-center"
            >
              <Image
                src="https://parcelx-docs.s3.ap-south-1.amazonaws.com/Custom-Tracking/04-Jun-2025/9271e4b9bedf4ad76812a72e247f3aae"
                alt="Logo"
                width={150}
                height={50}
              />
            </Link>

            {/* Toggle Button (Mobile) */}
            <button
              className="block md:hidden text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Navigation Links */}
            <div
              className={`w-full md:flex md:items-center md:w-auto ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
                {/* Add links here */}
                {/* Example:
              <li>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">
                  About
                </Link>
              </li>
              */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="section01 relative">
        {/* Background Banner Image */}
        <div className="banner-img relative w-full h-64 md:h-[400px]">
          <Image
            src="https://parcelx-docs.s3.ap-south-1.amazonaws.com/Custom-Tracking/04-Jun-2025/58deb090623c6fe91b5527aed2035da9"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Tracking Form */}
        <div className="container mx-auto px-4 relative -top-50 z-10 mt-[-6rem]">
          <div className="flex  justify-center flex-row items-center md:flex-row md:items-center md:justify-center">
            <div className="w-full md:w-1/2 bg-white p-6 rounded shadow tracking-card">
              <div className="text-lg font-semibold mb-4">
                Enter your waybill number to track your package
              </div>

              {/* Radio Options */}
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                {[
                  { id: "waybil_number", label: "Waybill Number" },
                  { id: "order_id", label: "Channel Order ID" },
                  { id: "number", label: "Mobile Number" },
                ].map((option) => (
                  <label key={option.id} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="trackingid"
                      value={option.id}
                      checked={selectedMethod === option.id}
                      onChange={() => setSelectedMethod(option.id)}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>

              {/* Input & Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  className="form-input border border-gray-300 rounded px-3 py-2 w-full"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  placeholder="Enter tracking info"
                />
                <button
                  type="button"
                  onClick={handleTrack}
                  className="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Track
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
