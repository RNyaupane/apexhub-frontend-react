import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const JobCard = ({jobData}) => {
    const[jobDataItem,setJobDataItem] = useState(jobData)
    return (
        <>
            {jobDataItem.map((props) => {
                const { id, imageurl, jobType, companyname, jobtitle, location} = props;
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
        </>
    )
}

export default JobCard