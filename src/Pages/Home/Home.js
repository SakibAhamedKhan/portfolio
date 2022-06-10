import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='grid  sm:grid-cols-1 md:grid-cols-7 lg:grid-cols-7 gap-4'>
            <div className='md:col-span-3 lg:col-span-2'>
                <Navbar></Navbar>
            </div>
            <div className='md:col-span-4 lg:col-span-5'>
                <Banner></Banner>
            </div>
        </div> 
    );
};

export default Home;