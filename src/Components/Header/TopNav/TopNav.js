import React from 'react';
import './TopNav.css';

const TopNav = () => {
    return (
        <div className='container border-top dasktop-menu'>

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

            <div>
                <nav>
                    <ul className='list-unstyled'>
                        <li>Home <i class="fas fa-angle-double-down"></i>

                        </li>
                        <li>Shop <i class="fas fa-angle-double-down"></i></li>
                        <li>Product <i class="fas fa-angle-double-down"></i>
                        
                        <div className='mega-menu'>
                            <div class="row">
                                <div class="col-md-4">
                                    <p>Product Details</p>
                                    <ul className='list-unstyled'>
                                        <li>Electronic</li>
                                        <li>Cosmetics</li>
                                        <li>Shirt</li>
                                        <li>Pant</li>
                                        <li>shoes</li>
                                        <li>Furniture</li>
                                        <li>Glass</li>
                                    </ul>
                                </div>
                                <div className='col-md-6'>
                                    <img src='https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3BwaW5nJTIwb25saW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='' width='218' height='311' className='img-fluid'/>
                                </div>
                            </div>
                        </div>
                        
                        </li>
                        <li>Pages <i class="fas fa-angle-double-down"></i></li>
                        <li>Blog <i class="fas fa-angle-double-down"></i></li>
                        <li>Element <i class="fas fa-angle-double-down"></i></li>
                    </ul>
                </nav>
            </div>

            
            <div className='d-none d-sm-none d-md-block'>
                <div className='d-flex justify-content-center align-items-center'>
                    <i class="far fa-lightbulb me-3"></i>
                    <p className='m-0 p-0'>Clearance <strong>Up to 30% Off</strong></p>
                </div>
            </div>


        </div>
    );
};

export default TopNav;