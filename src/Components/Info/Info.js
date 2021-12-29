import React from 'react';
import styles from './Info.module.css';

const Info = () => {
    return (
        <>
            <div className='container my-5'>
                <div className='row py-3'>
                    <div className='col-md-3 col-sm-6 d-flex justify-content-center align-items-start'>
                        <div className={styles.icon}>
                            <i class="fas fa-rocket fa-2x"></i>
                        </div>
                        <div className={styles.iconContent}>
                            <h6>Free Shipping</h6>
                            <p>orders $50 or more</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 d-flex justify-content-center align-items-start'>
                        <div className={styles.icon}>
                            <i class="fas fa-undo fa-2x"></i>
                        </div>
                        <div className={styles.iconContent}>
                            <h6>Free Returns</h6>
                            <p>within 30 days</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 d-flex justify-content-center align-items-start'>
                        <div className={styles.icon}>
                            <i class="far fa-question-circle fa-2x"></i>
                        </div>
                        <div className={styles.iconContent}>
                            <h6>Get 20% Off 1 Item</h6>
                            <p>When you sign up</p>
                        </div>
                    </div>
                    <div className='col-md-3 col-sm-6 d-flex justify-content-center align-items-start'>
                        <div className={styles.icon}>
                            <i class="far fa-life-ring fa-2x"></i>
                        </div>
                        <div className={styles.iconContent}>
                            <h6>We Support</h6>
                            <p>24/7 amazing services</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Info;