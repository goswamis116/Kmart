import React from 'react'
import { Navlink } from 'react-router-dom';


const Navbar=()=>{
  return (
     <div>
        <nav class="navbar navbar-expand-lg bg-light bg-white py-3 shadow-sm">
      <div class="container">
    <a class="navbar-brand fw-bold fs-4" href="/">K-Mart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        
      </ul>
     <div className="buttons">
        <a href="/login" className='btn btn-outline-primary'>login
        <i className='fa fa-sign-in me1'></i></a>
        <a href="/register" className='btn btn-outline-primary ms-2'>Register
        </a>
        <a href="/cart" className='btn btn-outline-primary ms-2'>Cart(0)
        <i className='fa fa-shopping-cart'></i></a>
     </div>
    </div>
  </div>
 </nav>
 </div>
 )
 }
 export default Navbar;

