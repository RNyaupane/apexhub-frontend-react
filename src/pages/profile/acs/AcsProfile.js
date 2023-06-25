import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';

const AcsProfile = () => {
    return (
        <>
            <Tabs>
                <Tab eventKey="home" title="Profile">
                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                        <h5 className="card-title">About </h5>
                        <p className="">SpaceX is a leading digital transformation company that helps businesses achieve their goals
                            through the effective use of technology. We offer a wide range of services to help organizations streamline their operations and improve their bottom line.</p>
                        <h5 className="card-title">Profile Details</h5>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 label ">Company Name :</div>
                            <div className="col-lg-9 col-md-8">Sabita Shrestha</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Phone:</div>
                            <div className="col-lg-9 col-md-8">9840985989</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Country:</div>
                            <div className="col-lg-9 col-md-8">Nepal</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Address:</div>
                            <div className="col-lg-9 col-md-8">Kathmandu-10, Boudhha  </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Email:</div>
                            <div className="col-lg-9 col-md-8">sabita@gmail.com</div>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Edit Profile">
                    <form>
                        <div className="row my-3">
                            <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Company Name</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="fullName" type="text" className="form-control shadow-none" id="fullName" value="Sabita Shrestha" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="about" className="col-md-4 col-lg-3 col-form-label">About</label>
                            <div className="col-md-8 col-lg-9">
                                <textarea name="about" className="form-control shadow-none" id="about" rows="10">I am an excellent communicator. I take pride in myself on making sure people have the right information because it drives better results. Most business issues stem from poor communication, so I feel a responsibility to keep everyone on the same page.</textarea>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="Phone" className="col-md-4 col-lg-3 col-form-label">Phone</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="phone" type="text" className="form-control shadow-none" id="Phone" value="9840953995" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="Country" className="col-md-4 col-lg-3 col-form-label">Country</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="country" type="text" className="form-control shadow-none" id="Country" value="Nepal" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="Address" className="col-md-4 col-lg-3 col-form-label">Address</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="address" type="text" className="form-control shadow-none" id="Address" value="Kathmandu-10, Boudhha" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="Date" className="col-md-4 col-lg-3 col-form-label">Date</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="date" type="text" className="form-control shadow-none" id="Date" value="03/05/2001" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="email" type="email" className="form-control shadow-none" id="Email" value="sabita@gmail.com" />
                            </div>
                        </div>
                    </form>
                </Tab>

                <Tab eventKey="changePassword" title="Change Password">
                    <form>
                        <div className="row my-3">
                            <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Current Password</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="password" type="password" className="form-control shadow-none" id="currentPassword" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">New Password</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="newpassword" type="password" className="form-control shadow-none" id="newPassword" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="renewPassword" className="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                            <div className="col-md-8 col-lg-9">
                                <input name="renewpassword" type="password" className="form-control shadow-none" id="renewPassword" />
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success mb-3">Change Password</button>
                        </div>
                    </form>
                </Tab>
            </Tabs>
        </>
    )
}

export default AcsProfile