import React, { useId } from 'react'

const ProjectItem = ({ projectName, iconCss } : { projectName: string, iconCss: string }) => {
    
    const id = useId();
    
    return (
        <div className='flex gap-4 items-center justify-between bg-gray-500 bg-opacity-20 py-2 pl-4 rounded-full pointer-events-none select-none'>
            {/* <img src={listItem.iconPath} alt={listItem.name} className='max-w-[32px] max-h-[32px] rounded-lg'/> */}
            <div className='flex gap-4 items-center'>
                <i className={`${iconCss} text-2xl lg:text-4xl xl:text-5xl`}></i>
                <p className='text-lg lg:text-xl xl:text-2xl'>{projectName}</p>
            </div>
            <div id={id} className='pr-4'>
                More
            </div>
        </div>
    )
}

export default ProjectItem