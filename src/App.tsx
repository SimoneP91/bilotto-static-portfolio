import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnersStrip from './components/PartnersStrip'
import FeatureArticles from './components/FeatureArticles'
import StarterGuide from './components/StarterGuide'
import StorySection from './components/StorySection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { useInteractiveEffects } from './hooks/useInteractiveEffects'

function App() {
	useInteractiveEffects()

	return (
		<div className="app">
			<Navbar />

			<main className="page">
				<Hero />
				<PartnersStrip />
				<FeatureArticles />
				<StarterGuide />
				<StorySection />
				<ServicesSection />
				<TestimonialsSection />
				<ContactSection />
			</main>

			<Footer />
		</div>
	)
}

export default App
