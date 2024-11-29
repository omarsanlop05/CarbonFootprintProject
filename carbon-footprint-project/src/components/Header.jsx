import React from "react";
import './Header.css';
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';

function Header() {

    let location = useLocation();
    var currentLocation = location.pathname === "/calculator";

    return (
        <Navbar bg="success" variant="dark" expand="lg" className="py-3">
            <Container className="d-flex justify-content-between align-items-center rounded p-3 background">
                {/* Logo */}
                <Navbar.Brand as={Link} to="/">
                    <img src="/images/logo.jpeg" alt="Logo" className="logo" />
                </Navbar.Brand>

                {/* Título y navegación */}
                <div className="d-flex justify-content-between align-items-center w-100">
                    <h1 className="h3 mb-0 ms-3 titles">EcoWeb</h1>
                    <Nav className="ms-auto">
                        {/* Botón para cambiar entre Home y Form */}
                        <Button variant="light" as={Link} to={currentLocation ? "/" : "/calculator"}>
                            {currentLocation ? "Home" : "Form"}
                        </Button>

                        {/* Botón para Greenpeace */}
                        <Button
                            variant="light"
                            href="https://www.greenpeace.org/international/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ms-3"
                        >
                            Greenpeace
                        </Button>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
