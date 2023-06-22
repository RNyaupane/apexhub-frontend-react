import React from 'react'
import '../styles/style.css'
import '../styles/aboutUs.css'
import Nav from '../common/Nav';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import ApexBuildingPhoto from '../assets/images/apexCollegeBuildingPhoto.png'

const AboutUS = () => {
  return (
    <>
    <Nav/>
    <main id="main" className="main">
    {/* <!-- Feature Section --> */}
    <section id="about" className="about bg-white mt-4 shadow-sm">
      <div className="container">
        <div className="section-title">
          <h2 className="fw-bold">About Us</h2>
          <hr className="mb-4" />
        </div>
        <div className="row">
          <div className="image col-lg-6 rounded-start" style={{backgroundImage: `url(${ApexBuildingPhoto})`}}>
          </div>
          <div className="col-lg-6 p-3">
            {/* <!-- <h1 className="text-dark fw-semibold">APEX-HUB</h1> -->
            <!-- <p  align= "justify" className="text-dark lead">
              Welcome to ApexHub, your one-stop shop for innovative employment
              portal experiences in addition to e-commerce. By including the
              ACS (ApexHub Career Services) department, which is dedicated to
              evaluating job advertisements by organizations and assisting
              student placements, ApexHub goes beyond ordinary internet
              shopping.
            </p> --> */}
            <p align="justify" className="text-dark lead p-3 pt-0" id="aboutUs">
              ApexHub is a dynamic platform that offers both e-commerce and a
              comprehensive job portal experience. We provide a secure and
              user-friendly environment for online shopping, where buyers and
              sellers can connect and transact with ease. Additionally, our
              unique ACS department ensures that job postings are verified,
              and students have access to exclusive job opportunities. ApexHub
              is where convenience meets career advancement, offering a
              seamless blend of shopping and job hunting in one platform.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 p-3">
            {/* <!-- <h1 className="text-dark fw-semibold">APEX-HUB</h1> --> */}
            <p align="justify" className="text-dark lead p-3 pt-5" id="aboutUs1">
              <span className="fw-bold">For students</span>, ApexHub is not just a job portal, but a gateway to
              future success. Our platform empowers you to showcase your
              skills, qualifications, and achievements, making it easier for
              employers to discover your potential. The ACS department
              provides personalized guidance, ensuring you have the best
              chances of securing your dream job.Additionally, our
              unique ACS department ensures that job postings are verified,
              and students have access to exclusive job opportunities. ApexHub
              is where convenience meets career advancement, offering a
              seamless blend of shopping and job hunting in one platform.
            </p>
          </div>
          <div className="image col-lg-6 rounded-end" style={{backgroundImage: `url(${ApexBuildingPhoto})`}}>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- ======= Services Section ======= --> */}
    <section id="services" className="services bg-white mt-0 shadow-sm">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2 className="fw-bold px-3 pt-5">Our Services</h2>
          <hr className="mb-4" />
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-2" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon d-flex mb-3 justify-content-center">
                <i className="bi bi-pin-map-fill py-1 text-white fs-1"></i>
              </div>
              <h4><a className='text-decoration-none'>Exclusive Student Placements</a></h4>
              <p className="text-center">
                In addition to external job postings, ApexHub's ACS department
                occasionally shares exclusive job openings specifically
                curated for students. This service provides a direct pathway
                for students to access exciting job prospects that align with
                their skills and aspirations.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 mb-2" data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box">
              <div className="icon d-flex mb-3 justify-content-center">
                <i className="bi bi-credit-card-2-back-fill py-1 text-white fs-1"></i>
              </div>
              <h4><a className='text-decoration-none'>Seamless Consumer-to-Consumer Payments</a></h4>
              <p className="text-center">
                ApexHub ensures secure and seamless payment transactions
                between buyers and sellers. This service provides peace of
                mind for both parties, offering trusted payment gateways and
                encryption methods to protect sensitive financial information
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 mb-2" data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box jus">
              <div className="icon d-flex mb-3 justify-content-center">
                <i className="bi bi-briefcase-fill py-1 text-white fs-1"></i>
              </div>
              <h4>
                <a className='text-decoration-none'>Verified Job <br />
                  Opportunities</a>
              </h4>
              <p className="text-center">
                ApexHub's ACS department verifies all job postings by external
                companies, ensuring that job seekers have access to legitimate
                and reliable opportunities. This service instills trust and
                confidence in job seekers, knowing that the job listings they
                encounter on ApexHub are thoroughly vetted.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 mb-2" data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box">
              <div className="icon d-flex mb-3 justify-content-center">
                <i className="bi bi-app-indicator py-1 text-white fs-1"></i>
              </div>
              <h4><a className='text-decoration-none'>Customized Job Alerts</a></h4>
              <p className="text-center">
                ApexHub offers a customized job alert system that notifies job
                seekers about relevant job openings based on their
                preferences, industry, and desired locations. This service
                keeps job seekers updated with the latest opportunities and
                saves them time in their job search process.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 mb-2" data-aos="zoom-in"
            data-aos-delay="200">
            <div className="icon-box">
              <div className="icon d-flex mb-3 justify-content-center">
                <i className="bi bi-person-fill-up py-1 text-white fs-1"></i>
              </div>
              <h4><a className='text-decoration-none'>Job Seeker Profile Boosting</a></h4>
              <p className="text-center">
                ApexHub offers a feature that allows job seekers to boost
                their profiles, increasing visibility and attracting the
                attention of employers. This service gives job seekers an edge
                by highlighting their skills and qualifications to stand out
                in a competitive job market.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 mb-2" data-aos="zoom-in"
            data-aos-delay="300">
            <div className="icon-box">
              <div className="icon d-flex mb-3 justify-content-center">
                <i className="bi bi-file-earmark-lock py-1 text-white fs-1"></i>
              </div>
              <h4><a className='text-decoration-none'>Secure Product Storage</a></h4>
              <p>
                ApexHub's unique storage feature allows individuals to
                securely store their products. This service eliminates the
                need for additional storage facilities and reduces overhead
                costs for sellers. It provides convenience and peace of mind,
                ensuring that sellers' inventory is safe and easily
                accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  </>
  )
}

export default AboutUS