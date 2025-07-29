"use client"; 

import Header from "@/Components/CommonDashBoard/header";
import Footer from "@/Components/CommonDashBoard/footer";
import React from "react";

const ContactUs = () => {
  return (
    <>
    <Header/>
    <div className="main-content">
      {/* Hero Section */}
      <section
        className="slice"
        data-offset-top="#header-main"
        style={{ paddingTop: "118.9px" }}
      >
        <div className="container-fluid py-5 pt-lg-6 position-relative zindex-100 bg-gradient-primary">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>Contact Us</h1>
              <p className="lead mt-4">
                Queries/Concerns/Suggestions/Feedback...reach us anytime.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="card bg-dark opacity-container text-white overflow-hidden shadow border-0">
                
                <span className="mask bg-gradient-dark opacity-9 opacity-8--hover"></span>
                <div className="card-body px-5 py-5">
                  <div style={{ minHeight: "179px" }}>
                    <h2 className="h2 text-white font-weight-bold mb-4">
                      Email Now
                    </h2>
                    <h5 className="text-white mt-4 mb-2">
                      <a
                        href="mailto:hello@gauravexpress.in"
                        style={{ color: "#fff" }}
                      >
                        hello@gauravexpress.in
                      </a>
                    </h5>
                    <h5 className="text-white mt-4 mb-2">
                      <a
                        href="mailto:support@gauravexpress.in"
                        style={{ color: "#fff" }}
                      >
                        support@gauravexpress.in
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="slice slice-lg pt-lg-5">
        <div className="container position-relative zindex-100">
          <div className="row mt--200">
            <div className="col-lg-6 mx-auto">{/* Optional content */}</div>
          </div>
        </div>
      </section>

      <section
        id="sct_contact_form"
        className="slice slice-lg"
        data-delimiter-before="1"
      >
        <div className="container">
          <div className="row row-grid align-items-center">
            <div className="col-lg-6">
              <h3>We would love to hear you...</h3>
              <p className="lead">
                If there something we can help you with, just let us know. We ll
                be more than happy to offer you our help.
              </p>
              <form className="mt-5">
                <div className="form-group mb-2">
                  <label className="sr-only">Your name</label>
                  <input
                    className="form-control form-control-lg"
                    placeholder="Your name"
                    type="text"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="sr-only">Email address</label>
                  <input
                    className="form-control form-control-lg"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div className="form-group mb-2">
                  <label className="sr-only">Type your message</label>
                  <textarea
                    className="form-control form-control-lg textarea-autosize"
                    rows="5"
                    placeholder="Type your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark rounded-pill mt-4"
                >
                  Send message
                </button>
              </form>
            </div>
            <div className="col-lg-1"></div>

            <div className="col-lg-5 ml-lg-auto">
              <p className="lead my-4">
                E:{" "}
                <a href="mailto:support@gauravexpress.in">
                  support@gauravexpress.in
                </a>
                <br />
                E:{" "}
                <a href="mailto:hello@gauravexpress.in">
                  hello@gauravexpress.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
