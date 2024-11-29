import React from "react";
import './Footer.css';
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {

  // Function to scroll to the top when the button is clicked
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
    <footer className="bg-dark text-white py-4 mt-5">
        <Container className="card-container footer-text">
        <Row>
            {/* Main info */}
            <Col md={6}>
              <h5>EcoWeb</h5>
              <p>Promoting sustainability and takign care of the environment since 2024.</p>
            </Col>
            {/* To the top */}
            <Col md={6} className="text-md-end">
              <Button onClick={scrollToTop} variant="success">
                  Back to top
              </Button>
            </Col>
        </Row>
        {/* Rights */}
        <div className="text-center mt-3">
            <p>&copy; 2024 EcoWeb. All rights reserved.</p>
        </div>
        </Container>
    </footer>
    );
};

export default Footer;
