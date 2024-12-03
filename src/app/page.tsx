"use client"
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ThreeScene, { CameraControls } from './components/Models/ThreeScene';
import { useEffect, useRef, useState } from 'react';

const sections = ['section1', 'section2', 'section3', 'section4', 'section5'] as const;

export default function Home() {
	const sceneRef = useRef<CameraControls | null>(null);

	const [currentSection, setCurrentSection] = useState<number>(0);
	const isScrolling = useRef<boolean>(false); // Prevent rapid scrolling
	const touchStartY = useRef<number>(0); // Track the starting position for touch
	const touchDeltaY = useRef<number>(0); // Track the distance moved during touch


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
		sceneRef.current.moveToPosition(nextSection, 1.5);
	}

    if (nextSection !== currentSection) {
		setCurrentSection(nextSection);
		scrollToSection(nextSection);
    }

	setTimeout(() => {
		isScrolling.current = false;
	}, 1500);

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
		<div className='h-screen w-screen overflow-hidden'>
			<ThreeScene ref={sceneRef} />
      {/* Each inner div is a scroll snap point */}
      {/* <div key="section1" id="section1" className="snap-start bg-red-400 h-screen w-screen"></div>
      <div key="section2" id="section2" className="snap-start bg-orange-400 h-screen w-screen"></div>
      <div key="section3" id="section3" className="snap-start bg-yellow-400 h-screen w-screen"></div>
      <div key="section4" id="section4" className="snap-start bg-green-400 h-screen w-screen"></div>
      <div key="section5" id="section5" className="snap-start bg-blue-400 h-screen w-screen"></div> */}
    </div>
	);
}