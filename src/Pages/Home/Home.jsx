import React from 'react'
import HeroSection from './HeroSection/HeroSection'
import About from '../About/About'
import HomeServices from './HomeServices/HomeServices'
import OurWork from './OurWork/OurWork'
import ClientsSection from './ClientsSection/ClientsSection'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

const Home = () => {
  return (
    <div >
        <HeroSection />
        <About />
        <HomeServices />
        <Projects />
        <OurWork />
        <ClientsSection />
        <Contact />
    </div>
  )
}

export default Home