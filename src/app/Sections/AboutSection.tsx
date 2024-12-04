import React from 'react'
import Image from 'next/image'
const AboutSection = () => {
	return (
		<section className='w-full h-full text-white pt-28 px-16' id='about'>
			<div className='lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 mt-12 sm:py-16 flex flex-col'>
				{/* <Image src='/aboutme.png' alt='' width={400} height={400} className='pointer-events-none place-self-center select-none h-auto' priority/> */}
				<div>
					<h2 className='text-4xl font-bold text-primary-400 mb-4 my-8 lg:my-12 text-center lg:text-left'>About Me</h2>
					<div className='text-base lg:text-lg flex flex-col gap-8 mr-0 lg:mr-8'>
						<p>
							Hi! I'm currently a third year full-time student at the University of Calgary studying Computer Science.
						</p>
						<p>
							I was motivated to enter this field of study long before I entered university, and throughout my journey, I have developed a strong passion for software development.
							My motivation is fueled by an enjoyment in problem solving and logical thinking.
						</p>
						<p>
							I mainly find my enjoyment in coding, and I love creating my own projects. My aim is to apply this passion to the real world!
						</p>
						<p>
							I am currently expecting to graduate with a BSc in Computer Science in 2026.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection