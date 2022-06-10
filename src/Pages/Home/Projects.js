import React from 'react';
import tools from '../../asset/Tools.png';
import laptop from '../../asset/Laptop.png';
import volunteer from '../../asset/Volunteer.png';

const Projects = () => {
    return (
        <div className='py-24 h-screen overflow-y-auto'>
            <h2 className='text-white text-center text-3xl font-semibold'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-4 justify-items-center py-8'>
                <div className='bg-white p-6 max-w-xl rounded-lg'>
                    <div className='h-72 overflow-y-auto max-w-3xl'>
                        <img src={tools} alt="" />
                    </div>
                    <h2 className='py-4 text-xl font-semibold'>Project: Tools Master</h2>
                    <div className='flex justify-center items-center flex-wrap'>
                        <a href='https://tools-master-a3578.web.app/' className='btn btn-sm btn-primary m-1' target='_blank'>Live View</a>
                        <a href='#' className='btn btn-sm m'>GitHub Client Repo</a>
                        <a href='#' className='btn btn-sm btn-success text-white m-1'>GitHub Server Repo</a>
                    </div>
                </div>
                <div className='bg-white p-5 max-w-xl rounded-lg'>
                    <div className='h-72 overflow-y-auto max-w-3xl'>
                        <img src={laptop} alt="" />
                    </div>
                    <h2 className='py-4 text-xl font-semibold'>Project: Laptop Stock</h2>
                    <div className='flex justify-center items-center flex-wrap'>
                        <a href='' className='btn btn-sm btn-primary m-1' target='_blank'>Live View</a>
                        <a href='#' className='btn btn-sm m'>GitHub Client Repo</a>
                        <a href='#' className='btn btn-sm btn-success text-white m-1'>GitHub Server Repo</a>
                    </div>
                </div>
                <div className='bg-white p-5 max-w-xl rounded-lg'>
                    <div className='h-72 overflow-y-auto max-w-3xl'>
                        <img src={volunteer} alt="" />
                    </div>
                    <h2 className='py-4 text-xl font-semibold'>Project: Volunteer World</h2>
                    <div className='flex justify-center items-center flex-wrap'>
                        <a href='#' className='btn btn-sm btn-primary m-1'>Live View</a>
                        <a href='#' className='btn btn-sm m'>GitHub Client Repo</a>
                        <a href='#' className='btn btn-sm btn-success text-white m-1'>GitHub Server Repo</a>
                    </div>
                </div>
                <div className='bg-white p-5 max-w-xl rounded-lg'>
                    <div className='h-72 overflow-y-auto max-w-3xl'>
                        <img src={tools} alt="" />
                    </div>
                    <h2 className='py-4 text-xl font-semibold'>Project: Tools Master</h2>
                    <div className='flex justify-center items-center flex-wrap'>
                        <a href='#' className='btn btn-sm btn-primary m-1'>Live View</a>
                        <a href='#' className='btn btn-sm m'>GitHub Client Repo</a>
                        <a href='#' className='btn btn-sm btn-success text-white m-1'>GitHub Server Repo</a>
                    </div>
                </div>
                <div className='bg-white p-5 max-w-xl rounded-lg'>
                    <div className='h-72 overflow-y-auto max-w-3xl'>
                        <img src={tools} alt="" />
                    </div>
                    <h2 className='py-4 text-xl font-semibold'>Project: Tools Master</h2>
                    <div className='flex justify-center items-center flex-wrap'>
                        <a href='#' className='btn btn-sm btn-primary m-1'>Live View</a>
                        <a href='#' className='btn btn-sm m'>GitHub Client Repo</a>
                        <a href='#' className='btn btn-sm btn-success text-white m-1'>GitHub Server Repo</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;