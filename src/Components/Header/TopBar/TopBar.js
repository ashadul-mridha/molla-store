import React from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div>
                    <p>Special collection already available.Read more ...</p>
                </div>
                <ul className={styles.rightbar}>
                    <li className='bb'>Usd <i class="fas fa-angle-down"></i> 
                        <ul className={`${styles.topDropdown} ${styles.moneyDrop}`}>
                            <li>Eur</li>
                            <li>TK</li>
                        </ul>
                    </li>
                    <li>Eng <i class="fas fa-angle-down"></i> 
                        <ul className={styles.countryDrop}>
                            <li>Ban</li>
                            <li>Fr</li>
                        </ul>
                    </li>
                    <li>Sign/Sign Up <i class="fas fa-angle-down"></i> </li>
                </ul>
            </div>
        </div>
    );
};

export default TopBar;