import React from 'react'
import Nav from '../common/Nav';
import '../styles/studentProfile.css'
import '../styles/style.css'
import '../main.js'
import ProfileStudent from './profile/student/StudentProfile'
import ProfileExternal from './profile/external/ExternalProfile';
import ProfileAcs from './profile/acs/AcsProfile'
import me from '../assets/images/me.jpg'
const StudentProfile = () => {
  return (
    <>
    <Nav/>
    <main id="main" className="main">
      <section className="section profile mt-4">
        <div className="row bg-white">
          <div className="col-xl-4 col-sm-8">
            <div className="card shadow-none border-none">
              <div className="card-body border-none shadow-none profile-card pt-4 d-flex flex-column align-items-center">
                <img src={me} alt="Profile" className="rounded-circle mb-3" />
                <h2 className="mb-2">Sabita Shrestha</h2>
                <p>Frontend Developer</p>
                <div className="row d-inline mt-2">
                  <div className="d-inline p-0 m-0 ">Member Since:</div>
                  <div className="d-inline p-0 m-0 fw-bold">03/05/2001</div>
                </div>
                <div className="d-grid gap-2 d-md-block my-4">
                  <button className="btn btn-success border border-2 mx-2" type="button ">Update Photo</button>
                  <button className="btn btn-light border border-dark " type="button">Dashboard</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 border border-1 rounded-1 sm p-3">
            <ProfileStudent />
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default StudentProfile