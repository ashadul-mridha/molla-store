import React from 'react';
import'./TopProduct.css';

const TopProduct = () => {
    return (
        <div className='my-3'>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center my-1">
                    <h3 className='border-bottom border-dark me-4'>Feature</h3>
                    <h3 className='text-muted me-4'>On Sale</h3>
                    <h3 className='text-muted'>Top Rated</h3>
                </div>
                <div className="grid-con g-3 mt-3">
                    <div className="product">
                        <div className='position-relative'>
                            <img src="https://d-themes.com/react_asset_api/molla/uploads/product_1_2_300x300_d265cc4cd6.jpg" className='img-fluid' alt="" />
                            <div className="position-absolute top-0 end-0 mt-1 me-2">
                                <div className="icon">
                                    <i class="far fa-heart"></i>
                                </div>
                                <div className="icon">
                                    <i title='Quick View' class="fas fa-glasses"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-body d-flex flex-column justify-content-center align-items-center py-3 px-2">
                            <p className='mb-0 product-cat'>Furniture</p>
                            <h4>Big Sofa Set</h4>
                            <div className=' d-flex justify-content-center align-items-center'><h4 className="text-muted">$158.00</h4></div>
                            <div className="review d-flex justify-content-center align-items-center">
                                <div className="star">
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-muted"></i>
                                    <i class="fas fa-star text-muted"></i>
                                </div>
                                <p className='mb-0'>(2 Review)</p>
                            </div>
                            <button className="btn btn-outline-dark w-100 mt-2 cart-btn"><i class="fas fa-cart-plus me-2"></i> add to cart</button>
                        </div>
                    </div>
                    
                    <div className=" product">
                        <div className='position-relative'>
                            <img src="https://d-themes.com/react_asset_api/molla/uploads/product_3_2_300x300_7ef429113e.jpg" className='img-fluid' alt="" />
                            <div className="position-absolute top-0 end-0 mt-1 me-2">
                                <div className="icon">
                                    <i class="far fa-heart"></i>
                                </div>
                                <div className="icon">
                                    <i title='Quick View' class="fas fa-glasses"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-body d-flex flex-column justify-content-center align-items-center py-3 px-2">
                            <p className='mb-0 product-cat'>Furniture</p>
                            <h4>Butler Stool Leader</h4>
                            <div className=' d-flex justify-content-center align-items-center'><h4 className="text-muted">$248.00</h4></div>
                            <div className="review d-flex justify-content-center align-items-center">
                                <div className="star text-warning">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p className='mb-0'>(2 Review)</p>
                            </div>
                            <button className="btn btn-outline-dark w-100 mt-2 cart-btn"><i class="fas fa-cart-plus me-2"></i> add to cart</button>
                        </div>
                    </div>

                    <div className=" product">
                        <div className='position-relative'>
                            <img src="https://d-themes.com/react_asset_api/molla/uploads/product_2_2_300x300_798eabaee1.jpg" className='img-fluid' alt="" />
                            <div className="position-absolute top-0 end-0 mt-1 me-2">
                                <div className="icon">
                                    <i class="far fa-heart"></i>
                                </div>
                                <div className="icon">
                                    <i title='Quick View' class="fas fa-glasses"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-body d-flex flex-column justify-content-center align-items-center py-3 px-2">
                            <p className='mb-0 product-cat'>Coffe And Table</p>
                            <h4>Block Side Table Tolly</h4>
                            <div className=' d-flex justify-content-center align-items-center'><h4 className="text-muted">$210.00-$248.00</h4></div>
                            <div className="review d-flex justify-content-center align-items-center">
                                <div className="star text-warning">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p className='mb-0'>(5 Review)</p>
                            </div>
                            <button className="btn btn-outline-dark w-100 mt-2 cart-btn"><i class="fas fa-cart-plus me-2"></i> add to cart</button>
                        </div>
                    </div>

                    <div className=" product">
                        <div className='position-relative'>
                            <img src="https://d-themes.com/react_asset_api/molla/uploads/product_4_2_300x300_ec63a5f054.jpg" className='img-fluid' alt="" />
                            <div className="position-absolute top-0 end-0 mt-1 me-2">
                                <div className="icon">
                                    <i class="far fa-heart"></i>
                                </div>
                                <div className="icon">
                                    <i title='Quick View' class="fas fa-glasses"></i>
                                </div>
                            </div>
                        </div>
                        <div className="product-body d-flex flex-column justify-content-center align-items-center py-3 px-2">
                            <p className='mb-0 product-cat'>Furniture</p>
                            <h4>Can Sofa Set</h4>
                            <div className=' d-flex justify-content-center align-items-center'><h4 className="text-muted">$66.00</h4></div>
                            <div className="review d-flex justify-content-center align-items-center">
                                <div className="star">
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-muted"></i>
                                    <i class="fas fa-star text-muted"></i>
                                </div>
                                <p className='mb-0'>(10 Review)</p>
                            </div>
                            <button className="btn btn-outline-dark w-100 mt-2 cart-btn"><i class="fas fa-cart-plus me-2"></i> add to cart</button>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default TopProduct;