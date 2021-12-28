import React from 'react';
import './DealContent.css';

const DealContent = () => {
    return (
        <div className='container my-5'>
            <div className="row g-4">
                <div className="col-md-9">
                    <div className="row px-5 py-3 align-items-start shadow">
                        <div className="col-md-6">
                            <div className="deal-content">
                                <p>Limited Quantities</p>
                                <h3>Deal of the Day</h3>
                                <h4>POÄNG</h4>
                                <div className='d-flex justify-content-start align-items-center'> 
                                    <span className="new-price">$149.00</span> 
                                    <span className="old-price">Was $240.00</span> </div>
                                <div className='d-flex align-items-center countdown'>
                                    <div> 06 <p>Hours</p> </div>:
                                    <div> 55 <p>Min</p> </div>:
                                    <div> 42 <p>Sec</p> </div>
                                </div>
                                <button className="btn btn-outline-light">Shop Now</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <img src="https://d-themes.com/react/molla/demo-1/images/home/deal/deal-1.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className='deal-right-banner shadow'>
                            <img src="https://d-themes.com/react/molla/demo-1/images/home/banners/banner-5.jpg" alt="" className="img-fluid" />
                            <div className='deal-brand-content'>
                                <h4>The Best Choice</h4>
                                <h3>Indigo <br /> Best Line </h3>
                                <p>$49.99</p>
                                <button className="btn btn-outline-light">Shop Now <i class="fas fa-arrow-right ms-2"></i></button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default DealContent;