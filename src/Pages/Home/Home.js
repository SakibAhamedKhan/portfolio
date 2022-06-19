import React, { useReducer } from 'react';
import Navbar from '../Shared/Navbar';
import About from './About';
import Banner from './Banner';
import Blogs from './Blogs';
import Contact from './Contact';
import Projects from './Projects';

export const pageContext = React.createContext();

const initialPage = {
    home: true,
    about: false,
    projects: false,
    blogs: false,
    contact: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'home':
            return {
                home: true,
                about: false,
                projects: false,
                blogs: false,
                contact: false,
            };
        case 'about':
            return {
                home: false,
                about: true,
                projects: false,
                blogs: false,
                contact: false,
            };
        case 'projects':
            return {
                home: false,
                about: false,
                projects: true,
                blogs: false,
                contact: false,
            };
        case 'blogs':
            return {
                home: false,
                about: false,
                projects: false,
                blogs: true,
                contact: false,
            };
        case 'contact':
            return {
                home: false,
                about: false,
                projects: false,
                blogs: false,
                contact: true,
            };

        default:
            return state;
    }
}

const Home = () => {
    const [page, dispatch] = useReducer(reducer, initialPage);

    console.log(page);
    return (
        <pageContext.Provider value={{controlPage: dispatch, page}}>
            <div  className='grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-7 gap-4'>
                <div className='lg:col-span-2'>
                    <Navbar></Navbar>
                </div>
                <div className='lg:col-span-5'>
                    <div className={`${page.home? '' :'hidden'} h-full flex justify-center w-full`}>
                        <Banner></Banner>
                    </div>
                    <div className={`${page.about? '' :'hidden'}`}>
                        <About></About>
                    </div>
                    <div className={`${page.projects? '' :'hidden'}`}>
                        <Projects></Projects>
                    </div>
                    <div className={`${page.blogs? '' :'hidden'}`}>
                        <Blogs></Blogs>
                    </div>
                    <div className={`${page.contact? '' :'hidden'}`}>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        </pageContext.Provider>
    );
};

export default Home;