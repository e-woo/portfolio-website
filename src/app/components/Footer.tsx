"use client"
import React from 'react'
import { NavItem, navItems } from './Navbar'

const Footer = () => {
  return (
    <footer className='flex justify-center border z-1000 border-t-[#373944] border-x-transparent border-b-transparent'>
        <div className='lg:w-3/4 container flex justify-between'>
            <ul className='flex flex-col items-start p-12 gap-6'>
                {
                    navItems.map((item, index) =>
                    <li key={index}>
                        <NavItem href={item.href} title={item.title} isOverlay={true}/>
                    </li>)
                }
            </ul>
            <p className='p-10 justify-end text-2xl text-white font-semibold text-right'>
                Created by Ethan Woo
            </p>
        </div>

    </footer>
  )
}

export default Footer