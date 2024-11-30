import React, { useState } from "react";
import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Calculator from './components/Calculator';
import About from './components/About';
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from 'axios';
import { Link, useLocation} from 'react-router-dom';
import { Container, Form, Button } from "react-bootstrap";
import Register from "./components/Register";

function App() {
  const [statusMessage, setStatusMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  let location = useLocation();

  const currentLocation =
    location.pathname === "/calculator" ||
    location.pathname === "/about" ||
    location.pathname === "/register";

  const [loginData, setLoginData] = useState({
        user: "",
        password: "",
  });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5000/login", loginData, {
          headers: { "Content-Type": "application/json" },
        });
    
        if (res.data.statusCode === 1) {
          setStatusMessage("Logged in successfully");
          setTimeout(() => setLoggedIn(true) , 2000);
        } else {
          setStatusMessage("User or password incorrect.");
        }
    
      } catch(err) {
          console.error("Error in login: ",err);
          setStatusMessage("An error occurred while loggin in");
      }
    };

    function directoryDisplay() {
        return (
            <>
                <h1 className="main-title text-color">Welcome to Our Page {loginData.user}</h1>
                <p className="intro-text text-color">
                    Here you can calculate your personal carbon footprint and learn more about how to reduce your environmental impact.
                </p>
                <Button variant="primary" as={Link} to="/calculator">
                    Go to the Form
                </Button>
            </>
        );
    }

    function renderConditional() {
        return loggedIn ? directoryDisplay() : 
        <>
            <Container className="container2">
              <h4 className="my-4">You must log in to have access to the calculator</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formUser">
                        <Form.Label>User</Form.Label>
                        <Form.Control
                            type="text"
                            name="user"
                            placeholder="Enter user"
                            value={loginData.user}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={loginData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <div className="text-center mt-4">
                        <button 
                            type="button" 
                            className="btn-custom" 
                            onClick={handleLogin}
                        >
                        Login
                        </button>
                    </div>

                    {statusMessage && <p className="mt-3 text-center">{statusMessage}</p>}

                    <div className="text-center mt-4"> 
                       <Link to="/register">Dont have an account? click here</Link> 
                    </div>
                </Form>
            </Container>
        </>
    }

  return (
    <div className="App fondo">
      {/* Header Section */}
      <Header 
        logState={loggedIn} 
        action={() => setLoggedIn(!loggedIn)} 
      />
      
      {!currentLocation ? <Container fluid className="text-center py-5">    
        {renderConditional()}
      </Container>
       : <></>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* Footer Section */}
      <Footer className="footer"/>
    </div>
  );
}

export default App;
