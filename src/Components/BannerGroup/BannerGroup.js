import React from 'react';
import './BannerGroup.css';

const BannerGroup = () => {
    return (
        <div className='container my-5'>
            <div className="row gx-3">
                <div className="col-md-5">
                    <div className='coffe-table'>
                        <img src="https://d-themes.com/react/molla/demo-1/images/home/banners/banner-1.jpg" alt="" className="img-fluid" />
                        <div className='brand-content'>
                            <h4>On Sale</h4>
                            <h3>Collection Chair</h3>
                            <p>Up to 30% Off</p>
                            <button className="btn btn-outline-dark">Shop Now <i class="fas fa-arrow-right ms-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className=' kitchen-ware'>
                        <img src="https://d-themes.com/react/molla/demo-1/images/home/banners/banner-2.jpg" alt="" className="img-fluid" />
                        <div className='brand-content'>
                            <h4>On Sale</h4>
                            <h3>Collection Chair</h3>
                            <p>Up to 30% Off</p>
                            <button className="btn btn-outline-light">Shop Now <i class="fas fa-arrow-right ms-2"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row gy-3">
                        <div className="col-12">
                            <div className='decore'>
                                <img src="https://d-themes.com/react/molla/demo-1/images/home/banners/banner-3.jpg" alt="" className="img-fluid" />
                                <div className='brand-content'>
                                    <h4>New Arraivs</h4>
                                    <h3>Home Decor</h3>
                                    <button className="btn btn-outline-dark">Discover Now <i class="fas fa-arrow-right ms-2"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className=' chair'>
                                <img src="https://d-themes.com/react/molla/demo-1/images/home/banners/banner-4.jpg" alt="" className="img-fluid" />
                                <div className='brand-content'>
                                    <h4>On Sale</h4>
                                    <h3>Collection Chair</h3>
                                    <div>Up to 30% Off</div>
                                    <button className="btn btn-outline-dark mt-2">Shop Now <i class="fas fa-arrow-right ms-2"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerGroup;