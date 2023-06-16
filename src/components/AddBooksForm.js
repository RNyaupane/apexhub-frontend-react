import React from 'react'

const AddBooksForm = () => {
    
    return (
        <main id="main" className="main ">
            <section className="section dashboard">
                <div className="row bg-light shadow p-3 mb-5 bg-body rounded mt-4 w-lg-75">

                    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container">
                            <div className="row gy-5 gx-4">
                                <h1 className="m-0 p-0 text-center">Post Ad</h1>
                                <hr className="m-2 p-0" />
                                <form className="row g-3">
                                    <div className="col-md-5">
                                        <label htmlFor="jobTitle" className="form-label">Name of the book <span
                                            className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="bookName" required />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputState" className="form-label">Price of the book <span
                                            className="text-danger">*</span></label>
                                        <input type="number" className="form-control" id="bookPrice" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="inputState" className="form-label">Type <span
                                            className="text-danger">*</span></label>
                                        <select id="inputState" className="form-select form-control" >
                                            <option selected disabled>Select</option>
                                            <option>Book</option>
                                            <option>Notes</option>
                                            <option>Other course material</option>
                                        </select>
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="" className="form-label">Author</label>
                                        <input type="text" className="form-control" id="bookAuthor" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="" className="form-label">Quantity</label>
                                        <input type="number" className="form-control" id="bookQuantity" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="" className="form-label">Photo of the book</label>
                                        <input className="form-control" type="file" id="bookPhoto" />
                                    </div>
                                    <div className="text-center mt-5">
                                        <button type="submit" className="btn btn-success rounded-0">Submit</button>
                                        <button type="reset" className="btn btn-dark text-white rounded-0 border border-dark mx-2">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AddBooksForm