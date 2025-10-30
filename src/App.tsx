import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import HighlightSection from './components/HighlightSection'
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
        <ServicesSection />
        <HighlightSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
