import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/aShop.css'
import '../styles/style.css'

import bookPhoto from '../assets/images/book3.jpg'
import { bookData } from '../assets/images/Data';
const aShop = () => {
  return (
    <main id="main" className="main">
    <section className="section dashboard mt-4 bg-white shadow-lg">
      <div className="row m-0 p-0">
        <div className=" my-2 py-3 px-4 ">
          <button className="btn btn-gray border dropdown-toggle rounded-0 bg-white" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Select Category
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li><button className="dropdown-item" type="button">Text Book</button></li>
            <li><hr className="dropdown-divider"/></li>
            <li><button className="dropdown-item" type="button">Notes</button></li>
            <li><hr className="dropdown-divider"/></li>
            <li><button className="dropdown-item" type="button">Novels</button></li>
            <li><hr className="dropdown-divider"/></li>
            <li><button className="dropdown-item" type="button">Story</button></li>
          </ul>

          <Link to={'/addBooksForm'} type="button" className="btn mx-2 px-4 rounded-0 text-white" style={{backgroundColor:'#2b2b2be6'}}>
            <i className="bi bi-plus-circle"></i> Add<span className='d-none d-sm-inline d-md-inline d-lg-inline'> Item</span></Link>
        </div>
        
        <div className="col-lg-12">
          <div className="row px-3">
            {bookData.map((props) => (
              <div className=" col-lg-5 col-md-5 card dark m-1 rounded-2 productCard">
                <img src={props.bookimageurl} className="card-img-top border border-1 rounded-0 imagess"
                  alt="..."/>
                <div className="card-body shadow-none ">
                  <div className="text-section ">
                    <a className="h4 text-decoration-none product-category">{props.bookcategory}</a>
                    <p className="card-text m-0 fs-6 text-dark fs-5"><span className="fs-5"></span>{props.bookname}</p>
                    <p className="card-text position-absolute bottom-0 posted-time pb-3 ">(28 min ago)</p>
                  </div>
                  <div className="cta-section">
                    <div className=" fw-bold fs-5 pt-2" style={{color:'#000000'}}>{props.price}</div>
                    <Link to="/productDetail" className="btn btn-success my-2 border-none px-4 "> View </Link> 
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
  )
}

export default aShop