import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/login.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const domain = "http://127.0.0.1:8000/api/auth/jwt/create";

    const [accessKey, setAccessKey] = useState("");
    const [refreshKey, setRefreshKey] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { email, password };
        try {
          const response = await axios.post(domain, userData);
          console.log(response.data);
          // Handle success response
          console.log("Login successful!");
          setAccessKey(response.data.access);
          setRefreshKey(response.data.refresh);
          localStorage.setItem("accessKey", response.data.access);
          localStorage.setItem("refreshKey", response.data.refresh);
        } catch (error) {
          console.error(error);
          // Handle error response
          console.log("Login failed.");
        }
      };
    return (
        <div className="container pt-5">
            <div
                className="row mt-5 mx-2 pt-5 d-flex justify-content-center align-items-center">
                <div className="col-lg-4 bg-white m-auto rounded wrapper shadow-lg bg-opacity-25">
                    <h2 className="text-center pt-3">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3 pt-2">
                            <input type="text" className="form-control shadow-none" placeholder="Email" />
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input
                                type="password"
                                className="form-control shadow-none"
                                placeholder="Password"
                            />
                        </div>
                        <div className="row mb-4 pt-2">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="form-check mb-3 mb-md-0">
                                    <input
                                        className="form-check-input cursor-pointer shadow-none"
                                        type="checkbox"
                                        value=""
                                        id="loginCheck"
                                    />
                                    <label
                                        className="form-check-label "
                                        id="remember_me"
                                        htmlFor="loginCheck"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex justify-content-center">
                                <Link
                                    to="/forgetPassword"
                                    className="mt-0 text-success"
                                >Forgot password?</Link>
                            </div>
                        </div>
                        <div className="d-grid mb-3 pt-2">
                            <button type="submit" className="btn btn-success">Login</button>
                        </div>
                        <div className="text-center pt-2">
                            <p>
                                Don't have an account? <Link to="/register" className='text-success text-decoration'>Register Now</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login