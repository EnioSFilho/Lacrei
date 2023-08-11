"use client"
import React from 'react'
import "./style.css"


function Footer() {
  return (
    <div className='containerFooter'>
      <div className='containerLinks'>
        <div>
          <a href="" >Home</a>
        </div>
        <div>
          <a href="">Pessoa Usuária</a>
        </div>
        <div>
          <a href="">Profissional</a>
        </div>

      </div>

      <div className='containerMedias'>
        <div>
          <img src="/images/FacebookLogo.png" alt="Facebook" />
        </div>

        <div>
          <img src="/images/InstagramLogo.png" alt="" />
        </div>

        <div>
          <img src="/images/LinkedinLogo.png" alt="" />
        </div>


      </div>

      <div className='challengeText'>
        <div>
          <p>Desafio Front-end Lacrei  </p>
        </div>

      </div>



    </div>
  )
}

export default Footer
