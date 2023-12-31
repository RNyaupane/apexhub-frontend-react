import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from '../common/Nav';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/aShop.css'
import '../styles/style.css'

import { bookData } from '../data/Data';

const ApexShop = () => {
  const [bookDataItem, setBookDataItem] = useState(bookData)
  // useEffect(()=>{
  //   let result = axios.get("http://localhost:8000/api/ashop/categorys/");
  //   setBookData(result)
  // },[])

  const filterBookDataItem = (bookcategory) => {
    const filteredBookDataItems = bookData.filter((currentElement) => {
      return currentElement.bookcategory === bookcategory;
    })
    setBookDataItem(filteredBookDataItems);
  }
  return (
    <>
      <Nav bookData={bookData} />
      <main id="main" className="main">
        <section className="section dashboard mt-4 bg-white">
          <div className="row m-0 p-0">
            <div className=" my-2 py-3 px-4 ">
              <Link to={'/addBooksForm'} type="button" className="btn btn-success mx-0 px-5 py-2  rounded-0 rounded-end fw-bold ">
                <i className="bi bi-plus-circle-fill"></i> Add<span className='d-none d-sm-inline d-md-inline d-lg-inline'> Item</span>
              </Link>
              <button className="btn btn-gray border dropdown-toggle rounded-0 bg-white py-2 px-4 mx-3 fw-3 fs-5 float-end me-0" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                <span className='d-none d-sm-inline d-md-inline d-lg-inline'> Select</span> Category
              </button>
              <ul className="dropdown-menu bg-light rounded-0 px-3" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item fs-5 py-0" type="button" onClick={() => setBookDataItem(bookData)}>All</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item fs-5 py-0" type="button" onClick={() => filterBookDataItem("Book")}>Book</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item fs-5 py-0" type="button" onClick={() => filterBookDataItem("Notes")}>Notes</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item fs-5 py-0" type="button" onClick={() => filterBookDataItem("Solution")}>Solution</button></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item fs-5 py-0" type="button" onClick={() => filterBookDataItem("Other Material")}>Other Material</button></li>
              </ul>
            </div>

            {/* Book Card */}
            <div className="col-lg-12">
              <div className="row px-3 ">
                {bookDataItem.map((props) => {
                  const { id, bookcategory, bookimageurl, bookname, price } = props;
                  return (
                    <div className=" d-flex flex-row col-lg-5 col-md-5 border card dark m-1 rounded-0 productCard" key={id}>
                      <img src={bookimageurl} className="card-img-top  rounded-0 imagess"
                        alt="..." />
                      <div className="card-body shadow-none ">
                        <div className="text-section ">
                          <a className="h4 text-decoration-none product-category">{bookname}</a>
                          <p className="card-text m-0 fs-6 text-dark fs-5"><span className="fs-5"></span>{bookcategory}</p>
                          <p className="card-text position-absolute bottom-0 posted-time pb-3 ">(28 min ago)</p>
                        </div>
                        <div className="cta-section">
                          <div className=" fw-bold fs-5 pt-2" style={{ color: '#000000' }}>{price}</div>
                          <Link to="/productDetail" className="btn btn-success my-2 border-none px-4 "> View </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ApexShop