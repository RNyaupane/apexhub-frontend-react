import React from 'react'
// import { Link } from 'react-router-dom'

const ResetPassword = () => {
    return (
        <div>
            <div className="container pt-5">
                <div className="row mt-5 mx-2 pt-5 d-flex justify-content-center align-items-center" >
                    <div className="col-lg-4 bg-white m-auto rounded wrapper shadow-lg bg-opacity-25">
                        <h2 className="text-center pt-3">Reset Password</h2>
                        <p className="text-center pt-2">
                            
                        </p>
                        <form action="#">
                            <div className="input-group mb-3 pt-2">
                                <input type="text" className="form-control shadow-none" placeholder="New Password" />
                            </div>
                            <div className="input-group mb-3 pt-2">
                                <input type="text" className="form-control shadow-none" placeholder="Confirm New Password" />
                            </div>
                            <div className="otp_input text-start mb-2 col-sm 3">
                                <label htmlFor="digit" className='d-flex align-item center py-2'> Type your 6 digit security code</label>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <input type="text" className="form-control mx-2" placeholder="" />
                                    <input type="text" className="form-control mx-2" placeholder="" />
                                    <input type="text" className="form-control mx-2" placeholder="" />
                                    <input type="text" className="form-control mx-2" placeholder="" />
                                    <input type="text" className="form-control mx-2" placeholder="" />
                                    <input type="text" className="form-control mx-2" placeholder="" />
                                </div>
                            </div>
                            <div className="d-grid my-5 pt-2">
                                <button type="button" className="btn btn-success py-2">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword