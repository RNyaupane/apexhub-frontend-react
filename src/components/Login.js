import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/login.css";


const Login = () => {
  return (
    <div className="container pt-5">
            <div
                className="row mt-5 mx-2 pt-5 d-flex justify-content-center align-items-center">
                <div className="col-lg-4 bg-white m-auto rounded wrapper shadow-lg bg-opacity-25">
                    <h2 className="text-center pt-3">Login</h2>
                    <form action="#">
                        <div className="input-group mb-3 pt-2">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <div className="row mb-4 pt-2">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="form-check mb-3 mb-md-0">
                                    <input
                                        className="form-check-input cursor-pointer"
                                        type="checkbox"
                                        value=""
                                        id="loginCheck"
                                    />
                                    <label
                                        className="form-check-label"
                                        id="remember_me"
                                        for="loginCheck"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                                <a
                                    href="forgetPassword.html"
                                    className="mt-0 text-decoration-none"
                                >Forgot password?</a
                                >
                            </div>
                        </div>
                        <div className="d-grid mb-3 pt-2">
                            <button type="button" className="btn btn-primary">Login</button>
                        </div>
                        <div className="text-center pt-2">
                            <p>
                                Don't have an account? <a href="register.html">Register Now</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login