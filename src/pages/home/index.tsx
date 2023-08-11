import Footer from '@/components/footer'
import HomeMain from '@/components/homemain'
import Navbar from '@/components/navbar/Index'
import React from 'react'

function home() {
  return (
    <div>
        <Navbar/>
        <HomeMain/>
        <Footer/>
      
    </div>
  )
}

export default home