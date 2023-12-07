import React, { MouseEventHandler } from 'react';
import { NavItem } from './Navbar';
import { Url } from 'next/dist/shared/lib/router/router';
const MenuOverlay = ({ navItems, onClick } : { navItems: {href: Url, title: string}[], onClick?: MouseEventHandler }) => {
	return (
		<ul className='flex flex-col py-4 items-center'>
			{
				navItems.map((item, index) => 
				<li key={index} className='py-3 text-xl'>
					<NavItem href={item.href} title={item.title} isOverlay={false} onClick={onClick}/>
				</li>)
			}
		</ul>
	);
};

export default MenuOverlay;