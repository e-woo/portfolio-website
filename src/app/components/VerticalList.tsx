import React from 'react'

export interface ListItem {
    name: string,
    iconPath: string
}

const VerticalList = ({ header, listItems } : { header: string, listItems: ListItem[] }) => {
    return (
        <div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-bold text-primary-400'>{header}</h3>
                <div className='flex flex-col gap-2'>
                    {
                        listItems.map((listItem, index) => (
                            <div key={index} className='flex gap-4 items-center bg-gray-500 bg-opacity-20 py-2 pl-4 rounded-full pointer-events-none select-none'>
                                <img src={listItem.iconPath} alt={listItem.name} className='max-w-[32px] max-h-[32px] rounded-lg'/>
                                <p className='text-lg'>{listItem.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default VerticalList