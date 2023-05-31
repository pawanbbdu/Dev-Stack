import React from 'react'
const Home = () => {
  return (
<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, intial-scale=1" />
  <title>Dev Stack</title>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Quicksand"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html: "<% include ./styles.css %>\n         \n     "
    }}
  />
  
  <section className="hero">
    <div
      className="background-image"
      style={{
        backgroundImage:
          "url(https://wallpaper-house.com/data/out/7/wallpaper2you_139824.jpg)"
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
  )
    }
export default Home;