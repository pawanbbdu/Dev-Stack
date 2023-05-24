import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const Signup = () => {
  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      // making a request to the backend
      // 1. url
      // 2. request method
      // 3. data
      // 4. data format

      const res = await fetch("http://localhost:5000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          title: "Well Done",
          icon: "success",
          text: "You have successfully registered",
        });
      }
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: '90vh'}}>
      <div className="signup">
        <h1>Sign Up</h1>
        <form className="signup-form" onSubmit={signupForm.handleSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              onChange={signupForm.handleChange}
              value={signupForm.values.name}
            />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              onChange={signupForm.handleChange}
              value={signupForm.values.email}
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={signupForm.handleChange}
              value={signupForm.values.password}
            />
          </fieldset>
          <button type="submit">Sign Up Now</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
