"use client"
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStoreAlt,
  faPalette,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { FaCogs, FaMoneyBillWave, FaShippingFast } from "react-icons/fa";
import { FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import Footer from "@/Components/CommonDashBoard/footer";
import Header from "@/Components/CommonDashBoard/header";

const HeroSection = () => {
  return (
    <>
    <Header/>
      <section
        className="d-flex flex-column flex-lg-row align-items-center justify-content-between px-4"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(120deg, #edeaff 0%, #ffffff 50%, #f0fff5 100%)",
          fontFamily: "Poppins, Inter, sans-serif",
        }}
      >
        {/* Left Content */}
        <div className="col-lg-6 text-center text-lg-start py-5">
          <span
            className="badge px-4 py-2 mb-4"
            style={{
              backgroundColor: "#e4d4ff",
              color: "#5f4b8b",
              fontWeight: 600,
              fontSize: "0.9rem",
              borderRadius: "999px",
            }}
          >
            Be stronger
          </span>

          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 600,
              lineHeight: "1.2",
              color: "#000000",
            }}
          >
            Gauravexpress - <br />
            The Superhero of shipping
          </h1>

          <p
            className="mt-4 mb-4"
            style={{
              fontSize: "1.1rem",
              color: "#5f5f5f",
              maxWidth: "500px",
            }}
          >
            Get the taste of our superpowers with an AI platform and ease of
            shipping.
          </p>

          <Link
            href="/login"
            className="btn btn-light border d-inline-flex align-items-center px-4 py-2 rounded-pill shadow-sm"
            style={{
              fontWeight: 500,
              fontSize: "1rem",
            }}
          >
            <FaUser className="me-2" />
            Login Now
          </Link>
        </div>

        {/* Right Content (Card) */}
        <div className="col-lg-5 mt-5 mt-lg-0">
          <div
            className="p-4 bg-white rounded-4 shadow-sm"
            style={{
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
            }}
          >
            <h3
              className="fw-bold mb-3"
              style={{ fontSize: "1.5rem", color: "#000" }}
            >
              <strong>One</strong> of the best in market.
            </h3>

            <p
              className="text-muted mb-4"
              style={{ fontSize: "1rem", color: "#7d7d7d" }}
            >
              Register within minutes with quick signup process and experience
              the blend of technology with shipping.
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon
                  icon={faStoreAlt}
                  height={20}
                  width={20}
                  style={{
                    color: "#ff6801", // Set icon color
                    fontSize: "20px", // Control size (width/height won't work)
                    border: "2px solid #ff6801", // Add border
                    borderRadius: "50%", // Optional: make border circular
                    //   padding: "8px", // Optional: add some space inside border
                  }}
                />

                <span
                  style={{ fontSize: "1rem", color: "#000", fontWeight: 500 }}
                >
                  Onboarding attributes
                </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <FontAwesomeIcon
                  icon={faPalette}
                  width={20}
                  height={20}
                  style={{
                    color: "#ff6801", // Icon color
                    border: "1px solid #ff6801", // Border color
                    margin: "4    px", // Padding inside border
                    borderRadius: "50%", // Optional: makes border circular
                  }}
                />

                <span
                  style={{ fontSize: "1rem", color: "#000", fontWeight: 500 }}
                >
                  Platform attributes
                </span>
              </li>
              <li className="d-flex align-items-center">
                <FontAwesomeIcon
                  icon={faCog}
                  width={20}
                  height={20}
                  style={{
                    color: "#ff6801", // Icon color
                    border: "1px solid #ff6801", // Border color
                    margin: "4    px", // Padding inside border
                    borderRadius: "50%",
                  }}
                />
                <span
                  style={{ fontSize: "1rem", color: "#000", fontWeight: 500 }}
                >
                  SeamLess Experience
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container text-center">
          <h3 className="mb-3 fw-semibold">Onboarding attributes</h3>
          <p className="text-muted mb-5">
            Register within minutes with quick signup process and experience the
            blend of <br />
            technology with shipping
          </p>

          <div className="row justify-content-center">
            <div className="col-md-4 mb-4 flex row justify-center">
              <FaCogs size={60} color="#0866C6" className="mb-3" />
              <h5 className="fw-bold">Quick Onboarding Process</h5>
              <p className="text-muted mt-2">
                Hop on the ride with Gauravexpress with our quick and easy
                signup process. Just enter your basic details, and you’re good
                to go.
              </p>
            </div>

            <div className="col-md-4 mb-4 flex row justify-center">
              <FaMoneyBillWave size={60} color="#0866C6" className="mb-3" />
              <h5 className="fw-bold">No Monthly Charges</h5>
              <p className="text-muted mt-2">
                Tired of subscriptions? We hear you. Gauravexpress only charges
                you for your shipping. No extra charges or subscription
                required.
              </p>
            </div>

            <div className="col-md-4 mb-4 flex row justify-center ">
              <FaShippingFast
                size={60}
                color="#0866C6"
                className="mb-3 flex "
              />
              <h5 className="fw-bold">Priority Based Shipping</h5>
              <p className="text-muted mt-2">
                Our unique AI-based system chooses the best courier partner for
                you. So, you have a hassle-free life while our technology works
                for you.
              </p>
            </div>
            <div className="col-md-4 mb-4 flex row justify-center">
              <FaMoneyBillWave
                size={60}
                color="#0866C6"
                className="mb-3 flex"
              />
              <h5 className="fw-bold">Simple Competitive Pricing</h5>
              <p className="text-muted mt-2">
                No hidden charges or fees, no matter where you deliver. With an
                affordable price model, you can save a lot on your orders.
              </p>
            </div>

            {/* Multiple Pickup Points */}
            <div className="col-md-4 mb-4 flex row justify-center">
              <FaMapMarkerAlt size={60} color="#0866C6" className="mb-3 flex" />
              <h5 className="fw-bold">Multiple Pickup Points</h5>
              <p className="text-muted mt-2">
                Add multiple warehouses anytime. Use our platform to manage and
                return your shipments to a location near you.
              </p>
            </div>

            {/* Dedicated Account Manager */}
            <div className="col-md-4 mb-4 flex row justify-center">
              <FaUserTie size={60} color="#0866C6" className="mb-3 flex" />
              <h5 className="fw-bold">Dedicated Account Manager</h5>
              <p className="text-muted mt-2">
                We care about you. We give you your personal account manager to
                solve all your problems or queries, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="slice slice-lg bg-gradient-primary making-white svg-min">
        <div className="container">
          <div className="mb-5 text-center">
            <h3 className="mt-4">Platform attributes</h3>
            <div className="fluid-paragraph mt-3">
              <p className="lead lh-180">
                A smart platform that takes care of all your needs
              </p>
            </div>
          </div>

          <div className="row row-grid">
            {/* Card 1 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="Multiple ordering option"
                    src="https://gauravexpress.in/images/icon/noun_manager_1908032.svg"
                    height={80}
                    width={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>Multiple ordering option</h5>
                  <p className="text-muted">
                    Now you have single, quick and bulk options for placing your
                    orders. You can sit back and relax while we take care of all
                    your orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="Multiple Channel Integration"
                    src="https://gauravexpress.in/images/icon/noun_integration_252428.svg"
                    height={80}
                    width={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>Multiple Channel Integration</h5>
                  <p className="text-muted">
                    Sync all your channels and marketplaces and put them on a
                    single dashboard to have all the data at a single spot.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="API Integration"
                    src="https://gauravexpress.in/images/icon/noun_API_3187720.svg"
                    height={80}
                    width={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>API Integration</h5>
                  <p className="text-muted">
                    Make your system efficient by integrating our RESTful APIs
                    and let our system help you with shipping and tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="All in One Dashboard"
                    src="https://gauravexpress.in/images/icon/noun_dashboard_3377890.svg"
                    height={80}
                    width={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>All in One Dashboard</h5>
                  <p className="text-muted">
                    Get a next-gen dashboard to manage all your shipments
                    related activities on a single dashboard comprising valuable
                    analytics and smart tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="Real Time Order tracking"
                    src="https://gauravexpress.in/images/icon/noun_tracking_2942024.svg"
                    height={80}
                    width={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>Real Time Order tracking</h5>
                  <p className="text-muted">
                    We provide our customers with real-time order tracking,
                    giving them constant information through SMS and email about
                    their package whereabouts.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="Simple Unified Billing"
                    src="https://gauravexpress.in/images/icon/noun_bill_4102394.svg"
                    height={80}
                    width={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>Simple Unified Billing</h5>
                  <p className="text-muted">
                    Our billing system is not only simple and transparent but
                    also light for your pockets. Our bills cover all your
                    additions and requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slice slice-lg svg-min">
        <div className="container">
          <div className="mb-5 text-center">
            <h3 className="mt-4">SeamLess Experience</h3>
            <div className="fluid-paragraph mt-3">
              <p className="lead lh-180">Smarter, Smoother than ever before.</p>
            </div>
          </div>

          <div className="row row-grid">
            {/* Card 1 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="Shipping Rate Calculator"
                    src="https://gauravexpress.in/images/icon/noun_Calculator_4115230.svg"
                    width={80}
                    height={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>Shipping Rate Calculator</h5>
                  <p className="text-muted">
                    With our shipping rate calculator tool, you can calculate
                    your delivery charges before placing your order.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="NDR Management"
                    src="https://gauravexpress.in/images/icon/noun_management_1871553.svg"
                    width={80}
                    height={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>NDR Management</h5>
                  <p className="text-muted">
                    Customer not available? No worries. We have systems to
                    attempt multiple deliveries, and don’t worry; we’ll keep you
                    informed.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="Billing Weight Reconciliation"
                    src="https://gauravexpress.in/images/icon/noun_Weight_2599345.svg"
                    width={80}
                    height={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>Billing Weight Reconciliation</h5>
                  <p className="text-muted">
                    If you’re not satisfied with billing weight, we’ll do the
                    hard work for you. Our team will reconcile the billing
                    weight for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="Valuable Analytics"
                    src="https://gauravexpress.in/images/icon/noun_analytics_146755.svg"
                    width={80}
                    height={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>Valuable Analytics</h5>
                  <p className="text-muted">
                    We understand the importance of data for you. Our platform
                    analyzes your shipment activity to suggest valuable,
                    reliable, and best-in-class data analytics, for you to make
                    most of your decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="Pickup Management"
                    src="https://gauravexpress.in/images/icon/noun_boxes_3538733.svg"
                    width={80}
                    height={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>Pickup Management</h5>
                  <p className="text-muted">
                    You don’t have to worry about pickups anymore. Manage it all
                    from our all-feature Dashboard, and let us do the magic.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-lg-4">
              <div className="text-center">
                <div className="px-4 flex justify-center">
                  <Image
                    alt="Timely COD Remittance"
                    src="https://gauravexpress.in/images/icon/noun_time is money_3302628.svg"
                    width={80}
                    height={80}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
                <div className="px-4 pb-4">
                  <h5>Timely COD Remittance</h5>
                  <p className="text-muted">
                    We know how important money is. With timely COD remittance,
                    you don’t have to wait for your money to come into your bank
                    accounts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default HeroSection;
