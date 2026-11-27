import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Community from '../components/Community'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <Hero/>
        <Features/>
        <Community/>
        <Footer/>   
    </div>
  )
}

export default Home