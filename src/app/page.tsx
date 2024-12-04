"use client"
import HeroSection from './Sections/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './Sections/AboutSection';
import SkillsSection from './Sections/SkillsSection';
import ProjectsSection from './Sections/ProjectsSection';
import ContactSection from './Sections/ContactSection';
import Footer from './components/Footer';
import ThreeScene, { CameraControls } from './components/Models/ThreeScene';
import { useEffect, useRef, useState } from 'react';
import ScrollDots from './components/ScrollDots';

const sections: string[] = ['section1', 'section2', 'section3', 'section4', 'section5'];

export default function Home() {
	const sceneRef = useRef<CameraControls | null>(null);
	const scrollTime = 2; // Time in seconds to scroll to the next section

	const [currentSection, setCurrentSection] = useState<number>(0);
	const isScrolling = useRef<boolean>(false); // Prevent rapid scrolling
	const touchStartY = useRef<number>(0); // Track the starting position for touch
	const touchDeltaY = useRef<number>(0); // Track the distance moved during touch

	const sectionScrollCallbacks = sections.map(() => (index: number) => {
		if (sceneRef.current) {
			sceneRef.current.moveToPosition(index, scrollTime);
		}
		setCurrentSection(index);
		scrollToSection(index);
	});

	// Handle the scroll event
	const handleScroll = (event: WheelEvent | TouchEvent): void => {
		if (isScrolling.current) {
			return;
		}

		isScrolling.current = true;
		let delta = 0;
		if (event instanceof WheelEvent) {
			delta = event.deltaY;
		} else if (event instanceof TouchEvent) {
			const touchMoveY = event.touches[0].clientY;
			touchDeltaY.current = touchStartY.current - touchMoveY;
			delta = touchDeltaY.current;
		}
		const direction = delta > 0 ? 1 : -1;
		const nextSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));

		if (sceneRef.current) {
			sceneRef.current.moveToPosition(nextSection, scrollTime);
		}

		if (nextSection !== currentSection) {
			setCurrentSection(nextSection);
			scrollToSection(nextSection);
		}

		setTimeout(() => {
			isScrolling.current = false;
		}, scrollTime * 1000);

		//event.preventDefault();
	};

  // Start touch tracking
  const handleTouchStart = (event: TouchEvent): void => {
    touchStartY.current = event.touches[0].clientY;
    touchDeltaY.current = 0; // Reset touch delta
  };

  // Scroll to the specific section
  const scrollToSection = (sectionIndex: number): void => {
    const section = document.getElementById(sections[sectionIndex]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });

    // Clean up event listener on component unmount
    return () => {
		window.removeEventListener('wheel', handleScroll);
		window.removeEventListener('touchstart', handleTouchStart);
		window.removeEventListener('touchmove', handleScroll);
    };
  }, [currentSection, isScrolling]);

	return (
		// <main className='flex min-h-screen flex-col bg-[#121212] font-nunito'>
		// 	<Navbar/>
		// 	<div className='container mt-32 mx-auto px-12 py-4'>
		// 		<HeroSection/>
		// 		<AboutSection/>
		// 		<SkillsSection/>
		// 		<ProjectsSection/>
		// 		<ContactSection/>
		// 	</div>
		// 	<Footer/>
		// </main>
		<div className='h-screen w-screen overflow-hidden relative'>
			<ThreeScene ref={sceneRef} />
      {/* Each inner div is a scroll snap point */}
      {/* <div key="section1" id="section1" className="snap-start bg-red-400 h-screen w-screen"></div>
      <div key="section2" id="section2" className="snap-start bg-orange-400 h-screen w-screen"></div>
      <div key="section3" id="section3" className="snap-start bg-yellow-400 h-screen w-screen"></div>
      <div key="section4" id="section4" className="snap-start bg-green-400 h-screen w-screen"></div>
      <div key="section5" id="section5" className="snap-start bg-blue-400 h-screen w-screen"></div> */}
	  		<div className='absolute block z-50'>
			  	<Navbar />
				<ScrollDots sections={sectionScrollCallbacks} />
				<div key="section1" id="section1" className='h-screen w-screen'>
					<HeroSection />
				</div>
				<div key="section2" id="section2" className='h-screen w-screen'>
					<AboutSection />
				</div>
				<div key="section3" id="section3" className='h-screen w-screen'>
					<SkillsSection />
				</div>
				<div key="section4" id="section4" className='h-screen w-screen'>
					<ProjectsSection />
				</div>
				<div key="section5" id="section5" className='h-screen w-screen'>
					<ContactSection />
				</div>
			</div>
		</div>
	);
}