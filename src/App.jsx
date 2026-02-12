import { LanguageProvider } from './LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Steps from './components/Steps'
import Details from './components/Details'
import Reviews from './components/Reviews'
import Properties from './components/Properties'
import ServiceAreas from './components/ServiceAreas'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Steps />
        <Details />
        <Reviews />
        <Properties />
        <ServiceAreas />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
