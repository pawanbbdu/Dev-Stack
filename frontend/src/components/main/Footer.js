import React from 'react'
import app_config from '../../config';

const Footer = () => {
  return (
    <>

      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: app_config.themeColor }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-twitter" />
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-google" />
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-instagram" />
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-linkedin" />
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary" />
                   Devstack.com
                </h6>
                <p>
                  In addition to covering the most popular programming languages today, we publish reviews and round-ups of developer tools that help devs reduce the time and money spent developing, maintaining, and debugging their applications. This includes coverage of software management systems and project management (PM) software - all aimed at helping to shorten the software development lifecycle (SDL).
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Mongo DB
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React JS
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Express JS
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Node JS
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary" /> Lucknow, UP
                  226028, india
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                   devstack@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary" /> + 91 99 19 74 17 38
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary" /> + 91 94 50 74 88 72
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Devstack.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  )
}

export default Footer;