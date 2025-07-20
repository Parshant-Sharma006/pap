"use client";

import Image from "next/image";
import Footer from "@/Components/CommonDashBoard/footer";
import Header from "@/Components/CommonDashBoard/header";

export default function Page() {
  return (
    <>
      <Header />
      <section
        className="header-1 section-rotate pt-[119px]"
        data-spotlight="fullscreen"
      >
        <div>
          <div className="container-fluid ">
            <div className="flex flex-wrap lg:flex-nowrap items-center">
              <div className="w-full lg:w-7/12 px-6">
                <div className="py-5 text-black">
                  <h1 className="text-4xl font-bold mb-4 ">
                    Empowering Your Business with Our Curated Solutions
                  </h1>
                  <p className=" text-lg leading-relaxed">
                    Created to make on-demand delivery possible, Gauravexpress
                    is one of the most exponentially growing end-to-end
                    logistics aggregators. With deep domain expertise and
                    automated solutions, we strive to become the best virtual
                    logistics arm that offers hassle-free product picking and
                    shipping for our clients.
                    <br />
                    <br />
                    Our multifunctional platform can assist you with trained
                    personnel, speedy deliveries, timely pick-ups, and
                    comprehensive return services. We are a one-stop solution to
                    optimize your supply chain management and improve
                    organisational efficiency.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-5/12 px-6 flex justify-center">
                <Image
                  src="https://gauravexpress.in/images/oie_sbdE3uyv5L3H.png"
                  alt="Empowerment Illustration"
                  width={500}
                  height={500}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slice slice-lg bg-section-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-5 text-center">
            <h3 className="mt-4">Our Mission &amp; Vision</h3>
            <div className="fluid-paragraph mt-3">
              <p className="lead lh-180">
                Start building fast, beautiful and modern looking websites in no
                time using our theme.
              </p>
            </div>
          </div>

          <div className="row justify-center">
            <div className="col-lg-12">
              <div className="row row-grid">
                {/* Mission Card */}
                <div className="col-lg-4">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      {/* INLINE SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100px"
                        height="139px"
                        viewBox="0 0 100 139"
                        version="1.1"
                        className="injected-svg svg-inject"
                        style={{ height: "70px", width: "auto" }}
                      >
                        <title>Click</title>
                        <desc>Created with Sketch.</desc>
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g transform="translate(2.000000, 2.000000)">
                            <g transform="translate(12.000000, 29.000000)">
                              <path
                                d="M83.7,41.8 C83.7,38 80.6,34.9 76.8,34.9 C73.4,34.9 70.5,37.4 70,40.7 L66.9,40.7 L66.9,35.4 C66.9,31.6 63.8,28.5 60,28.5 C56.2,28.5 53.1,31.6 53.1,35.4 L53.1,40.6 L50.3,40.6 L50.3,29.9 C50.3,25.8 47,22.5 42.9,22.5 C38.8,22.5 35.5,25.8 35.5,29.9 L35.5,40.5 L33,40.5 L33,8.9 C33,4.8 29.7,1.5 25.6,1.5 C21.5,1.5 18.2,4.8 18.2,8.9 L18.2,54.4 L18.2,58.1 L18.2,73.8 L15.5,73.8 L15.5,62.7 C15.5,54.5 8.8,47.8 0.6,47.8 L0.6,75.1 C0.6,76.7 1.1,78.1 1.9,79.4 C1.9,79.4 1.9,79.5 1.9,79.5 C4.7,83.8 20.1,97 27.2,103 C29.5,105 32.5,106 35.5,106 L65.8,106 C75.9,106 84,97.8 84,87.8 L84,41.8 L83.7,41.8 Z"
                                fill="#F3F4F6"
                              />
                              <path
                                d="M83.7,40.9 L83.7,86.7 C83.7,96.8 75.5,104.9 65.5,104.9 L35.2,104.9 C32.1,104.9 29.2,103.8 26.9,101.9 C19.8,95.9 4.4,82.7 1.6,78.4 C1.6,78.4 1.6,78.3 1.6,78.3 C0.8,77.1 0.3,75.6 0.3,74 L0.3,46.7 C8.5,46.7 15.2,53.4 15.2,61.6 L15.2,72.7 L17.9,72.7 L17.9,7.8 C17.9,3.7 21.2,0.4 25.3,0.4 C29.4,0.4 32.7,3.7 32.7,7.8 L32.7,39.4 L35.2,39.4 L35.2,28.8 C35.2,24.7 38.5,21.4 42.6,21.4 C46.7,21.4 50,24.7 50,28.8 L50,39.5 L52.8,39.5 L52.8,34.3 C52.8,30.5 55.9,27.4 59.7,27.4 C63.5,27.4 66.6,30.5 66.6,34.3 L66.6,39.6 L69.7,39.6 C70.3,36.3 73.1,33.8 76.5,33.8 C80.6,34 83.7,37.1 83.7,40.9 Z"
                                fill="#F3F4F6"
                              />
                              <path
                                d="M83.7,46.3 L83.7,86.8 C83.7,96.9 75.5,105 65.5,105 L35.2,105 C32.1,105 29.2,103.9 26.9,102 C19.8,96 4.4,82.8 1.6,78.5 C1.6,78.5 1.6,78.4 1.6,78.4 C0.8,77.2 0.3,75.7 0.3,74.1 L0.3,52.1 C8.5,52.1 15.2,58.8 15.2,67 L15.2,78.1 L17.9,78.1 L17.9,13.2 C17.9,9.1 21.2,5.8 25.3,5.8 C29.4,5.8 32.7,9.1 32.7,13.2 L32.7,44.8 L35.2,44.8 L35.2,34.2 C35.2,30.1 38.5,26.8 42.6,26.8 C46.7,26.8 50,30.1 50,34.2 L50,44.9 L52.8,44.9 L52.8,39.5 C52.9,35.7 55.9,32.7 59.7,32.7 C63.5,32.7 66.6,35.8 66.6,39.6 L66.6,44.9 L69.7,44.9 C70.3,41.6 73.1,39.1 76.5,39.1 C80.6,39.3 83.7,42.4 83.7,46.3 Z"
                                fill="#DBEAFE"
                              />
                              <path
                                d="M83.7,41.7 C83.6,37.9 80.5,34.9 76.8,34.9 C73.4,34.9 70.5,37.4 70,40.7 L66.9,40.7 L66.9,35.4 C66.9,31.6 63.8,28.5 60,28.5 C56.2,28.5 53.1,31.6 53.1,35.4 L53.1,40.6 L50.3,40.6 L50.3,29.9 C50.3,25.8 47,22.5 42.9,22.5 C38.8,22.5 35.5,25.8 35.5,29.9 L35.5,40.5 L33,40.5 L33,8.9 C33,4.8 29.7,1.5 25.6,1.5 C21.5,1.5 18.2,4.8 18.2,8.9 L18.2,16.4"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17.8,34.1 L17.8,54.2 L17.8,57.9 L17.8,73.6 L15.1,73.6 L15.1,62.5 C15.1,54.3 8.4,47.6 0.2,47.6 L0.2,74.9 C0.2,76.5 0.7,77.9 1.5,79.2 C1.5,79.2 1.5,79.3 1.5,79.3 C4.3,83.6 19.7,96.8 26.8,102.8 C29.1,104.8 32.1,105.8 35.1,105.8 L65.4,105.8 C75.5,105.8 83.6,97.6 83.6,87.6 L83.6,52.3"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17.8,22.4 L17.8,23.2"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <g
                              stroke="#3B82F6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="4"
                            >
                              <path d="M35.8,0.3 L35.8,14.1" />
                              <path d="M10.8,10.9 L20.6,20.6" />
                              <path d="M0.7,36 L14.5,36" />
                              <path d="M57.6,35.4 L71.4,35.4" />
                              <path d="M11.2,60.9 L21,51.1" />
                              <path d="M51.1,20.2 L60.9,10.5" />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h5>Our Mission</h5>
                    <p>
                      We assist expanding organisations manage increasing demand
                      and expectations with faster deliveries. We help them
                      maximize customer satisfaction by becoming the ultimate
                      solution to get their products safely to their customer.
                    </p>
                  </div>
                </div>

                {/* Vision Card */}
                <div className="col-lg-4">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="145px"
                        height="113px"
                        viewBox="0 0 145 113"
                        version="1.1"
                        className="injected-svg svg-inject"
                        style={{ height: "70px", width: "auto" }}
                      >
                        <title>Apps</title>
                        <desc>Created with Sketch.</desc>
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g transform="translate(2.000000, 1.000000)">
                            <path
                              d="M31,0.5 L13,0.5 C6,0.5 0.4,6.2 0.4,13.1 L0.4,31.1 C0.4,38.1 6.1,43.7 13,43.7 L31,43.7 C38,43.7 43.6,38 43.6,31.1 L43.6,13.1 C43.6,6.1 37.9,0.5 31,0.5 Z"
                              fill="#E5E7EB" // light neutral
                            />
                            <path
                              d="M31,5.1 L17.6,5.1 C10.6,5.1 5,10.8 5,17.7 L5,31.1 C5,38.1 10.7,43.7 17.6,43.7 L31,43.7 C38,43.7 43.6,38 43.6,31.1 L43.6,17.7 C43.6,10.8 37.9,5.1 31,5.1 Z"
                              fill="#60A5FA" // primary-300: light blue
                            />
                            <path
                              d="M31,0.5 L13,0.5 C6,0.5 0.4,6.2 0.4,13.1 L0.4,31.1 C0.4,38.1 6.1,43.7 13,43.7 L31,43.7 C38,43.7 43.6,38 43.6,31.1 L43.6,13.1 C43.6,6.1 37.9,0.5 31,0.5 Z"
                              stroke="#3B82F6" // primary
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M31,56.2 L13,56.2 C6,56.2 0.4,61.9 0.4,68.8 L0.4,86.8 C0.4,93.8 6.1,99.4 13,99.4 L31,99.4 C38,99.4 43.6,93.7 43.6,86.8 L43.6,68.8 C43.6,61.8 37.9,56.2 31,56.2 Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M31,60.8 L17.6,60.8 C10.6,60.8 5,66.5 5,73.4 L5,86.8 C5,93.8 10.7,99.4 17.6,99.4 L31,99.4 C38,99.4 43.6,93.7 43.6,86.8 L43.6,73.4 C43.6,66.5 37.9,60.8 31,60.8 Z"
                              fill="#60A5FA"
                            />
                            <path
                              d="M31,56.2 L13,56.2 C6,56.2 0.4,61.9 0.4,68.8 L0.4,86.8 C0.4,93.8 6.1,99.4 13,99.4 L31,99.4 C38,99.4 43.6,93.7 43.6,86.8 L43.6,68.8 C43.6,61.8 37.9,56.2 31,56.2 Z"
                              stroke="#3B82F6"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M86.7,0.5 L68.7,0.5 C61.7,0.5 56.1,6.2 56.1,13.1 L56.1,31.1 C56.1,38.1 61.8,43.7 68.7,43.7 L86.7,43.7 C93.7,43.7 99.3,38 99.3,31.1 L99.3,13.1 C99.3,6.1 93.6,0.5 86.7,0.5 Z"
                              fill="#E5E7EB"
                              stroke="#3B82F6"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M86.7,56.2 L68.7,56.2 C61.7,56.2 56.1,61.9 56.1,68.8 L56.1,86.8 C56.1,93.8 61.8,99.4 68.7,99.4 L86.7,99.4 C93.7,99.4 99.3,93.7 99.3,86.8 L99.3,68.8 C99.3,61.8 93.6,56.2 86.7,56.2 Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M86.7,60.8 L73.3,60.8 C66.3,60.8 60.7,66.5 60.7,73.4 L60.7,86.8 C60.7,93.8 66.4,99.4 73.3,99.4 L86.7,99.4 C93.7,99.4 99.3,93.7 99.3,86.8 L99.3,73.4 C99.3,66.5 93.6,60.8 86.7,60.8 Z"
                              fill="#60A5FA"
                            />
                            <path
                              d="M86.7,56.2 L68.7,56.2 C61.7,56.2 56.1,61.9 56.1,68.8 L56.1,86.8 C56.1,93.8 61.8,99.4 68.7,99.4 L86.7,99.4 C93.7,99.4 99.3,93.7 99.3,86.8 L99.3,68.8 C99.3,61.8 93.6,56.2 86.7,56.2 Z"
                              stroke="#3B82F6"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <g transform="translate(68.000000, 18.000000)">
                              <path
                                d="M73,36.8 C73,33.5 70.3,30.8 67,30.8 C64,30.8 61.6,33 61.1,35.8 L58.4,35.8 L58.4,31.2 C58.4,27.9 55.7,25.2 52.4,25.2 C49.1,25.2 46.4,27.9 46.4,31.2 L46.4,35.7 L43.9,35.7 L43.9,26.4 C43.9,22.8 41,19.9 37.4,19.9 C33.8,19.9 30.9,22.8 30.9,26.4 L30.9,35.6 L28.7,35.6 L28.7,8.2 C28.7,4.6 25.8,1.7 22.2,1.7 C18.6,1.7 15.7,4.6 15.7,8.2 L15.7,47.7 L15.7,50.9 L15.7,64.5 L13.4,64.5 L13.4,54.9 C13.4,47.8 7.6,42 0.5,42 L0.5,65.7 C0.5,67.1 0.9,68.3 1.7,69.4 C1.7,69.4 1.7,69.5 1.7,69.5 C4.1,73.3 17.5,84.7 23.6,89.9 C25.6,91.6 28.2,92.5 30.8,92.5 L57.1,92.5 C65.8,92.5 72.9,85.4 72.9,76.7 L72.9,36.8 L73,36.8 Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M73,40.6 L73,75.7 C73,84.4 65.9,91.5 57.2,91.5 L31,91.5 C28.4,91.5 25.8,90.6 23.8,88.9 C17.6,83.7 4.3,72.2 1.9,68.5 C1.9,68.5 1.9,68.4 1.9,68.4 C1.2,67.3 0.7,66.1 0.7,64.7 L0.7,45.6 C7.8,45.6 13.6,51.4 13.6,58.5 L13.6,68.1 L15.9,68.1 L15.9,11.8 C15.9,8.2 18.8,5.3 22.4,5.3 C26,5.3 28.9,8.2 28.9,11.8 L28.9,39.2 L31.1,39.2 L31.1,30 C31.1,26.4 34,23.5 37.6,23.5 C41.2,23.5 44.1,26.4 44.1,30 L44.1,39.3 L46.6,39.3 L46.6,34.7 C46.7,31.4 49.3,28.8 52.6,28.8 C55.9,28.8 58.6,31.5 58.6,34.8 L58.6,39.4 L61.3,39.4 C61.8,36.6 64.2,34.4 67.2,34.4 C70.3,34.6 73,37.3 73,40.6 Z"
                                fill="#93C5FD" // primary-100
                              />
                              <path
                                d="M73,36.8 C73,33.5 70.3,30.8 67,30.8 C64,30.8 61.6,33 61.1,35.8 L58.4,35.8 L58.4,31.2 C58.4,27.9 55.7,25.2 52.4,25.2 C49.1,25.2 46.4,27.9 46.4,31.2 L46.4,35.7 L43.9,35.7 L43.9,26.4 C43.9,22.8 41,19.9 37.4,19.9 C33.8,19.9 30.9,22.8 30.9,26.4 L30.9,35.6 L28.7,35.6 L28.7,8.2 C28.7,4.6 25.8,1.7 22.2,1.7 C18.6,1.7 15.7,4.6 15.7,8.2 L15.7,47.7 L15.7,50.9 L15.7,64.5 L13.4,64.5 L13.4,54.9 C13.4,47.8 7.6,42 0.5,42 L0.5,65.7 C0.5,67.1 0.9,68.3 1.7,69.4 C1.7,69.4 1.7,69.5 1.7,69.5 C4.1,73.3 17.5,84.7 23.6,89.9 C25.6,91.6 28.2,92.5 30.8,92.5 L57.1,92.5 C65.8,92.5 72.9,85.4 72.9,76.7 L72.9,36.8 L73,36.8 Z"
                                stroke="#3B82F6"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h5>Our Vision</h5>
                    <p>
                      We wish to see the light of commendable success by
                      offering speedy and cost-effective solutions to our
                      clients. By tapping newer markets, we strive to provide
                      lower systems investment and considerably reduced
                      logistics costs.
                    </p>
                  </div>
                </div>

                {/* Values Card */}
                <div className="col-lg-4">
                  <div className="text-center">
                    <div className="mb-4 flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="151px"
                        height="145px"
                        viewBox="0 0 151 145"
                        version="1.1"
                        className="injected-svg svg-inject"
                        style={{ height: "70px", width: "auto" }}
                      >
                        <title>Strength</title>
                        <desc>Created with Sketch.</desc>
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g transform="translate(2.000000, 2.000000)">
                            <path
                              d="M146.5,138.5 C146.5,138.5 143.3,138.8 143.6,138.9 L109.8,141.3 L99.7,126.5 C84.9,138 68.1,139.3 47.9,137 C32.8,135.3 17.1,126.4 4,118.7 C1,116.9 0.2,112.9 0.7,109.5 C1.1,106.4 3.2,109.1 4,100.7 C7.8,63 31.1,21.7 55.1,3.6 C65.4,-4.2 100.2,5.5 98.9,13.9 C97.2,24.4 83.8,34.4 77.6,35.9 C73.8,36.8 66.7,30 66.2,26 C66.1,24.9 66.2,25.5 65.6,22.8 C65.4,22.9 60.6,25.3 60.4,25.4 L57.3,28.5 C50.4,76.9 51.1,64 51.1,75.1 L51.3,75.1 C59.8,68.3 77.5,67.4 87,72.6 C89.8,74.1 92.4,76.2 94.8,78.5 L95.3,77.5 L96.3,77 L96,77 C110.6,58.6 138.8,63.5 147,81.5 L147,81.8 L146.5,138.5 Z"
                              fill="#D1D5DB"
                              fillRule="nonzero"
                            />
                            <path
                              d="M145.3,89.8 C145.7,90.6 145.1,137.8 145.1,138.7 C144.6,138.8 144.2,138.8 143.9,138.9 L143,139 L111.1,141.3 C110.3,141.4 109.5,141 109,140.3 L101,128.6 C100.3,127.5 98.8,127.2 97.8,128 C83.4,138.2 67.2,139.4 47.8,137.1 C32.7,135.4 17,126.5 3.9,118.8 C2.6,118 1.7,116.8 1.1,115.4 C0.9,114.8 0.9,114.1 1.2,113.5 C2.2,111.6 5.8,108.3 6,106.3 C10.2,69.3 33.1,30.5 56.9,12.5 C65.9,5.7 90.1,12.2 96.2,19.5 C96.8,20.2 96.8,21.2 96.4,22 C91.9,29.9 82.4,34.7 77.5,35.9 C73.7,36.8 66.6,30 66.1,26 C66.1,26 66.1,26 66.1,26 C66,24.4 64.3,23.4 62.8,24.2 C61.9,24.6 61.1,25 60.7,25.3 C60.5,25.4 60.3,25.6 60.1,25.7 L57.8,28 C57.4,28.4 57.2,28.8 57.1,29.3 C56.8,31.4 56.5,33.4 56.2,35.2 L55.7,35.7 C48.8,84.1 49.5,72.9 49.5,84 L49.7,84 C58.2,77.2 75.9,76.3 85.4,81.5 C88.2,83 90.8,85.1 93.2,87.4 L93.7,86.4 L94.7,85.9 L94.4,85.9 C109,67.5 136.8,72.2 145.3,89.8 Z"
                              fill="#93C5FD"
                              fillRule="nonzero"
                            />
                            <path
                              d="M145.1,138.7 C144.3,138.8 143.4,138.9 143.6,139 L109.8,141.4 L99.7,126.6 C84.9,138.1 68.1,139.4 47.9,137.1 C32.8,135.4 17.1,126.5 4,118.8 C2.3,117.8 1.3,116.1 0.8,114.2 C1.5,113.4 -0.1,111.5 2.5,107.9 C2.8,107.5 2.6,106.8 2.7,106.3 C3.2,101.8 4,97.2 5.1,92.7 C5.4,91.5 5.7,90.2 6,89 C5.9,90 5.7,91 5.6,92 C5.5,92.5 5.5,93.1 5.4,93.6 C5,97.6 4.3,99.1 3.7,99.9 C7.8,97.6 3.8,112.4 5.5,113.5 C17.7,121.7 35.5,125.9 52.1,126.7 C68.5,127.5 82.2,120.1 94.7,113.8 C100.2,111.1 105.1,112.6 108.5,117.7 C108.5,117.7 116.5,129.1 124.2,132 C131.3,134.7 141.5,136.7 141.5,136.7 C148.9,136.1 144.1,137.2 145.1,138.7 Z"
                              fill="#BAD8FF"
                              fillRule="nonzero"
                            />
                            <path
                              d="M146.9,81.4 C138.7,63.4 110.6,58.4 95.9,76.9 M93.3,130.8 C95.4,129.6 97.5,128.2 99.6,126.6 L109.7,141.4 M28.3,33.8 C15.8,53.4 6.2,77.7 3.9,100.7 C3.1,109.1 1,106.4 0.6,109.5 C0.1,113 0.9,117 3.9,118.7 C17,126.4 32.7,135.3 47.8,137.1 C60.9,138.6 72.5,138.6 83.1,135.3 M34.3,25 C34.1,25.2 34,25.4 33.8,25.6 M146,137.8 C129.8,132.4 128,119.8 109.1,95.4 C103,87.6 95.7,77.2 86.9,72.4 C77.4,67.2 59.7,68.1 51.2,74.9 L51,74.9 C51,73.6 51,72.3 51,71 C51,70.2 51,69.5 51.1,68.7 C51.2,67.7 51.4,66.7 51.5,65.7 C51.8,63.7 52.2,61.8 52.5,59.8 C53.1,56.1 53.7,52.4 54.3,48.7 C58,24.4 56.1,27.3 65.6,22.6 C66.2,25.3 66.1,24.7 66.2,25.8 C66.6,29.8 73.8,36.7 77.6,35.7 C83.8,34.2 97.2,24.2 98.9,13.7 C100.2,5.4 65.4,-4.4 55.1,3.4 C49.7,7.5 44.3,12.8 39.2,19"
                              stroke="#3B82F6"
                              strokeWidth="3.2358"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M56.1,109.8 C64.2,113.1 76,110.9 84.2,105.2"
                              stroke="#3B82F6"
                              strokeWidth="3.2358"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M46.9,104 C47.6,104.8 48.4,105.6 49.3,106.3"
                              stroke="#3B82F6"
                              strokeWidth="3.2358"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M146.9,87.4 L146.9,81.7 L146.9,87.4 Z"
                              fill="#4374B9"
                              fillRule="nonzero"
                            />
                            <path
                              d="M65.1,22.8 C68.5,21.1 70.2,19.4 70.2,19.4"
                              stroke="#3B82F6"
                              strokeWidth="3.2358"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <h5>Our Values</h5>
                    <p>
                      We offer better performance and conduct our business with
                      trust and integrity. We embrace teamwork while working
                      safely. Our organisation embraces discipline,
                      responsiveness, and punctuality to help us improve with
                      optimum efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
