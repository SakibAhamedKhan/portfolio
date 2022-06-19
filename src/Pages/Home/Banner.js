import React from 'react';
import profile from '../../asset/SakibProfile.jpg'
import './Banner.css';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import Fade from 'react-reveal/Fade';


const Banner = () => {
    
    return (
        <>
            
            <div style={{zIndex:'1'}} className='flex items-center py-24'>
                <div className='banner w-full'>
                   <Fade left>
                    <div className='banner-part-1 '>
                            <div class="avatar hover:mb-6 ease-in-out duration-500">
                                <div class="w-32 md:w-48 lg:w-72 mask rounded">
                                    <img className='scale-110' src={profile} alt="" />
                                </div>
                            </div>
                        </div>
                   </Fade>
                    <Fade right>
                        <div className='banner-part-2'>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Sakib Ahamed Khan</h2>
                            <p className='text-xl lg:text-2xl font-semibold mt-4 mb-2'>Web Developer</p>
                            <p className='md:text-xl lg:text-xl text-slate-400 mb-5'>I'm a Learner, Developer and Happier!!</p>
                            <div className='flex justify-center md:justify-start'>
                                <a href='https://drive.google.com/file/d/1GL8tjEgV-EU5Y6_JQG7TYncz9ZOcGfl2/view?usp=sharing'
                                    target='_blank' className='btn bg-white border-0 shadow-md text-black hover:bg-black hover:text-white ease-in-out duration-300'>Download Resume</a>
                            </div>
                            <div className='flex pt-4 justify-center md:justify-start'>
                                <a href="https://www.linkedin.com/in/sakibahamedkhan/" target='_blank' className='text-2xl bg-white p-3 rounded hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer mr-3 shadow-md'><AiFillLinkedin/></a>
                                <a href="https://github.com/SakibAhamedKhan" target='_blank' className='text-2xl bg-white p-3 rounded hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer mx-3 shadow-md'><AiFillGithub/></a>
                                <a href="https://www.facebook.com/sakibahamed.khan.188/" target='_blank' className='text-2xl bg-white p-3 rounded hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer mx-3 shadow-md'><BsFacebook/></a>
                            </div>
                        </div>
                    </Fade>
                    
                </div>



            </div>
        </>
    );
};

export default Banner;