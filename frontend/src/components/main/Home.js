import React from 'react';
const Home = () => {
  return (
    <>
      <header className="home-header">
        <div className="container py-5 h-100">
          <div className="row h-100" style={{ backgroundColor: '#0000007a' }}>
            <div className="col-md-4 my-auto">
              <h1 className="display-2 text-center fw-bold text-white">Dev Stack</h1>
              <button className="btn btn-primary btn-lg mt-5 ms-5">Get Started</button>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div data-draggable="true" className="" style={{ position: 'relative' }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10">
              <h2 className="fw-bold mb-5 text-center">Why DevStack</h2>
              <div className="row mb-4">
                <div className="col-md-3 mb-4 mb-md-0 ms-auto">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4" data-mdb-ripple-color="light">
                    <img src="https://cmxhub.com/wp-content/uploads/2019/11/annie-spratt-QckxruozjRg-unsplash.jpg" className="w-100" alt="" aria-controls="#picker-editor" />
                  </div>
                </div>
                <div className="col-md-9 col-xl-7 mb-4 mb-md-0 me-auto">
                  <h5 className="fw-bold">Find Developers Around the World</h5>
                  <div className="mb-2 text-danger small">
                    <i className="fas fa-globe-americas me-2" aria-controls="#picker-editor" />
                    <span>Travels</span>
                  </div>
                  <p className="text-muted">
                  You can search for developers of any language in the whole world and prepare a list.
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3 mb-4 mb-md-0 ms-auto">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4" data-mdb-ripple-color="light">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QrsahccdIOSjO3sOWCyi6clDvtbf4dzR4Q&usqp=CAU" className="w-100" alt="" aria-controls="#picker-editor" />
                  </div>
                </div>
                <div className="col-md-9 col-xl-7 mb-4 mb-md-0 me-auto">
                  <h5 className="fw-bold">Compare Developers</h5>
                  <div className="mb-2 text-primary small">
                    <i className="fas fa-palette me-2" aria-controls="#picker-editor" />
                    <span>Art</span>
                  </div>
                  <p className="text-muted">
                   You can compare with any language devloper from all over the word.                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-3 mb-4 mb-md-0 ms-auto">
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded-4 mb-4" data-mdb-ripple-color="light">
                    <img src="data:image/jpeg;base64,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" className="w-100" alt="" aria-controls="#picker-editor" />
                  </div>
                </div>
                <div className="col-md-9 col-xl-7 mb-4 mb-md-0 me-auto">
                  <h5 className="fw-bold">Upgrade Yourself</h5>
                  <div className="mb-2 text-warning small">
                    <i className="fas fa-money-bill me-2" aria-controls="#picker-editor" />
                    <span>Business</span>
                  </div>
                  <p className="text-muted">
                    Our website Dev Stack will help you to become a better devloper.
                  </p>
                </div>
              </div>
            </section>
          </section>
          {/**/}
        </div>
        <div data-draggable="true" className="" style={{ position: 'relative' }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10 text-center">
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8">
                  <h2 className="fw-bold mb-5">Testimonials</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://avatars.githubusercontent.com/u/123088207?v=4"
                      className="rounded-circle shadow-1-strong"
                      width={150}
                      height={150}
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                  <h5 className="mb-3">Anand Chauhan</h5>
                  <h6 className="text-primary mb-3">Web Developer</h6>
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2" />
                    <span>good website for developer  .</span>
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star-half-alt fa-sm text-warning" />
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(2).jpg"
                      className="rounded-circle shadow-1-strong"
                      width={150}
                      height={150}
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                  <h5 className="mb-3">Lisa Cudrow</h5>
                  <h6 className="text-primary mb-3">Graphic Designer</h6>
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2" />
                    <span>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.</span>
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 mb-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                      className="rounded-circle shadow-1-strong"
                      width={150}
                      height={150}
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                  <h5 className="mb-3">John Smith</h5>
                  <h6 className="text-primary mb-3">Marketing Specialist</h6>
                  <p className="px-xl-3">
                    <i className="fas fa-quote-left pe-2" />
                    <span>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</span>
                  </p>
                  <ul className="list-unstyled d-flex justify-content-center mb-0">
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning" />
                    </li>
                    <li>
                      <i className="far fa-star fa-sm text-warning" />
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
          {/**/}
        </div>
        <div data-draggable="true" className="" style={{ position: 'relative' }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="mb-10 text-center text-lg-start">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n                @media (min-width: 992px) {\n                  .cascading-right {\n                    margin-right: -50px;\n                  }\n                  .rotate-lg-6 {\n                    transform: rotate(6deg);\n                  }\n                } /* These are the KEY styles - you can add them directly to any object you want in your project */\n                .fancy-border-radius {\n                  border-radius: 53% 47% 52% 48% / 36% 41% 59% 64%;\n                }\n              '
                }}
              />
              {/* Jumbotron */}
              <div className="container py-4">
                <div className="row g-0 align-items-center">
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <div
                      className="card cascading-right"
                      style={{
                        background: 'hsla(0, 0%, 100%, 0.55)',
                        backdropFilter: 'blur(30px)',
                        zIndex: 1
                      }}
                    >
                      <div className="card-body px-4 py-5 p-md-5 shadow-5">
                        <h2 className="fw-bold mb-4 display-5">Why is DevStack so great?</h2>
                        <p className="text-muted mb-5">
                          Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque iaculis malesuada. Aenean gravida magna orci, non efficitur est porta id. Donec magna
                          diam.
                        </p>
                        <div className="row">
                          <div className="col-md-4 mb-5 mb-md-0">
                            <h2 className="fw-bold text-dark mb-3">10%</h2>
                            <h5 className="text-muted mb-0">Less sugar</h5>
                          </div>
                          <div className="col-md-4 mb-5 mb-md-0">
                            <h2 className="fw-bold text-dark mb-3">70%</h2>
                            <h5 className="text-muted mb-0">More flavor</h5>
                          </div>
                          <div className="col-md-4">
                            <h2 className="fw-bold text-dark mb-3">0%</h2>
                            <h5 className="text-muted mb-0">Gluten</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-5 mb-lg-0">
                    <img
                      src="https://www.zdnet.com/a/img/resize/b71704c77c160fa0a16f25b8e211b658461f2c29/2021/07/19/865e8155-eece-4ada-9b67-e21679c8d237/software-engineering-shutterstock-699634498.jpg?auto=webp&fit=crop&height=1200&width=1200"
                      className="w-100 shadow-4 rotate-lg-6 fancy-border-radius"
                      alt=""
                      aria-controls="#picker-editor"
                    />
                  </div>
                </div>
              </div>
              {/* Jumbotron */}
            </section>
          </section>
          {/**/}
        </div>
      </div>
    </>
  );
};
export default Home;
