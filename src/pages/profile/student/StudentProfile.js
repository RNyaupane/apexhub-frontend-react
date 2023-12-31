import React from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom'
import bookPhoto from '../../../assets/images/book3.jpg'
import { useState } from 'react';


const StudentProfile = () => {
    const[about, setABout] = useState("");
    const[name, setName] = useState("");
    const[phone, setPhone] = useState("");
    const[country, setCountry] = useState("");
    const[address, setAddress] = useState("");
    const[dateOfBirth, setDateOfBirth] = useState("");
    const[email, setEmail] = useState("");
    const[education, setEducation] = useState("");
    const[achievement, setAchievement] = useState("");
    const[skill, setSkill] = useState("");

    return (
        <>
            <Tabs>
                <Tab eventKey="home" title="Profile">
                    <div className="tab-pane fade show active profile-overview" id="profile-overview">
                        <h5 className="card-title">About</h5>
                        <p className="">I am an excellent communicator. I take pride in myself on making sure people have the right information because it drives better results.
                            Most business issues stem from poor communication, so I feel a responsibility to keep everyone on the same page.</p>

                        <h5 className="card-title">Profile Details</h5>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label ">Name</div>
                            <div className="col-lg-9 col-md-8">Sabita Shrestha</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Phone</div>
                            <div className="col-lg-9 col-md-8">9840985989</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Country</div>
                            <div className="col-lg-9 col-md-8">Nepal</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Address</div>
                            <div className="col-lg-9 col-md-8">Kathmandu-10, Boudhha  </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Date of Birth</div>
                            <div className="col-lg-9 col-md-8">03/05/2001</div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-4 label">Email</div>
                            <div className="col-lg-9 col-md-8">sabita@gmail.com</div>
                        </div>

                        <h5 className="card-title mb-0">Education</h5>
                        <div className="row">
                            <h6 className="label">Bachelor of Information System (BCIS)</h6>
                            <p className="small ">Pokhara University</p>
                            <h6 className="label ">M Tech.</h6>
                            <p className="small "> University Of Delhi</p>
                        </div>
                        <h5 className="card-title mb-0">Achievements</h5>
                        <div className="row">
                            <h6 className="label ">Best Group Award (SMART-APEX College)</h6>
                            <p className="small ">In analytical, critical thinking, research, communication, and leadershi skills.</p>
                            <h6 className="label ">Best Presentaator (HORIZON-APEX College)</h6>
                            <p className="small ">In research, communication, and leadershi skills.</p>
                        </div>

                        {/* <!-- Skill --> */}
                        <h5 className="card-title mb-0">Skills</h5>
                        <h6 className="label">Html</h6>
                        <div className="progress">
                            <div className="progress-bar bg-secondary" style={{ width: '20%' }}></div>
                        </div>
                        <h6 className="label mt-3">Css</h6>
                        <div className="progress">
                            <div className="progress-bar bg-secondary" style={{ width: '60%' }}></div>
                        </div>
                        <h6 className="label mt-3">Java</h6>
                        <div className="progress">
                            <div className="progress-bar bg-secondary" style={{ width: '40%' }}></div>
                        </div>
                        <h6 className="label mt-3">.Net</h6>
                        <div className="progress">
                            <div className="progress-bar bg-secondary" style={{ width: '80%' }}></div>
                        </div>
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-success my-3">Download CV</button>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Edit Profile">
                    <form>
                        <div className="row my-3">
                            <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Full Name</label>
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

                        <div className="d-flex w-100 col-6 mx-auto mb-3">
                            <h5 className="card-title mb-0 fs-3 fw-bold">Education</h5>
                            <button className="btn text-primary mx-4 " type="button" onClick={window["addNewEducationDiv"]}><i className="bi bi-plus-circle" ></i> New</button>
                        </div>
                        <div className="row" id="addEducationDiv">
                            <div className="col-md-8 col-lg-9 mb-4 shadow-sm">
                                <label className="col-md-4 col-lg-3 small text-dark">DEGREE</label>
                                <input type="text" className="form-control shadow-none mb-2" value="" placeholder="" />
                                <label className="col-md-4 col-lg-3 small text-dark">INSTITUTION</label>
                                <input type="text" className="form-control shadow-none mb-3" value="" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-5 col-md-8 col-lg-9">
                            <button className="bi bi-trash btn btn-light border text-dark float-end " type="button" onClick={window["deleteDegree"]} id="remove-education-btn"> Remove</button>
                        </div>


                        <div className="d-flex w-100 col-6 mx-auto my-3">
                            <h5 className="card-title mb-0 fs-3 fw-bold">Achievements</h5>
                            <button className="btn text-primary mx-4 " type="button" onClick={window['addNewAchievementDiv']}><i className="bi bi-plus-circle" ></i> New</button>
                        </div>

                        <div className="row" id="addAchievementDiv">
                            <div className="col-md-8 col-lg-9 mb-4 shadow-sm">
                                <label className="col-md-4 col-lg-3 text-dark">Title</label>
                                {/* <a className="bi bi-trash text-dark py-2 cursor-pointer text-decoration-none" style={{float: "right"}}> Delete</a>  */}
                                <input type="text" className="form-control shadow-none mb-2" id="degree1" value="" />
                                <textarea name="about" className="form-control shadow-none mb-3" id="" rows="3" placeholder="Description..."></textarea>
                            </div>
                        </div>
                        <div className="justify-content-end col-md-8 col-lg-9">
                            <button className="bi bi-trash btn btn-light border text-dark" type="button" onClick={window['deleteAchievement']} style={{ float: "right" }} id="remove-achievement-btn"> Remove</button>
                        </div>

                        <div className="d-flex w-100 col-6 mx-auto my-3">
                            <h5 className="card-title mb-0 fs-3 fw-bold">Skills</h5>
                            <button className="btn text-primary mx-4 py-0 " type="button" onClick={window["addNewSkillDiv"]}><i className="bi bi-plus-circle" ></i> New</button>
                        </div>
                        <div className="row col-md-8 col-lg-9" id="addSkillDiv">
                            <div className="input-group col-md-8 col-lg-9 mb-3 w-100">
                                <input
                                    type="text"
                                    className="form-control shadow-none"
                                    aria-label="Text input with dropdown button"
                                    placeholder="Enter skill" />
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select Level</option>
                                    <option value="1">Novice</option>
                                    <option value="2">Beginner</option>
                                    <option value="3">Skillfull</option>
                                    <option value="4">Experienced</option>
                                    <option value="5">Expert</option>
                                </select>
                            </div><br />
                        </div>
                        <div className="justify-content-end col-md-8 col-lg-9 my-0">
                            <button className="bi bi-trash btn btn-light border text-dark float-end " type="button" onClick={window["deleteSkill"]} id="remove-skill-btn"> Remove</button>
                        </div>

                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-success m-4">Save Changes</button>
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
                <Tab eventKey="yourPosts" title="Dashboard">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col">
                                <button type="button" className="btn btn-light border rounded-pill w-50">All</button>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-light border rounded-pill w-50">Sold</button>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-light border rounded-pill w-50">Hold</button>
                            </div>
                        </div>
                    </div>
                    <section className="section dashboard mt-4">
                        <div className="row m-0 p-0">
                            <div className="col-lg-14 ">
                                <div className="row ">
                                    <div className=" col-lg-12 card dark m-1 rounded-0 productCard border flex-row">
                                        <img src={bookPhoto} className="card-img-top border border-1 rounded-0 imagess"
                                            alt="..." />
                                        <div className="card-body shadow-none ">
                                            <div className="text-section">
                                                <h3 className="mt-3 product-category">Book</h3>
                                                <p className="card-text m-0 fs-6"><span className="fs-5">Name: &nbsp;</span> Name of the book</p>
                                                <p className="card-text position-absolute bottom-0 posted-time pb-3 ">(28 min ago)</p>
                                            </div>
                                            <div className="cta-section">
                                                <div className="text-success fw-bold pt-2">$500.00</div>
                                                <Link to="/productDetail" className="btn btn-success my-2 border-none">View</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Tab>
            </Tabs>
        </>
    )
}

export default StudentProfile