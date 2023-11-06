import React from 'react'
import BoxedList from './BoxedList'
import python from '/public/icons/languages/python.png';

const SkillsSection = () => {
  return (
    <BoxedList header='Languages' items={languages}/>
  )
}

const languages = [
    {
        name: 'Python',
        iconPath: '/icons/languages/python.png',
    },
    {
        name: 'Java',
        iconPath: '/icons/languages/java.png'
    },
    {
        name: 'HTML',
        iconPath: '/icons/languages/html.png'
    },
    {
        name: 'CSS',
        iconPath: '/icons/languages/css.png'
    },
    {
        name: 'Javascript',
        iconPath: '/icons/languages/javascript.png'
    },
    {
        name: 'Typescript',
        iconPath: '/icons/languages/typescript.png'
    },
    {
        name: 'Assembly',
        iconPath: '/icons/languages/assembly.png'
    }
]

export default SkillsSection