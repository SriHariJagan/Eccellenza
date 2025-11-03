import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import About from '../About/About'
import HomeServices from './HomeServices/HomeServices'
import Portfolio from '../Portfolio/Portfoilo'
import OurWork from './OurWork/OurWork'
import VisionMission from './VisionMission/VisionMission'
import ClientsSection from './ClientsSection/ClientsSection'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div >
        <HeroSection />
        <About />
        <HomeServices />
        <Portfolio />
        <OurWork />
        {/* <VisionMission /> */}
        <ClientsSection />
        <Contact />
    </div>
  )
}

export default Home