import React, { useState } from 'react'
import Nav from '../common/Nav';
import axios from 'axios'

const AddBooksForm = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productType, setProductType] = useState("");
    const [productAuthor, setProductAuthor] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPhoto, setProductPhoto] = useState("");

    const addProduct =(event)=>{
        event.preventDefault();
        let productData = {productName,productPrice,productType,productAuthor,productQuantity,productPhoto};
        productData = JSON.stringify(productData);

        console.log(productData);
        axios
        .post('http://127.0.0.1:8000/api/ashop/products/', productData)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
   
    const options = ['All', 'Book', 'Notes', 'Solution', 'Other Material'];

    return (
        <>
        <Nav/>
        <main id="main" className="main ">
            <section className="section dashboard">
                <div className="row bg-light shadow p-3 mb-5 bg-body rounded mt-4 w-lg-75">
                    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container">
                            <div className="row gy-5 gx-4">
                                <h1 className="m-0 p-0 text-center">Post Ad</h1>
                                <hr className="m-2 p-0" />
                                <form className="row g-3" >
                                    <div className="col-md-5">
                                        <label htmlFor="bookName" className="form-label">Name of the book <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control shadow-none" onChange={(e)=>setProductName(e.target.value)} name='bookName' id="bookName" required />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="bookPrice" className="form-label">Price of the book <span className="text-danger">*</span></label>
                                        <input type="number" className="form-control shadow-none" onChange={(e)=>setProductPrice(e.target.value)} name='bookPrice' id="bookPrice" required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="selectBookCategory" className="form-label">Book Type <span className="text-danger">*</span></label>
                                        <select id="selectBookCategory" name='bookType' onChange={(e)=>setProductType(e.target.value)} className="form-select form-control shadow-none" defaultValue={"Select"}>
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
                                        <input type="text" name='bookAuthor' onChange={(e)=>setProductAuthor(e.target.value)} className="form-control shadow-none" id="bookAuthor" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="bookQuantity" className="form-label">Quantity</label>
                                        <input type="number" name='bookQuantity' onChange={(e)=>setProductQuantity(e.target.value)} className="form-control shadow-none" id="bookQuantity" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="bookPhoto" className="form-label">Photo of the book</label>
                                        <input className="form-control shadow-none" onChange={(e)=>setProductPhoto(e.target.files[0])} name='bookPhoto' type="file" id="bookPhoto" />
                                    </div>
                                    <div className="text-center mt-5">
                                        <button type="button" className="btn btn-success" onClick={addProduct}>Submit</button>
                                        <button type="reset" className="btn btn-light border-dark text-dark mx-2">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default AddBooksForm