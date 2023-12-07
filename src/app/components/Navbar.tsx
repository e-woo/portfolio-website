"use client";
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React, { MouseEventHandler, useState } from 'react';
import MenuOverlay from './MenuOverlay';

export const navItems = [
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
		<nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border border-b-[#373944] border-x-transparent border-t-transparent min-h-[8vh]'>
			<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
			<div className='flex container flex-wrap items-center justify-between mx-auto px-4 py-4 lg:py-6'>
				<Link href={'/'} className='text-2xl md:text-5xl text-white font-extrabold'>
					Ethan Woo
				</Link>
				<div className='block lg:hidden'>
					{
						navbarOpen ?
						<button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
							<i className='bx bx-x text-3xl'/>
						</button>
						:
						<button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
							<i className='bx bx-menu text-3xl'/>
						</button>
					}
				</div>
				<div className='menu hidden lg:block lg:w-auto' id='navbar'>
					<ul className='flex items-center p-4 md:p-0 md:flex-row md:space-x-8 mt-0 gap-6'>
						{
							navItems.map((item, index) =>
							<li key={index}>
								<NavItem href={item.href} title={item.title} isOverlay={true} />
							</li>)
						}
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay navItems={navItems} onClick={() => setNavbarOpen(false)}/> : null}
		</nav>
	);
};

export const NavItem = ({href, title, isOverlay, onClick} : {href: Url, title: string, isOverlay: boolean, onClick?: MouseEventHandler}) => {
	return (
		<Link href={href} onClick={onClick}
			className={'relative block text-[#bbbbbb] sm:text-xl rounded md:p-0 hover:text-white' + (isOverlay ? 
			'content-[""] before:absolute before:top-full before:left-0 before:w-0 before:h-[2px] before:bg-white before:transition-[.3s] hover:text-white hover:before:w-full' : '')}>
			{title}
		</Link>
	);
};



export default Navbar;
