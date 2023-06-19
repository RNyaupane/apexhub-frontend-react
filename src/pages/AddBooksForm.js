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
                                        <label htmlFor="bookName" className="form-label">Name of the book <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control shadow-none" id="bookName" required />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="bookPrice" className="form-label">Price of the book <span className="text-danger">*</span></label>
                                        <input type="number" className="form-control shadow-none" id="bookPrice" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="selectBookCategory" className="form-label">Book Type <span className="text-danger">*</span></label>
                                        <select id="selectBookCategory" className="form-select form-control shadow-none" defaultValue={"Select"}>
                                            <option disabled>Select</option>
                                            <option>All</option>
                                            <option>Books</option>
                                            <option>Notes</option>
                                            <option>Solution</option>
                                            <option>Other Material</option>
                                        </select>
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="bookAuthor" className="form-label">Author</label>
                                        <input type="text" className="form-control shadow-none" id="bookAuthor" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="bookQuantity" className="form-label">Quantity</label>
                                        <input type="number" className="form-control shadow-none" id="bookQuantity" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="bookPhoto" className="form-label">Photo of the book</label>
                                        <input className="form-control shadow-none" type="file" id="bookPhoto" />
                                    </div>
                                    <div className="text-center mt-5">
                                        <button type="submit" className="btn btn-success">Submit</button>
                                        <button type="reset" className="btn btn-light border-dark text-dark mx-2">Reset</button>
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