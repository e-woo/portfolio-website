import React from 'react';

const ProjectCard = ({ name, tools, description, imagePath, link, githubLink } : { name: string, tools: string, description: React.JSX.Element, imagePath: string, link: string | null, githubLink: string }) => {
  return (
		<div className='mx-auto h-full rounded-lg text-white text-center p-[3px] overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 relative'>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
			<div className='h-full rounded-lg bg-[#121212] items-center md:[&_i]:hover:translate-y-0 md:[&_.b2]:hover:delay-0 md:[&_.b1]:hover:delay-75'>
				<div className='h-40 md:h-72 rounded-t-lg relative mb-4' style={{ background: `linear-gradient(rgba(0, 0, 0, 0) 60%, #121212), url(${imagePath})`, backgroundSize: "cover", backgroundPosition: "center"}}>
					<div className='flex justify-end text-2xl md:text-4xl h-12 p-3'>
						<a href={githubLink} target='_blank'>
							<i className='b1 bx bxl-github border-2 rounded-full p-1 border-slate-400 text-slate-400 hover:border-white hover:text-white md:-translate-y-32 transition-[.3s] duration-300  mx-2'/>
						</a>
						{link === null ? <></> :
						<a href={link} target='_blank'>
							<i className='b2 bx bx-link border-2 rounded-full p-1 border-slate-400 text-slate-400 hover:border-white hover:text-white md:-translate-y-32 transition-[.3s] duration-300 delay-75 mx-2'/>
						</a>
						}
					</div>
				</div>
				<div className='p-4 justify-center min-h-36 md:h-full'>
					<h2 className='text-xl md:text-3xl font-bold'>{name}</h2>
					<p className='text-sm md:text-base p-2 text-[#CCCCCC]'>
						<b className='text-white'>Tools Used: </b>{tools}
					</p>
					<p className='text-sm md:text-base p-2 text-left text-[#CCCCCC]'>{description}</p>
				</div>
			</div>
		</div>
  );
};

export default ProjectCard;