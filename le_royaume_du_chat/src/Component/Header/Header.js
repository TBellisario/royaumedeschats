import React, { Component } from 'react';
import logo from './logo.png';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid, Cell } from 'react-mdl';

console.log(logo); 

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Nav>
        <img src={logo} alt="Logo" height='100px' />
        </Nav>
      
      <Navbar.Brand><h1>Le Royaume du Chat</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        
    </Navbar>

      </div>
      
    );
  }
}

export default Header;

