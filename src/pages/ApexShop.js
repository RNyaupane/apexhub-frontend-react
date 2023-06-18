import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/aShop.css'
import '../styles/style.css'

import { bookData } from '../data/Data';

const ApexShop = () => {
  const [bookDataItem, setBookDataItem] = useState(bookData);

  const filterBookDataItem = (bookcategory) => {
    const filteredBookDataItems = bookData.filter((currentElement) => {
      return currentElement.bookcategory === bookcategory;
    })
    setBookDataItem(filteredBookDataItems);
  }
  return (
    <>
      <main id="main" className="main">
        <section className="section dashboard mt-4 bg-white">
          <div className="row m-0 p-0">
            <div className=" my-2 py-3 px-4 ">
              <Link to={'/addBooksForm'} type="button" className="btn btn-success mx-0 px-4 py-2  rounded-0 rounded-end fw-bold ">
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
            <div className="col-lg-12">
              <div className="row px-3 ">
                <BookCard bookDataItem={bookDataItem} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ApexShop