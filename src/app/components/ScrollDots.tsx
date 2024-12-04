import React, { useState } from 'react'

export interface ScrollItem {
    section: string,
    callback: Function
}

const ScrollDots = ({ sections } : { sections: ScrollItem[] }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        const callback = sections[index].callback;
        if (callback) {
            callback(index);
        }
    }

    return (
        <div className='flex flex-col justify-end fixed right-4 top-8 z-50'>
            {sections.map((section, index) => (
                <div className='group'>
                <div className='flex flex-row justify-end items-center gap-2 text-base group-hover:text-lg '
                    key={index}
                    onClick={() => handleDotClick(index)}>
                    {section.section}
                    <div

                        className={`my-2 rounded-full transition-all cursor-pointer group-hover:w-8 group-hover:h-8 ${activeIndex === index ? 'bg-primary-600 w-7 h-7' : 'bg-white w-5 h-5'}`}
                    />
                </div>
                </div>
            ))}
        </div>
    )
}

export default ScrollDots