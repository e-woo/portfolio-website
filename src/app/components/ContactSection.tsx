"use client"
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';

const ContactSection = () => {
    const [formSubmitted, setFormSubmitted] = useState(false); // hook for confirming form submission
    const [formError, setFormError] = useState(false); // hook for form submission errors

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzEur96IWkwNmJccStEqSyZwB4djk9Ao4LXSimCRCnp3u-9ao2iydcCApEPi5jsLYjI/exec';
    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(scriptURL, { 
                method: 'POST',
                body: new FormData(e.target as HTMLFormElement)
            })
            .then(() => {
                setFormSubmitted(true);
            })
            .catch(error => {
                console.log(error);
                setFormError(true);
            });
    };

    return (
        <section className='grid md:grid-cols-2 my-12 py-24 lg:px-16 gap-4 relative' id='contact'>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            <div className='flex flex-col gap-4 items-center md:items-start'>
                <h2 className='text-5xl lg:text-7xl text-center md:text-left font-bold mb-4'>Contact Me</h2>
                <p className='text-center md:text-left'>I'm always open to new opportunities. Feel free to get in touch with me!</p>
                <div className='flex flex-row gap-4 items-center'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-600 md:translate-y-[2px] md:hover:-translate-y-[2px] md:transition-[1s] md:duration-1000'>
                        <a href='mailto: ethansfwoo@gmail.com'>
                            <i className='bx bxs-envelope text-4xl '/>
                        </a>
                    </span>
                    <span className='text-lg inline-block align-middle'>ethansfwoo@gmail.com</span>
                </div>
                <div className='flex flex-row gap-4 text-5xl'>
                    <a href='https://github.com/e-woo' target='_blank'>
                        <i className='bx bxl-github text-white md:text-slate-400 md:hover:text-white transition-[.5s]'/>
                    </a>
                </div>
                <Link href='#about'>
                    <button 
                    className='px-1 py-1 max-w-[200px] w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 select-none'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-7 py-2'>About Me</span>
                    </button>
                </Link>
            </div>
            <div>
                {formSubmitted ? (
                <p className='mt-24 md:mt-8 text-2xl text-[#00ff9d] text-center md:text-left'>Message submitted!</p>
                ) :
                <form className='flex flex-col gap-6' onSubmit={handleSubmit} method='post'>
                    <div>
                        <label htmlFor='name' className='block text-white text-xl font-medium mb-2'>Name</label>
                        <input name='name' type='text' id='name' required placeholder='Your Name' 
                        className='bg-[#1f2324] border border-[#373944] placeholder-[#a6acb4] text-gray-200 text-sm rounded-lg block w-full p-2.5'/>
                    </div>
                    <div>
                        <label htmlFor='email' className='block text-white text-xl font-medium mb-2'>Email</label>
                        <input name='email' type='email' id='email' required placeholder='email@address.com'
                        className='bg-[#1f2324] border border-[#373944] placeholder-[#a6acb4] text-gray-200 text-sm rounded-lg block w-full p-2.5'/>
                    </div>
                    <div>
                        <label htmlFor='message' className='block text-white text-xl font-medium mb-2'>Message</label>
                        <textarea name='message' id='message' required placeholder='Your Message' rows={6}
                        className='bg-[#1f2324] border border-[#373944] placeholder-[#a6acb4] text-gray-200 text-sm rounded-lg block w-full p-2.5'/>
                    </div>
                    <button type='submit' 
                    className='mt-3 sm:px-32 py-3 w-full md:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white select-none text-xl font-semibold'>
                        Submit
                    </button>
                    {formError ? (<p className='text-md text-[#ff4800] text-center md:text-left'>
                        Sorry, an error occured while submitting your message! Please email me instead!</p>) : null}
                </form>
                }
            </div>
        </section>
    );
};



export default ContactSection;