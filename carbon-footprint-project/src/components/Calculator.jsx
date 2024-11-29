import React, { useState } from "react";
import "./Calculator.css";
import Header from "./Header";
import Footer from "./Footer";
import Results from "./Results"; 
import axios from 'axios';
import { Container, Form } from "react-bootstrap";

const Calculator = () => {
  const [formData, setFormData] = useState({
    transporte: "",
    kilometraje: "",
    eficiencia: "",
    vuelos: "",
    energia: "",
    gas: "",
    calefaccion: "",
    dieta: "",
    frecuencia_carne: "",
    basura: "",
    reciclaje: "",
  });

  const [results, setResults] = useState({
    totalTransporte: 0,
    totalVivienda: 0,
    totalAlimentacion: 0,
    totalResiduos: 0,
    huellaTotal: 0,
    porcentajeTransporte: 0,
    porcentajeVivienda: 0,
    porcentajeAlimentacion: 0,
    porcentajeResiduos: 0,
  }); 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/calculate", formData, {
        headers: { "Content-Type": "application/json" },
      });
      
      console.log(response); // Axios includes status, headers, etc.
      console.log(response.data); // The actual data returned from the API
      setResults(response.data); // Assuming response.data contains the desired result
    } catch (error) {
      console.error("Error calculating carbon footprint:", error);
    }
  };

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <Container className="my-5">
        <h2 className="form-title">Carbon Footprint Calculator</h2>

        {/* Form Section */}
        <Form onSubmit={handleSubmit}>
          {/* Transportation Section */}
          <div className="mb-4">
            <h3 className="category-title">Transportation</h3>
            <Form.Group className="mb-3">
              <Form.Label>Type of Transportation</Form.Label>
              <Form.Select
                id="transporte"
                name="transporte"
                value={formData.transporte}
                onChange={handleChange}
              >
                <option value="">Select your type of transportation</option>
                <option value="1">Car</option>
                <option value="2">Public Transport</option>
                <option value="3">Bicycle</option>
                <option value="4">Walking</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Annual Mileage (km)</Form.Label>
              <Form.Control
                type="number"
                id="kilometraje"
                name="kilometraje"
                placeholder="Enter annual km"
                value={formData.kilometraje}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Efficiency (km/L)</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                id="eficiencia"
                name="eficiencia"
                placeholder="Enter vehicle efficiency"
                value={formData.eficiencia}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Number of Annual Flights</Form.Label>
              <Form.Control
                type="number"
                id="vuelos"
                name="vuelos"
                placeholder="Enter number of flights"
                value={formData.vuelos}
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          {/* Housing Section */}
          <div className="mb-4">
            <h3 className="category-title">Housing</h3>
            <Form.Group className="mb-3">
              <Form.Label>Electricity Consumption (kWh/month)</Form.Label>
              <Form.Control
                type="number"
                id="energia"
                name="energia"
                placeholder="Enter your monthly electricity consumption"
                value={formData.energia}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Natural Gas Consumption (m³/month)</Form.Label>
              <Form.Control
                type="number"
                id="gas"
                name="gas"
                placeholder="Enter your monthly natural gas consumption"
                value={formData.gas}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type of Heating</Form.Label>
              <Form.Select
                id="calefaccion"
                name="calefaccion"
                value={formData.calefaccion}
                onChange={handleChange}
              >
                <option value="">Select the type of heating</option>
                <option value="1">Electricity</option>
                <option value="2">Natural Gas</option>
                <option value="3">Other</option>
              </Form.Select>
            </Form.Group>
          </div>

          {/* Food Section */}
          <div className="mb-4">
            <h3 className="category-title">Food</h3>
            <Form.Group className="mb-3">
              <Form.Label>Type of Diet</Form.Label>
              <Form.Select
                id="dieta"
                name="dieta"
                value={formData.dieta}
                onChange={handleChange}
              >
                <option value="">Select your diet</option>
                <option value="1">Omnivorous</option>
                <option value="2">Vegetarian</option>
                <option value="3">Vegan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Frequency of Meat Consumption (days/week)</Form.Label>
              <Form.Control
                type="number"
                id="frecuencia_carne"
                name="frecuencia_carne"
                placeholder="Enter days per week"
                value={formData.frecuencia_carne}
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          {/* Waste Section */}
          <div className="mb-4">
            <h3 className="category-title">Consumption and Waste</h3>
            <Form.Group className="mb-3">
              <Form.Label>Waste Generated (kg/week)</Form.Label>
              <Form.Control
                type="number"
                id="basura"
                name="basura"
                placeholder="Enter kg of waste generated per week"
                value={formData.basura}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Percentage of Recycled Waste (%)</Form.Label>
              <Form.Control
                type="number"
                id="reciclaje"
                name="reciclaje"
                placeholder="Enter recycled percentage"
                value={formData.reciclaje}
                onChange={handleChange}
              />
            </Form.Group>
          </div>

          <div className="text-center mt-4">
            <button 
              type="button" 
              className="btn-custom" 
              onClick={handleSubmit}
            >
              Calculate Carbon Footprint
            </button>
          </div>
        </Form>
      </Container>

      {/* Results Section */}
      {results && <Results results={results} />}

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Calculator;
