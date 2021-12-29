import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-md-6 col-sm-12'>
                    <div className={styles.footerRight}>
                        <img className='img-fluid' src='https://d-themes.com/react/molla/demo-1/images/logo.png' width='105' height='25' alt=''/>
                        <p>
                            Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
                        </p>
                        <div className='d-flex justify-content-start align-items-start'>
                            <div>
                                <p className='mb-0'>Got Question? Call us 24/7</p>
                                <h6>+0123 456 789</h6>
                            </div>
                            <div className='ms-3'>
                                <p className='mb-0'>Payment Method</p>
                                <img src='https://d-themes.com/react/molla/demo-1/images/payments.png' className='img-fluid' alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <div className='row'>
                        <div className={`col-md-4 col-sm-4 ${styles.footerLeft}`}>
                            <h6>Information</h6>
                            <ul>
                                <li>About Molla</li>
                                <li>How to shop on Molla</li>
                                <li>FAQ</li>
                                <li>Contact us</li>
                                <li>Log in</li>
                            </ul>
                        </div>
                        <div className={`col-md-4 col-sm-4 ${styles.footerLeft}`}>
                            <h6>Customer Service</h6>
                            <ul>
                                <li>Payment Method</li>
                                <li>Money-back guarantee!</li>
                                <li>Returns</li>
                                <li>Shipping</li>
                                <li>Terms and conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className={`col-md-4 col-sm-4 ${styles.footerLeft}`}>
                            <h6>My Account</h6>
                            <ul>
                                <li>Sign In</li>
                                <li>View Cart</li>
                                <li>My Wishlist</li>
                                <li>Track My Order</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;