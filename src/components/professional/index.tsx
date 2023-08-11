"use client"
import React from 'react'


import './style.css'
import { Container } from '../container/container.style'
import { ContainerText } from '../container/containerText.style'


function Profissional() {
    return (
        <>
            <div className='containerProfissional'>
        
                <div className='containerPText'>
            
                    <div className='profissionalTitle'>
                        <h1>Profissional</h1>
                    </div>

                    <div className='profissionalText'>
                        <div className='verticalLine'>
                            <span>.</span>
                        </div>
                        <div>
                            <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
                        </div>
                    </div>
                    
                </div>

                <div>
                    <img src="/images/profissional.png" alt="Celular" id='profissional' />
                </div>
                
            </div>




        </>
    )
}

export default Profissional
