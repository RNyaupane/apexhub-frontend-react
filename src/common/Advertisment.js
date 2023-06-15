import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/style.css'

const Advertisment = () => {
    return (
        < div className="col-lg-4 mt-4" >
            < div className="card" id="ads-card" >
                <div className="card-body pb-0">
                    <h5 className="card-title">Advertisment goes here</h5>
                    <div id="budgetChart" style={{ minHeight: 200 }} className="echart"></div>
                </div>
            </div >
        </div >
    )
}

export default Advertisment