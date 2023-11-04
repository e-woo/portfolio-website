"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm </span>
            <br/>
            <HeadingAnimation/>
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>Description...</p>
          <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Contact Me</button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button>
          </div>
        </div>

      </div>
    </section>
  )
}

const HeadingAnimation = () => {
  return (<TypeAnimation
    sequence={[
      'Ethan', 1000,
      'a student', 1000,
      'a software engineer', 1000,
    ]}
    className='w-full'
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />);
}

export default HeroSection