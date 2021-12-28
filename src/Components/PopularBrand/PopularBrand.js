import React from 'react';
import './PopularBrand.css';
import c1 from '../../Images/c1.png';
import c2 from '../../Images/c2.png';
import c3 from '../../Images/c3.png';
import c4 from '../../Images/c4.png';
import c5 from '../../Images/c5.png';
import c6 from '../../Images/c6.png';

const PopularBrand = () => {
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-md-2 col-sm-4 p-0">
                    <div className=' py-5 brand-div'>
                        <img src={c1} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 p-0">
                    <div className=' py-5 brand-div'>
                        <img src={c2} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 p-0">
                    <div className=' py-5 brand-div'>
                        <img src={c3} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 p-0">
                    <div className=' py-5 brand-div'>
                        <img src={c4} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 p-0">
                    <div className=' py-5 brand-div'>
                        <img src={c5} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-2 col-sm-4 p-0">
                    <div className=' py-5 brand-div'>
                        <img src={c6} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularBrand;