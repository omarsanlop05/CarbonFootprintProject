import React from "react";
import './Info.css';
import { Container, Button } from "react-bootstrap";

function Info() {
    return (
        <Container fluid className="py-5 fondo-info">
            <h1 className="form-title">Information About Carbon Footprint</h1>
            <p>Here you can add informative content about carbon footprint, tips to reduce it, and more.</p>

            {/* Basic Explanation */}
            <section className="my-4">
                <h2 className="category-title">What is a Carbon Footprint?</h2>
                <p>
                    The carbon footprint is a measure of the impact that our activities have on the environment, in terms of the
                    amount of greenhouse gases we produce.
                </p>
            </section>

            {/* Tips to reduce carbon footprint */}
            <section className="my-4">
                <h2 className="category-title">How to Reduce Your Carbon Footprint</h2>
                <p>
                    In this section, you can include tips and best practices for reducing your carbon footprint, such as minimizing
                    plastic use, opting for sustainable transportation, etc.
                </p>
            </section>

            {/* Additional Information and Buttons */}
            <section className="mt-5 text-center">
                <p>
                    Learn more about global efforts to reduce carbon emissions and protect the environment by visiting these
                    organizations. They are dedicated to sustainability and climate action.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <Button
                        variant="success"
                        href="https://www.greenpeace.org/international/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit Greenpeace
                    </Button>
                    <Button
                        variant="success"
                        href="https://www.wwf.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit WWF
                    </Button>
                    <Button
                        variant="success"
                        href="https://www.nature.org/en-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visit The Nature Conservancy
                    </Button>
                </div>
            </section>
        </Container>
    );
}

export default Info;
