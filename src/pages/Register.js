import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles/register.css"
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Register = () => {
    const [userType, setUserType] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const domain = "http://127.0.0.1:8000/api/auth/jwt/create";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = { userType, email, password, confirmPassword };
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/auth/users/", userData);
            console.log(response.data);
            // Handle success response
        } catch (error) {
            if (error.response) {
                console.log(error);
            } else if (error.request) {
                console.log(error);
            } else if (error.message) {
                console.log("hello");
            }
        }
    }
    return (
        <div className="container pt-5">
            <div className="row mt-5 mx-2 pt-3 d-flex justify-content-center align-items-center">
                <div className="col-auto col-lg-5 bg-white m-auto rounded wrapper shadow-lg bg-opacity-25">
                    <h2 className="text-center pt-3">Registation Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3 pt-2">
                            <span className="input-group-text">
                                <i className="fa fa-caret-down"></i>
                            </span>
                            <select className="form-select shadow-none " value={userType} onChange={(e) => setUserType(e.target.value)} required>
                                <option className='select-optionnn'>Select User</option>
                                <option value="1">Student</option>
                                <option value="2">Corporation</option>
                            </select>
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input type="text" className="form-control shadow-none" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input type="text" className="form-control shadow-none" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input type="password" className="form-control shadow-none" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="input-group mb-3 pt-2">
                            <input type="password" className="form-control shadow-none" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className="form-check cursor-pointer pt-2">
                            <input className="form-check-input shadow-none" type="radio" name="flexRadioAgree" id="flexRadioAgree" />
                            <label className="form-check-label" htmlFor="flexRadioAgree">
                                <p>
                                    I agree to all the <Link href="/termsAndCondition" className='text-success'>Terms and Conditions</Link> and
                                    <Link to="/privacyPolicy" className='text-success'> Privacy Policy</Link>
                                </p>
                            </label>
                        </div>
                        <div className="d-grid mb-3 pt-2">
                            <button type="button" className="btn btn-success" onClick={handleSubmit}>Sign In</button>
                        </div>
                        <div className="text-center pt-2">
                            <p>
                                Already Have an Account ? <Link to="/login" className='text-success'>Login Here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register