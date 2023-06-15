import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../styles/style.css';
import '../main.js';

import spaceXLogo from '../assets/images/spacex.webp'
import microsoftLogo from '../assets/images/Microsoft logo.png'
import appleLogo from '../assets/images/apple-logo.png'
import { data } from '../assets/images/Data.js';
const Acs = () => {
    
    return (
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12 mt-4 end-0 ">

                                <div className="tab-content border bg-white" >
                                    <Link to='/jobPostForm' className="btn btn-success py-2 my-3 px-4 fw-bold rounded-0 rounded-end">Post a Job</Link>
                                    <div className=" my-2 d-none">
                                        <button className="btn btn-gray border dropdown-toggle rounded-0 bg-white" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                            Select Category
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li><button className="dropdown-item" type="button">Hybrid</button></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button className="dropdown-item" type="button">Remote</button></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button className="dropdown-item" type="button">Onsite</button></li>
                                        </ul>
                                    </div>
                                    <div className="filter mt-4" style={{ float: 'right' }}>
                                        <Link className="icon fs-4 text-secondary" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                            <li className="dropdown-header text-start">
                                                <h6>Sort by</h6>
                                            </li>

                                            <li>
                                                <Link className="dropdown-item" to="#">Uploaded date</Link>
                                            </li>
                                            <li><Link className="dropdown-item" to="#">View Count</Link> </li>
                                            <li><Link className="dropdown-item" to="#">Rating</Link> </li>
                                        </ul>
                                    </div>
                                    <div id="tab-1 " className="tab-pane fade show p-0 active">
                                        {data.map((props) => (
                                            <div className="job-item py-3 px-2  shadow-none border-top border-bottom">
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                    <img className="flex-shrink-0 img-fluid border rounded" src={props.imageurl} alt=""
                                                        style={{ width: "60px", height: "60px" }} />
                                                    <div className="text-start ps-4">
                                                            <h5 className="mb-1 fs-3 fw-bold" style={{ color: "rgb(53, 43, 43)" }}><u>{props.companyname}</u></h5>
                                                            <span className="text-truncate me-3 fs-5 d-block">{props.jobtitle}</span>
                                                            <span className="text-truncate me-3 d-block"> {props.location}<span></span> </span>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                    <div className="d-flex mb-3">
                                                        <button className="btn btn-light btn-square me-3 d-flex border border-3" to="">Upvote <i
                                                            className="bi bi-caret-up-fill"></i></button>
                                                        <Link className="btn btn-success d-flex px-4" to="/jobDetail">Apply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-4 float-end d-none d-lg-block">
                        <div className="card shadow-none px3" id="ads-card">
                            <div className="shadow-none pb-0">
                                <article class="card-group-item ">
                                    <header class="card-header bg-light">
                                        <h6 class="title">Range input </h6>
                                    </header>
                                    <div class="filter-content">
                                        <div class="card-body shadow-none">
                                            <div class="form-row d-flex">
                                                <div class="form-group col-md-5">
                                                    <label>Min</label>
                                                    <input type="number" class="form-control shadow-none" id="inputEmail4" placeholder="$0" />
                                                </div>
                                                <div class="form-group col-md-5 mx-2 text-right">
                                                    <label>Max</label>
                                                    <input type="number" class="form-control shadow-none" placeholder="$1,0000" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="card-group-item mt-3">
                                    <header class="card-header">
                                        <h6 class="title">Selection </h6>
                                    </header>
                                    <div class="filter-content mx-2 px-3">
                                        <div class="card-body shadow-none d-inline px-5">
                                            <div class="form-check">
                                                <input class="form-check-input shadow-none border border-secondary fs-4" type="checkbox" value="" id=""/>
                                                    <label class="form-check-label m-1" for="flexCheckDefault">
                                                        Hybrid
                                                    </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input shadow-none border border-secondary fs-4 " type="checkbox" value="" id=""/>
                                                    <label class="form-check-label m-1" for="flexCheckDefault">
                                                        Onsite
                                                    </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input shadow-none border border-secondary fs-4 " type="checkbox" value="" id=""/>
                                                    <label class="form-check-label m-1" for="flexCheckDefault">
                                                        Remote
                                                    </label>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <div className='text-center'>
                                <a className="btn btn-light btn-outline-dark mb-3 text-center">Apply Changes</a>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Acs