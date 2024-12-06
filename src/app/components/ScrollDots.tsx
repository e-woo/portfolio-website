import React, { useCallback, useEffect, useRef, useState } from 'react'

export interface ScrollItem {
    sectionName: string,
    callback: Function
}

const ScrollDots = ({ activeIndex, scrollItems } : { activeIndex: number, scrollItems: ScrollItem[] }) => {
    const [highlightStyle, setHighlightStyle] = useState<{ top: number, height: number, width: number }>({ top: 0, height: 0, width: 0 }); // Stores highlight position and height
    const listItemsRef = useRef<(HTMLDivElement | null)[]>([]); // Refs for each dot
 
    const handleDotClick = (index: number) => {

        activeIndex = index;
        const callback = scrollItems[index].callback;
        if (callback) {
            callback(index);
        }
    }

    // Function to update the highlight position during the transition
    const updateHighlightPosition = () => {
        const selectedItem = listItemsRef.current[activeIndex];
        if (selectedItem) {
            const rect = selectedItem.getBoundingClientRect(); // Get the position and size of the selected item
            const parentRect = selectedItem.parentElement?.parentElement?.getBoundingClientRect(); // Get parent container's position
            const relativeTop = rect.top - (parentRect?.top || 0);

            setHighlightStyle({
                top: relativeTop,
                height: rect.height,
                width: rect.width,
            });
        }
    };

  // Handle when transition starts
  const handleTransitionStart = () => {
    requestAnimationFrame(() => updateHighlightPosition()); // Update immediately on the next frame
  };

  // Handle when transition ends
  const handleTransitionEnd = () => {
    updateHighlightPosition(); // Make sure highlight is up-to-date after transition
  };

  // Monitor changes to activeIndex (when the selection changes)
  useEffect(() => {
    updateHighlightPosition(); // Update position when the activeIndex changes

    // Get the selected item and observe the transition
    const selectedItem = listItemsRef.current[activeIndex];
    if (selectedItem) {
      selectedItem.addEventListener('transitionstart', handleTransitionStart); // Listen for the start of the transition
      selectedItem.addEventListener('transitionend', handleTransitionEnd); // Listen for when the transition ends

      // Cleanup listeners when the component unmounts or index changes
      return () => {
        if (selectedItem) {
          selectedItem.removeEventListener('transitionstart', handleTransitionStart);
          selectedItem.removeEventListener('transitionend', handleTransitionEnd);
        }
      };
    }
  }, [activeIndex]);

    return (
        <div className='flex flex-col items-end z-50 gap-4'>
            {/* Highlighting Block */}
            <div
                className="absolute bg-primary-600 rounded-3xl -z-10 transition-all duration-300 ease-in-out"
                style={{
                    top: highlightStyle.top, // Dynamic top position
                    height: highlightStyle.height, // Dynamic height based on selected div
                    width: highlightStyle.width, // Full width of the parent container
                }}
            />
            {scrollItems.map((scrollItem, index) => (
                <div key={index} className='group'>
                    <div key={index}
                        className={` flex flex-row justify-end items-center w-fit gap-2 cursor-pointer py-1 ${activeIndex === index ? 'px-4' : 'px-2'}`}
                        ref={(el) => { listItemsRef.current[index] = el; }}
                        onClick={() => handleDotClick(index)}
                        >
                            <div className={`mr-1 group-hover:text-lg transition-all duration-300 ${activeIndex === index ? 'text-white text-lg' : 'text-base text-gray-400 group-hover:text-white'}`}>{scrollItem.sectionName}</div>
                            <div
                                className={`my-2 rounded-full transition-all duration-300 cursor-pointer group-hover:scale-150 w-4 h-4 ${activeIndex === index ? 'scale-150 bg-white' : 'bg-gray-400 group-hover:bg-white'}`}
                            />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ScrollDots