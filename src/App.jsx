import { LanguageProvider } from './LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Steps from './components/Steps'
import Details from './components/Details'
import Reviews from './components/Reviews'
import Properties from './components/Properties'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Steps />
        <Details />
        <Reviews />
        <Properties />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
