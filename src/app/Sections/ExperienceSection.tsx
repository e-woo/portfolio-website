import React from 'react'

const ExperienceSection = () => {
    return (
        <div className='w-full h-full items-center lg:grid lg:grid-cols-2 flex flex-col py-8 px-8'>
            <div className='items-center bg-gray-500 bg-opacity-20 p-8 rounded-3xl pointer-events-none select-none flex flex-row gap-12'>
                <img src="/experience/cnrl.png" alt="CNRL" className='max-w-[200px]'/>
                <div>
                    <h3 className='text-3xl font-bold text-primary-400 mb-2'>Canadian Natural Resources Limited</h3>
                    <p className='text-lg'>
                        At Canadian Natural, I had the opportunity to work on different projects as a full-stack systems development student.
                        Here, we utilize .NET development tools such as C#, Blazor, ASP.NET Core and Entity Framework Core, as well as Oracle Database,
                        to create in-house progressive web applications (PWAs) specialized for business needs.
                        
                        <br/><br/>
                        Besides helping my team with the development of existing projects, I was also able to develop an entirely new PWA which incorporated an automatic
                        emailing system using Microsoft Orchestrator.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection