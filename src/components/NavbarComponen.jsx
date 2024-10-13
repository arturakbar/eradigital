import React from 'react'
import{Container, Nav, Navbar }from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"


const NavbarComponen = () => {
  return (
    <>
      <Navbar expand="lg" fixed='top' bg='white'>
      <Container>
        <Navbar.Brand href="#"><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Beli</Nav.Link>
            <Nav.Link href="#link">Tentang Kami</Nav.Link>
            <Nav.Link href="#link">Pesanan</Nav.Link>
            <Link to="#" className="btn btn-teal">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
  )
}

export default NavbarComponen