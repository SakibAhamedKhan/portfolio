import React from 'react';
import { DiReact } from 'react-icons/di';
import { SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiBootstrap, SiTailwindcss, SiGit, SiFirebase, SiHeroku, SiPostman, SiNetlify, } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandCss3 } from 'react-icons/tb'
import Zoom  from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <div className='py-24 md:py-24 lg:py-24 h-screen overflow-y-auto'>
            <h2 className='text-center mb-10 text-4xl font-bold'>About Me</h2>
            <Zoom  right>
                <div className='px-4 md:px-1 lg:px-10'>
                    <h2 className='text-2xl font-semibold'>I'm Sakib Ahamed Khan a Web Developer!</h2>
                    <div className='pl-3'>
                        <p className='py-5 text-xl'>React Developer Apprentice | Full Stack Software Developer | Competitive Programming</p>
                        <p>I have worked with ReactJs, NodeJs, ExpressJs, MongoDB, Firebase, and Stripe. Some projects I have made to practice these skills. Coding is my favorite, I have solved some problems as an online coding judge and also participate in contests like ICPC. I am very comfortable with learning new technology.</p>
                    </div>
                </div>
            </Zoom >

            <Fade bottom>
                <div className='px-4 md:px-1 lg:px-10 mt-12'>
                    <h2 className='text-2xl font-semibold'>Skills</h2>

                    <div className='flex flex-wrap pt-5 justify-center'>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><DiReact /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiNodedotjs /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiExpress /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiMongodb /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><IoLogoJavascript /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiHtml5 /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><TbBrandCss3 /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiBootstrap /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiTailwindcss /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiGit /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiFirebase /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiHeroku /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiPostman /></div>
                        <div className='p-5 text-6xl bg-white hover:bg-black hover:text-white ease-in-out duration-300 cursor-pointer rounded shadow-lg mx-4 my-2'><SiNetlify /></div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default About;