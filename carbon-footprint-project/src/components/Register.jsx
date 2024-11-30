import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Register.css'; 

const Register = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const navigate = useNavigate(); // Hook para navegación programática

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    try {
      const response = await axios.post("https://carbon-footprint-project.onrender.com/register", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.statusCode === 1) {
        setStatusMessage("Account created successfully. Redirecting to login...");
        setTimeout(() => navigate("/"), 2000); // Redirigir al formulario de login tras 2 segundos
      } else {
        setStatusMessage(response.data.status);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setStatusMessage("An error occurred while creating your account.");
    }
  };

  return (
    <Container className="container2">
      <h4 className="my-4">Create a new account to access the calculator</h4>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formUser">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="user"
            placeholder="Enter username"
            value={formData.user}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">
          Register
        </Button>
        <div className="text-center mt-3">
          <Link to="/#">
            Already have an account? Log in here
          </Link>
        </div>
      </Form>
      {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}
    </Container>
  );
};

export default Register;
