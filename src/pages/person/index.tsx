import Footer from '@/components/footer'
import Navbarr from '@/components/navbar/Index'
import React from 'react'
import '../../app/globals.css'
import PersonUser from '@/components/personUser'

function person() {
  return (
    <div>
        <Navbarr/>
        <PersonUser/>
        <Footer/>        
    </div>
  )
}

export default person