import React from 'react';
import Image from 'next/image';

const BoxedList = ({header, items} : {header : string, items : Array<{name: string, iconPath: string}>}) => {
	return (
		<div className='px-4 py-8 xl:gap-16 sm:py-12 xl:px-16'>
				<h1 className='py-4 place-self-center text-center text-4xl font-bold'>{header}</h1>
				<div className='border-[#474747] border rounded-md px-2 mt-4 pt-6 pb-4 flex flex-col'>
					<ul className='items-center px-2 py-0 sm:p-4 gap-x-6 gap-y-4 justify-center flex flex-wrap'>
						{items.map((item, index) => 
						<li key={index} className='rounded hover:text-white sm:text-xl'>
							<Item name={item.name} iconPath={item.iconPath}/>
						</li>)}
					</ul>
				</div>
		</div>
	);
};

const Item = ({name, iconPath} : {name : string, iconPath : string}) => {
	return (
	<div className='md:hover:bg-[#3c4545] sm:rounded-xl sm:px-2 sm:py-2 lg:px-3 md:[&>p]:hover:visible max-w-[40px] sm:max-w-[60px] md:max-w-full'>
		<Image src={iconPath} alt={name} width={90} height={90} className='pointer-events-none place-self-center self-center select-none'/>
		<p className='w-0 h-0 md:w-full md:h-full text-center md:pt-3 invisible select-none whitespace-pre-line'>{name}</p>
	</div>
			
		
	);
};

export default BoxedList;