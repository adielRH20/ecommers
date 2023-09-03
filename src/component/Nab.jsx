import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import User from '../assets/icons/user.svg'
import Cart from '../assets/icons/cart.svg'
import Box from '../assets/icons/box.svg'
import { Link } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap'
import '../styles/navbar.css'

const Nab = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  }
  return (
    <>
      <Navbar className='navbar' bg='dark' data-bs-theme='dark'>
        <Container className='container'>
          <Navbar.Brand className='title' as={Link} to='/'>e-commerse</Navbar.Brand>
          <Nav className='bottos'>
            <Nav.Link className='button' as={Link} to='/login'><img src={User} /></Nav.Link>
            <Nav.Link className='button' as={Link} to='/shopping'><img src={Box} /></Nav.Link>
            <Nav.Link className='button'><img onClick={() => setShow(true)} src={Cart} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>

  )
}

export default Nab
