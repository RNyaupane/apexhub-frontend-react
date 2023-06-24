import React, { useState } from 'react'
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

        const [isChecked, setIsChecked] = useState(true);

        const handleCheckboxChange = () => {
            setIsChecked(!isChecked);
        };

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
                                                            <th scope="col">Id</th>
                                                            <th scope="col">Username</th>
                                                            <th scope="col">Date Created</th>
                                                            <th scope="col">Role</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className='border '>
                                                            <th scope="row"><a href="#">#01</a></th>
                                                            <td>roshan34</td>
                                                            <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                            <td>admin</td>
                                                            <td><span className="badge bg-success rounded-4 ">active</span></td>
                                                            <td className=' action-delete text-danger m-0 p-0'>
                                                                <button className='btn'><i className="bi bi-trash-fill mx-2 text-danger fs-5 rounded-5"></i></button>
                                                            </td>
                                                        </tr>
                                                        <tr className='border '>
                                                            <th scope="row"><a href="#">#02</a></th>
                                                            <td>bhawana999</td>
                                                            <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                            <td>student</td>
                                                            <td><span className="badge bg-danger rounded-4 ">offline</span></td>
                                                            <td className=' action-delete text-danger m-0 p-0'>
                                                                <button className='btn'><i className="bi bi-trash-fill mx-2 text-danger fs-5 rounded-5"></i></button>
                                                            </td>
                                                        </tr>
                                                        <tr className='border '>
                                                            <th scope="row"><a href="#">#03</a></th>
                                                            <td>kapil09</td>
                                                            <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                            <td>acs</td>
                                                            <td><span className="badge bg-success rounded-4 ">active</span></td>
                                                            <td className=' action-delete text-danger m-0 p-0'>
                                                                <button className='btn'><i className="bi bi-trash-fill mx-2 text-danger fs-5 rounded-5"></i></button>
                                                            </td>
                                                        </tr>
                                                        <tr className='border '>
                                                            <th scope="row"><a href="#">#04</a></th>
                                                            <td>bhawana999</td>
                                                            <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                            <td>external</td>
                                                            <td><span className="badge bg-danger rounded-4 ">offline</span></td>
                                                            <td className=' action-delete text-danger m-0 p-0'>
                                                                <button className='btn'><i className="bi bi-trash-fill mx-2 text-danger fs-5 rounded-5"></i></button>
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
                                                    <thead className='table-light'>
                                                        <tr>
                                                            <th scope="col">Id</th>
                                                            <th scope="col">Company Name</th>
                                                            <th scope='col'>Job Title</th>
                                                            <th scope="col">Posted Date</th>
                                                            <th scope="col">Applied By</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row"><a href="#">#2644</a></th>
                                                            <td><a href="#" className="text-dark ">Ut inventore ipsa voluptas nulla</a></td>
                                                            <td>Java Developer</td>
                                                            <td><a href="#" className="text-dark">{formattedDate.toString()}</a></td>
                                                            <td className="fw-bold">124</td>
                                                            <td className=' action-delete text-danger m-0 p-0'>
                                                                <div class="form-check form-switch mx-2 fs-5">
                                                                    <input className="form-check-input shadow-none"
                                                                        type="checkbox"
                                                                        role="switch"
                                                                        id="flexSwitchCheckDefault"
                                                                        checked={isChecked}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><a href="#">#2644</a></th>
                                                            <td><a href="#" className="text-dark ">Exercitationem similique doloremque</a></td>
                                                            <td>$46</td>
                                                            <td className="fw-bold">98</td>
                                                            <td>$4,508</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><a href="#">#2644</a></th>
                                                            <td><a href="#" className="text-dark ">Doloribus nisi exercitationem</a></td>
                                                            <td>$59</td>
                                                            <td className="fw-bold">74</td>
                                                            <td>$4,366</td>
                                                        </tr>
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
                                                    <thead className='table-light '>
                                                        <tr>
                                                            <th scope="col">Id</th>
                                                            <th scope="col">Customer</th>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row"><a href="#">#2457</a></th>
                                                            <td>Brandon Jacob</td>
                                                            <td><a href="#" className="text-dark">At praesentium minu</a></td>
                                                            <td>$64</td>
                                                            <td><span className="badge bg-success">Approved</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><a href="#">#2147</a></th>
                                                            <td>Bridie Kessler</td>
                                                            <td><a href="#" className="text-dark">Blanditiis dolor omnis similique</a></td>
                                                            <td>$47</td>
                                                            <td><span className="badge bg-warning">Pending</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><a href="#">#2457</a></th>
                                                            <td>Brandon Jacob</td>
                                                            <td><a href="#" className="text-dark">At praesentium minu</a></td>
                                                            <td>$64</td>
                                                            <td><span className="badge bg-success">Approved</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row"><a href="#">#2147</a></th>
                                                            <td>Bridie Kessler</td>
                                                            <td><a href="#" className="text-dark">Blanditiis dolor omnis similique</a></td>
                                                            <td>$47</td>
                                                            <td><span className="badge bg-warning">Pending</span></td>
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