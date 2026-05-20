import { useState } from 'react'
import Navbar from './Components/Navbar'
import SecondNav from './Components/SecondNav'
import HeroSection from "./Components/HeroSection"
import Aboutus from './Components/Aboutus'
import WhyChoose from './Components/WhyChoose'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Assurance from './Components/Assurance'
import KeyQualities from './Components/KeyQualities'
import FAQ from "./Components/FAQ"
import ExceptUS from './Components/ExceptUS'
import CountriesSection from './Components/WorkedOn'
import Footer from './Components/Footer'
function App() {


  return (
    <>
      <Navbar />
      <SecondNav />
      <HeroSection />
      <Aboutus />
      <WhyChoose />
      <Assurance />
      <KeyQualities />
      <FAQ />
      <ExceptUS />
      <CountriesSection />
      <Footer />
    </>
  )
}

export default App
