import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({bookData}) => {
  const[bookDataItem,setBookDataItem] = useState(bookData)
  return (
    <>
    {bookDataItem.map((props) => {
        const {id, bookcategory, bookimageurl, bookname, price} = props;
        return(
            <div className=" d-flex flex-row col-lg-5 col-md-5 border card dark m-1 rounded-0 productCard" key={id}>
            <img src={bookimageurl} className="card-img-top  rounded-0 imagess"
                alt="..."/>
            <div className="card-body shadow-none ">
                <div className="text-section ">
                <a className="h4 text-decoration-none product-category">{bookname}</a>
                <p className="card-text m-0 fs-6 text-dark fs-5"><span className="fs-5"></span>{bookcategory}</p>
                <p className="card-text position-absolute bottom-0 posted-time pb-3 ">(28 min ago)</p>
                </div>
                <div className="cta-section">
                <div className=" fw-bold fs-5 pt-2" style={{color:'#000000'}}>{price}</div>
                <Link to="/productDetail" className="btn btn-success my-2 border-none px-4 "> View </Link> 
                </div>
            </div>
            </div>
        )
    })}
    </>
  )
}

export default BookCard