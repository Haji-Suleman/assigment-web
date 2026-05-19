import { useState } from 'react'
import Navbar from './Components/Navbar'
import SecondNav from './Components/SecondNav'
import HeroSection from "./Components/HeroSection"
import AboutUs from './Components/Aboutus'
function App() {


  return (
    <>
      <Navbar />
      <SecondNav />
      <HeroSection />
      <AboutUs />
    </>
  )
}

export default App
