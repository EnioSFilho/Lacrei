'use client'
import React, { useState } from 'react'
import { Container } from '../container/container.style'
import { ContainerText } from '../container/containerText.style'
import './style.css'

function PersonUser() {

   

    return (
        <>
            <div className='container'>


                <div className='containerText'>

                    <div className='PersonUserText'>
                        <h1>Pessoa Usuária</h1>
                    </div>

                    <div className='PersonText'>
                        <div className='verticalLine'>
                            <span>.</span>
                        </div>
                        <div>
                            <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
                        </div>
                    </div>

                    </div>

                <div>
                    <img src="/images/celular.png" alt="Celular" id='user' />
                </div>

                </div>
            


        </>
    )
}

export default PersonUser
