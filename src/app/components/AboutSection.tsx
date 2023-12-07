import React from 'react'
import Image from 'next/image'
const AboutSection = () => {
	return (
		<section className='text-white pt-28' id='about'>
			<div className='lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 mt-12 sm:py-16 flex flex-col'>
				<Image src='/aboutme.png' alt='' width={400} height={400} className='pointer-events-none place-self-center select-none h-auto' priority/>
				<div>
					<h2 className='text-4xl font-bold text-white mb-4 my-8 lg:mt-4 text-center lg:text-left'>About Me</h2>
					<p className='text-base lg:text-lg mr-0 lg:mr-8'>
						Hi! I'm currently a second year full-time student at the University of Calgary studying Computer Science.
						<br/><br/>
						I was motivated to enter this field of study long before I entered university, and throughout my journey, I have only grown my interest further.
						My motivation is fueled by an enjoyment in problem solving and logical thinking.
						<br/><br/>
						I mainly find my enjoyment in coding, and I enjoy creating my own projects. My aim is to apply this passion to the real world!
						<br/><br/>
						I am currently expecting to graduate with a BSc in Computer Science in 2026.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutSection