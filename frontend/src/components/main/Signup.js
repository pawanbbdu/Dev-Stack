import React from 'react'

const Signup = () => {

  

  return (<div className="wrapper">
  <div className="signup">
    <h1>Sign Up</h1>
    <form className="signup-form">
      <fieldset>
        <label>Name</label>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </fieldset>
      <fieldset>
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </fieldset>
      <button type="" disabled="">
        Sign Up Now
      </button>
    </form>
  </div>
</div>


  )
}

export default Signup