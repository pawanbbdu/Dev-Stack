import React from 'react';
const Home = () => {
  return (
    <>
    <header className='home-header d-flex align-items-center justify-content-center'>
      <div>
        <h1 className='display-2 text-center fw-bold text-white'>Dev Stack</h1>
        <button className='btn btn-primary btn-lg mt-5'>Get Started</button>
      </div>
    </header>
      <section className="hero">
        <div
          className="background-image"
          style={{
            backgroundImage: 'url("https://cmxhub.com/wp-content/uploads/2019/11/annie-spratt-QckxruozjRg-unsplash.jpg")'
          }}
        />
        <div className="hero-content-area">
          <h1>Dev Stack</h1>
          <h3>Developer Friendy Website</h3>
          <a href="#" className="btn">
            Contact Us
          </a>
        </div>
      </section>
      <section className="destinations">
        <h3 className="title">Rest information will go here:</h3>
        <p>This is best for Company hiring program and developers self comparing</p>
        <hr />
      </section>
      <section className="contact">
        <h3 className="title">Join our newsletter</h3>
        <p>Information will go here(if any)</p>
        <hr />
        <form>
          <input type="email" placeholder="Email" />
          <a href="#" className="btn">
            Subscribe now
          </a>
        </form>
      </section>
      <footer>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-twitter-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-snapchat-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-pinterest-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-github-square" />
            </a>
          </li>
        </ul>
        <p>Made by Pawan Gupta</p>
        <p>No attribution required. you can remove this footer.</p>
      </footer>
    </>
  );
};
export default Home;
