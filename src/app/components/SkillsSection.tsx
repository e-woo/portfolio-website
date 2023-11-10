import React from 'react'
import BoxedList from './BoxedList'

const SkillsSection = () => {
  return (
  	<div id='skills' className='pt-24'>
		<BoxedList header='Languages' items={languages}/>
		<BoxedList header='Libraries and Frameworks' items={libsAndFrameworks}/>
	</div>
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
		name: 'C',
		iconPath: '/icons/languages/c.png'
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
		name: 'SQL',
		iconPath: '/icons/languages/sql.png'
	}
]

const libsAndFrameworks = [
	{
		name: 'NumPy',
		iconPath: '/icons/libs/numpy.png'
	},
	{
		name: 'JUnit',
		iconPath: '/icons/libs/junit.png'
	},
	{
		name: 'React',
		iconPath: '/icons/libs/react.png'
	},
	{
		name: 'Node.js',
		iconPath: '/icons/libs/nodejs.png'
	},
	{
		name: 'Next.js',
		iconPath: '/icons/libs/nextjs.png'
	},
	{
		name: 'Tailwind CSS',
		iconPath: '/icons/libs/tailwindcss.png'
	}
];

export default SkillsSection