import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import JobCard from '../components/jobCard.jsx';

import '../main.js';

import { jobData } from '../data/Data.js';
const Acs = () => {
    const [jobDataItem, setJobDataItem] = useState(jobData);
    const filterJobDataItem = (jobType) => {
        const filteredJobDataItems = jobData.filter((currentElement) => {
          return currentElement.jobType === jobType;
        })
        setJobDataItem(filteredJobDataItems);
      }
    return (
        <main id="main" className="main">
            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12 mt-4 end-0 ">
                                <div className="tab-content bg-transparent" >
                                    <Link to='/jobPostForm' className="btn btn-success py-2 my-3 px-5 fw-bold rounded-0 rounded-end"><i class="bi bi-sticky-fill"></i> Post a Job</Link>
                                   
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
                                            <JobCard jobDataItem={jobDataItem} />
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
                                                <input className="form-check-input shadow-none border  fs-5" type="checkbox" value='Remote' id='RemoteCheckbox' onChange={() => filterJobDataItem("Remote")}/>Remote
                                                {/* <label className="form-check-label m-1" for="remoteJob">
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
    )
}

export default Acs