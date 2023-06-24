import React, { useState } from 'react'
import Nav from '../../../common/Nav'
import '../adminDashboard/adminDashboard.css'


const ExternalDashboard = () => {
    const currentDate = new Date();
    const options = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);
    return (
        <>
            <Nav />
            <main id="main" className="main">
                <section className="section dashboard mt-5">
                    <div className="row ">
                        {/* <!-- Left side columns --> */}
                        <div className="col-lg-auto">
                            <div className="row w-100">
                                {/* <!-- Sales Card --> */}
                                <div className="col-xxl-4 col-md-5 rounded-0">
                                    <div className="card info-card sales-card border border-none shadow-none rounded-0">
                                        <div className="filter">
                                            <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Today</a></li>
                                                <li><a className="dropdown-item" href="#">This Month</a></li>
                                                <li><a className="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>
                                        <div className="card-body shadow-none my-4">
                                            {/* <h5 className="card-title">Jobs <span>| Today</span></h5> */}
                                            <h5 className="card-title fs-2">Jobs</h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-briefcase fs-4 navIcons "></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6>
                                                    <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Sales Card --> */}

                                {/* <!-- Revenue Card --> */}
                                <div className="col-xxl-4 col-md-5">
                                    <div className="card info-card revenue-card border border-none shadow-none">
                                        <div className="filter">
                                            <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Today</a></li>
                                                <li><a className="dropdown-item" href="#">This Month</a></li>
                                                <li><a className="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>
                                        <div className="card-body shadow-none my-4">
                                            {/* <h5 className="card-title">Jobs <span>| Today</span></h5> */}
                                            <h5 className="card-title fs-2">Applied</h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-file-post"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6>
                                                    <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Revenue Card --> */}

                                {/* <!-- Customers Card --> */}
                                <div className="col-xxl-4 col-md-5 ">
                                    <div className="card info-card customers-card border border-none shadow-none ">
                                        <div className="filter">
                                            <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Today</a></li>
                                                <li><a className="dropdown-item" href="#">This Month</a></li>
                                                <li><a className="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>
                                        <div className="card-body shadow-none my-4">
                                            {/* <h5 className="card-title">Jobs <span>| Today</span></h5> */}
                                            <h5 className="card-title fs-2">Users</h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>145</h6>
                                                    <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Customers Card --> */}

                                {/* Top Selling  */}
                                <div className="col-12">
                                    <div className="card top-selling overflow-auto mw-100 rounded-0 ">
                                        <h1 className="card-title fs-3 text-center">Jobs</h1>
                                        <div className="filter">
                                            <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li className="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>
                                                <li><a className="dropdown-item" href="#">Today</a></li>
                                                <li><a className="dropdown-item" href="#">This Month</a></li>
                                                <li><a className="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>
                                        <div className="card-body pb-0 shadow-none collapse1">
                                            <table className="table table-borderless ">
                                                <thead className='table-light border-bottom'>
                                                    <tr>
                                                        <th scope="col"> Id </th>
                                                        <th scope="col"> Company&nbsp;Name </th>
                                                        <th scope='col'> Job&nbsp;Title </th>
                                                        <th scope="col"> Posted&nbsp;Date </th>
                                                        <th scope="col"> Applied&nbsp;By </th>
                                                        <th scope="col"> Action </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row"><a href="#">#01</a></td>
                                                        <td><a href="#" className="text-dark ">Leafrog Co.</a></td>
                                                        <td>Java Developer</td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td>32</td>
                                                        <td className=' action-delete text-danger m-0 p-0'>
                                                            <div className="form-check form-switch mx-2 fs-5">
                                                                <input className="form-check-input shadow-none"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    defaultChecked="checked"
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row"><a href="#">#02</a></td>
                                                        <td><a href="#" className="text-dark ">Microsoft Corporation</a></td>
                                                        <td>.Net Developer</td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td>10</td>
                                                        <td className=' action-delete text-danger m-0 p-0'>
                                                            <div className="form-check form-switch mx-2 fs-5">
                                                                <input className="form-check-input shadow-none"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    defaultChecked="checked"
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row"><a href="#">#03</a></td>
                                                        <td><a href="#" className="text-dark ">Delloite Consulting</a></td>
                                                        <td>Business Developer</td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td>22</td>
                                                        <td className=' action-delete text-danger m-0 p-0'>
                                                            <div className="form-check form-switch mx-2 fs-5">
                                                                <input className="form-check-input shadow-none"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    defaultChecked="checked"
                                                                />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Left side columns  */}
                    </div>
                </section >
            </main >
        </>
    )
}

export default ExternalDashboard