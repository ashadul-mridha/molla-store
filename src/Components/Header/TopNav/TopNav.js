/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './TopNav.css';

const TopNav = () => {
    return (
        <div className='container dasktop-menu'>
            <div className='row align-items-center'>
                <div className='col-md-3 col-6 col-sm-6 header-category'>
                    <div className='category'>
                        <i class="fas fa-bars icon-bar"></i>
                        <i class="fas fa-times icon-times"></i>
                        <span>Browse Categories</span>
                        <ul>
                            <li>Electronic</li>
                            <li>Cosmetics</li>
                            <li>Shirt</li>
                            <li>Pant</li>
                            <li>shoes</li>
                            <li>Furniture</li>
                            <li>Glass</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6 col-6 col-sm-6'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link text-dark pe-4" aria-current="page">Home</a>
                                </li>
                                <li class="nav-item dropdown dropdown-mega position-static">
                                    <a class="nav-link dropdown-toggle text-dark pe-4" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Shop</a>
                                    <div class="dropdown-menu shadow">
                                    <div class="mega-content px-4">
                                        <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-12 col-md-4 py-4">
                                                <p>Shop With Sidebar</p>
                                                <div class="list-group">
                                                    <a class="list-group-item" href="#">Default</a>
                                                    <a class="list-group-item" href="#">Slack</a>
                                                    <a class="list-group-item" href="#">Sticky</a>
                                                    <a class="list-group-item" href="#">Discord</a>
                                                    <a class="list-group-item" href="#">Fb</a>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-4 py-4">
                                                <p>Product category</p>
                                                <div class="list-group">
                                                    <a class="list-group-item" href="#">Default</a>
                                                    <a class="list-group-item" href="#">Slack</a>
                                                    <a class="list-group-item" href="#">Sticky</a>
                                                    <a class="list-group-item" href="#">Discord</a>
                                                    <a class="list-group-item" href="#">Fb</a>
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-4'>
                                                <img src='https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='' className='img-fluid'/>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark pe-4">Blog</a>
                                </li>
                                <li class="nav-item dropdown dropdown-mega position-static">
                                <a class="nav-link dropdown-toggle text-dark pe-4" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside">Product</a>
                                <div class="dropdown-menu shadow">
                                <div class="mega-content px-4">
                                    <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-12 col-md-6 py-4">
                                            <p>Product Details</p>
                                            <div class="list-group">
                                                <a class="list-group-item" href="#">Default</a>
                                                <a class="list-group-item" href="#">Slack</a>
                                                <a class="list-group-item" href="#">Sticky</a>
                                                <a class="list-group-item" href="#">Discord</a>
                                                <a class="list-group-item" href="#">Fb</a>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-6'>
                                            <img src='https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3BwaW5nJTIwb25saW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' className='img-fluid'/>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark pe-4">Element</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='col-md-3 d-none d-sm-none d-md-block'>
                    <div className='d-flex justify-content-end'>
                        <i class="far fa-lightbulb me-3"></i>
                        <p>Clearance <strong>Up to 30% Off</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;