import React from 'react'

const Contact = () => {
  return (
    <>
      {/* Start your project here*/}
      <div id="preview" className="preview">
        <div style={{ display: "none" }} />
        <div>
          <div data-draggable="true" className="" style={{ position: "relative" }}>
            {/**/}
            {/**/}
            <section
              draggable="false"
              className="container pt-5"
              data-v-271253ee=""
            >
              <section className="mb-10 text-center">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n              hr.divider-vertical {\n                position: absolute;\n                right: 0;\n                top: 0;\n                width: 1px;\n                background-image: linear-gradient(180deg, transparent, hsl(0, 0%, 40%), transparent);\n                background-color: transparent;\n                height: 100%;\n              }\n            "
                  }}
                />{" "}
                {/* Background image */}
                <div
                  className="p-5 bg-image"
                  style={{
                    backgroundImage:
                      'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
                    height: 300,
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    backgroundColor: "rgba(0, 0, 0, 0)"
                  }}
                  aria-controls="#picker-editor"
                />{" "}
                {/* Background image */}
                <div
                  className="card mx-4 mx-md-5 shadow-5-strong"
                  style={{
                    marginTop: "-100px",
                    background: "hsla(0, 0%, 100%, 0.8)",
                    backdropFilter: "blur(30px)"
                  }}
                >
                  <div className="card-body py-5 px-md-5">
                    <div className="row mb-5">
                      <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                        {" "}
                        <i
                          className="fas fa-globe-americas fa-3x text-primary mb-4"
                          aria-controls="#picker-editor"
                        />
                        <h6 className="fw-normal mb-0">Indian</h6>
                        <hr className="divider-vertical d-none d-lg-block" />
                      </div>
                      <div className="col-lg-3 col-md-6 mb-5 mb-lg-0 position-relative">
                        {" "}
                        <i
                          className="fas fa-map-marker-alt fa-3x text-primary mb-4"
                          aria-controls="#picker-editor"
                        />
                        <h6 className="fw-normal mb-0">Lucknow, 226028</h6>
                        <hr className="divider-vertical d-none d-lg-block" />
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative">
                        {" "}
                        <i
                          className="fas fa-phone fa-3x text-primary mb-4"
                          aria-controls="#picker-editor"
                        />
                        <h6 className="fw-normal mb-0">+ 91 99197 41738</h6>
                        <hr className="divider-vertical d-none d-lg-block" />
                      </div>
                      <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 position-relative">
                        {" "}
                        <i
                          className="fas fa-hand-holding-usd fa-3x text-primary mb-4"
                          aria-controls="#picker-editor"
                        />
                        <h6 className="fw-normal mb-0">Tax ID: 273 384</h6>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-6">
                        <form>
                          {" "}
                          {/* Name input */}
                          <div className="form-outline mb-4">
                            {" "}
                            <input
                              type="text"
                              id="form4Example1"
                              className="form-control"
                            />{" "}
                            <label
                              className="form-label"
                              htmlFor="form4Example1"
                              style={{ marginLeft: 0 }}
                            >
                              Name
                            </label>
                            <div className="form-notch">
                              <div
                                className="form-notch-leading"
                                style={{ width: 9 }}
                              />
                              <div
                                className="form-notch-middle"
                                style={{ width: "42.4px" }}
                              />
                              <div className="form-notch-trailing" />
                            </div>
                          </div>{" "}
                          {/* Email input */}
                          <div className="form-outline mb-4">
                            {" "}
                            <input
                              type="email"
                              id="form4Example2"
                              className="form-control"
                            />
                            <label
                              className="form-label"
                              htmlFor="form4Example2"
                              style={{ marginLeft: 0 }}
                            >
                              Email address
                            </label>
                            <div className="form-notch">
                              <div
                                className="form-notch-leading"
                                style={{ width: 9 }}
                              />
                              <div
                                className="form-notch-middle"
                                style={{ width: "88.8px" }}
                              />
                              <div className="form-notch-trailing" />
                            </div>
                          </div>{" "}
                          {/* Message input */}
                          <div className="form-outline mb-4">
                            {" "}
                            <textarea
                              className="form-control"
                              id="form4Example3"
                              rows={4}
                              defaultValue={""}
                            />{" "}
                            <label
                              className="form-label"
                              htmlFor="form4Example3"
                              style={{ marginLeft: 0 }}
                            >
                              Message
                            </label>
                            <div className="form-notch">
                              <div
                                className="form-notch-leading"
                                style={{ width: 9 }}
                              />
                              <div
                                className="form-notch-middle"
                                style={{ width: 60 }}
                              />
                              <div className="form-notch-trailing" />
                            </div>
                          </div>{" "}
                          {/* Checkbox */}
                          <div className="form-check d-flex justify-content-center mb-4">
                            {" "}
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              defaultValue=""
                              id="form4Example4"
                              defaultChecked=""
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="form4Example4"
                            >
                              Send me a copy of this message
                            </label>{" "}
                          </div>{" "}
                          {/* Submit button */}
                          <button
                            type="submit"
                            className="btn  btn-primary btn-block"
                            aria-controls="#picker-editor"
                          >
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            {/**/}
          </div>
        </div>
      </div>
      {/* End your project here*/}
      {/* MDB */}
      {/* Custom scripts */}
    </>

  )
}

export default Contact