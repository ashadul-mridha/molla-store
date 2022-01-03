import React , {useState} from 'react';
import styles from './SearchBar.module.css';
import logo from '../../../Images/logo.png';
import MobileMenu from '../MobileMenu/MobileMenu';

const SearchBar = () => {

    const [mobileMenu , setMobileMenu] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(true);
    }
    return (
        <div className='container px-2'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <button onClick={handleMobileMenu} className={styles.mobileMenuBtn}><i class="fas fa-bars"></i></button>
                    <div>
                        <img src={logo} width='104' height='27' alt=''/>
                    </div>
                </div>

                <form className={`${styles.searchWrapper}`}>
                    <div className={`row border`}>
                        <div className='col-11'>
                            <input type='text' placeholder='Search Product' className='form-control border-0 py-2 px-3'/>
                        </div>
                        <div className='col-1 my-auto'>
                                <div className={styles.iconSearch}><i class="fas fa-search"></i></div>
                        </div>
                    </div>
                </form>

                <div className={`d-flex ${styles.rightItem}`}>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className={styles.icon}><i class="far fa-user"></i></div>
                        <p>Account</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'> 
                        <div className={styles.icon}><i class="far fa-heart"></i></div>
                        <p>Wishlist</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <div className={styles.icon}><i class="fas fa-shopping-cart"></i></div>
                        <p>Cart</p>
                    </div>
                </div>
            </div>   
            { mobileMenu && <MobileMenu setMobileMenu={setMobileMenu}></MobileMenu> }
        </div>
        
    );
};

export default SearchBar;