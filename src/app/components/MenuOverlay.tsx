import React from 'react';
import { NavItem } from './Navbar';
import { Url } from 'next/dist/shared/lib/router/router';
const MenuOverlay = ( {navItems} : {navItems: Array<{href: Url, title: String}>}) => {
	return (
		<ul className='flex flex-col py-4 items-center'>
			{
				navItems.map((item, index) => 
				<li key={index}>
					<NavItem href={item.href} title={item.title} isOverlay={false}/>
				</li>)
			}
		</ul>
	);
};

export default MenuOverlay;