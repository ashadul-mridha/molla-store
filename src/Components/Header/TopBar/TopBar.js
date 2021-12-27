import React from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
    return (
        <div className={styles.wrapper}>
            <p>Special collection already available.Read more ...</p>
            <ul>
                <li>Usd</li>
                <li className='text-danger'>Eng</li>
                <li>Sign/Sign Up</li>
            </ul>
        </div>
    );
};

export default TopBar;