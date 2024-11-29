import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Calculator from './components/Calculator';
import About from './components/About';

function App() {
  return (
    <div className="App fondo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
