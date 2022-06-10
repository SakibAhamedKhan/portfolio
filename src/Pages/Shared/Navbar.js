import React from 'react';
import {AiFillHome} from 'react-icons/ai'
import {GoPerson} from 'react-icons/go'
import {MdWork} from 'react-icons/md'
import {TbNews} from 'react-icons/tb'
import {HiMailOpen} from 'react-icons/hi'

const Navbar = () => {
   
    return (
        <div className=' md:h-screen lg:h-screen w-full'>
            <div class="drawer-side bg-black h-20 md:h-screen lg:h-screen  flex lg:flex md:flex md:flex-cols lg:flex-cols justify-center  items-center w-full">
                <label for="my-drawer-2" class="drawer-overlay "></label> 
                
                <ul class="menu p-4 overflow-y-auto  text-base-content">
                <h2 className='text-white text-3xl font-bold mb-0 md:mb-8 lg:mb-8 text-center'>Sakib Ahamed Khan</h2>
                <div className='hidden md:flex lg:flex text-xl text-white flex items-center my-3'><AiFillHome className='text-white mx-2' /><p className='text-slate-400 hover:text-white cursor-pointer hover:tracking-widest ease-in-out duration-300'>Home</p></div>
                <div className='hidden md:flex lg:flex text-xl text-white flex items-center my-3'><GoPerson className='text-white mx-2' /><p className='text-slate-400 hover:text-white cursor-pointer hover:tracking-widest ease-in-out duration-300'>About</p></div>
                <div className='hidden md:flex lg:flex text-xl text-white flex items-center my-3'><MdWork className='text-white mx-2' /><p className='text-slate-400 hover:text-white cursor-pointer hover:tracking-widest ease-in-out duration-300'>Projects</p></div>
                <div className='hidden md:flex lg:flex text-xl text-white flex items-center my-3'><TbNews className='text-white mx-2' /><p className='text-slate-400 hover:text-white cursor-pointer hover:tracking-widest ease-in-out duration-300'>Blogs</p></div>
                <div className='hidden md:flex lg:flex text-xl text-white flex items-center my-3'><HiMailOpen className='text-white mx-2' /><p className='text-slate-400 hover:text-white cursor-pointer hover:tracking-widest ease-in-out duration-300'>Contact</p></div>
                
                </ul>
            
            </div>
            <div class="navbar bg-black md:hidden lg:hidden fixed bottom-0 w-full">
                <div class="navbar-start flex justify-between w-full mx-4 py-5">
                                <div className='mx-2 text-slate-400 hover:text-white'><AiFillHome className='text-3xl' /></div>
                                <div className='mx-2 text-slate-400 hover:text-white'><GoPerson className='text-3xl' /></div>
                                <div className='mx-2 text-slate-400 hover:text-white'><MdWork className='text-3xl' /></div>
                                <div className='mx-2 text-slate-400 hover:text-white'><TbNews className='text-3xl' /></div>
                                <div className='mx-2 text-slate-400 hover:text-white'><HiMailOpen className='text-3xl' /></div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;