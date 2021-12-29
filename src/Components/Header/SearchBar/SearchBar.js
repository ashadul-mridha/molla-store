import React from 'react';
import styles from './SearchBar.module.css';
import logo from '../../../Images/logo.png';

const SearchBar = () => {
    return (
        <div className='container px-2'>
            <div className='row mt-4 mb-1 align-items-center'>
                <div className='col-md-3 col-6 col-sm-6'>
                    <div>
                        <img src={logo} width='104' height='27' alt=''/>
                    </div>
                </div>
                <div className='col-md-6 d-none d-sm-none d-md-block'>
                    <form>
                        <div className='row border'>
                            <div className='col-11'>
                                <input type='text' placeholder='Search Product' className='form-control border-0 py-2 px-3'/>
                            </div>
                            <div className='col-1 my-auto'>
                                <div className={styles.iconSearch}><i class="fas fa-search"></i></div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='col-md-3 col-6 col-sm-6'>
                    <div className='d-flex justify-content-end'>
                        <div className='d-flex flex-column align-items-center'>
                            <div className={styles.icon}><i class="far fa-user"></i></div>
                            <p>Account</p>
                        </div>
                        <div className='d-flex flex-column align-items-center mx-3'>
                            <div className={styles.icon}><i class="far fa-heart"></i></div>
                            <p>Wishlist</p>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className={styles.icon}><i class="fas fa-shopping-cart"></i></div>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;