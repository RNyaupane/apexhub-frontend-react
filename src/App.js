import React from 'react'
import {  Route, Routes } from 'react-router-dom';
import Nav from './common/Nav';
import Acs from './pages/Acs.jsx';
import ApexShop from './pages/ApexShop.js'
import AddBooksForm from './pages/AddBooksForm';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUS';
import ContactUs from './pages/ContactUs.js';
import JobDetail from './pages/JobDetail';
import Notification from './pages/Notification';
import JobPostForm from './pages/JobPostForm';
import StudentProfile from './pages/StudentProfile';
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import 'jquery';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Acs />} />
        <Route path='/apexShop' element={<ApexShop />} />
        <Route path='/addBooksForm' element={<AddBooksForm />} />
        <Route path='/productDetail' element={<ProductDetail />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/jobDetail' element={<JobDetail />} />
        <Route path='/jobPostForm' element={<JobPostForm />} />
        <Route path='/studentProfile' element={<StudentProfile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetPassword' element={<ForgetPassword />} />
      </Routes>
      </>
  )
}

export default App
