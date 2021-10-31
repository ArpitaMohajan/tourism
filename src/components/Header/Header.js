import { signOut } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import Dropdown from '@restart/ui/esm/Dropdown';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Saint Martin Tour</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="/home#home">Home</Nav.Link>
                        <Nav.Link href="/home#services">Services</Nav.Link>
                        <Nav.Link href='/aboutUs'>About</Nav.Link>
                        <Nav.Link href='/contactUs'>Contact</Nav.Link>

                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link href="/login">Login</Nav.Link>
                        } */}
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Login"
                            menuVariant="dark"

                        >
                            {/* {user?.email ?
                                <Button onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link href="/login">Login</Nav.Link>
                            } */}

                            <NavDropdown.Item href="/addService">My Orders</NavDropdown.Item>
                            <NavDropdown.Item href="/manageOrder">Manage All Orders</NavDropdown.Item>
                            <NavDropdown.Item href="/addOffer">Add a New Orders</NavDropdown.Item>


                        </NavDropdown>

                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link href="/login">Login</Nav.Link>


                        }




                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>





    );
};

export default Header;