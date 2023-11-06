import React from 'react'
import Image from 'next/image';

const BoxedList = ({header, items} : {header : string, items : Array<{name: string, iconPath: string}>}) => {
	return (
		<div className='px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
				<div className='py-4 place-self-center text-center text-4xl font-bold'>
					<h1>{header}</h1>
				</div>
				<div className='border=[#121212] border rounded-md mt-4 py-8 px-17 flex flex-col'>
					<ul className='items-center px-2 py-0 sm:p-4 flex-row space-x-4 justify-evenly flex'>
						{items.map((item, index) => 
						<li key={index} className='block sm:text-xl rounded md:p-0 hover:text-white'>
							<Item name={item.name} iconPath={item.iconPath}/>
						</li>)}
					</ul>
				</div>
		</div>
	)
};

const Item = ({name, iconPath} : {name : string, iconPath : string}) => {
	return (
	<div className='sm:hover:bg-slate-700 sm:rounded-xl sm:px-2 sm:py-2 lg:px-3 lg:py-3'>
		<Image src={iconPath} alt={name} width={100} height={100}
			className='pointer-events-none place-self-center select-none'/>
	</div>
			
		
	);
};

export default BoxedList;