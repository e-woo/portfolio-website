"use client";
import React, { useEffect } from 'react'

const ExperienceSection = () => {
    const addClassList = (element: Element) => {
        element.classList.add('ignore-page-scroll')
        if (element.children.length > 0) {
            Object.values(element.children).forEach((child: Element) => {
                addClassList(child);
            });
        }
    }

    const removeClassList = (element: Element) => {
        element.classList.remove('ignore-page-scroll')
        if (element.children.length > 0) {
            Object.values(element.children).forEach((child: Element) => {
                removeClassList(child);
            });
        }
    }

    useEffect(() => {
        const observer = () => {
            const element = document.getElementById('e-section');
            if (!element) return;
            if (element.scrollHeight <= element.clientHeight) return;

            if (window.innerWidth < 768) {
                addClassList(element);
            }
            else {
                removeClassList(element);
            }
        }
        observer();

        window.addEventListener('resize', observer);
        return () => {
            window.removeEventListener('resize', observer);
        };
    });

    return (
        <section className='w-full h-full flex flex-col items-center justify-center lg:justify-start lg:grid lg:grid-cols-3 py-8 px-8'>
            <div id="e-section" className='z-50 col-span-2 items-center overflow-auto max-h-[85%] bg-gray-500 bg-opacity-20 p-8 mx-12 rounded-3xl select-none flex flex-row gap-12'>
                <img src="/experience/cnrl.png" alt="CNRL" className='hidden md:block max-w-[100px]'/>
                <div>
                    <h3 className='text-3xl font-bold text-primary-400 mb-2 text-center md:text-start'>Canadian Natural Resources Limited</h3>
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
        </section>
    )
}

export default ExperienceSection