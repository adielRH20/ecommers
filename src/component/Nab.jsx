import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import User from '../assets/icons/user.svg'
import Cart from '../assets/icons/cart.svg'
import Box from '../assets/icons/box.svg'
import { Link } from 'react-router-dom';


const Nab = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>e-commerse</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/login'}><img src={User} /></Nav.Link>
            <Nav.Link as={Link} to={'/shopping'}><img src={Box} /></Nav.Link>
            <Nav.Link><img src={Cart} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    );
};

export default Nab;