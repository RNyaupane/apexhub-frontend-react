import React from 'react'
import Nav from '../common/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/productDetail.css'

import bookPhoto from '../assets/images/book3.jpg'
import me from '../assets/images/profile-img.jpg'
import baby from '../assets/images/baby.jpg'
import kaps from '../assets/images/kaps.jpg'
import kapsBaby from '../assets/images/me.jpg'
import AhLogo from '../assets/images/AH logo.png'
const ProductDetail = () => {
    return (
        <>
        <Nav/>
        <main id="main" className="main">
            <div className="col-lg-14"></div>
            <div className="row">
                <div className="col-lg-10 col-md-20">
                    <div className="tab-content mt-4">
                        <h2 className="text-center fw-bold">Welcome to A-Shop</h2>
                        <hr />
                        <div className="container bg-light shadow p-3 mb-5 bg-body rounded">
                            <section id="description-section">
                                <div className="row ">
                                    <div className="col-12 col-md-14 border-bottom">
                                        <div className="nav nav-tabs">
                                            <li className="nav-item lead">
                                                <h1 className="fw-bold lead p-2 ">Description</h1>
                                            </li>
                                        </div>
                                        <div className="container p-2 lead">
                                            <div className="col-md-4 p-3 border-bottom float-end ">
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <div className="ratings d-flex">
                                                        <i className="bi bi-star-fill rating-color fs-4"></i>
                                                        <i className="bi bi-star-fill rating-color fs-4"></i>
                                                        <i className="bi bi-star-fill rating-color fs-4"></i>
                                                        <i className="bi bi-star-fill rating-color fs-4"></i>
                                                        <i className="bi bi-star rating-color fs-4"></i>
                                                    </div>
                                                    <a href='#' className="review-count text-decoration-none fs-6 fw-bold text-secondary">(12&nbsp;Reviews)</a>
                                                </div>
                                                {/* <div> */}
                                                <img src={bookPhoto} alt="GOG" className="img-fluid rounded float-end img-thumbnail " />
                                                
                                            </div>
                                            <div className="row p-2">
                                                <div className="col-auto col-sm-5">Price</div>
                                                <div className="col-auto text-end">:</div>
                                                <div className="col-auto">$500</div>
                                            </div>
                                            <div className="row p-2">
                                                <div className="col-auto col-sm-5">Name</div>
                                                <div className="col-auto text-end">:</div>
                                                <div className="col-auto text-truncate">
                                                    Guardian of the Galaxy Vol.3
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <div className="col-auto col-sm-5">Type</div>
                                                <div className="col-auto text-end">:</div>
                                                <div className="col-auto">Book</div>
                                            </div>
                                            <div className="row p-2">
                                                <div className="col-auto col-sm-5">Author</div>
                                                <div className="col-auto text-end">:</div>
                                                <div className="col-auto">
                                                    Elon Musk
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <div className="col-auto col-sm-5">Ads Posted</div>
                                                <div className="col-auto text-end">:</div>
                                                <div className="col-auto">
                                                    2 days Ago
                                                </div>
                                            </div>
                                            <div className="row p-2">
                                                <div className="col-auto col-sm-5">Stock</div>
                                                <div className="col-auto text-end">:</div>
                                                <div className="col-auto">4</div>
                                            </div>
                                        </div>
                                        <div className="d-flex p-2 m-1 justify-content-center">
                                            <button type="button" className="btn btn-success">
                                                Buy Now
                                            </button>
                                            <button type="button" className="btn btn-outline-dark mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                Rate this Product
                                            </button>
                                        </div>

                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Rate the product</h1>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="rate bg-light border py-3 text-white mt-3">
                                                            <h6 className="mb-0 text-dark text-center">Select Star</h6>
                                                            <div className="rating">
                                                                <input type="radio" name="rating" value="5" id="5" />
                                                                <label htmlFor="5">☆</label>
                                                                <input type="radio" name="rating" value="4" id="4" />
                                                                <label htmlFor="4">☆</label>
                                                                <input type="radio" name="rating" value="3" id="3" />
                                                                <label htmlFor="3">☆</label>
                                                                <input type="radio" name="rating" value="2" id="2" />
                                                                <label htmlFor="2">☆</label>
                                                                <input type="radio" name="rating" value="1" id="1" />
                                                                <label htmlFor="1">☆</label>
                                                            </div>
                                                            <div className="buttons px-4 mt-0">
                                                                <button className="btn btn-warning btn-block rating-submit fs-5" data-bs-dismiss="modal">Submit</button>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary">Save changes</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* <!-- comment section starts  --> */}
                            <section id="comment-section">
                                <div className="container bg-light  p-3 mb-5 bg-body rounded">
                                    <div className="row no-gutters">
                                        <div className="col-12col-md-12">
                                            <div className="nav nav-tabs">
                                                <li className="nav-item lead">
                                                    <a className="nav-link text-dark fw-bold" aria-current="page" href="#comment-section">Comments</a>
                                                </li>
                                            </div>
                                            <div className="row p-1">
                                                <div className="col p-1">
                                                    <div className="d-flex flex-start p-2 shadow mb-2 bg-body rounded">
                                                        <img className="rounded-circle shadow-1-strong me-3 flex-shrink-0 "
                                                            src={kapsBaby} alt="avatar" width="65" height="65" />
                                                        <div className="flex-grow-1 flex-shrink-1 p-2 rounded">
                                                            <div>
                                                                <div className="d-flex justify-content-between align-items-center ">
                                                                    <p className="mb-1">
                                                                        <span className="fw-bold">Sabita Shrestha</span>
                                                                        <span className="small">- 2 hours ago</span>
                                                                    </p>
                                                                </div>
                                                                <p className="small mb-0">
                                                                    It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-start p-2 shadow mb-2 bg-body rounded">
                                                        <img className="rounded-circle shadow-1-strong me-3 flex-shrink-0"
                                                            src={kaps} alt="avatar" width="65" height="65" />
                                                        <div className="flex-grow-1 flex-shrink-1 p-2 rounded">
                                                            <div>
                                                                <div className="d-flex justify-content-between align-items-center ">
                                                                    <p className="mb-1">
                                                                        <span className="fw-bold">Kapil Bhandari</span>
                                                                        <span className="small">- 2 min. ago</span>
                                                                    </p>
                                                                </div>
                                                                <p className="small mb-0">
                                                                    It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-start p-2 shadow mb-2 bg-body rounded">
                                                        <img className="rounded-circle shadow-1-strong me-3 flex-shrink-0 "
                                                            src={baby} alt="avatar" width="65" height="65" />
                                                        <div className="flex-grow-1 flex-shrink-1 p-2 rounded">
                                                            <div>
                                                                <div className="d-flex justify-content-between align-items-center ">
                                                                    <p className="mb-1">
                                                                        <span className="fw-bold">Bhawana Shrestha</span>
                                                                        <span className="small">- 10 hours ago</span>
                                                                    </p>
                                                                </div>
                                                                <p className="small mb-0">
                                                                    It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-start p-2 shadow mb-2 bg-body rounded">
                                                        <img className="rounded-circle shadow-1-strong me-3 flex-shrink-0  "
                                                            src={me} alt="avatar" width="65" height="65" />
                                                        <div className="flex-grow-1 flex-shrink-1 p-2 rounded">
                                                            <div>
                                                                <div className="d-flex justify-content-between align-items-center ">
                                                                    <p className="mb-1">
                                                                        <span className="fw-bold">Roshan Nyaupane</span>
                                                                        <span className="small">- 10 min. ago</span>
                                                                    </p>
                                                                </div>
                                                                <p className="small mb-0">
                                                                    It is a long established fact that a reader will be distracted by the readable content
                                                                    of a page.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-start p-3 shadow mb-2 bg-body rounded">
                                                        <img className="rounded-circle shadow-1-strong me-3 flex-shrink-0 img-fluid position-absolute"
                                                            src={AhLogo} alt="avatar" width="65px" height="55px" />
                                                        <div className="flex-grow-1 flex-shrink-1 p-2 mx-5 rounded">
                                                            <div className="input-group" style={{marginLeft:'30px'}}>
                                                                <textarea className="form-control shadow-none shadow-none" id="textAreaExample" rows="2"
                                                                    placeholder="Write a comment" row='2'></textarea>
                                                                <button className="btn btn-white border border-1" type="button" title="Send">
                                                                    <i className="bi bi-send text-success"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default ProductDetail