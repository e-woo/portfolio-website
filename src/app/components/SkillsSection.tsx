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
        iconPath: '/skills/languages/python.png'
    },
    {
        name: 'Java',
        iconPath: '/skills/languages/java.png'
    },
	{
		name: 'C',
		iconPath: '/skills/languages/c.png'
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
        name: 'JavaScript',
        iconPath: '/skills/languages/javascript.png'
    },
    {
        name: 'TypeScript',
        iconPath: '/skills/languages/typescript.png'
    },
	{
		name: 'SQL',
		iconPath: '/skills/languages/sql.png'
	}
]

const libsAndFrameworks = [
	{
		name: 'Blazor',
		iconPath: '/skills/libs/blazor.png'
	},
	{
		name: 'ASP.NET Core',
		iconPath: '/skills/libs/aspnetcore.png'
	},
	{
		name: 'EF Core',
		iconPath: '/skills/libs/efcore.png'
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
		name: 'Express.js',
		iconPath: '/skills/libs/expressjs.png'
	},
	{
		name: 'Tailwind CSS',
		iconPath: '/skills/libs/tailwindcss.png'
	}
]

export default SkillsSection;