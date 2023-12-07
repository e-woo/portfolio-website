"use client";
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
const HeroSection = () => {
	return (
		<section className='lg:py-16'>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<div className='col-span-9 place-self-center text-center lg:text-left lg:justify-self-start'>
					<h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold select-none'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I'm{" "}</span>
						<br/>
						<HeadingAnimation/>
					</h1>
					<p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>Second Year Computer Science Student</p>
					<div>
						<Link href='#contact'>
							<button className='px-8 py-3 max-w-[200px] w-full sm:w-fit rounded-full sm:mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white select-none'>
								Contact Me
							</button>
						</Link>
						<Link href='#about'>
							<button className='px-1 py-1 max-w-[200px] w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 select-none'>
								<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-8 py-2'>About Me</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

const HeadingAnimation = () => {
	return (<TypeAnimation
		sequence={[
			'Ethan', 1000,
			'a Student', 1000,
			'a Software Engineer', 1000,
		]}
		wrapper='span'
		speed={50}
		repeat={Infinity}
	/>);
};

export default HeroSection;