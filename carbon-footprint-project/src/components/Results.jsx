import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; 
import { Pie } from "react-chartjs-2";
import "./Results.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Results = ({ results }) => {
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
    </div>
  );
};

export default Results;
