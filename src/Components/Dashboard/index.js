import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {


  const testimonials = [
    {
      name: "Dev Rathi",
      company: "Webliska",
      image: "https://gauravexpress.in/images/testimonial-img/dev.jpeg",
      feedback:
        "After looking out at a number of other logistic players, we zeroed over Gauravexpress. Speedy COD settlement has volunteered me to refer my business partners.",
    },
    {
      name: "Rajni",
      company: "TheTstore9",
      image: "https://gauravexpress.in/images/testimonial-img/rajni.jpeg",
      feedback:
        "Gauravexpress's platform is embedded with some smart tools which helps me in cutting down manpower and energy focusing on business and revenue.",
    },
    {
      name: "Gagandeep Singh",
      company: "The Wood Home",
      image: "https://gauravexpress.in/images/testimonial-img/gagandeep.jpg",
      feedback:
        "Gauravexpress data analysis engine gave me a deep insight about my audience. Consequently, I have changed my strategies and increased my profit margins.",
    },
  ];

  const services = [
    {
      name: "Express",
      image: "https://gauravexpress.in/images/icon/fast.png",
    },
    {
      name: "Next day",
      image: "https://gauravexpress.in/images/icon/asdfgh.png",
    },
    {
      name: "Appointment",
      image: "https://gauravexpress.in/images/icon/meeting.png",
    },
    {
      name: "International",
      image: "https://gauravexpress.in/images/icon/cvbnm.png",
    },
    {
      name: "Reverse",
      image: "https://gauravexpress.in/images/icon/return-box.png",
    },
    {
      name: "Hyperlocal",
      image: "https://gauravexpress.in/images/icon/grocery.png",
    },
  ];

  return (
    <>
      <section className="w-full bg-gradient-to-r from-[#f7f7ff] via-[#f4f5fc] to-[#f9fff9] py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Text */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-medium text-black mb-4 leading-tight">
            Shipping is now <br />
            <span className="font-light">smarter & easier</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Gauravexpress uses India’s smartest AI-based platform to make
            shipping easier than ever before. With our unique tech platform, you
            can manage your end-to-end shipping needs with just a few clicks.
            Our system automatically streamlines your shipping process with a
            single-window for multiple carriers and saves your time and costs.
          </p>

          <Link href="/get-started">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition flex items-center gap-2">
              Get Started
              <span className="text-xl">➔</span>
            </button>
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <Image
            src="/shipping-illustration.png" // <-- Place your illustration in /public/
            alt="Shipping Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </section>
      <section className="w-full bg-[#f9fafb] py-12 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-2">
          Small Business Parcel Delivery From Rs-24
          <span className="align-super text-xs">*</span>
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          We pick up and deliver across India and around the world in low,
          flat-rates. It is simple, reliable and affordable
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width={80}
                height={80}
                className=" text-blue-500 fill-current"
              >
                <g>
                  <path d="M90.395,32.094c-1.637-5.396-9.191-8.16-21.254-7.836c-0.65-0.524-1.32-1.031-2.014-1.51    c-0.299-0.208-0.639-0.313-0.979-0.343c1.635-3.313,2.918-6.597,2.918-8.754c0-6.282-5.111-11.393-11.396-11.393    c-6.283,0-11.396,5.111-11.396,11.393c0,0.814,0.188,1.791,0.502,2.866c-15.528,0.128-28.98,10.424-33.447,24.889    c-0.115,0.047-0.228,0.104-0.335,0.173C3.427,47.81-0.972,54.105,0.604,59.305c1.307,4.314,6.404,6.946,14.576,7.662    c5.311,11.135,16.303,19.184,29.462,20.087c0.83,0.059,1.654,0.087,2.477,0.087c8.521,0,16.662-3.039,23.148-8.691    c7.115-6.195,11.387-14.791,12.033-24.203c0.17-2.456,0.066-4.897-0.273-7.294C88.777,41.685,91.732,36.508,90.395,32.094z     M57.67,6.312c4.049,0,7.342,3.292,7.342,7.339c0,2.823-3.998,10.166-7.342,15.539c-3.344-5.373-7.344-12.716-7.344-15.539    C50.326,9.604,53.621,6.312,57.67,6.312z M4.484,58.129c-0.818-2.702,2.044-6.756,7.579-10.945    c-0.096,0.732-0.179,1.469-0.23,2.214c-0.318,4.636,0.285,9.123,1.641,13.292C8.436,61.979,5.169,60.393,4.484,58.129z     M78.256,53.97c-0.572,8.329-4.354,15.938-10.652,21.423c-6.297,5.486-14.357,8.19-22.684,7.617    c-10.867-0.747-20.068-6.999-25.07-15.839c0.042,0,0.081,0.002,0.123,0.002c0.807,0,1.637-0.016,2.489-0.046    c1.881-0.067,3.886-0.213,5.958-0.432c1.114-0.116,1.921-1.116,1.803-2.229c-0.117-1.114-1.112-1.927-2.229-1.802    c-1.978,0.207-3.888,0.347-5.677,0.411c-1.552,0.053-3.019,0.045-4.41-0.008c-1.603-4.139-2.353-8.681-2.028-13.392    c1.163-16.902,15.639-29.773,32.454-29.083c2.643,5.852,6.967,12.443,7.648,13.473c0.375,0.565,1.01,0.905,1.689,0.905    s1.313-0.339,1.689-0.905c0.484-0.732,2.809-4.274,5.061-8.362c0.117,0.14,0.246,0.271,0.402,0.379    c6.584,4.551,11.092,11.461,12.77,19.109c-0.805,0.568-1.646,1.135-2.543,1.701c-0.584,0.37-1.186,0.735-1.803,1.104    c-0.963,0.572-1.277,1.815-0.705,2.778c0.379,0.638,1.053,0.99,1.744,0.99c0.352,0,0.709-0.093,1.033-0.285    c0.652-0.386,1.285-0.772,1.898-1.159c0.354-0.225,0.688-0.449,1.027-0.673C78.348,51.077,78.357,52.52,78.256,53.97z     M81.094,42.473c-1.443-5.217-4.072-10.063-7.678-14.129c7.285,0.337,12.254,2.14,13.098,4.926    C87.225,35.612,85.207,38.925,81.094,42.473z"></path>
                  <path d="M68.457,49.661l-8.066-1.031c-0.359-0.049-0.723,0.006-1.055,0.147l-4.244,1.821l-2.037-4.96    c-0.205-0.5-0.602-0.897-1.102-1.105c-0.496-0.206-1.059-0.206-1.559,0.004l-4.667,1.959c-0.741,0.311-1.228,1.029-1.243,1.832    l-0.123,6.874l-5.138,2.206l-5.428-2.204c-0.5-0.203-1.056-0.197-1.552,0.012l-2.176,0.918c-0.556,0.235-0.98,0.709-1.154,1.288    c-0.171,0.58-0.077,1.208,0.26,1.71l6.68,9.95c0.387,0.575,1.026,0.897,1.684,0.897c0.264,0,0.53-0.053,0.784-0.158l8.669-3.641    l2.244,5.347c0.211,0.496,0.605,0.889,1.104,1.092c0.248,0.101,0.508,0.149,0.768,0.149c0.266,0,0.533-0.053,0.785-0.156    l4.666-1.961c0.752-0.317,1.24-1.053,1.24-1.869V61.65l9.463-3.894c2.664-1.12,3.924-4.202,2.807-6.868    C69.789,50.222,69.176,49.752,68.457,49.661z M48.516,49.724l1.564-0.658l1.283,3.132l-2.916,1.252L48.516,49.724z M65.703,54.015    l-8.582,3.529c-0.357-0.322-0.826-0.524-1.35-0.524c-1.119,0-2.025,0.907-2.025,2.027v8.388l-1.555,0.654L49.4,61.445    c-0.436-1.033-1.625-1.519-2.654-1.085c-0.831,0.35-1.298,1.188-1.225,2.04l-7.23,3.036l-3.72-5.541l3.912,1.587    c0.503,0.206,1.063,0.198,1.561-0.015l20.381-8.746l5.861,0.75C66.166,53.709,65.965,53.905,65.703,54.015z"></path>
                  <path d="M61.383,13.557c0-2.047-1.664-3.712-3.713-3.712c-2.047,0-3.711,1.665-3.711,3.712c0,2.048,1.664,3.712,3.711,3.712    C59.719,17.27,61.383,15.605,61.383,13.557z M57.33,13.557c0-0.188,0.152-0.341,0.34-0.341c0.189,0,0.342,0.153,0.342,0.341    s-0.152,0.341-0.342,0.341C57.482,13.898,57.33,13.746,57.33,13.557z"></path>
                </g>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">
              One roof solution for all your logistic needs
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              The moment you think to ship via Gauravexpress, your dashboard
              will be created within 20 minutes with no Dashboard fee or
              subscription charges.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 80"
                version="1.1"
                x="0px"
                y="0px"
                className=" text-blue-500 fill-current injected-svg svg-inject"
                style={{ height: "70px" }}
              >
                <g>
                  <path d="M60.634,41.586c-0.855-0.546-1.915-0.618-2.836-0.192c-0.038,0.018-11.827,7.358-11.827,7.358   c-0.539-0.47-1.235-0.74-1.97-0.74h-6.153c-0.722-2.308-3.91-3.999-7.847-3.999c-3.712,0-8.714,2.382-9.791,4.999h-2.394   c-0.414-1.161-1.514-1.999-2.816-1.999H3c-0.552,0-1,0.448-1,1v12.997c0,0.552,0.448,1,1,1h12c1.278,0,2.365-0.807,2.796-1.935   c0,0,25.179,1.935,25.204,1.935c0.245,0,0.481-0.089,0.665-0.253l17.271-15.379C61.612,45.805,62,44.968,62,44.079   C62,43.064,61.489,42.132,60.634,41.586z M4,49.011h8v10.997H4V49.011z M16,59.009c0,0.551-0.449,1-1,1h-1V49.011h1   c0.551,0,1,0.449,1,1V59.009z M59.625,44.866L42.652,59.979L18,58.083v-7.072h3c0.552,0,1-0.448,1-1c0-1.356,4.318-3.999,8-3.999   c3.536,0,6,1.581,6,2.999c0,0.552,0.448,1,1,1h7c0.364,0,0.701,0.202,0.88,0.527C44.957,50.683,45,50.85,45,51.011   c0,0.267-0.102,0.513-0.306,0.712c-0.181,0.186-0.428,0.288-0.694,0.288H32c-0.552,0-1,0.448-1,1s0.448,1,1,1h12   c0.811,0,1.565-0.317,2.108-0.874C46.683,52.576,47,51.821,47,51.011c0-0.17-0.034-0.338-0.063-0.505l11.748-7.318   c0.29-0.118,0.605-0.087,0.873,0.082C59.838,43.45,60,43.745,60,44.083C60,44.379,59.871,44.658,59.625,44.866z"></path>
                  <path d="M3.366,22.43c0.855,0.546,1.915,0.618,2.836,0.192c0.038-0.018,11.827-7.358,11.827-7.358c0.539,0.47,1.235,0.74,1.97,0.74   h6.153c0.722,2.308,3.91,3.999,7.847,3.999c3.712,0,8.714-2.382,9.791-4.999h2.394c0.414,1.161,1.514,1.999,2.816,1.999h12   c0.552,0,1-0.448,1-1V3.008c0-0.552-0.448-1-1-1H49c-1.278,0-2.365,0.807-2.796,1.935c0,0-25.179-1.935-25.204-1.935   c-0.245,0-0.481,0.089-0.665,0.253L3.064,17.64C2.388,18.211,2,19.047,2,19.937C2,20.952,2.511,21.884,3.366,22.43z M60,15.004h-8   V4.007h8V15.004z M48,5.007c0-0.551,0.449-1,1-1h1v10.997h-1c-0.551,0-1-0.449-1-1V5.007z M4.375,19.15L21.348,4.037L46,5.933   v7.072h-3c-0.552,0-1,0.448-1,1c0,1.356-4.318,3.999-8,3.999c-3.536,0-6-1.581-6-2.999c0-0.552-0.448-1-1-1h-7   c-0.364,0-0.701-0.202-0.88-0.527C19.043,13.333,19,13.165,19,13.005c0-0.267,0.102-0.513,0.306-0.712   c0.181-0.186,0.428-0.288,0.694-0.288h12c0.552,0,1-0.448,1-1s-0.448-1-1-1H20c-0.811,0-1.565,0.317-2.108,0.874   C17.317,11.44,17,12.195,17,13.005c0,0.17,0.034,0.338,0.063,0.505L5.315,20.828c-0.29,0.118-0.605,0.087-0.873-0.082   C4.162,20.566,4,20.271,4,19.933C4,19.637,4.129,19.358,4.375,19.15z"></path>
                  <path d="M49,22.003H15c-1.654,0-3,1.345-3,2.999v13.996c0,1.654,1.346,2.999,3,2.999h34c1.654,0,3-1.345,3-2.999V25.002   C52,23.348,50.654,22.003,49,22.003z M14,25.002c0-0.551,0.449-1,1-1h1.874c-0.363,1.403-1.47,2.51-2.874,2.873V25.002z M15,39.998   c-0.551,0-1-0.449-1-1v-1.873c1.404,0.363,2.511,1.469,2.874,2.873H15z M50,38.998c0,0.551-0.449,1-1,1h-1.874   c0.363-1.403,1.47-2.51,2.874-2.873V38.998z M50,35.09c-2.507,0.423-4.485,2.403-4.909,4.908H18.909   c-0.424-2.505-2.402-4.485-4.909-4.908V28.91c2.507-0.423,4.486-2.402,4.91-4.908H45.09c0.423,2.506,2.403,4.485,4.91,4.908V35.09z    M50,26.875c-1.404-0.363-2.511-1.469-2.874-2.873H49c0.551,0,1,0.449,1,1V26.875z"></path>
                  <path d="M31,30.001v1h2c1.103,0,2,0.897,2,1.999v1c0,1.103-0.897,1.999-2,1.999v1c0,0.552-0.448,1-1,1s-1-0.448-1-1v-1h-1   c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h3v-1h-2c-1.103,0-2-0.897-2-1.999v-1c0-1.103,0.897-1.999,2-1.999v-1   c0-0.552,0.448-1,1-1s1,0.448,1,1v1h1c0.552,0,1,0.448,1,1s-0.448,1-1,1H31z"></path>
                  <path d="M22,29.001c-1.654,0-3,1.345-3,2.999c0,1.654,1.346,2.999,3,2.999s3-1.345,3-2.999C25,30.346,23.654,29.001,22,29.001z    M22,33c-0.551,0-1-0.449-1-1c0-0.551,0.449-1,1-1s1,0.449,1,1C23,32.551,22.551,33,22,33z"></path>
                  <path d="M42,29.001c-1.654,0-3,1.345-3,2.999c0,1.654,1.346,2.999,3,2.999s3-1.345,3-2.999C45,30.346,43.654,29.001,42,29.001z    M42,33c-0.551,0-1-0.449-1-1c0-0.551,0.449-1,1-1s1,0.449,1,1C43,32.551,42.551,33,42,33z"></path>
                </g>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">
              Zero Dashboard fee / Monthly charges
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              The moment you think to ship via Gauravexpress, your dashboard
              will be created within 20 minutes with no Dashboard fee or
              subscription charges.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 64 80"
                enableBackground="new 0 0 64 64"
                xmlSpace="preserve"
                className="text-blue-500 fill-current injected-svg svg-inject"
                style={{ height: "70px" }}
              >
                <g>
                  <path d="M44,43c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5S46.757,43,44,43z M44,51c-1.654,0-3-1.346-3-3s1.346-3,3-3   s3,1.346,3,3S45.654,51,44,51z"></path>
                  <path d="M16.044,43c-1.377,0.008-2.597,0.498-3.548,1.433c-0.953,0.936-1.484,2.187-1.496,3.522   c-0.024,2.756,2.199,5.02,4.956,5.044c0.015,0,0.03,0,0.045,0c1.319,0,2.562-0.508,3.503-1.433   c0.953-0.936,1.484-2.187,1.496-3.522C21.024,45.288,18.801,43.025,16.044,43z M18.103,50.14C17.537,50.695,16.792,51,16.001,51   c-0.009,0-0.018,0-0.027,0c-1.654-0.015-2.988-1.373-2.974-3.027c0.007-0.801,0.326-1.552,0.897-2.113   c0.565-0.555,1.311-0.86,2.102-0.86c0.009,0,0.018,0,0.027,0c1.654,0.015,2.988,1.373,2.974,3.027   C18.993,48.828,18.674,49.579,18.103,50.14z"></path>
                  <path d="M62,21c0-5.514-4.486-10-10-10c-3.641,0-6.898,1.936-8.625,5H25.81C24.261,16,23,17.261,23,18.81V35h-2V22   c0-0.811-0.316-1.566-0.873-2.108C19.566,19.317,18.812,19,18,19c-1.654,0-3,1.346-3,3v1h-2C6.935,23,2,27.935,2,34v2v10   c0,1.654,1.346,3,3,3h3c0.549,0,0.995-0.512,1-1.061c0.035-3.825,3.173-6.937,6.996-6.939c1.231,0.009,2.441,0.339,3.503,0.955   C21.658,43.206,23,45.522,23,48c0,0.552,0.447,1,1,1h12c0.553,0,1-0.448,1-1c0-3.86,3.141-7,7-7s7,3.14,7,7c0,0.552,0.447,1,1,1h4   c1.654,0,3-1.346,3-3v-8c0-1.302-0.839-2.402-2-2.816V29.63C60.09,27.844,62,24.605,62,21z M15,39.056   C10.87,39.519,7.557,42.812,7.063,47H5c-0.552,0-1-0.449-1-1v-9h1.39c0.605,0,1.185-0.178,1.663-0.507l5.013-3.329   C12.221,33.059,12.414,33,12.61,33H15V39.056z M15,31h-2.39c-0.605,0-1.185,0.178-1.663,0.507l-5.013,3.329   C5.779,34.941,5.586,35,5.39,35H4v-1c0-4.962,4.037-9,9-9h2V31z M25,18.81c0-0.447,0.363-0.81,0.81-0.81h16.65   c-0.021,0.067-0.031,0.136-0.051,0.203c-0.075,0.255-0.139,0.514-0.193,0.775c-0.023,0.111-0.049,0.221-0.068,0.334   c-0.064,0.369-0.113,0.742-0.136,1.121C42.001,20.622,42,20.811,42,21c0,0.15,0.001,0.3,0.01,0.35l0.002,0.229   C42.324,26.862,46.712,31,52,31c0.342,0,0.684-0.024,1.024-0.06c0.084-0.009,0.168-0.018,0.252-0.029   c0.336-0.044,0.671-0.098,1.001-0.175c0.02-0.005,0.039-0.011,0.058-0.016c0.224-0.054,0.446-0.113,0.665-0.181V35H25V18.81z    M57,46c0,0.551-0.448,1-1,1h-3.056c-0.499-4.494-4.319-8-8.944-8s-8.445,3.506-8.944,8H24.943   c-0.318-2.802-1.96-5.338-4.441-6.775c-1.074-0.624-2.27-1.02-3.502-1.164V32v-8v-2c0-0.551,0.448-1,1-1   c0.267,0,0.514,0.102,0.713,0.306C18.897,21.487,19,21.733,19,22v14c0,0.552,0.447,1,1,1h4h32c0.552,0,1,0.449,1,1V46z    M55.553,28.166C54.461,28.711,53.232,29,52,29c-4.231,0-7.741-3.312-7.99-7.48l-0.004-0.258C43.999,21.179,44,21.09,44,21   c0-0.151-0.001-0.302,0.008-0.451c0.061-1.019,0.322-2.039,0.751-2.941l0.089-0.167C46.194,14.702,48.935,13,52,13   c4.411,0,8,3.589,8,8C60,24.058,58.297,26.803,55.553,28.166z"></path>
                  <path d="M51,19.5c0,0.276,0.225,0.5,0.5,0.5h1c1.379,0,2.5,1.122,2.5,2.5c0,1.207-0.86,2.217-2,2.449V26c0,0.552-0.447,1-1,1   s-1-0.448-1-1v-1h-1c-0.553,0-1-0.448-1-1s0.447-1,1-1h2.5c0.275,0,0.5-0.224,0.5-0.5S52.775,22,52.5,22h-1   c-1.379,0-2.5-1.122-2.5-2.5c0-1.207,0.86-2.217,2-2.449V16c0-0.552,0.447-1,1-1s1,0.448,1,1v1h1c0.553,0,1,0.448,1,1s-0.447,1-1,1   h-2.5C51.225,19,51,19.224,51,19.5z"></path>
                </g>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">
              Shipping cost customisation
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI tool helps in choosing the courier partner based on pincode,
              product type, weight and end customer requirement.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 24 30"
                style={{ height: "70px" }}
                xmlSpace="preserve"
                className="text-blue-500 fill-current injected-svg svg-inject"
              >
                <g>
                  <rect
                    x="15.39"
                    y="7.297"
                    width="1.695"
                    height="0.598"
                    fill="none"
                  ></rect>
                  <rect
                    x="15.29"
                    y="8.692"
                    width="1.695"
                    height="0.897"
                    fill="none"
                  ></rect>
                  <path
                    d="M6.698,7.196L6.182,8.156l0.226,1.433L6.425,9.59h1.088h0.798h0.598h0.127   C9.029,9.546,9.021,9.5,9.014,9.455c-0.09-1.24-1.025-2.174-2.227-2.259H6.698z"
                    fill="none"
                  ></path>
                  <polygon
                    points="5.61,7.746 5.905,7.197 5.327,7.197 5.32,7.197 5.316,7.197 4.834,7.197 5.129,7.746  "
                    fill="none"
                  ></polygon>
                  <path
                    d="M14.592,6.898c0-0.199,0.199-0.399,0.399-0.399h2.393c0.199,0,0.399,0.199,0.399,0.399v0.997h2.991   V2.411h-9.173v5.484h2.991V6.898z"
                    fill="none"
                  ></path>
                  <polygon
                    points="5.52,8.443 5.235,8.443 5.121,9.53 5.696,9.557  "
                    fill="none"
                  ></polygon>
                  <path
                    d="M8.909,10.388H6.416c-0.005,0-0.01-0.001-0.015-0.001H0.833v1.196h22.235v-1.196H8.971   C8.949,10.388,8.931,10.388,8.909,10.388z"
                    fill="none"
                  ></path>
                  <rect
                    x="1.83"
                    y="12.282"
                    width="20.141"
                    height="9.372"
                    fill="none"
                  ></rect>
                  <path
                    d="M4.422,9.499l0.14-1.333L4.041,7.197l-0.118,0c-0.207,0-0.541,0.068-0.87,0.178   C2.239,7.749,1.733,8.548,1.72,9.49h2.503L4.422,9.499z"
                    fill="none"
                  ></path>
                  <path
                    d="M5.32,6.399c0.444,0,0.75-0.091,1.05-0.315C6.79,5.738,7.056,5.199,7.1,4.606   C7.147,3.965,6.936,3.336,6.52,2.879C6.184,2.542,5.73,2.347,5.276,2.347c-0.029,0-0.058,0.001-0.088,0.003   C4.739,2.375,4.33,2.591,4.036,2.959C3.374,3.705,3.337,4.882,3.939,5.655C4.316,6.126,4.821,6.399,5.32,6.399z"
                    fill="none"
                  ></path>
                  <path d="M23.466,9.59h-5.683V8.692h3.39c0.199,0,0.399-0.199,0.399-0.399V2.112c0-0.199-0.199-0.399-0.399-0.399h-9.971   c-0.199,0-0.399,0.199-0.399,0.399v6.182c0,0.199,0.199,0.399,0.399,0.399h3.39V9.59h-4.487H9.841   C9.832,9.518,9.819,9.443,9.805,9.362C9.699,7.864,8.598,6.691,7.123,6.448C7.561,5.976,7.844,5.35,7.895,4.665   C7.959,3.807,7.672,2.96,7.097,2.328C6.566,1.796,5.854,1.502,5.144,1.554C4.465,1.592,3.851,1.913,3.426,2.445   C2.53,3.453,2.479,5.079,3.313,6.15c0.083,0.104,0.179,0.188,0.271,0.277C3.258,6.475,2.936,6.575,2.761,6.635   c-1.164,0.529-1.86,1.686-1.83,2.955H0.434c-0.199,0-0.399,0.199-0.399,0.399v1.994c0,0.199,0.199,0.399,0.399,0.399h0.698v9.672   c0,0.199,0.199,0.399,0.399,0.399h20.938c0.199,0,0.399-0.199,0.399-0.399v-9.672h0.698c0.199,0,0.399-0.199,0.399-0.399V9.989   C23.865,9.789,23.666,9.59,23.466,9.59z M11.601,7.895V2.411h9.173v5.484h-2.991V6.898c0-0.199-0.199-0.399-0.399-0.399h-2.393   c-0.199,0-0.399,0.199-0.399,0.399v0.997H11.601z M15.39,7.895V7.297h1.695v0.598H15.39z M16.985,8.692V9.59H15.29V8.692H16.985z    M9.014,9.455C9.021,9.5,9.029,9.546,9.036,9.59H8.909H8.311H7.513H6.425L6.408,9.589L6.182,8.156l0.516-0.959h0.089   C7.989,7.281,8.924,8.216,9.014,9.455z M5.316,7.197c0.001,0,0.002,0,0.004,0c0.003,0,0.005,0,0.007,0l0.578,0L5.61,7.746h-0.48   L4.834,7.197L5.316,7.197z M5.235,8.443H5.52l0.176,1.114L5.121,9.53L5.235,8.443z M4.036,2.959C4.33,2.591,4.739,2.375,5.188,2.35   c0.029-0.002,0.058-0.003,0.088-0.003c0.454,0,0.907,0.195,1.244,0.532C6.936,3.336,7.147,3.965,7.1,4.606   C7.056,5.199,6.79,5.738,6.37,6.085c-0.3,0.224-0.606,0.315-1.05,0.315c-0.499,0-1.003-0.273-1.381-0.744   C3.337,4.882,3.374,3.705,4.036,2.959z M3.053,7.376c0.33-0.11,0.663-0.178,0.87-0.178l0.118,0l0.521,0.968l-0.14,1.333L4.223,9.49   H1.72C1.733,8.548,2.239,7.749,3.053,7.376z M21.971,21.654H1.83v-9.372h20.141V21.654z M23.067,11.584H0.833v-1.196h5.569   c0.005,0,0.01,0.001,0.015,0.001h2.493c0.023,0,0.04-0.001,0.062-0.001h14.097V11.584z"></path>
                </g>
                <text
                  x="0"
                  y="39"
                  fill="#000000"
                  font-size="5px"
                  font-weight="bold"
                  font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                >
                  Created by myiconfinder
                </text>
                <text
                  x="0"
                  y="44"
                  fill="#000000"
                  font-size="5px"
                  font-weight="bold"
                  font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                >
                  from the Noun Project
                </text>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">
              One roof solution for all your logistic needs
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              The moment you think to ship via Gauravexpress, your dashboard
              will be created within 20 minutes with no Dashboard fee or
              subscription charges.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 24 30"
                style={{ height: "70px" }}
                xmlSpace="preserve"
                className="text-blue-500 fill-current injected-svg svg-inject"
              >
                <path d="M13.838 8.076l-.171.098v.858l.171-.098v-.858zm1.412.054l-.171.098v-.859l.171-.098v.859zm-4.367-8.13l-4.883 2.758v5.753l6.125 3.489 4.875-2.775v-5.754l-6.117-3.471zm-.001 1.149l4.557 2.585-.851.458-4.511-2.589.805-.454zm.618 9.344l-4.5-2.563v-4.095l4.5 2.609v4.049zm.509-4.91l-4.43-2.569 1.022-.584 4.409 2.61-1.001.543zm3.991 3.06l-3.5 1.993v-4.181l1-.539v1.428l1.5-.844v-1.393l1-.539v4.075zm-2.453.458l-.175.098v-.858l.175-.099v.859zm.702-.401l-.172.098v-.859l.172-.098v.859zm.287-.163l-.171.098v-.859l.171-.098v.859zm.292-.166l-.175.099v-.859l.175-.099v.859zm5.172 5.004v-3.213c0-.77.506-1.162 1.008-1.162.498 0 .992.383.992 1.163v4.086c0 .796-.071 1.179-.573 2.092-.793 1.441-2.242 4.807-2.242 7.66h-5.002s-.559-2.759-.763-3.942c-.411-2.377.126-3.471 1.109-4.485 1.021-1.053 1.527-1.551 1.995-2.035 1.081-1.121 2.552.194 1.694 1.222-.468.561-1.624 1.803-1.901 2.171-.268.356.231.857.624.447.573-.599 1.905-2.083 2.365-2.618.443-.517.694-.829.694-1.386zm-16 0v-3.213c0-.77-.506-1.162-1.008-1.162-.498 0-.992.383-.992 1.163v4.086c0 .796.071 1.179.573 2.092.793 1.441 2.242 4.461 2.242 7.66h5.002s.559-2.759.763-3.942c.411-2.377-.126-3.471-1.109-4.485-1.021-1.053-1.527-1.551-1.995-2.035-1.081-1.121-2.552.194-1.694 1.222.468.561 1.624 1.803 1.901 2.171.268.356-.231.857-.624.447-.573-.599-1.905-2.083-2.365-2.618-.443-.517-.694-.829-.694-1.386z"></path>
                <text
                  x="0"
                  y="39"
                  fill="#000000"
                  font-size="5px"
                  font-weight="bold"
                  font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                >
                  Created by Sriyanto
                </text>
                <text
                  x="0"
                  y="44"
                  fill="#000000"
                  font-size="5px"
                  font-weight="bold"
                  font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
                >
                  from the Noun Project
                </text>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">
              Zero Dashboard fee / Monthly charges
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              A three step automated shipping process will help you saving time
              , cost & energy
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 125"
                style={{ height: "70px" }}
                xmlSpace="preserve"
                className=" text-blue-500 fill-current injected-svg svg-inject"
              >
                <g>
                  <path d="M92.244,53.198c0.003-0.715-0.375-1.376-0.992-1.736l-3.07-1.791l3.054-1.745c0.621-0.354,1.004-1.013,1.008-1.728   c0.003-0.715-0.375-1.376-0.992-1.736L39.836,14.47c-0.617-0.359-1.379-0.362-2-0.009L8.764,31.073   c-0.621,0.354-1.004,1.013-1.008,1.728c-0.003,0.715,0.375,1.376,0.992,1.736l3.07,1.791l-3.054,1.745   c-0.621,0.354-1.004,1.013-1.008,1.728s0.375,1.376,0.992,1.736l3.07,1.791l-3.054,1.745c-0.621,0.354-1.004,1.013-1.008,1.728   s0.375,1.376,0.992,1.736l3.07,1.791l-3.054,1.745c-0.621,0.354-1.004,1.013-1.008,1.728s0.375,1.376,0.992,1.736L60.164,85.53   c0.312,0.182,0.66,0.272,1.008,0.272c0.342,0,0.685-0.088,0.992-0.264l29.072-16.613c0.621-0.354,1.004-1.013,1.008-1.728   c0.003-0.715-0.375-1.376-0.992-1.736l-3.07-1.791l3.054-1.745c0.621-0.354,1.004-1.013,1.008-1.728   c0.003-0.715-0.375-1.376-0.992-1.736l-3.07-1.791l3.054-1.745C91.857,54.571,92.241,53.913,92.244,53.198z M38.818,18.507   l47.426,27.665L61.182,60.493L13.756,32.827L38.818,18.507z M60.164,64.53c0.312,0.182,0.66,0.272,1.008,0.272   c0.342,0,0.685-0.088,0.992-0.264l22.008-12.576l2.072,1.209L61.182,67.493L13.756,39.827l2.051-1.172L60.164,64.53z    M86.244,67.172L61.182,81.493L13.756,53.827l2.051-1.172L60.164,78.53c0.312,0.182,0.66,0.272,1.008,0.272   c0.342,0,0.685-0.088,0.992-0.264l22.008-12.576L86.244,67.172z M86.244,60.172L61.182,74.493L13.756,46.827l2.051-1.172   L60.164,71.53c0.312,0.182,0.66,0.272,1.008,0.272c0.342,0,0.685-0.088,0.992-0.264l22.008-12.576L86.244,60.172z"></path>
                  <path d="M60.089,37.043l0.28-0.16c0.959-0.548,1.292-1.771,0.744-2.729c-0.548-0.96-1.77-1.29-2.729-0.744l-1.532,0.876   c-0.506-0.217-1.066-0.407-1.701-0.556c-2.803-0.656-5.93,0.392-7.117,2.386c-0.802,1.348-0.612,2.96,0.496,4.209   c0.207,0.232,0.436,0.473,0.67,0.717c0.266,0.277,0.653,0.683,0.908,1.005c-1.489,0.767-3.209,0.267-4.024-0.174   c-0.973-0.526-1.387-1.432-1.38-1.681c0.109-1.1-0.694-2.079-1.793-2.188c-1.103-0.112-2.079,0.693-2.188,1.793   c-0.104,1.053,0.235,2.185,0.885,3.199l-0.233,0.134c-0.959,0.548-1.293,1.769-0.745,2.729c0.369,0.646,1.044,1.008,1.739,1.008   c0.336,0,0.677-0.085,0.99-0.264l1.541-0.88c0.999,0.42,2.207,0.718,3.495,0.717c1.343,0,2.76-0.317,4.076-1.138   c1.354-0.845,1.748-1.895,1.839-2.626c0.231-1.843-1.128-3.262-2.22-4.402c-0.106-0.11-0.211-0.22-0.319-0.336   c0.503-0.276,1.493-0.541,2.471-0.313c2.314,0.541,2.474,1.629,2.484,1.752c-0.005-0.062-0.001-0.095-0.001-0.095l3.999,0.105   C60.739,38.754,60.569,37.904,60.089,37.043z"></path>
                </g>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">
              Shipping cost customisation
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Timely Remitting the COD in your bank account and unified
              transparent billing will help you in analysing the cash flow and
              profit margins simultaneously
            </p>
          </div>
        </div>
      </section>
      <section>
        <section>
          <div className="row getting px-5">
            {[
              {
                img: "https://gauravexpress.in/images/icon/api.png",
                alt: "API Integration",
                step: "Step 01",
                title: "Connecting your integration channel",
                desc: "Push orders via API with Shopify, Magento etc or place Single / Bulk orders over Gauravexpress Dashboard",
              },
              {
                img: "https://gauravexpress.in/images/icon/print.png",
                alt: "Fetch Shipping Labels",
                step: "Step 02",
                title: "Fetch shipping labels",
                desc: "Print customised size labels and an auto pickup request will be generated simultaneously",
              },
              {
                img: "https://gauravexpress.in/images/icon/track.png",
                alt: "Track Shipment",
                step: "Step 03",
                title: "Track your Shipment",
                desc: "Once the shipments are picked. You can track shipments real time and raise delivery exceptions",
              },
              {
                img: "https://gauravexpress.in/images/icon/positive-review.png",
                alt: "Customer Feedback",
                step: "Step 04",
                title: "Customer experience / Feedback",
                desc: "Amplify your brand, increase your repeated customers and gain customer loyalty with Gauravexpress",
              },
            ].map((item, index) => (
              <div className="col-lg-3 d-flex" key={index}>
                <div className="card bg-dark border-0 text-center py-4 card-hover w-100 h-100 d-flex flex-column">
                  <div className="card-body d-flex flex-column align-items-center justify-content-between">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={80}
                      height={80}
                    />
                    <h4 className="h4 text-white mt-3">{item.step}</h4>
                    <h5 className="text-white">{item.title}</h5>
                    <p className="mt-2 mb-0 text-white">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section>
        <div className="position-relative py-5">
          <div className="row with-sh">
            <div className="col-lg-3 col-6 mb-5 mb-lg-0">
              <div className="text-center">
                <div className="mb-4  flex justify-center text-blue-500 fill-current">
                  <Image
                    src="https://gauravexpress.in/images/icon/noun_client_2572191.svg"
                    alt="Happy Clients"
                    width={80}
                    height={80}
                    style={{
                      filter:
                        "invert(25%) sepia(80%) saturate(500%) hue-rotate(190deg)",
                    }}
                  />
                </div>
                <div className="h1 text-primary">
                  5k <span className="counter-extra">+</span>
                </div>
                <h3 className="h6 text-capitalize">Happy Clients</h3>
              </div>
            </div>

            <div className="col-lg-3 col-6 mb-5 mb-lg-0">
              <div className="text-center">
                <div className="mb-4 flex justify-center text-blue-500 fill-current">
                  <Image
                    src="https://gauravexpress.in/images/icon/noun_shipment_3533318.svg"
                    alt="Monthly Shipments"
                    width={80}
                    height={80}
                    style={{
                      filter:
                        "invert(25%) sepia(80%) saturate(500%) hue-rotate(190deg)",
                    }}
                  />
                </div>
                <div className="h1 text-primary">
                  300K <span className="counter-extra">+</span>
                </div>
                <h3 className="h6 text-capitalize">Monthly Shipments</h3>
              </div>
            </div>

            <div className="col-lg-3 col-6 mb-5 mb-lg-0">
              <div className="text-center">
                <div className="mb-4 flex justify-center text-blue-500 fill-current">
                  <Image
                    src="https://gauravexpress.in/images/icon/noun_Map Marker_20879.svg"
                    alt="Serviceable Pincodes"
                    width={80}
                    height={80}
                    style={{
                      filter:
                        "invert(25%) sepia(80%) saturate(500%) hue-rotate(190deg)",
                    }}
                  />
                </div>
                <div className="h1 text-primary">
                  26K <span className="counter-extra">+</span>
                </div>
                <h3 className="h6 text-capitalize">Serviceable Pincodes</h3>
              </div>
            </div>

            <div className="col-lg-3 col-6 mb-5 mb-lg-0">
              <div className="text-center">
                <div className="mb-4 flex justify-center text-blue-500 fill-current">
                  <Image
                    className="text-blue-500 fill-current"
                    src="https://gauravexpress.in/images/icon/noun_Globe_2153398.svg"
                    alt="Countries Served"
                    width={80}
                    height={80}
                    style={{
                      filter:
                        "invert(25%) sepia(80%) saturate(500%) hue-rotate(190deg)",
                    }}
                  />
                </div>
                <div className="h1 text-primary">
                  150 <span className="counter-extra">+</span>
                </div>
                <h3 className="h6 text-capitalize">Countries Served</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row row-grid justify-content-around align-items-center px-6">
          <div className="col-lg-5 order-lg-2">
            <div className="pr-lg-4">
              <h5 className="h3">
                <b style={{ color: "#ff6801" }}>
                  Automate your Dropshipping Business
                </b>
              </h5>
              <p className="lead mt-4 mb-5">
                For retail sellers and business/ ecommerce enthusiasts who want
                to grow their business online, Gauravexpress has an inbuilt
                ecommerce platform (Dropshiply) that would host your online
                store. No professional expertise is required to launch the
                website and a dedicated team will be there to get you through
                all your queries!
              </p>
              <Link
                href="https://dropshiply.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-underline-primary"
              >
                More Details
              </Link>
            </div>
          </div>

          <div className="col-lg-6 order-lg-1">
            <Image
              src="https://gauravexpress.in/images/DS-FE-24-ImageBody-12.png"
              alt="Automate your Dropshipping Business"
              width={600} // adjust as per design
              height={400} // adjust as per design
              className="img-fluid img-center"
            />
          </div>
        </div>
      </section>
      <section
        className="slice slice-lg bg-gradient-primary section-floating-icons overflow-hidden"
        style={{
          backgroundImage:
            "url(https://gauravexpress.in/images/black%20bg.png)",
        }}
      >
        <div className="container">
          <div className="mb-5 text-center">
            <h3 className="mt-4 text-white">
              Flexible Shipping APIs for any online merchant
            </h3>
            <div className="fluid-paragraph mt-3">
              <p className="lead lh-180 text-white">
                Gauravexpress s best-in-class Shipping APIs provide end-to-end
                flexibility and more control over parcel shipping and logistics
                processes for:
              </p>
              <div className="flexi">
                <span>Ecommerce Retailers</span>
                <span>Marketplaces</span>
                <span>Enterprises</span>
                <span>Fulfillment Centers And More...</span>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="row cpy-kr align-items-center">
              <div className="col-md-5">
                <div className="brrrr">
                  <h3 className="text-white text-center">
                    Integration Partners
                  </h3>
                  <Image
                    src="https://gauravexpress.in/images/imageedit_1_8360735073.png"
                    alt="Integration Partners"
                    width={500}
                    height={300}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(39%) sepia(95%) saturate(2567%) hue-rotate(189deg) brightness(98%) contrast(101%)",
                    }}
                  />
                </div>
              </div>

              <div className="col-md-2 text-center">
                <span className="icon">
                  <Image
                    src="https://gauravexpress.in/images/logo/gaurav_express.png"
                    alt="Gaurav Express Logo"
                    width={100}
                    height={100}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </span>
              </div>

              <div className="col-md-5">
                <div className="brrrr lee">
                  <h3 className=" text-center text-white">Transit Partners</h3>
                  <Image
                    src="https://gauravexpress.in/images/imageedit_3_2364090906.png"
                    alt="Transit Partners"
                    width={500}
                    height={300}
                    className="img-fluid"
                    style={{
                      filter:
                        "invert(25%) sepia(33%) saturate(748%) hue-rotate(206deg) brightness(95%) contrast(89%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slice slice-lg bg-section-secondary">
        <div className="container">
          <div className="mb-5 text-center">
            <h3 className="mt-4">Customer Stories</h3>
            <div className="fluid-paragraph mt-3">
              <p className="lead lh-180">
                Thousands of Indian businesses are using Gauravexpress and
                expanded their reach to their customers in no time
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-11">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="card p-4">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={60}
                            height={60}
                            className="rounded-circle"
                          />
                          <div className="pl-3">
                            <h5 className="h6 mb-0">{item.name}</h5>
                            <small className="d-block text-muted">
                              {item.company}
                            </small>
                          </div>
                        </div>
                        <p className="mt-4 lh-180">{item.feedback}</p>
                        <div className="static-rating static-rating-sm text-warning">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <i key={i} className="fas fa-star voted"></i>
                            ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="slice slice-lg bg-gradient-primary text-black">
        <div className="container">
          <div className="mb-5 text-center">
            <h3 className="mt-4 text-black">Services We Offer</h3>
            <div className="fluid-paragraph mt-3">
              <p className="lead lh-180 text-black">
                Different types of services are available based on your customer
                requirement
              </p>
            </div>
          </div>

          <div className="row row-grid kr-cen img-color">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-6  p-2 ">
                <div className="align-items-center mb-5 text-center bg-[#00000026] rounded-md py-3">
                  <div className="flex justify-center gap-3">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={80}
                      height={80}
                      className="mb-4"
                      style={{
                        filter:
                          "invert(39%) sepia(95%) saturate(2567%) hue-rotate(189deg) brightness(98%) contrast(101%)",
                      }}
                    />
                  </div>

                  <div className="icon-text">
                    <h5 className="text-black">{service.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
}
