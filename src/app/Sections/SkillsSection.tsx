import React from 'react'
import BoxedList from '../components/SkillsList'
import VerticalList from '../components/VerticalList'

const SkillsSection = () => {
	return (
		<div className='w-full h-full lg:grid lg:grid-cols-4 gap-12 items-center py-8 px-8 mt-12 flex flex-col'>
			<VerticalList header='Languages' listItems={languages} />
			<VerticalList header='Libraries/Frameworks' listItems={libsAndFrameworks} />
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