"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Footer from "@/Components/CommonDashBoard/footer";
import Header from "@/Components/CommonDashBoard/header";

export default function Page() {
  const [activeTab, setActiveTab] = useState("b2c");

  const TabButton = ({ label, id }) => (
    <button
      className={`px-6 py-2 rounded-t-lg text-sm font-medium transition-colors duration-300 border-b-2 ${
        activeTab === id
          ? "bg-gradient-to-r from-pink-300 to-indigo-400 text-white border-indigo-400"
          : "text-gray-500 border-transparent hover:text-indigo-400"
      }`}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );

  const PricingCard = ({ title, price, description, features }) => (
    <div className="w-full md:w-1/3 p-4 flex">
      <div className="rounded-2xl border shadow-md p-6 flex flex-col items-center bg-white w-full h-full">
        <Image
          src="/images/favicon.ico"
          alt="logo"
          width={36}
          height={36}
          className="mb-4"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">Start shipping from</p>
        <h4 className="text-xl font-bold text-gray-800 mb-3">{price}</h4>
        <p className="text-center text-sm text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="w-full text-center rounded-full bg-gradient-to-r from-pink-300 to-indigo-500 text-white font-semibold py-2 mb-4"
        >
          Create an account
        </a>
        <div className="w-full border-t border-gray-200 my-3">
          <h5 className="text-center text-gray-700 text-lg font-medium -mt-3 px-2 inline-block bg-white">
            FEATURES
          </h5>
        </div>
        <ul className="text-sm text-gray-700 space-y-2 w-full mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" /> {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <section className="w-full py-20 bg-gradient-to-r from-indigo-100 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-semibold text-gray-900">Pricing</h1>
            <h3 className="text-xl font-medium mt-4 text-gray-800">
              Choose a plan that works best for you
            </h3>
            <p className="text-base text-gray-600 mt-4 leading-relaxed">
              Identify needs, set a budget, compare features, check flexibility,
              read reviews, and ensure compatibility.
            </p>
          </div>
        </div>
      </section>
      <section className="slice slice-lg pb-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4 border-b border-gray-200 mb-6">
            <TabButton label="B2C" id="b2c" />
            <TabButton label="B2B" id="b2b" />
          </div>

          {activeTab === "b2c" && (
            <div className="flex flex-wrap -mx-4">
              <PricingCard
                title="Lite"
                price="Rs.26/500gms"
                description="A free and simplified plan best for social, small and medium e-commerce sellers"
                features={[
                  "Call, Email & Chat Support",
                  "1 Ecommerce Channel",
                  "Automated Channel Order Sync",
                  "Limited Label Customization",
                  "Domestic Shipping",
                ]}
              />
              <PricingCard
                title="Professional"
                price="Rs.20/500gms"
                description="Dynamic plans for sellers who sell on multiple marketplaces and websites"
                features={[
                  "Shared Support Team",
                  "Multiple Ecommerce Channel Integrations",
                  "Priority Support",
                  "Unlimited Label Customization",
                  "Automated Channel Order Sync",
                  "Domestic Shipping",
                ]}
              />
              <PricingCard
                title="Enterprise"
                price="Shipping Solution"
                description="Get an exclusive plan tailored to meet your business needs"
                features={[
                  "Dedicated Account Manager",
                  "Customized Integrations",
                  "Unlimited Label Customization",
                  "Automated Channel Order Sync",
                  "Domestic Shipping",
                ]}
              />
            </div>
          )}

          {activeTab === "b2b" && (
            <div className="flex justify-center">
              <div className="w-full md:w-1/3 p-4">
                <div className="rounded-2xl border shadow-md p-6 flex flex-col items-center bg-white">
                  <Image
                    src="/images/favicon.ico"
                    alt="logo"
                    width={36}
                    height={36}
                    className="mb-4"
                  />
                  <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                    Professional
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    Start shipping from
                  </p>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    Rs.7/KG
                  </h4>
                  <p className="text-center text-sm text-gray-600 mb-4">
                    Dynamic plans for sellers who sell on multiple marketplaces
                    and websites
                  </p>
                  <a
                    href="#"
                    className="w-full text-center rounded-full bg-gradient-to-r from-pink-300 to-indigo-500 text-white font-semibold py-2 mb-4"
                  >
                    Create an account
                  </a>
                  <div className="w-full border-t border-gray-200 my-3">
                    <h5 className="text-center text-gray-700 text-lg font-medium -mt-3 px-2 inline-block bg-white">
                      FEATURES
                    </h5>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-2 w-full">
                    {[
                      "Shared Support Team",
                      "Multiple Ecommerce Channel Integrations",
                      "Priority Support",
                      "Unlimited Label Customization",
                      "Automated Channel Order Sync",
                      "Domestic Shipping",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheck className="text-green-500 mr-2" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
