import React from 'react'
import '../styles/style.css'
import '../styles/contactUs.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
const ContactUs = () => {
    return (
        <main id="main" className="main">
            <section className="section profile m-4 contact">
                <div className="container">
                    <div className="row shadow-sm" data-aos="fade-in">
                        {/* <!-- <h1 className="bg-white m-0 px-3 py-3">Contact Us</h1> --> */}
                        <div className="col-lg-5 d-flex align-items-stretch m-0 p-0">
                            <div className="info p-3 bg-white w-100 ">
                                <div className="address">
                                    <i className="bi bi-geo-alt d-flex fs-4 "></i>
                                    <h4 className="">Location:</h4>
                                    <p className="fs-6 mb-4">New Baneshwor, Kathmandu, Nepal</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope d-flex fs-4"></i>
                                    <h4>Email:</h4>
                                    <p className="fs-6 mb-4">Email@apexcollege.edu.np</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone d-flex fs-4"></i>
                                    <h4>Phone:</h4>
                                    <p className="fs-6 mb-0">+977 9882051995</p>
                                    <p className="fs-6 mb-4">+977 9840953995</p>
                                </div>

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7252.299211901372!2d85.33745960734657!3d27.69921488250622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199940d81663%3A0xaf36b9b58903050f!2sApex%20College!5e0!3m2!1sen!2snp!4v1685294788279!5m2!1sen!2snp"
                                    style={{border:'0', width: '100%', height: '290px'}} title='Map'></iframe>
                            </div>
                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch m-0 p-0">
                            <form action="" method="post" role="form" className="w-100 p-4 bg-white  contact-form" >
                                <div className="form-group p-2 mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control shadow-none shadow-sm" name="name" id="name" required />
                                </div>
                                <div className="form-group p-2 mb-3">
                                    <label htmlFor="Email">Email</label>
                                    <input type="text" className="form-control shadow-none shadow-sm" name="email" id="email" required />
                                </div>
                                <div className="form-group p-2 mb-3">
                                    <label htmlFor="Message">Message</label>
                                    <textarea className="form-control shadow-none shadow-sm" name="message" rows="10" required></textarea>
                                </div>
                                <div className="text-center"><button type="submit" className=" btn btn-success p-2 px-3">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactUs