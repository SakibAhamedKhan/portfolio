import React from 'react';
import profile from '../../asset/SakibProfile.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='flex items-center py-24'>
            <div className='banner w-full'>
                <div className='banner-part-1 '>
                    <div class="avatar hover:mb-6 ease-in-out duration-500">
                        <div class="w-32 md:w-48 lg:w-72 mask rounded border border-4 border-white">
                            <img className='scale-110' src={profile} alt="" />
                        </div>
                    </div>
                </div>
                <div className='banner-part-2'>
                    <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold'>Sakib Ahamed Khan</h2>
                    <p className='text-white text-xl lg:text-2xl font-semibold mt-6 mb-2'>Junior React Developer</p>
                    <p className='text-white md:text-xl lg:text-xl text-slate-400 mb-10'>I'm a Learner, Developer and Happier!!</p>
                    <button className='btn bg-transparent hover:bg-white hover:text-black ease-in-out duration-300'>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;