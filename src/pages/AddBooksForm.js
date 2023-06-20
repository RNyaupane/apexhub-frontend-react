import React, { useState } from 'react'
import axios from 'axios'

const AddBooksForm = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productType, setProductType] = useState("");


    const bookFormSubmitHandler = (event) =>{
        event.preventDefault();
        const selectedBookName = event.target.bookName.value;
        const selectedBookPrice = event.target.bookPrice.value;
        const selectedBookType = event.target.bookType.value;
        const selectedBookAuthor = event.target.bookAuthor.value;
        const selectedBookQuantity = event.target.bookQuantity.value;
        // const selectedBookPhoto = event.target.bookPhoto.files[0];

        console.log(selectedBookQuantity)

        // axios.post("",{selectedBookName,selectedBookPrice,selectedBookType,selectedBookAuthor,selectedBookQuantity})
        // .then((Response) => {
        //     console.log(Response)
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })
    }

    const options = ['All', 'Book', 'Notes', 'Solution', 'Other Material'];

    return (
        <main id="main" className="main ">
            <section className="section dashboard">
                <div className="row bg-light shadow p-3 mb-5 bg-body rounded mt-4 w-lg-75">
                    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container">
                            <div className="row gy-5 gx-4">
                                <h1 className="m-0 p-0 text-center">Post Ad</h1>
                                <hr className="m-2 p-0" />
                                <form className="row g-3" onSubmit={bookFormSubmitHandler}>
                                    <div className="col-md-5">
                                        <label htmlFor="bookName" className="form-label">Name of the book <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control shadow-none" name='bookName' id="bookName" required />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="bookPrice" className="form-label">Price of the book <span className="text-danger">*</span></label>
                                        <input type="number" className="form-control shadow-none" name='bookPrice' id="bookPrice" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="selectBookCategory" className="form-label">Book Type <span className="text-danger">*</span></label>
                                        <select id="selectBookCategory" name='bookType' className="form-select form-control shadow-none" defaultValue={"Select"}>
                                            <option disabled>Select</option>
                                            {options.map((option, index)=>{
                                                return(
                                                    <option key={index}>
                                                        {option}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="bookAuthor" className="form-label">Author</label>
                                        <input type="text" name='bookAuthor' className="form-control shadow-none" id="bookAuthor" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="bookQuantity" className="form-label">Quantity</label>
                                        <input type="number" name='bookQuantity' className="form-control shadow-none" id="bookQuantity" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="bookPhoto" className="form-label">Photo of the book</label>
                                        <input className="form-control shadow-none" name='bookPhoto' type="file" id="bookPhoto" />
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