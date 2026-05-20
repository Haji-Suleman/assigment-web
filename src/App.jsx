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
    </>
  )
}

export default App
