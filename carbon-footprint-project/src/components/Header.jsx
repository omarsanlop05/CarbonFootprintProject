import React from "react";
import './Header.css';
import { Container, Navbar, Nav, Button, Dropdown, NavLink } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate(); // Hook para navegación

    const handleButtonClick = () => {
        if (props.logState) {
          // Si está logueado, desloguear y redirigir a "/"
          props.action(false); // Cambiar estado de logueo a false
        }
        navigate("/"); // Redirigir a "/"
      };

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
                            <p className="nav">Home</p>
                        </NavLink>
                        <NavLink as={Link} to="/about">
                            <p className="nav">About</p>
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

                    <Button variant="outline-success" onClick={handleButtonClick}>{props.logState ? "Log Out" : "Log In"}</Button>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Header;
