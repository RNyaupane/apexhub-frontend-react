import React from 'react'
import '../styles/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import spaceXLogo from '../assets/images/spacex.webp'

const JobDetail = () => {
    return (
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="row bg-light shadow p-3 mb-5 bg-body rounded mt-4">
                    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container">
                            <div className="row gy-5 gx-4">
                                <div className="col-lg-8">
                                    <div className="d-flex align-items-center mb-5">
                                        <img className="flex-shrink-0 img-fluid border rounded" src={spaceXLogo} alt="" style={{width: '80px', height: '80px' }} />
                                            <div className="text-start ps-4">
                                                <h3 className="mb-3">Full Stack Java Developer</h3>
                                                <span className="text-truncate me-3"><i className="bi bi-geo-alt text-dark me-2"></i>Kathmandu, Nepal</span>
                                                <span className="text-truncate me-3"><i className="bi bi-clock text-dark me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-primary me-2"></i></span>
                                            </div>
                                    </div>

                                    <div className="mb-5">
                                        <h4 className="mb-3">About the job</h4>
                                        <p className="justify-content-between">We are looking for a developer who is comfortable with both front and back-end programming.
                                            Full stack developers are responsible for developing and designing the front end web architecture, ensuring the responsiveness of applications,
                                            and working alongside graphic designers for web design features, among other duties.</p>
                                        <h4 className="mb-2">Responsibility</h4>
                                        <ul className="">
                                            <li>Developing front end website architecture.</li>
                                            <li>Designing user interactions on web pages.</li>
                                            <li>Developing back-end website applications.</li>
                                            <li>Creating servers and databases for functionality.</li>
                                            <li>Working alongside graphic designers for web design features.</li>
                                        </ul>
                                        <h4 className="mb-3">Qualifications/Skills</h4>
                                        <ul className="">
                                            <li>Bachelor’s degree in computer science or software engineering.</li>
                                            <li>Proven experience as a Java developer for at least 3+ years.</li>
                                            <li>Have good working knowledge on core Java, Spring Boot framework.</li>
                                            <li>Familiarity with JBPM KIE/DROOLS workbench or any java-based workflow engine would be an added advantage,</li>
                                            <li>Proficiency with fundamental front-end languages such as HTML, CSS, and JavaScript.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="bg-white rounded p-5 mb-4 wow slideInUp border border-2 shadow" data-wow-delay="0.1s">
                                        <h4 className="mb-4">Job Summery</h4>
                                        <p><i className="bi bi-arrow-right text-dark me-2"></i>Published On: 13 May, 2023</p>
                                        <p><i className="bi bi-arrow-right text-dark me-2"></i>Vacancy: 5 Position</p>
                                        <p><i className="bi bi-arrow-right text-dark me-2"></i>Job Nature: Full Time</p>
                                        <p><i className="bi bi-arrow-right text-dark me-2"></i>Salary: $123 - $456</p>
                                        <p><i className="bi bi-arrow-right text-dark me-2"></i>Location: Kathmandu, Nepal</p>
                                        <p className="bi bi-arrow-right text-dark m-0"><i className="fa fa-angle-right text-primary me-2"></i>Date Line: 18 May, 2023</p>
                                    </div>
                                    <div className="bg-white rounded p-5 mb-4 wow slideInUp border border-2 shadow" data-wow-delay="0.1s">
                                        <h4 className="mb-4">About The Company  </h4>
                                        <p className="m-0">SpaceX is a leading digital transformation company that helps businesses achieve their goals through the effective use of technology.
                                            We offer a wide range of services to help organizations streamline their operations and improve their bottom line.</p>
                                    </div>
                                </div>
                                <div className="">
                                        <h4 className="mb-4">Apply For The Job</h4>
                                        <form>
                                            <div className="row g-3">
                                                <div className="col-12 col-sm-6">
                                                    <input type="text" className="form-control shadow-none shadow-none py-2" placeholder="Your Name" />
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <input type="email" className="form-control shadow-none py-2" placeholder="Your Email" />
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <input type="text" className="form-control shadow-none py-2" placeholder="Portfolio Website Link" />
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <input type="text" className="form-control shadow-none py-2" placeholder="Github Username" />
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <label htmlFor="cvFile" className="col-form-label">&nbsp;Attach a CV (.pdf) :</label>
                                                    <input type="file" className="form-control shadow-none bg-white py-2" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea className="form-control shadow-none py-2" rows="5" placeholder="Coverletter"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-success w-100" type="submit">Apply Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default JobDetail