"use client"
import React, { useState } from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarr() {  
  

  return (
   <div>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className='title' style={{color: "#018762", fontSize: 32,}}>Lacrei</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">          
          <Nav className="ms-auto">
            <Nav.Link href="/"  >Home</Nav.Link>
            <Nav.Link href="/person">Pessoa Usuária</Nav.Link>
            <Nav.Link href="/profissional" >Profissional</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   </div>
   
  );
}

export default Navbarr;