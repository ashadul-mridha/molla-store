import React, { useState } from 'react';
import styles from './MobileMenu.module.css';

const MobileMenu = ({setMobileMenu}) => {

    const closeMobileMenuBar = e => {
        setMobileMenu(false)
    }

    //set tab condition
    const [activeMenu , setActiveMenu] = useState(true);

    const handleMenutab = (e) => {
        setActiveMenu(true)
        e.target.style.color = '#acc964';
        e.target.style.borderBottom = '1px solid #acc964';

       const category =  document.getElementById('category');
       category.style.color = '';
       category.style.borderBottom = '';

    }
    
    const handleCategoritab = (e) => {
        setActiveMenu(false)
        e.target.style.color = '#acc964';
        e.target.style.borderBottom = '1px solid #acc964';
        
       const menu =  document.getElementById('menu');
       menu.style.color = '';
       menu.style.borderBottom = '';
    }

    const handleMenuHomeContentToggle = (e) => {
        const homedropdown = document.getElementById('homedropdown');
        homedropdown.classList.toggle('d-none');
        
        if (e.target.style.color === 'rgb(172, 201, 100)') {
            e.target.style.color = '';
        }else{
            e.target.style.color = '#acc964';
        }

    }
    
    const handleMenuShopContentToggle = (e) => {
        const homedropdown = document.getElementById('shopdropdown');
        homedropdown.classList.toggle('d-none');
        
        if (e.target.style.color === 'rgb(172, 201, 100)') {
            e.target.style.color = '';
        }else{
            e.target.style.color = '#acc964';
        }
    }
    
    const handleMenuProductContentToggle = (e) => {
        const homedropdown = document.getElementById('productdropdown');
        homedropdown.classList.toggle('d-none');
        
        if (e.target.style.color === 'rgb(172, 201, 100)') {
            e.target.style.color = '';
        }else{
            e.target.style.color = '#acc964';
        }
    }
    
    const handleMenuPagesContentToggle = (e) => {
        const homedropdown = document.getElementById('pagesdropdown');
        homedropdown.classList.toggle('d-none');
        
        if (e.target.style.color === 'rgb(172, 201, 100)') {
            e.target.style.color = '';
        }else{
            e.target.style.color = '#acc964';
        }
    }
    
    const handleMenuBlogContentToggle = (e) => {
        const homedropdown = document.getElementById('blogdropdown');
        homedropdown.classList.toggle('d-none');
        
        if (e.target.style.color === 'rgb(172, 201, 100)') {
            e.target.style.color = '';
        }else{
            e.target.style.color = '#acc964';
        }
    }
    
    const handleMenuElementContentToggle = (e) => {
        const homedropdown = document.getElementById('elementdropdown');
        homedropdown.classList.toggle('d-none');
        
        if (e.target.style.color === 'rgb(172, 201, 100)') {
            e.target.style.color = '';
        }else{
            e.target.style.color = '#acc964';
        }
    }
    return (
        <div className={styles.mobileMenuOutsite}>
            <div className={styles.mobileMenuContainer}>
                {/* close btn */}
                <div className='d-flex justify-content-end align-items-center'>
                    <span onClick={closeMobileMenuBar} className={styles.closeBtn}>&times;</span>
                </div>
                {/* mobile search button */}
                <div className={`container my-2 ${styles.mobileSrcArea}`}>
                    <form className='row'>
                        <div className='col-10 m-0 p-0'>
                            <input type='text' className={`form-control py-1 px-2 ${styles.srcInput}`} placeholder='Search Product...'/>
                        </div>
                        <div className={`col-2 m-0 p-0 d-flex justify-content-center align-items-center ${styles.iconSearch}`}>
                            <div><i class="fas fa-search fa-xs"></i></div>
                        </div>
                    </form>
                </div>
                {/* menu item */}

                <ul className={`d-flex align-items-center list-unstyled my-3 ${styles.mobileMenuTabs}`}>
                    <li id="menu" style={{color:'#acc964', borderBottom: '1px solid #acc964'}} onClick={handleMenutab} className='w-50 text-center py-2'>Menu</li>
                    <li id="category" onClick={handleCategoritab} className='w-50 text-center py-2'>Categories</li>
                </ul>

                {/* tabs content */}

                {
                    activeMenu ? (

                        <ul className={`list-unstyled ${styles.menuContent}`}>
                            <li onClick={handleMenuHomeContentToggle}> 
                                <div className='d-flex justify-content-between align-items-center pb-2 border-bottom px-2'>
                                    <span>HOME</span> <i class="fas fa-angle-double-down"></i>
                                </div>
        
                                <ul id="homedropdown" className={`d-none ${styles.dropdownMenuContent}`}>
                                    <li>1 Fashoin Store</li>
                                    <li>2 Fashoin Store</li>
                                    <li>3 Fashoin Store</li>
                                    <li>4 Fashoin Store</li>
                                    <li>5 Fashoin Store</li>
                                    <li>6 Fashoin Store</li>
                                    <li>7 Fashoin Store</li>
                                    <li>8 Fashoin Store</li>
                                    <li>9 Fashoin Store</li>
                                    <li>10 Fashoin Store</li>
                                    <li>11 Fashoin Store</li>
                                    <li>12 Fashoin Store</li>
                                    <li>13 Fashoin Store</li>
                                </ul>
                            
                            </li>
        
                            <li onClick={handleMenuShopContentToggle}> 
                                <div className='d-flex justify-content-between align-items-center py-2 border-bottom px-2'>
                                    <span>SHOP</span> <i class="fas fa-angle-double-down"></i>
                                </div>
        
                                <ul id="shopdropdown" className={`d-none ${styles.dropdownMenuContent}`}>
                                    <li>1 Fashoin Store</li>
                                    <li>2 Fashoin Store</li>
                                    <li>3 Fashoin Store</li>
                                    <li>4 Fashoin Store</li>
                                    <li>5 Fashoin Store</li>
                                    <li>6 Fashoin Store</li>
                                    <li>7 Fashoin Store</li>
                                    <li>8 Fashoin Store</li>
                                    <li>9 Fashoin Store</li>
                                    <li>10 Fashoin Store</li>
                                    <li>11 Fashoin Store</li>
                                    <li>12 Fashoin Store</li>
                                    <li>13 Fashoin Store</li>
                                </ul>
                            
                            </li>
                            
                            <li onClick={handleMenuProductContentToggle}> 
                                <div className='d-flex justify-content-between align-items-center py-2 border-bottom px-2'>
                                    <span>Product</span> <i class="fas fa-angle-double-down"></i>
                                </div>
        
                                <ul id="productdropdown" className={`d-none ${styles.dropdownMenuContent}`}>
                                    <li>1 Fashoin Store</li>
                                    <li>2 Fashoin Store</li>
                                    <li>3 Fashoin Store</li>
                                    <li>4 Fashoin Store</li>
                                    <li>5 Fashoin Store</li>
                                    <li>6 Fashoin Store</li>
                                    <li>7 Fashoin Store</li>
                                    <li>8 Fashoin Store</li>
                                    <li>9 Fashoin Store</li>
                                    <li>10 Fashoin Store</li>
                                    <li>11 Fashoin Store</li>
                                    <li>12 Fashoin Store</li>
                                    <li>13 Fashoin Store</li>
                                </ul>
                            
                            </li>
                            
                            <li onClick={handleMenuPagesContentToggle}> 
                                <div className='d-flex justify-content-between align-items-center py-2 border-bottom px-2'>
                                    <span>Pages</span> <i class="fas fa-angle-double-down"></i>
                                </div>
        
                                <ul id="pagesdropdown" className={`d-none ${styles.dropdownMenuContent}`}>
                                    <li>1 Fashoin Store</li>
                                    <li>2 Fashoin Store</li>
                                    <li>3 Fashoin Store</li>
                                    <li>4 Fashoin Store</li>
                                    <li>5 Fashoin Store</li>
                                    <li>6 Fashoin Store</li>
                                    <li>7 Fashoin Store</li>
                                    <li>8 Fashoin Store</li>
                                    <li>9 Fashoin Store</li>
                                    <li>10 Fashoin Store</li>
                                    <li>11 Fashoin Store</li>
                                    <li>12 Fashoin Store</li>
                                    <li>13 Fashoin Store</li>
                                </ul>
                            
                            </li>
                            
                            <li onClick={handleMenuBlogContentToggle}> 
                                <div className='d-flex justify-content-between align-items-center py-2 border-bottom px-2'>
                                    <span>BLOG</span> <i class="fas fa-angle-double-down"></i>
                                </div>
        
                                <ul id="blogdropdown" className={`d-none ${styles.dropdownMenuContent}`}>
                                    <li>1 Fashoin Store</li>
                                    <li>2 Fashoin Store</li>
                                    <li>3 Fashoin Store</li>
                                    <li>4 Fashoin Store</li>
                                    <li>5 Fashoin Store</li>
                                    <li>6 Fashoin Store</li>
                                    <li>7 Fashoin Store</li>
                                    <li>8 Fashoin Store</li>
                                    <li>9 Fashoin Store</li>
                                    <li>10 Fashoin Store</li>
                                    <li>11 Fashoin Store</li>
                                    <li>12 Fashoin Store</li>
                                    <li>13 Fashoin Store</li>
                                </ul>
                            
                            </li>
                            
                            <li onClick={handleMenuElementContentToggle}> 
                                <div className='d-flex justify-content-between align-items-center py-2 border-bottom px-2'>
                                    <span>Element</span> <i class="fas fa-angle-double-down"></i>
                                </div>
        
                                <ul id="elementdropdown" className={`d-none ${styles.dropdownMenuContent}`}>
                                    <li>1 Fashoin Store</li>
                                    <li>2 Fashoin Store</li>
                                    <li>3 Fashoin Store</li>
                                    <li>4 Fashoin Store</li>
                                    <li>5 Fashoin Store</li>
                                    <li>6 Fashoin Store</li>
                                    <li>7 Fashoin Store</li>
                                    <li>8 Fashoin Store</li>
                                    <li>9 Fashoin Store</li>
                                    <li>10 Fashoin Store</li>
                                    <li>11 Fashoin Store</li>
                                    <li>12 Fashoin Store</li>
                                    <li>13 Fashoin Store</li>
                                </ul>
                            
                            </li>
        
                        </ul>
                    ) : (
                        <ul className={`list-unstyled ${styles.categoryContent}`}>
                            <li className='pb-2 border-bottom px-2'>Electronic</li>
                            <li className='py-2 border-bottom px-2'>Gift Idea</li>
                            <li className='py-2 border-bottom px-2'>Beds</li>
                            <li className='py-2 border-bottom px-2'>Lighting</li>
                            <li className='py-2 border-bottom px-2'>Sofa Idea</li>
                            <li className='py-2 border-bottom px-2'>Storage</li>
                            <li className='py-2 border-bottom px-2'>Decoration</li>
                            <li className='py-2 border-bottom px-2'>Kitchen</li>
                            <li className='py-2 border-bottom px-2'>Coffe</li>
                            <li className='py-2 border-bottom px-2'>Outdoor Furniture</li>
                        </ul>
                    )
                }
            </div>
        </div>
    );
};

export default MobileMenu;