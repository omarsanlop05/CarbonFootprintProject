import React from "react";
import './Meet.css';
import { Container, Row, Col, Image } from "react-bootstrap";

function Meet(){
  return (
    <Container fluid className="py-5 text-color">
        <h1 className="contact-title text-center">Meet Us</h1>
        <p className="text-center">
        Get to know our team, the people behind the project committed to protecting the environment and reducing carbon
        footprints.
        </p>

        {/* Team Members */}
        <Container className="card-container">
            <Row>
                {/* Member 1 */}
                <Col md={4} className="text-center mb-4 team-member">
                <Image
                    src="/images/alexis.jpg"
                    alt="Member 1"
                    roundedCircle
                    className="mb-2 img-style"
                />
                <h4>Alexis Vargas</h4>
                <p>ISGC Student</p>
                </Col>
                {/* Member 2 */}
                <Col md={4} className="text-center mb-4 team-member">
                <Image
                    src="/images/omar.jpg"
                    alt="Member 2"
                    roundedCircle
                    className="mb-2 img-style"
                />
                <h4>Omar Sánchez</h4>
                <p>ISGC Student</p>
                </Col>
                {/* Member 3 */}
                <Col md={4} className="text-center mb-4 team-member">
                <Image
                    src="/images/kenzo.jpg"
                    alt="Member 3"
                    roundedCircle
                    className="mb-2 img-style"
                />
                <h4>Kenzo Matoo</h4>
                <p>ISGC Student</p>
                </Col>
            </Row>
        </Container>
    </Container>
  );
};

export default Meet;
