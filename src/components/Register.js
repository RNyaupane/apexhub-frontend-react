import React from 'react'
import "../styles/register.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Register = () => {
    return (
        <div className="container pt-5">
            <div className="row mt-5 mx-2 pt-3 d-flex justify-content-center align-items-center">
                <div className="col-lg-4 bg-white m-auto rounded wrapper shadow-lg bg-opacity-25">
                    <h2 className="text-center pt-3">Registation Form</h2>
                    <form action="#">
                        <div className="input-group mb-3 pt-2">
                            <span className="input-group-text">
                                <i className="fa fa-caret-down"></i>
                            </span>
                            <select className="form-select">
                                <option selected>Select User</option>
                                <option value="1">Student</option>
                                <option value="2">Corporation</option>
                            </select>
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="form-check cursor-pointer pt-2">
                            <input className="form-check-input" type="radio" name="flexRadioAgree" id="flexRadioAgree" />
                            <label className="form-check-label" for="flexRadioAgree">
                                <p>
                                    I agree to all the <a href="#">Terms and Conditions</a> and
                                    <a href="#">Privacy Policy</a>
                                </p>
                            </label>
                        </div>
                        <div className="d-grid mb-3 pt-2">
                            <button type="button" className="btn btn-primary">Sign In</button>
                        </div>
                        <div className="text-center pt-2">
                            <p>
                                Already Have an Account ? <a href="login.html">Login Here</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register