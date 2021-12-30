import React from 'react';
import styles from './NewsLetter.module.css';

const NewsLetter = () => {
    return (
        <div className={styles.newsletter}>
            <div className='row justify-content-center py-5'>
                <div className='col-lg-6 col-md-8 col-10'>
                    <h4 className='text-center text-white '> Get The Latest Deals </h4>
                    <p className='text-center text-white'>and receive $20 coupon for first shopping</p>
                    <div className='row py-md-1 g-0 bg-light'>
                        <div className='col-9 col-sm-10'>
                            <input type='email' placeholder='Enter Your Email Address' className='form-control bg-white border-0' />
                        </div>
                        <div className='col-3 col-sm-2'>
                            <button className='btn btn-light'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;