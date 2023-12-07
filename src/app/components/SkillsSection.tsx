import React from 'react'
import BoxedList from './SkillsList'

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
        iconPath: '/skills/languages/python.png',
    },
    {
        name: 'Java',
        iconPath: '/skills/languages/java.png'
    },
	{
		name: 'C#',
		iconPath: '/skills/languages/csharp.png'
	},
    {
        name: 'HTML',
        iconPath: '/skills/languages/html.png'
    },
    {
        name: 'CSS',
        iconPath: '/skills/languages/css.png'
    },
    {
        name: 'Javascript',
        iconPath: '/skills/languages/javascript.png'
    },
    {
        name: 'Typescript',
        iconPath: '/skills/languages/typescript.png'
    },
	{
		name: 'SQL',
		iconPath: '/skills/languages/sql.png'
	}
]

const libsAndFrameworks = [
	{
		name: 'NumPy',
		iconPath: '/skills/libs/numpy.png'
	},
	{
		name: 'JUnit',
		iconPath: '/skills/libs/junit.png'
	},
	{
		name: 'React',
		iconPath: '/skills/libs/react.png'
	},
	{
		name: 'Node.js',
		iconPath: '/skills/libs/nodejs.png'
	},
	{
		name: 'Next.js',
		iconPath: '/skills/libs/nextjs.png'
	},
	{
		name: 'Tailwind CSS',
		iconPath: '/skills/libs/tailwindcss.png'
	}
]

export default SkillsSection;