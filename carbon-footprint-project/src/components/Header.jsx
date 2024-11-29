import React from "react";
import './Header.css';
import { Container, Navbar, Nav, Button, Dropdown, NavLink } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';

function Header() {

    let location = useLocation();
    var currentLocation = location.pathname === "/calculator";

    return (
        <Navbar bg="success" variant="dark" expand="lg" className="py-3">
            <Container fluid className="rounded p-3 background">
                {/* Logo y título */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src="/images/logo.jpeg" alt="Logo" className="logo" />
                    <h1 className="h3 mb-0 titles">EcoWeb</h1>
                </Navbar.Brand>

                {/* Botón de navegación colapsable */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Contenido de la navbar */}
                <Navbar.Collapse id="navbar-nav" className="justify-content-between">

                    <Nav>
                        <NavLink as={Link} to="/">
                            Home
                        </NavLink>
                        <NavLink as={Link} to="/about">
                            About
                        </NavLink>
                    </Nav>

                    {/* Menú desplegable de organizaciones */}
                    <Dropdown className="me-3">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Environmental Organizations
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item
                                href="https://www.greenpeace.org/international/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Greenpeace
                            </Dropdown.Item>
                            <Dropdown.Item
                                href="https://www.wwf.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit WWF
                            </Dropdown.Item>
                            <Dropdown.Item
                                href="https://www.nature.org/en-us/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit The Nature Conservancy
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* Navegación adicional */}
                    <Nav>
                        <Button variant="success" as={Link} to={currentLocation ? "/" : "/calculator"}>
                            {currentLocation ? "Home" : "Form"}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Header;
