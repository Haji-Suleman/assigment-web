import { useState } from 'react'
import Navbar from './Components/Navbar'
import SecondNav from './Components/SecondNav'
import HeroSection from "./Components/HeroSection"
import AboutUs from './Components/Aboutus'
import WhyChoose from './Components/WhyChoose'
import '@fortawesome/fontawesome-free/css/all.min.css'
function App() {


  return (
    <>
      <Navbar />
      <SecondNav />
      <HeroSection />
      <AboutUs />
      <WhyChoose />
    </>
  )
}

export default App
