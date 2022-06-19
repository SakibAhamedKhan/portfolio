import React from 'react';
import tools from '../../asset/Tools.png';
import laptop from '../../asset/Laptop.png';
import volunteer from '../../asset/Volunteer.png';
import codesnap from '../../asset/Codesnap.png';
import football from '../../asset/Football.png';
import wedding from '../../asset/Wedding.png';
import todo from '../../asset/ToDo.png';
import police from '../../asset/Police.png';
import './Projects.css';
import Bounce from 'react-reveal/Fade';

const Projects = () => {
    return (
        <Bounce bottom>
        <div style={{ zIndex: '10' }} className='py-24 md:py-24 lg:py-24 h-screen overflow-y-auto'>
            
                <h2 className='text-center text-4xl font-bold'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-4 justify-items-center py-10'>
                    <div className='bg-white max-w-xl rounded-lg shadow-lg  ease-in-out duration-300'>
                        <div className='project-image h-72 overflow-y-auto max-w-3xl'>
                            <img className='rounded-lg' src={tools} alt="" />
                        </div>
                        <h2 className='py-4 text-2xl font-semibold text-center'>Tools Master</h2>
                        <div className='p-4 flex justify-center items-center flex-wrap'>
                            <a href='https://tools-master-a3578.web.app/' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>Live View</a>
                            <a href='https://github.com/SakibAhamedKhan/tools-master-client' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white' target='_blank'>GitHub Client Repo</a>
                            <a href='https://github.com/SakibAhamedKhan/tools-master-server' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white m-1' target='_blank'>GitHub Server Repo</a>
                        </div>
                    </div>
                    <div className='bg-white max-w-xl rounded-lg shadow-lg'>
                        <div className='project-image h-72 overflow-y-auto max-w-3xl'>
                            <img className='rounded-lg' src={laptop} alt="" />
                        </div>
                        <h2 className='py-4 text-2xl font-semibold text-center'>Laptop Stock</h2>
                        <div className='p-4 flex justify-center items-center flex-wrap'>
                            <a href='https://laptop-stock-d7521.web.app/' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>Live View</a>
                            <a href='https://github.com/SakibAhamedKhan/Laptop-Stock-Client' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300' target='_blank'>GitHub Client Repo</a>
                            <a href='https://github.com/SakibAhamedKhan/Laptop-stock-server' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>GitHub Server Repo</a>
                        </div>
                    </div>
                    <div className='bg-white max-w-xl rounded-lg shadow-lg'>
                        <div className='project-image h-72 overflow-y-auto max-w-3xl'>
                            <img className='rounded-lg' src={codesnap} alt="" />
                        </div>
                        <h2 className='py-4 text-2xl font-semibold text-center'>Codesnap Clone</h2>
                        <div className='p-4 flex justify-center items-center flex-wrap'>
                            <a href='https://sakibahamedkhan.github.io/codeSnap-clone/' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>Live View</a>
                            <a href='https://github.com/SakibAhamedKhan/codeSnap-clone' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300' target='_blank'>GitHub Client Repo</a>
                        </div>
                    </div>
                    <div className='bg-white max-w-xl rounded-lg shadow-lg'>
                        <div className='project-image h-72 overflow-y-auto max-w-3xl'>
                            <img className='rounded-lg' src={volunteer} alt="" />
                        </div>
                        <h2 className='py-4 text-2xl font-semibold text-center'>Volunteer World</h2>
                        <div className='p-4 flex justify-center items-center flex-wrap'>
                            <a href='https://volunteer-world-74865.web.app/' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>Live View</a>
                            <a href='https://github.com/SakibAhamedKhan/Volunteer-World' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300' target='_blank'>GitHub Client Repo</a>
                            <a href='https://github.com/SakibAhamedKhan/volunteer-world-server' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>GitHub Server Repo</a>
                        </div>
                    </div>
                    <div className='bg-white max-w-xl rounded-lg shadow-lg'>
                        <div className='project-image h-72 overflow-y-auto max-w-3xl'>
                            <img className='rounded-lg' src={police} alt="" />
                        </div>
                        <h2 className='py-4 text-2xl font-semibold text-center'>Police Indentification</h2>
                        <div className='p-4 flex justify-center items-center flex-wrap'>
                            <a href='https://police-identification.web.app/' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>Live View</a>
                            <a href='https://github.com/SakibAhamedKhan/sdp-2-client' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300' target='_blank'>GitHub Client Repo</a>
                            <a href='https://github.com/SakibAhamedKhan/sdp-2-server' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>GitHub Server Repo</a>
                        </div>
                    </div>
                    <div className='bg-white max-w-xl rounded-lg shadow-lg'>
                        <div className='project-image h-72 overflow-y-auto max-w-3xl'>
                            <img className='rounded-lg' src={todo} alt="" />
                        </div>
                        <h2 className='py-4 text-2xl font-semibold text-center'>ToDo App</h2>
                        <div className='p-4 flex justify-center items-center flex-wrap'>
                            <a href='https://to-do-app-1766b.web.app/' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>Live View</a>
                            <a href='https://github.com/SakibAhamedKhan/to-do-client' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300' target='_blank'>GitHub Client Repo</a>
                            <a href='https://github.com/SakibAhamedKhan/to-do-server' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>GitHub Server Repo</a>
                        </div>
                    </div>
                    <div className='bg-white max-w-xl rounded-lg shadow-lg'>
                        <div className='project-image h-72 overflow-y-auto max-w-3xl'>
                            <img className='rounded-lg' src={wedding} alt="" />
                        </div>
                        <h2 className='py-4 text-2xl font-semibold text-center'>WeddingDream Convention Center</h2>
                        <div className='p-4 flex justify-center items-center flex-wrap'>
                            <a href='https://sakibahamedkhan-assignment-3.netlify.app/' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>Live View</a>
                            <a href='https://github.com/SakibAhamedKhan/weddingDream-convention-center' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300' target='_blank'>GitHub Client Repo</a>
                        </div>
                    </div>
                    <div className='bg-white max-w-xl rounded-lg shadow-lg'>
                        <div className='project-image h-72 overflow-y-auto max-w-3xl'>
                            <img className='rounded-lg' src={football} alt="" />
                        </div>
                        <h2 className='py-4 text-2xl font-semibold text-center'>Football Shop</h2>
                        <div className='p-4 flex justify-center items-center flex-wrap'>
                            <a href='https://football-shop-sakibahamedkhan.netlify.app/' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300 m-1' target='_blank'>Live View</a>
                            <a href='https://github.com/SakibAhamedKhan/football-shop' className='btn btn-sm bg-white text-black hover:bg-black hover:text-white ease-in-out duration-300' target='_blank'>GitHub Client Repo</a>
                        </div>
                    </div>

                </div>
            
        </div>
        </Bounce>
    );
};

export default Projects;