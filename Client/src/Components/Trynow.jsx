import React from 'react';
import { assets } from '../assets/assets';

export const Trynow = () => {
    return (
        <div className='d-flex flex-column align-items-center  mx-auto' style={{ height: '50vh' }}>

            <h3 className='text-center text-white mb-4'>Try now</h3>
            <button 
                style={{ backgroundColor: 'black', color: 'white', width: '300px' }} 
                className='promtBtn rounded-5 d-flex align-items-center justify-content-center'
            >
                Generate your prompt 
                <img 
                    style={{ height: '25px', width: '30px', marginLeft: '10px' }} 
                    src={assets.star_group} 
                    alt="" 
                />
            </button>
        </div>
    );
};
