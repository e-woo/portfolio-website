import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#121212] font-nunito'>
			<Navbar/>
			<div className='container mt-32 mx-auto px-12 py-4'>
				<HeroSection/>
				<AboutSection/>
				<SkillsSection/>
			</div>
		</main>
	);
};