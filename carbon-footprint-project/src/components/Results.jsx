import React from "react";
<<<<<<< HEAD
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
=======
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; 
>>>>>>> 170d19a13a2709e69d327efd0827406e4b4ac453
import { Pie } from "react-chartjs-2";
import "./Results.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Results = ({ results }) => {
<<<<<<< HEAD
  if (!results || results.huellaTotal === 0) {
    return <p className="no-results">Complete the form to see your results!</p>;
  }

  return (
    <div className="results-container">
      <h2 className="results-title">Results</h2>
      
      {/* Display individual categories */}
      <p className="result-item">
        <span className="result-highlight">Transport:</span> {results.totalTransporte.toFixed(2)} tons of CO₂
      </p>
      <p className="result-item">
        <span className="result-highlight">Housing:</span> {results.totalVivienda.toFixed(2)} tons of CO₂
      </p>
      <p className="result-item">
        <span className="result-highlight">Food:</span> {results.totalAlimentacion.toFixed(2)} tons of CO₂
      </p>
      <p className="result-item">
        <span className="result-highlight">Waste:</span> {results.totalResiduos.toFixed(2)} tons of CO₂
      </p>
      <p className="result-item">
        <span className="result-highlight">Total:</span> {results.huellaTotal.toFixed(2)} tons of CO₂
      </p>

      {/* Pie Chart */}
      <div className="chart-container">
        <Pie
          data={{
            labels: ["Transportation", "Housing", "Food", "Waste"],
            datasets: [
              {
                data: [
                  results.porcentajeTransporte.toFixed(2),
                  results.porcentajeVivienda.toFixed(2),
                  results.porcentajeAlimentacion.toFixed(2),
                  results.porcentajeResiduos.toFixed(2),
                ],
                backgroundColor: ["#006400", "#228B22", "#32CD32", "#7CFC00"],
                borderColor: "#fff",
                borderWidth: 2,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => {
                    const value = tooltipItem.raw;
                    // Check if value is a number before calling .toFixed
                    return `${tooltipItem.label}: ${typeof value === "number" ? value.toFixed(2) : value}%`;
                  },
                },
              },              
            },
          }}
        />
      </div>
=======
  return (
    <div className="results-container">
      <h2 className="results-title">Results</h2>
      <p className="result-item">
        <span className="result-highlight">Transport:</span> {results.totalTransporte} tons of CO₂
      </p>
      <p className="result-item">
        <span className="result-highlight">Housing:</span> {results.totalVivienda} tons of CO₂
      </p>
      <p className="result-item">
        <span className="result-highlight">Food:</span> {results.totalAlimentacion} tons of CO₂
      </p>
      <p className="result-item">
        <span className="result-highlight">Waste:</span> {results.totalResiduos} tons of CO₂
      </p>
      <p className="result-item">
        <span className="result-highlight">Total:</span> {results.huellaTotal} tons of CO₂
      </p>
      <Pie
        data={{
          labels: ["Transportation", "Housing", "Food", "Waste"],
          datasets: [
            {
              data: [
                results.porcentajeTransporte,
                results.porcentajeVivienda,
                results.porcentajeAlimentacion,
                results.porcentajeResiduos,
              ],
              backgroundColor: ["#006400", "#228B22", "#32CD32", "#7CFC00"],
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
          },
        }}
        width={25} 
        height={25} 
      />
>>>>>>> 170d19a13a2709e69d327efd0827406e4b4ac453
    </div>
  );
};

export default Results;
