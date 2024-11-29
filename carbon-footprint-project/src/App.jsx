import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App fondo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
