import React from 'react'
import "../styles/notification.css"
import "../styles/style.css"
import Nav from '../common/Nav';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "../main.js"

import profileImage from '../assets/images/profile-img.jpg'

const Notification = () => {
    return (
        <>
        <Nav/>
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="col-lg-8">
                    <section className="section-50">
                        <div className="notification-ui_dd-content ">
                        <div className=' d-flex'>
                            <h3 className=" m-0 mb-3 d-flex w-100 ">Notifications
                            </h3>
                            <div className="filter float-end">
                                    <a className="icon fs-4 text-secondary" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li>
                                            <a className="dropdown-item">Mark as all read</a>
                                        </li>
                                        {/* <li>
                                            <a className="dropdown-item">Delete all notifications</a>
                                        </li> */}
                                    </ul>
                                </div>
                                </div>
                            <div className="notification-list notification-list shadow-sm">
                                <div className="notification-list_content">
                                    <i className="bi bi-circle-fill px-4 py-1 text-success"></i>
                                    <div className="notification-list_img">
                                        <img src={profileImage} alt="user" />
                                    </div>
                                    <div className="notification-list_detail">
                                        <p><b>Roshan Nyaupane</b> reacted to your post
                                        </p>
                                        <p className="text-muted"><small>10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>

                            <div className="notification-list notification-list shadow-sm">
                                <div className="notification-list_content">
                                    <i className="bi bi-circle-fill px-4 py-1" style={{color: '#ffffff00'}}></i>
                                    <div className="notification-list_img">
                                        <img src={profileImage} alt="user" />
                                    </div>
                                    <div className="notification-list_detail">
                                        <p><b>Roshan Nyaupane</b> reacted to your post
                                        </p>
                                        <p className="text-muted"><small>10 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </main>
        </>
    )
}

export default Notification