import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Nav from '../common/Nav';
import '../main.js';

import { jobData } from '../data/Data.js';

const Acs = () => {

    const [jobDataItem, setJobDataItem] = useState(jobData);
    // useEffect(()=>{
    //     let result = axios.get("http://localhost:8000/api/acs/jobpost");
    //     setJobData(result)
    //   },[])

    const filterJobDataItem = (jobType) => {
        const filteredJobDataItems = jobData.filter((currentElement) => {
            return currentElement.jobType === jobType;
        })
        setJobDataItem(filteredJobDataItems);
    }
    return (
        <>
            <Nav jobData={jobData} />
            <main id="main" className="main">
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12 mt-4 end-0 ">
                                    <div className="tab-content bg-transparent" >
                                        <Link to='/jobPostForm' className="btn btn-success py-2 my-3 px-5 fw-bold rounded-0 rounded-end"><i className="bi bi-sticky-fill"></i> Post a Job</Link>

                                        <div className="filter mt-4 " style={{ float: 'right' }}>
                                            <Link className="icon fs-4 text-secondary" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start"><h6>Sort by</h6></li>
                                                <li><Link className="dropdown-item" to="#">Uploaded date</Link></li>
                                                <li><Link className="dropdown-item" to="#">View Count</Link> </li>
                                                <li><Link className="dropdown-item" to="#">Rating</Link> </li>
                                            </ul>
                                        </div>
                                        <div id="tab-1 " className="tab-pane fade show p-0 active">
                                            {jobData.map((props) => {
                                                const { id, imageurl, jobType, companyname, jobtitle, location } = props;
                                                return (
                                                    <div className="job-item py-3 px-2  shadow-none border-top border-bottom" key={id}>
                                                        <div className="row g-4">
                                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                                <img className="flex-shrink-0 img-fluid border rounded" src={imageurl} alt=""
                                                                    style={{ width: "60px", height: "60px" }} />
                                                                <Link to="/jobDetail" className="text-start ps-4 text-decoration-none">
                                                                    <h5 className="mb-1 fs-3 fw-bold" style={{ color: "rgb(53, 43, 43)" }}><u>{companyname}</u></h5>
                                                                    <span className="text-truncate me-3 text-dark fs-5 d-block">{jobtitle}</span>
                                                                    <span className="text-truncate me-3 text-dark d-block"> {location}<span> ({jobType})</span> </span>
                                                                </Link>
                                                            </div>
                                                            <div
                                                                className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                                <div className="d-flex mb-3">
                                                                    <button className="btn btn-light btn-square me-3 d-flex border border-3" to="">Upvote <i
                                                                        className="bi bi-caret-up-fill"></i></button>
                                                                    <Link className="btn btn-success d-flex px-4 border border-1" to="/jobDetail">Apply</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-4 float-end d-none d-lg-block">
                            <div className="card shadow-none px3 rounded-0" id="ads-card">
                                <div className="shadow-none pb-0">
                                    <article className="card-group-item ">
                                        <header className="card-header bg-light">
                                            <h6 className="title">Salary Range</h6>
                                        </header>
                                        <div className="filter-content">
                                            <div className="card-body shadow-none">
                                                <div className="form-row d-flex">
                                                    <div className="form-group col-md-5">
                                                        <label>Min</label>
                                                        <input type="number" className="form-control shadow-none shadow-none" id="inputEmail4" placeholder="$0" />
                                                    </div>
                                                    <div className="form-group col-md-5 mx-2 text-right">
                                                        <label>Max</label>
                                                        <input type="number" className="form-control shadow-none shadow-none" placeholder="$1,0000" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="card-group-item mt-3">
                                        <header className="card-header">
                                            <h6 className="title">Select Job Type </h6>
                                        </header>
                                        <div className="filter-content mx-2 px-3">
                                            <div className="card-body shadow-none d-inline px-5">

                                                <div className="form-check my-1">
                                                    <input className="form-check-input shadow-none border fs-5" type="checkbox" value='Hybrid' id='hybridCheckbox' onChange={() => filterJobDataItem("Hybrid")} />Hybrid
                                                </div>
                                                <div className="form-check my-1">
                                                    <input className="form-check-input shadow-none border fs-5" type="checkbox" value='Onsite' id='OnsiteCheckbox' onChange={() => filterJobDataItem("Onsite")} />Onsitee
                                                </div>
                                                <div className="form-check my-1">
                                                    <input className="form-check-input shadow-none border  fs-5" type="checkbox" value='Remote' id='RemoteCheckbox' onChange={() => filterJobDataItem("Remote")} />Remote
                                                    {/* <label className="form-check-label m-1" htmlFor="remoteJob">
                                                    Remote
                                                </label> */}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <div className='text-center'>
                                        <a className="btn btn-light border border-3 mb-3 rounded-0" onClick={() => filterJobDataItem("")}>Apply Changes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Acs