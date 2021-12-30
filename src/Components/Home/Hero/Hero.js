import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='wrapperHero'>
            <div className='container'>
                <div className="row align-items-center pt-5">
                    <div className="col-md-5">
                        <div className='hero-content'>
                            <h5>Deals And Promotion</h5>
                            <h2>Wooden <br /> SideBoard Table</h2>
                            <h3> <sup>$</sup> 49.99</h3>
                            <button className='btn btn-outline-dark px-4'>Shop Now <i class="fas fa-arrow-right ms-2"></i></button>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <img className='img-fluid' src="https://d-themes.com/react/molla/demo-1/images/home/sliders/slide-1-3.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;