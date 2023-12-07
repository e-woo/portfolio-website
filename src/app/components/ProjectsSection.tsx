import React from 'react';
import ProjectCard from './ProjectCard';
const ProjectsSection = () => {
	return (
		<div id='projects'>
			<h1 className='py-16 place-self-center text-center text-6xl font-bold'>Projects</h1>
			<div>
				<ul className='grid lg:mx-16 lg:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-24 xl:gap-12'>
					{projects.map((project, index) => 
					<li key={index}>
						<ProjectCard name={project.name} tools={project.tools} description={project.description} imagePath={project.imagePath} link={project.link} githubLink={project.githubLink}/>
					</li>)
					}
				</ul>
			</div>
		</div>
	);
};

const projects = [
	{
		name: 'Nether Depths Mod',
		tools: 'Java, SpongePowered Mixin',
		description: <>
			The Nether Depths Mod is a mod developed for the popular game <i>Minecraft: Java Edition</i>, using the <i>Fabric API</i>, a powerful modding tool.
			<br/><br/>
			Some features involved the usage of a mixin library, allowing for the injection of code into the base game's source code.
			<br/><br/>
			Development of this project required me to interpret and extrapolate important details from an existing codebase of considerable size. Knowledge of object oriented concepts were integral to its success.
		</>,
		imagePath: '/projects/netherdepthsmod.png',
		link: null,
		githubLink: 'https://github.com/e-woo/nether_depths_mod'
	},
	{
		name: 'DinoDB',
		tools: 'Typescript, HTML, CSS, React, Node.js, MySQL',
		description: <>
			DinoDB is a full stack team project which involved us creating a website and a database, with MySQL.
			<br/><br/>
			The goal was to develop a database of extracurriculars at UCalgary, where users can easily find information on any activity, all in one place.
			<br/><br/>
			Users can also host their own clubs, programs, events and post volunteering opportunities and announcements.
			<br/><br/><b>Project is currently a work in progress.</b>
		</>,
		imagePath: '/projects/DinoDB.png',
		link: null,
		githubLink: 'https://github.com/e-woo/dinodb'
	},
	{
		name: 'Recommendify',
		tools: 'Typescript, HTML, CSS, React, Tailwind CSS',
		description: <>
			Recommendify is a simple web application that generates Spotify playlists for users.
			<br/><br/>
			It interacts with different endpoints of the Spotify API, such as fetching a user's profile, searching for artists/tracks, using Spotify's recommendation API to generate playlists, and saving said playlists to user's Spotify profiles.
			<br/><br/>
			This project involved interacting with the Fetch API to submit HTTP requests and handle responses. It was developed in a Vite environment.
			<br/><br/><b>Due to restrictions on Spotify Developer apps, this app currently only works for whitelisted users. Please contact me if you would like to try it.</b>
		</>,
		imagePath: '/projects/recommendify.png',
		link: 'https://recommendify.netlify.app',
		githubLink: ''
	}
	// {
	// 	name: '',
	// 	tools: '',
	// 	description: <></>,
	// 	imagePath: '',
	// 	link: null,
	// 	githubLink: ''
	// }
];

export default ProjectsSection;