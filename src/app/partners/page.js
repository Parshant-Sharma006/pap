"use client";

import React from "react";
import Image from "next/image";
import Header from "@/Components/CommonDashBoard/header";
import Footer from "@/Components/CommonDashBoard/footer";
const PartnersSection = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        {/* Spotlight Section */}
        <section className="slice slice-lg overflow-hidden">
          <div className="container-fluid bg-gradient-primary d-flex align-items-center py-6 py-lg-8">
            <div className="col">
              <div className="container">
                <div className="row row-grid justify-content-center">
                  <div className="col-lg-5 text-center">
                    <h1 className="display-3">Our Partners</h1>
                    <p className="lead">
                      We have partnered with various Transit & Integration
                      partners to give you world-class solutions for your
                      shipping.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transit Partners */}
        <section className="slice slice-lg delimiter-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-5 text-center">
                  <h3>Transit Partners</h3>
                </div>
              </div>
            </div>
            <div className="row row-grid kr-cen verr">
              {[
                { name: "Xpressbees", img: "xpressbees-removebg-preview.png" },
                { name: "Shadowfax", img: "oie_cfnlLBYutlxu.png" },
                { name: "Gati", img: "gati-removebg-preview.png" },
                { name: "Fedex", img: "fedex-removebg-preview.png" },
                { name: "Ekart", img: "ekart-removebg-preview.png" },
                { name: "Delhivery", img: "delhivery-removebg-preview.png" },
                { name: "Aramex", img: "aramex-removebg-preview.png" },
                {
                  name: "Blue Dart",
                  img: "640px-Blue_Dart_logo_transparent.png",
                },
              ].map((partner, index) => (
                <div key={index} className="col-lg-3 col-6">
                  <div className="flex flex-col justify-between h-[250px] text-center px-4 py-10 bg-[#00000026] transition-all duration-300 ease-in-out rounded-[5px] mb-5">
                    <div>
                      <Image
                        src={`https://gauravexpress.in/images/Partners/${partner.img}`}
                        alt={partner.name}
                        width={150}
                        height={100}
                        className="mb-4 mx-auto"
                      />
                    </div>
                    <div className="icon-text">
                      <h5>{partner.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="slice slice-lg delimiter-bottom bg-gradient-primary bg-[url('https://gauravexpress.in/images/main-bg.png')] bg-center bg-no-repeat bg-cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-5 text-center">
                  <h3>Integration Partners</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "amazon-removebg-preview.png",
                "magento-removebg-preview.png",
                "opencart-removebg-preview.png",
                "prestashop2-removebg-preview.png",
                "wordpress-removebg-preview.png",
                "unicommerce-removebg-preview.png",
                "storehippo-removebg-preview.png",
                "shopify-removebg-preview.png",
              ].map((img, index) => (
                <div
                  key={index}
                  className="group bg-white min-h-[160px] flex justify-center items-center rounded-md transition-all duration-300"
                >
                  <Image
                    src={`https://gauravexpress.in/images/Partners/${img}`}
                    alt="Integration Partner"
                    width={150}
                    height={100}
                    className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PartnersSection;
