import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "bootstrap-icons/font/bootstrap-icons.css"
// import 'jquery';
import '../main.js';

import logo from '../assets/images/AH logo.png'
import profileImage from '../assets/images/profile-img.jpg'


const Nav = (jobData,bookData) => {

    const[search,setSearch] = useState(jobData,bookData)

    const handleSearch = (event) =>{
        event.preventDefault();
    }

    const handleToggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };
    const handleToggleSearchBar = () => {
        const searchBar = document.querySelector('.search-bar');
        if (searchBar) {
            searchBar.classList.toggle('search-bar-show');
        }
    };

    return (
        <>
            <header id="header" className="header fixed-top d-flex align-items-center ">
                <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center text-decoration-none">
                        <img src={logo} alt="" />
                        <span className="d-none  d-lg-block ">ApexHub</span>
                    </Link>
                    {/* <i className="bi bi-list toggle-sidebar-btn d-xl-none d-xxl-none "></i> */}
                    <button className="bi bi-list toggle-sidebar-btn bg-white border border-white  d-xl-none d-xxl-none " onClick={handleToggleSidebar}></button>
                </div>

                <div className="search-bar d-none d-sm-block d-md-block d-lg-block">
                    <form className="search-form d-flex align-items-center" method="POST" action="#">
                        <input className='rounded-pill px-3' type="text" name="query" placeholder="Search here..." title="Enter search keyword" onChange={(e)=> handleSearch(e.target.value)} />
                        <button type="submit" title="Search">
                            <i className="bi bi-search text-dark"></i>
                        </button>
                    </form>
                </div>
                <nav className="header-nav ms-auto">
                    <ul className="d-flex align-items-center">
                        {/* <li className='nav-item'>
                            <button type="button" className="btn btn-primary">Left</button>
                        </li> */}
                        <li className="nav-item d-block d-xl-none d-sm-none d-lg-none d-md-none">
                            <a className="nav-link nav-icon search-bar-toggle" >
                                {/* <i className="bi bi-search"></i> */}
                                <button className="bi bi-search bg-white border border-white" onClick={handleToggleSearchBar}></button>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" data-bs-toggle="dropdown">
                                <i className="bi bi-bell"></i>
                                <span className="badge bg-danger rounded-circle  badge-number">2</span> </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li className="dropdown-header">
                                    You have 2 new notifications
                                    <Link to="/notification"><span className="badge rounded-pill bg-success p-2 ms-2">View
                                        all</span></Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>

                                <li className="notification-item px-4">
                                    <Link to="/notification" className='text-decoration-none text-dark'>
                                        <h4>Job posted by ACS</h4>
                                        <p>ReactJs Developer</p>
                                        <p>10 min. ago</p>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="notification-item px-4">
                                    <Link to="/notification" className='text-decoration-none text-dark'>
                                        <h4>Job posted by ACS</h4>
                                        <p>ReactJs Developer</p>
                                        <p>10 min. ago</p>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li className="dropdown-footer p-1">
                                    <Link to="/notification" className='text-dark'>Show all notifications</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown pe-3">
                            <a className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
                                <img src={profileImage} alt="Profile" className="rounded-circle" />
                                <span className="d-none d-md-block dropdown-toggle ps-2">Roshan Nyaupane</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="/studentProfile">
                                        <i className="bi bi-person px-2"> </i>
                                        <span> My Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="#">
                                        <i className="bi bi-circle-half px-2"> </i>
                                        <span>Change Theme</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="/studentProfile">
                                        <i className="bi bi-gear px-2"> </i>
                                        <span> Account Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link className="dropdown-item d-flex align-items-center" to="/login">
                                        <i className="bi bi-box-arrow-right px-2"> </i>
                                        <span>Log Out</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
            <aside id="sidebar" className="sidebar border-top border-end bg-white">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/" >
                            <i className="bi bi-house-door fs-4 navIcons"></i>
                            <span className="navTabs">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/apexShop">
                            <i className="bi bi-bag fw-bold fs-4 navIcons"></i>
                            <span className="navTabs">A-shop</span>
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link" to="/">
                            <i className="bi bi-briefcase fs-4 navIcons"></i>
                            <span className="navTabs">Jobs</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/notification">
                            <i className="bi bi-bell fs-4 navIcons"></i>
                            <span className="navTabs">Notifications</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutUs">
                            <i className="bi bi-info-circle fs-4 navIcons"></i>
                            <span className="navTabs">About us</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactUs">
                            <i className="bi bi-telephone fs-4 navIcons"></i>
                            <span className="navTabs">Contact us</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Nav