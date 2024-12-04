import React, { useState } from 'react'


const ScrollDots = ({ sections } : { sections: Function[] }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        const section = sections[index];
        if (section) {
            section(index);
        }
    }

    return (
        <div className='flex flex-col w-7 items-center fixed right-4 top-8 z-50'>
            {sections.map((_section, index) => (
                <div
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`my-2 rounded-full transition-all cursor-pointer ${activeIndex === index ? 'bg-primary-600 w-7 h-7' : 'bg-white w-5 h-5'}`}
                />
            ))}
        </div>
    )
}

export default ScrollDots