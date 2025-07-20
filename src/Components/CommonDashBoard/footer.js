import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const clients = [
    "https://gauravexpress.in/images/clients/1.png",
    "https://gauravexpress.in/images/clients/2.png",
    "https://gauravexpress.in/images/clients/4.png",
    "https://gauravexpress.in/images/clients/5.png",
    "https://gauravexpress.in/images/clients/6.png",
    "https://gauravexpress.in/images/clients/3.png",
  ];
  return (
    <>
      <section className="slice slice-lg">
        <div className="container">
          <div className="mb-5 text-center">
            <h3 className="mt-4">Clients who are using our Superpowers</h3>
            <div className="fluid-paragraph mt-3">
              <p className="lead lh-180">
                A huge number of brands have gained their customer loyalty using
                Gauravexpress
              </p>
            </div>
          </div>

          <div>
            <a href="#">
              <div className="blurable-item client-group row justify-content-center">
                {clients.map((client, index) => (
                  <div
                    key={index}
                    className="client col-lg-2 col-md-3 col-4 py-3"
                  >
                    <Image
                      src={client}
                      alt={`Client ${index + 1}`}
                      width={120}
                      height={60}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </a>
          </div>
        </div>
      </section>
      <footer id="footer-main">
        <div className="footer footer-dark bg-gradient-primary footer-rotate">
          <div className="container">
            <div className="row pt-md px-5">
              <div className="col-lg-4 mb-5 mb-lg-0 flex justify-center  ">
                <div>
                  <Link href="/">
                    <Image
                      src="/Gaurav_Express_Logo_with_bg.jpg"
                      alt="Footer logo"
                      width={150}
                      height={80}
                      className="mb-3"
                    />
                  </Link>
                  <p>
                    Gauravexpress offers AI-based smoother, easier, reliable and
                    smartest platform to manage your end to end shipping needs
                    for your business.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0 flex justify-center">
                <div>
                  <h6 className="heading mb-3">Quick Links</h6>
                  <ul className="list-unstyled text-small">
                    <li>
                      <Link href="/features">Features</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-sm-4 mb-5 mb-lg-0 flex justify-center">
                <div>
                  <h6 className="heading mb-3">Useful Links</h6>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/partners">Partners</Link>
                    </li>
                    <li>
                      <Link href="/tracking">Tracking</Link>
                    </li>
                    <li>
                      <Link href="/privacy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="/refund-cancellation">
                        Refund & Cancellation Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top">
              <div className="col-md-12">
                <div className="copyright text-sm font-weight-bold text-center text-md-left">
                  © Copyright 2017 Gaurav Express Logistic Services - All Rights
                  Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
