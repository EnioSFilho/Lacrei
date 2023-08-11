"use client"
import React from 'react'
import "./style.css"
import { ButtonGreen } from '../button/ButtonGreen.style'
import { ButtonWhite } from '../button/ButtonWhite.style'

function HomeMain() {
  return (
    <div className='containerMain'>
      <div className='welcomeContainer'>

        <h1>Boas vindas a Lacrei Saúde</h1>

        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>

        <div className='containerButton'>
          <div>
            <ButtonGreen>Pessoa Usuária</ButtonGreen>
          </div>
          <div>
            <ButtonWhite>Profissional</ButtonWhite>
          </div>
        </div>

      </div>

      <div>
        <img src="/images/medica.png" alt="medica" id='imgMedica'  />

      </div>

      


    </div>
  )
}

export default HomeMain