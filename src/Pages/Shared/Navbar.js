import React, { useContext } from 'react';
import {AiFillHome} from 'react-icons/ai'
import {GoPerson} from 'react-icons/go'
import {MdWork} from 'react-icons/md'
import {TbNews} from 'react-icons/tb'
import {HiMailOpen} from 'react-icons/hi'
import { pageContext } from '../Home/Home';

const Navbar = () => {
    const pageContexts = useContext(pageContext);
    const {controlPage, page} = pageContexts;
    
    console.log(page.home);
    return (
        <div className='lg:h-screen w-full'>
            <div class=" z-50 drawer-side bg-black h-20 lg:h-screen  flex lg:flex md:flex md:flex-cols lg:flex-cols justify-center  items-center w-full fixed md:fixed lg:static">
                <label for="my-drawer-2" class="drawer-overlay "></label> 
                
                <ul class="menu p-4 overflow-y-auto  text-base-content">
                <h2 className='text-white text-3xl font-bold mb-0 md:mb-8 lg:mb-8 text-center'>Sakib Ahamed Khan</h2>
                <div onClick={() => {
                    controlPage({type: 'home'})
                }} className={`cursor-pointer hidden md:hidden lg:flex text-xl text-white flex items-center my-3 `}><AiFillHome className='text-white mx-2' /><p className={`hover:text-white  hover:tracking-widest ease-in-out duration-300 ${page.home? 'text-white tracking-widest' : 'text-slate-400'}`}>Home</p></div>

                <div onClick={() => {
                    controlPage({type: 'about'})
                }} className='cursor-pointer hidden md:hidden lg:flex text-xl text-white flex items-center my-3'><GoPerson className='text-white mx-2' /><p className={`hover:text-white  hover:tracking-widest ease-in-out duration-300 ${page.about? 'text-white tracking-widest' : 'text-slate-400'}`}>About</p></div>

                <div onClick={() => {
                    controlPage({type: 'projects'})
                }} className='cursor-pointer hidden md:hidden lg:flex text-xl text-white flex items-center my-3'><MdWork className='text-white mx-2' /><p className={`hover:text-white  hover:tracking-widest ease-in-out duration-300 ${page.projects? 'text-white tracking-widest' : 'text-slate-400'}`}>Projects</p></div>

                <div onClick={() => {
                    controlPage({type: 'blogs'})
                }} className='cursor-pointer hidden md:hidden lg:flex text-xl text-white flex items-center my-3'><TbNews className='text-white mx-2' /><p className={`hover:text-white  hover:tracking-widest ease-in-out duration-300 ${page.blogs? 'text-white tracking-widest' : 'text-slate-400'}`}>Blogs</p></div>

                <div onClick={() => {
                    controlPage({type: 'contact'})
                }} className='cursor-pointer hidden md:hidden lg:flex text-xl text-white flex items-center my-3'><HiMailOpen className='text-white mx-2' /><p className={`hover:text-white  hover:tracking-widest ease-in-out duration-300 ${page.contact? 'text-white tracking-widest' : 'text-slate-400'}`}>Contact</p></div>
                </ul>
            
            </div>
            <div class="navbar bg-black lg:hidden fixed bottom-0 w-full z-50">
                <div class="navbar-start flex justify-between w-full mx-4 py-5">
                    <div onClick={() => {
                        controlPage({type: 'home'})
                    }} className={`mx-2 hover:text-white ${page.home? 'text-white tracking-widest' : 'text-slate-400'}`}><AiFillHome className='text-3xl' /></div>
                    <div onClick={() => {
                        controlPage({type: 'about'})
                    }} className={`mx-2 hover:text-white ${page.about? 'text-white tracking-widest' : 'text-slate-400'}`}><GoPerson className='text-3xl' /></div>
                    <div onClick={() => {
                        controlPage({type: 'projects'})
                    }} className={`mx-2 hover:text-white ${page.projects? 'text-white tracking-widest' : 'text-slate-400'}`}><MdWork className='text-3xl' /></div>
                    <div onClick={() => {
                        controlPage({type: 'blogs'})
                    }} className={`mx-2 hover:text-white ${page.blogs? 'text-white tracking-widest' : 'text-slate-400'}`}><TbNews className='text-3xl' /></div>
                    <div onClick={() => {
                        controlPage({type: 'contact'})
                    }} className={`mx-2 hover:text-white ${page.contact? 'text-white tracking-widest' : 'text-slate-400'}`}><HiMailOpen className='text-3xl' /></div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;