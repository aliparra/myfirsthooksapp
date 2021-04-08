import './NavMenu.css'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import React from 'react';

const NavMenu = () => {
    return (
        <div className='NavMenu'>
            <Navbar bg="red" expand="lg" className='navbar-custom'>
                <Navbar.Brand href="/home" className='mx-4'>Alice Hooks App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                    <Nav.Link href="#home" className='mx-3 '>Home</Nav.Link>
                    <Nav.Link href="#link" className='mx-3'>Link</Nav.Link>
                    <NavDropdown title="Dropdown" className='mx-3' id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
};

export default NavMenu;