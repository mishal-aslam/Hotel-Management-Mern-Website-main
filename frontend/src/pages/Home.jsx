import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import RoomsCard from '../components/RoomsCard'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-[#232323]">
      <Navbar />
      <Hero />
      <RoomsCard />
      <Services />
      <Footer />
    </div>
  )
}

export default Home
