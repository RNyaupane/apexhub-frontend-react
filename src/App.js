import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './common/Nav';
import Acs from './components/Acs.jsx';
import ApexShop from './components/aShop.js'
import AddBooksForm from './components/AddBooksForm';
import ProductDetail from './components/ProductDetail';
import AboutUs from './components/AboutUS';
import ContactUs from './components/ContactUs.js';
import JobDetail from './components/JobDetail';
import Notification from './components/Notification';
import JobPostForm from './components/JobPostForm';
import StudentProfile from './components/StudentProfile';
import Login from './components/Login'
import Register from './components/Register'
import ForgetPassword from './components/ForgetPassword'
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
