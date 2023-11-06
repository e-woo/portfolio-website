"use client";
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React, { useState } from 'react';
import MenuOverlay from './MenuOverlay';

const navItems = [
	{
		title: 'About',
		href: '#about'
	},
	{
		title: 'Skills',
		href: '#skills'
	},
	{
		title: 'Projects',
		href: '#projects'
	},
	{
		title: 'Contact',
		href: '#contact'
	}
]

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
			<div className='flex container flex-wrap items-center justify-between mx-auto px-4 py-4 lg:py-6'>
				<Link href={'/'} className='text-2xl md:text-5xl text-white font-extrabold'>
					Ethan Woo
				</Link>
				<div className='mobile-menu block md:hidden'>
					{
						navbarOpen ? (
							<button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
								<i className='bx bx-x'></i>
							</button>
						) : (
							<button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
								<i className='bx bx-menu'></i>
							</button>
						)
					}
				</div>
				<div className='menu hidden md:block md:w-auto' id='navbar'>
					<ul className='flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
						{
							navItems.map((item, index) =>
							<li key={index}>
								<NavItem href={item.href} title={item.title} isOverlay={true}/>
							</li>)
						}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay navItems={navItems}/> : null}
		</nav>
	);
};

const NavItem = ({href, title, isOverlay} : {href: Url, title: string, isOverlay: boolean}) => {
	return (
		<Link href={href} className={'relative block text-[#bbbbbb] sm:text-xl rounded md:p-0 hover:text-white' + (isOverlay ? 
		'content-[""] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-[.3s] hover:text-white hover:before:w-full' : '')}>
			{title}
		</Link>
	);
};



export default Navbar;
export { NavItem };