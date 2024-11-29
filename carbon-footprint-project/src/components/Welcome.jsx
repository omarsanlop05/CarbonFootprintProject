import React from "react";
import './Welcome.css';
import { Container, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Welcome(){

    return(
        <Container fluid className="text-center py-5">
            <h1 className="main-title text-color">Welcome to Our Page</h1>
            <p className="intro-text text-color">
                Here you can calculate your personal carbon footprint and learn more about how to reduce your environmental impact.
            </p>
            <Button variant="primary" as={Link} to="/calculator">
                Go to the Form
            </Button>
        </Container>
    );
}

export default Welcome;

            