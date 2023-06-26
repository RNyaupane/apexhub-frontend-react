import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../../common/Nav'
import './adminDashboard.css'
import baby from '../../../assets/images/book3.jpg'


const AdminDashboard = () => {
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
                                <div className="col-xxl-4 col-md-6 rounded-0">
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
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card revenue-card border border-none shadow-none rounded-0">
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
                                            <h5 className="card-title fs-2">Posts</h5>
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
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card customers-card border border-none shadow-none rounded-0">
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

                                {/* Recent Sales */}
                                <div className="col-12 ">
                                    <div className="card recent-sales overflow-auto mw-100 rounded-0">
                                        <h1 className="card-title fs-2 text-center">User Management</h1>
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
                                        <div className="card-body  shadow-none collapse1">
                                            <table className="table table-borderless datatable ">
                                                <thead className='table-light'>
                                                    <tr className='border-bottom'>
                                                        <th scope="col"> Id </th>
                                                        <th scope="col"> Username </th>
                                                        <th scope="col"> Date&nbsp;Created </th>
                                                        <th scope="col"> Role </th>
                                                        <th scope="col"> Status </th>
                                                        <th scope="col"> Action </th>
                                                        <th scope='col'>Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row"><a href="#">#01</a></td>
                                                        <td><a href="#">roshan34</a></td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td>admin</td>
                                                        <td><span className="badge bg-success rounded-4 ">active</span></td>
                                                        <td className=' action-delete text-danger m-0 p-0 '>
                                                            <div className="form-check form-switch mx-2 fs-5 mt-2">
                                                                <input className="form-check-input shadow-none"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    defaultChecked="checked"
                                                                />
                                                            </div>

                                                        </td>
                                                        <td scope='row' className=''>
                                                            <Link type="button" className="btn btn-light border py-0 rounded-5">view</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row"><a href="#">#02</a></td>
                                                        <td>bhawana999</td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td>student</td>
                                                        <td><span className="badge bg-danger rounded-4 ">offline</span></td>
                                                        <td className=' action-delete text-danger m-0 p-0'>
                                                            <div className="form-check form-switch mx-2 fs-5 mt-1">
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
                                                        <td>kapil09</td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td>acs</td>
                                                        <td><span className="badge bg-success rounded-4 ">active</span></td>
                                                        <td className=' action-delete text-danger m-0 p-0'>
                                                            <div className="form-check form-switch mx-2 fs-5 mt-1">
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
                                                        <th scope='col'>Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row"><a href="#">#01</a></td>
                                                        <td><a href="#" className="text-dark ">Leafrog Co.</a></td>
                                                        <td>Java Developer</td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td><a href="#" className="text-dark ">7</a></td>
                                                        <td className=' action-delete text-danger m-0 p-0'>
                                                            <div className="form-check form-switch mx-2 fs-5">
                                                                <input className="form-check-input shadow-none"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    defaultChecked="checked"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td scope='row' className=''>
                                                            <Link type="button" className="btn btn-light border py-0 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal">view</Link>
                                                        </td>
                                                    </tr>
                                                    {/* Modal */}
                                                    <div className="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-scrollable modal-lg">
                                                            <div className="modal-content rounded-0 border-white">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="exampleModalLabel">Job Title</h5>
                                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    <div className="container px-2">
                                                                        <div className="mb-2 d-flex justify-content-between align-items-center">
                                                                            <div className="position-relative">
                                                                                <span className="position-absolute search"><i className="fa fa-search"></i></span>
                                                                                <input className="form-control w-100" placeholder="Search by name..." />
                                                                            </div>
                                                                        </div>
                                                                        <div className="table-responsive mt-5 ">
                                                                            <table className="table table-responsive table-borderless">
                                                                                <thead className='border-bottom'>
                                                                                    <tr className="bg-light">
                                                                                        <th scope="col" width="10%">S.N</th>
                                                                                        <th scope="col" width="20%">Username</th>
                                                                                        <th scope="col" width="20%">Applied&nbsp;Date</th>
                                                                                        <th scope="col" width="20%">Resume</th>
                                                                                        <th scope="col" width="30%">Email</th>
                                                                                        <th scope="col" className="text-end" width="10%">Action</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>1</td>
                                                                                        <td>@roshan123</td>
                                                                                        <td><i className="fa fa-check-circle-o green"></i><span className="ms-1">{formattedDate.toString()}</span></td>
                                                                                        <td><a href='https://www.africau.edu/images/default/sample.pdf' className='text-success fw-bold'>Resume<span>.pdf</span></a></td>
                                                                                        <td>roshan@gmail.com</td>
                                                                                        <Link type="button" className="btn bg-warning border py-0 mt-1">Profile</Link>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>

                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-primary">Save changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* End Top Selling */}
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto mw-100 rounded-0">
                                        <h1 className="card-title fs-3 text-center">Posts</h1>
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
                                        <div className="card-body  shadow-none collapse1">
                                            <table className="table table-borderless datatable">
                                                <thead className='table-light border-bottom'>
                                                    <tr>
                                                        <th scope="col"> Id </th>
                                                        <th scope="col"> Book&nbsp;Type </th>
                                                        <th scope="col"> Book&nbsp;Name</th>
                                                        <th scope="col"> Posted&nbsp;Date </th>
                                                        <th scope="col"> Status </th>
                                                        <th scope="col"> Action </th>
                                                        <th scope='col'>Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row"><a href="#">#101</a></td>
                                                        <td>Notes</td>
                                                        <td><a href="#" className="text-dark">Digital System</a></td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td><span className="badge bg-danger rounded-4">sold</span></td>
                                                        <td className=' action-delete text-danger m-0 p-0'>
                                                            <div className="form-check form-switch mx-2 fs-5">
                                                                <input className="form-check-input shadow-none"
                                                                    type="checkbox"
                                                                    role="switch"
                                                                    defaultChecked="checked"
                                                                />
                                                            </div>
                                                        </td>
                                                        <td scope='row' className=''>
                                                            <Link type="button" className="btn btn-light border py-0 rounded-5">view</Link>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td scope="row"><a href="#">#101</a></td>
                                                        <td>Notes</td>
                                                        <td><a href="#" className="text-dark">Digital System</a></td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td><span className="badge bg-success rounded-4 ">available</span></td>
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
                                                        <td scope="row"><a href="#">#101</a></td>
                                                        <td>Notes</td>
                                                        <td><a href="#" className="text-dark">Digital System</a></td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td><span className="badge bg-danger rounded-4 ">sold</span></td>
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
                                                        <td scope="row"><a href="#">#101</a></td>
                                                        <td>Notes</td>
                                                        <td><a href="#" className="text-dark">Digital System</a></td>
                                                        <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                        <td><span className="badge bg-success rounded-4 ">available</span></td>
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

export default AdminDashboard