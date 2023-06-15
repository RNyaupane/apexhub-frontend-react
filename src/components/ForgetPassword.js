import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/login.css";

const ForgetPassword = () => {
  return (
    <div className="container pt-5">
      <div className="row mt-5 mx-2 pt-5 d-flex justify-content-center align-items-center" >
        <div className="col-lg-4 bg-white m-auto rounded wrapper shadow-lg bg-opacity-25">
          <h2 className="text-center pt-3">Forget Password?</h2>
          <p className="text-center pt-2">
            Enter your email to get a password reset link
          </p>
          <form action="#">
            <div className="input-group mb-3 pt-2">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="d-grid mb-3 pt-2">
              <button type="button" className="btn btn-primary">
                Reset Password
              </button>
            </div>
            <div className="text-center pt-2">
              <p>Remember your password? <a href="login.html">Login Now</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword;