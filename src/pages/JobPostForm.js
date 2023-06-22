import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import Nav from '../common/Nav';

const JobPostForm = () => {
    const [companyName, setCompanyName] = useState("");
    const [experienceLevel, setExperienceLevel] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [jobType, setJobType] = useState("");
    const [vacancyNumber, setVacancyNumber] = useState("");
    const [jobNature, setJobNature] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [jobSalary, setJobSalary] = useState("");
    const [companyLogo, setCompanyLogo] = useState("");
    const [aboutCompany, setAboutCompany] = useState("");
    const [aboutJob, setAboutJob] = useState("");
    const [jobResponsibility, setJobResponsibility] = useState("");
    const [jobQualification, setJobQualification] = useState("");
    const [isActive,setIsActive] = useState(true);

    const addProduct = (event) => {
        
        event.preventDefault();
        let productData = {companyName,experienceLevel,jobType, jobTitle, vacancyNumber, jobNature, jobLocation, jobSalary, companyLogo, aboutCompany, aboutJob, jobResponsibility, jobQualification,isActive };
        productData = JSON.stringify(productData);
        console.log(productData);
        // axios.post('http://127.0.0.1:8000/api/acs/jobpost/', productData)
        //     .then(response => console.log(response))
        //     .catch(err => console.log(err))
    }
    return (
        <>
            <Nav />
            <main id="main" className="main ">
                <section className="section dashboard">
                    <div className="row bg-light shadow p-3 mb-5 bg-body rounded mt-4 w-lg-75">

                        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="container">
                                <div className="row gy-5 gx-4">
                                    <h1 className="m-0 p-0 text-center">Post a Job</h1>
                                    <hr className="m-2 p-0" />
                                    <form className="row g-3" onSubmit={addProduct}>
                                        <div className="col-md-4">
                                            <label htmlFor="companyName" className="form-label">Company Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control shadow-none" id="companyName" required onChange={(e) => setCompanyName(e.target.value)} />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="experience" className="form-label">Experience Level <span
                                                className="text-danger">*</span></label>
                                            <select id="experience" className="form-select form-control shadow-none" defaultValue={'Select'} onChange={(e) => setExperienceLevel(e.target.value)}>
                                                <option disabled>Select</option>
                                                <option>Internship</option>
                                                <option>Entry Level</option>
                                                <option>Mid Level</option>
                                                <option>Senior Level</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="jobType" className="form-label">Job Type<span
                                                className="text-danger">*</span></label>
                                            <select id="jobType" className="form-select form-control shadow-none" defaultValue={'Select'} onChange={(e) => setJobType(e.target.value)}>
                                                <option disabled>Select</option>
                                                <option>Onsite</option>
                                                <option>Remote</option>
                                                <option>Hybrid</option>
                                            </select>
                                        </div>
                                        <div className="col-md-5">
                                            <label htmlFor="jobTitle" className="form-label">Job Title <span
                                                className="text-danger">*</span></label>
                                            <input type="text" className="form-control shadow-none" id="jobTitle" required onChange={(e) => setJobTitle(e.target.value)} />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="noumberOfVacancy" className="form-label">No of vacancy <span
                                                className="text-danger">*</span></label>
                                            <input type="number" className="form-control shadow-none" id="noumberOfVacancy" required onChange={(e) => setVacancyNumber(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="jobNature" className="form-label">Job Nature <span
                                                className="text-danger">*</span></label>
                                            <select id="jobNature" className="form-select form-control shadow-none" defaultValue={'Select'} onChange={(e) => setJobNature(e.target.value)}>
                                                <option disabled>Select</option>
                                                <option >Full time</option>
                                                <option>Part time</option>
                                            </select>
                                        </div>
                                        <div className="col-md-5">
                                            <label htmlFor="jobLocation" className="form-label">Location <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control shadow-none" id="jobLocation" required onChange={(e) => setJobLocation(e.target.value)} />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="jobSalary" className="form-label">Salary</label>
                                            <input type="number" className="form-control shadow-none" id="jobSalary" onChange={(e) => setJobSalary(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="companyLogo" className="form-label">Company Logo</label>
                                            <input className="form-control shadow-none" type="file" id="companyLogo" onChange={(e) => setCompanyLogo(e.target.files[0])} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="aboutCompany" className="form-label">About The Company</label>
                                            <textarea type="" className="form-control shadow-none" id="aboutCompany" rows="5" placeholder="Enter company details..." onChange={(e) => setAboutCompany(e.target.value)}></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="aboutJob" className="form-label">About The Job<span className='text-danger'>*</span></label>
                                            <textarea type="" className="form-control shadow-none" id="aboutJob" rows="5" placeholder="Enter job description..." onChange={(e) => setAboutJob(e.target.value)}></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="jobResponsibility" className="form-label">Job Renspobility<span className='text-danger'>*</span></label>
                                            <textarea type="" className="form-control shadow-none" id="jobResponsibility" rows="5" placeholder="Enter company details..." onChange={(e) => setJobResponsibility(e.target.value)}></textarea>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="qualificationAndSkills" className="form-label">Qualifications/Skills<span className='text-danger'>*</span></label>
                                            <textarea type="" className="form-control shadow-none" id="qualificationAndSkills" rows="5" placeholder="Enter job description..." onChange={(e) => setJobQualification(e.target.value)}></textarea>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-success rounded-0 px-3">Submit</button>
                                            <button type="reset" className="btn btn-light border-dark text-dark rounded-0 border border-dark mx-2 px-3">Reset</button>
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

export default JobPostForm