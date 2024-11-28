import React from "react";
import './Data.css';
import { Container } from "react-bootstrap";

function Data() {
    return (
        <Container fluid className="py-5 fondo-data">
            <h1 className="form-title1">The Biggest Carbon Footprint Contributors</h1>
            <p>
                Understanding the activities and products that contribute the most to carbon emissions can help us make better choices to reduce our impact on the planet.
            </p>

            {/* Section: Fossil Fuels */}
            <section className="my-4">
                <h2 className="category-title1">1. Fossil Fuels</h2>
                <p>
                    Burning fossil fuels for energy (coal, oil, and natural gas) is the largest contributor to global carbon emissions. 
                    For example, driving a car with a gasoline engine produces an average of 4.6 metric tons of CO₂ per year.
                </p>
                <p>
                    Power plants that generate electricity using coal emit up to 2.2 pounds of CO₂ per kilowatt-hour, making it one of the most polluting energy sources.
                </p>
            </section>

            {/* Section: Meat and Dairy Consumption */}
            <section className="my-4">
                <h2 className="category-title1">2. Meat and Dairy Production</h2>
                <p>
                    Animal agriculture is a significant source of methane, a greenhouse gas that is 25 times more potent than CO₂. 
                    Producing 1 kilogram of beef generates approximately 27 kilograms of CO₂ equivalents, making it one of the most carbon-intensive foods.
                </p>
                <p>
                    Dairy production, including milk and cheese, also leaves a high carbon footprint due to the methane emissions from cows and the energy required for processing.
                </p>
            </section>

            {/* Section: Transportation */}
            <section className="my-4">
                <h2 className="category-title1">3. Transportation</h2>
                <p>
                    Transportation accounts for nearly 14% of global greenhouse gas emissions. Air travel is especially impactful, with a single round-trip transatlantic flight emitting approximately 1.6 metric tons of CO₂ per passenger.
                </p>
                <p>
                    Personal cars, particularly those using gasoline or diesel, are also significant contributors, depending on fuel efficiency and usage.
                </p>
            </section>

            {/* Section: Deforestation */}
            <section className="my-4">
                <h2 className="category-title1">4. Deforestation</h2>
                <p>
                    Cutting down forests for agriculture or urban expansion reduces the planet's capacity to absorb CO₂. 
                    Tropical deforestation alone is responsible for about 8% of global emissions annually, equivalent to the emissions from 600 million cars.
                </p>
            </section>

            {/* Section: Cement Production */}
            <section className="my-4">
                <h2 className="category-title1">5. Cement Production</h2>
                <p>
                    Cement manufacturing accounts for around 8% of global CO₂ emissions. Producing 1 ton of cement releases nearly 1 ton of CO₂, largely due to the chemical processes involved in production.
                </p>
            </section>

            {/* Closing Message */}
            <section className="mt-5 text-center1">
                <p>
                    Understanding these major contributors to carbon emissions can help us make informed decisions to minimize our impact. 
                    By reducing fossil fuel usage, eating less meat, using sustainable transport, and protecting forests, we can create a more sustainable future.
                </p>
            </section>
        </Container>
    );
}

export default Data;
