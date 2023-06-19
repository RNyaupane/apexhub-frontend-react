import React from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const JobPostForm = () => {

  return (
    <main id="main" className="main ">
        <section className="section dashboard">
            <div className="row bg-light shadow p-3 mb-5 bg-body rounded mt-4 w-lg-75">

                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row gy-5 gx-4">
                            <h1 className="m-0 p-0 text-center">Post a Job</h1>
                            <hr className="m-2 p-0"/>
                            <form className="row g-3">
                                <div className="col-md-5">
                                    <label htmlFor="jobTitle" className="form-label">Job Title <span
                                            className="text-danger">*</span></label>
                                    <input type="text" className="form-control shadow-none" id="jobTitle" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="noumberOfVacancy" className="form-label">No of vacancy <span
                                            className="text-danger">*</span></label>
                                    <input type="number" className="form-control shadow-none" id="noumberOfVacancy" required />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputState" className="form-label">Job Type <span
                                            className="text-danger">*</span></label>
                                    <select id="inputState" className="form-select form-control shadow-none" defaultValue={'Select'}>
                                        <option disabled>Select</option>
                                        <option className='HHHHH'>Full time</option>
                                        <option>Part time</option>
                                    </select>
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="jobLocation" className="form-label">Location <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control shadow-none" id="jobLocation" required />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="jobSalary" className="form-label">Salary</label>
                                    <input type="number" className="form-control shadow-none" id="jobSalary" />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="companyLogo" className="form-label">Company Logo</label>
                                    <input className="form-control shadow-none" type="file" id="companyLogo"  />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="aboutCompany" className="form-label">About The Company</label>
                                    <textarea type="" className="form-control shadow-none" id="aboutCompany" rows="5" placeholder="Enter company details..."></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="aboutJob" className="form-label">About The Job<span className='text-danger'>*</span></label>
                                    <textarea type="" className="form-control shadow-none" id="aboutJob" rows="5" placeholder="Enter job description..."></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="jobResponsibility" className="form-label">Job Renspobility<span className='text-danger'>*</span></label>
                                    <textarea type="" className="form-control shadow-none" id="jobResponsibility" rows="5" placeholder="Enter company details..."></textarea>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="qualificationAndSkills" className="form-label">Qualifications/Skills<span className='text-danger'>*</span></label>
                                    <textarea type="" className="form-control shadow-none" id="qualificationAndSkills" rows="5" placeholder="Enter job description..."></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-success rounded-0">Submit</button>
                                    <button type="reset" className="btn btn-light border-dark text-dark rounded-0 border border-dark mx-2">Reset</button>
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

export default JobPostForm