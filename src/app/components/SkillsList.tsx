import React from 'react';
import Image from 'next/image';

const BoxedList = ({header, items} : {header : string, items : Array<{name: string, iconPath: string}>}) => {
	return (
		<div className='px-4 py-8 xl:gap-16 sm:py-12 xl:px-16'>
				<h1 className='py-4 place-self-center text-center text-4xl font-bold'>{header}</h1>
				<div className='border-[#474747] border rounded-md px-2 mt-4 pt-6 pb-4 flex flex-col'>
					<ul className='items-center px-2 py-0 sm:p-4 gap-x-6 gap-y-4 justify-center flex flex-wrap'>
						{items.map((item, index) => 
						<li key={index} className='rounded hover:text-white sm:text-xl md:hover:-translate-y-3 transition-[1s] ease-in-out'>
							<Item name={item.name} iconPath={item.iconPath}/>
						</li>)}
					</ul>
				</div>
		</div>
	);
}

const Item = ({name, iconPath} : {name : string, iconPath : string}) => {
	return (
	<div className='md:hover:bg-[#3c4545] sm:rounded-xl sm:px-2 sm:py-2 lg:px-3 md:[&>p]:hover:opacity-100 max-w-[40px] sm:max-w-[60px] md:max-w-full transition-[.5s] flex flex-col items-center'>
		<Image src={iconPath} alt={name} width={90} height={90} className='pointer-events-none select-none h-auto'/>
		<p className='hidden md:block text-center md:pt-3 opacity-0 select-none whitespace-pre-line transition-[0s]'>{name}</p>
	</div>
			
		
	);
}

export default BoxedList;