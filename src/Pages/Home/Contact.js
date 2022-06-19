import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { AiOutlineMail } from 'react-icons/ai';
import Zoom from 'react-reveal/Zoom';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form);
        emailjs.sendForm('service_6gujtlg', 'template_chq9w1j', form.current, '84i8eUmWnaIo2ZJ2D')
            .then((result) => {
                console.log(result.text);
                Swal.fire(
                    'Good job!',
                    'Your message is sended!',
                    'success'
                )

            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };
    return (
        <div className='z-10 py-24 md:py-24 lg:py-24 h-screen overflow-y-auto '>
            <Zoom right>
                <h2 className='text-center mb-5 text-4xl font-bold'>Get in Touch</h2>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <a className='flex items-center my-1' target='_blank' href="mailto:Sakibahamedkhan@gmail.com"> <AiOutlineMail className='text-2xl font-bold' /> &nbsp; Sakibahamedkhan@gmail.com</a>
                    <a className='flex items-center my-1' target='_blank' href="mailto:Sakibahamedkhan@gmail.com"> <AiOutlineMail className='text-2xl font-bold' /> &nbsp; +088-01883343048</a>
                </div>
                <h2 className='text-center text-2xl font-semibold'>Send me a message</h2>
                <div className='px-4 flex justify-center items-center mx-w-3xl'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input className='w-full py-4 px-4 border border-slate-400 my-3' placeholder='Name' type="text" name="user_name" required />
                        <input className='w-full  py-4 px-4 border border-slate-400 my-3' placeholder='Email' type="email" name="user_email" required />
                        <textarea className='w-full  py-4 px-4 border border-slate-400 my-3' placeholder='Message' name="message" required />
                        <input className='btn bg-white border-0 shadow-md text-black my-4 hover:bg-black hover:text-white ease-in-out duration-300' type="submit" value="Send Message" />
                    </form>
                </div>
            </Zoom>
        </div>
    );
};

export default Contact;