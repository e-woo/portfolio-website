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
import ScrollDots, { ScrollItem } from './components/ScrollDots';
import ExperienceSection from './Sections/ExperienceSection';

const sectionNames: string[] = ['Top', 'About Me', 'Experience', 'Skills', 'Projects', 'Contact'];
const sections = sectionNames.map((sectionName) => sectionName.replace(' ', ''));

export default function Home() {
	const sceneRef = useRef<CameraControls | null>(null);
	const scrollTime = 0.5; // Time in seconds to scroll to the next section

	const [currentSection, setCurrentSection] = useState<number>(0);
	const isScrolling = useRef<boolean>(false); // Prevent rapid scrolling
	const touchStartY = useRef<number>(0); // Track the starting position for touch
	const touchDeltaY = useRef<number>(0); // Track the distance moved during touch

	const sectionScrollCallbacks : ScrollItem[] = sectionNames.map((sectionName) => ({
		sectionName: sectionName,
		callback: (index: number) => {
			if (sceneRef.current) {
				sceneRef.current.moveToPosition(index, scrollTime * 4);
			}
			setCurrentSection(index);
			scrollToSection(index);
		}
	}));

	// Handle the scroll event
	const handleScroll = (event: WheelEvent | TouchEvent): void => {
		if (isScrolling.current) {
			return;
		}

		let delta = 0;
		if (event instanceof WheelEvent) {
			delta = event.deltaY;
		} else if (event instanceof TouchEvent) {
			const touchMoveY = event.touches[0].clientY;
			touchDeltaY.current = touchStartY.current - touchMoveY;
			delta = touchDeltaY.current;
		}

		if (delta > 0 && currentSection >= sections.length - 1) {
			return;
		}

		if (delta < 0 && currentSection <= 0) {
			return;
		}

		isScrolling.current = true;
		const direction = delta > 0 ? 1 : -1;
		const nextSection = Math.max(0, Math.min(sections.length - 1, currentSection + direction));

		if (sceneRef.current) {
			sceneRef.current.moveToPosition(nextSection, scrollTime * 4);
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

	useEffect(() => {
		const handleResize = () => {
			scrollToSection(currentSection);
		}

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	});

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
		<div className='h-screen w-screen overflow-hidden relative font-varela'>
			<ThreeScene ref={sceneRef} />
      {/* Each inner div is a scroll snap point */}
      {/* <div key="section1" id="section1" className="snap-start bg-red-400 h-screen w-screen"></div>
      <div key="section2" id="section2" className="snap-start bg-orange-400 h-screen w-screen"></div>
      <div key="section3" id="section3" className="snap-start bg-yellow-400 h-screen w-screen"></div>
      <div key="section4" id="section4" className="snap-start bg-green-400 h-screen w-screen"></div>
      <div key="section5" id="section5" className="snap-start bg-blue-400 h-screen w-screen"></div> */}
	  		<div className='absolute block z-50'>
			  	<Navbar />
				<div className='fixed top-1/2 right-4 transform -translate-y-1/2 '>
					<ScrollDots scrollItems={sectionScrollCallbacks} activeIndex={currentSection} />
				</div>
				<div key="Top" id="Top" className='h-screen w-screen'>
					<HeroSection />
				</div>
				<div key="AboutMe" id="AboutMe" className='h-screen w-screen'>
					<AboutSection />
				</div>
				<div key="Experience" id="Experience" className='h-screen w-screen'>
					<ExperienceSection />
				</div>
				<div key="Skills" id="Skills" className='h-screen w-screen'>
					<SkillsSection />
				</div>
				<div key="Projects" id="Projects" className='h-screen w-screen'>
					<ProjectsSection />
				</div>
				<div key="Contact" id="Contact" className='h-screen w-screen'>
					<ContactSection />
				</div>
			</div>
		</div>
	);
}