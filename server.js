// Imports
require('dotenv').config();
const express = require('express');
const carbonCalculations = require('./carbonCalculations');
const mongoose = require("mongoose");

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json()); // Parses JSON bodies from incoming requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies from incoming requests

// Set up EJS (Embedded JavaScript) as the view engine for rendering views
app.engine('ejs', require('ejs').renderFile); // Use EJS for rendering
app.set('view engine', 'ejs'); // Set EJS as the view engine

// Serve static files from the 'public' directory
app.use(express.static('public')); // Makes static files accessible to the client

//Database on Mongoose initialization and configuration
var user = process.env.DB_USER;
var pass = process.env.DB_PASS;
var db = process.env.DB;

const mongoURL = `mongodb+srv://${user}:${pass}@cluster0.1pvct.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true});

//Stablish data scheme and model
const dataSchema = new mongoose.Schema({
  porcentajeTransporte: { type: Number, required: true },
  porcentajeVivienda: { type: Number, required: true },
  porcentajeAlimentacion: { type: Number, required: true },
  porcentajeResiduos: { type: Number, required: true },
  totalTransporte: { type: Number, required: true },
  totalVivienda: { type: Number, required: true },
  totalAlimentacion: { type: Number, required: true },
  totalResiduos: { type: Number, required: true },
  huellaTotal: { type: Number, required: true }
});
dataSchema.set("strictQuery", true);
const DataModel = mongoose.model('Data', dataSchema);

// Initialize variables to store user input data
// Note: Consider avoiding global variables in production code for better scalability
let tipoTransporte = 0; // Type of transportation selected by the user
let kilometrajeAnual = 0; // Annual mileage in kilometers
let eficienciaVehiculo = 0; // Vehicle efficiency in km/L
let numeroVuelosAnuales = 0; // Number of flights per year
let consumoElectricidad = 0; // Monthly electricity consumption in kWh
let consumoGasNatural = 0; // Monthly natural gas consumption in m³
let tipoCalefaccion = 0; // Type of heating system selected by the user
let tipoDieta = 0; // Type of diet selected by the user
let frecuenciaConsumoCarne = 0; // Frequency of meat consumption (days per week)
let cantidadBasuraGenerada = 0; // Weekly waste generation in kg
let porcentajeResiduosReciclados = 0; // Percentage of waste that is recycled

/**
 * Route: GET /
 * Description: Render the home page (home.ejs)
 */
app.get('/', (req, res) => {
  res.render('home'); // Render the home view
});

/**
 * Route: GET /calculator
 * Description: Render the calculator form page (calculator.ejs)
 */
app.get('/calculator', (req, res) => {
  res.render('calculator'); // Render the calculator view
});

/**
 * Route: POST /calculate
 * Description: Process form data from the calculator and calculate the carbon footprint
 */
app.post('/calculate', (req, res) => {
  // Extract and assign values from the form input fields
  tipoTransporte = parseInt(req.body.transporte, 10) || 0; // Parse transportation type
  kilometrajeAnual = parseInt(req.body.kilometraje, 10) || 0; // Parse annual mileage
  eficienciaVehiculo = parseFloat(req.body.eficiencia) || 0; // Parse vehicle efficiency
  numeroVuelosAnuales = parseInt(req.body.vuelos, 10) || 0; // Parse number of flights
  consumoElectricidad = parseInt(req.body.energia, 10) || 0; // Parse electricity consumption
  consumoGasNatural = parseInt(req.body.gas, 10) || 0; // Parse natural gas consumption
  tipoCalefaccion = parseInt(req.body.calefaccion, 10) || 0; // Parse heating type
  tipoDieta = parseInt(req.body.dieta, 10) || 0; // Parse diet type
  frecuenciaConsumoCarne = parseInt(req.body.frecuencia_carne, 10) || 0; // Parse frequency of meat consumption
  cantidadBasuraGenerada = parseInt(req.body.basura, 10) || 0; // Parse waste generation
  porcentajeResiduosReciclados = parseInt(req.body.reciclaje, 10) || 0; // Parse percentage of recycled waste

  // Log each value to the console for debugging purposes
  console.log('Transportation type:', tipoTransporte);
  console.log('Annual mileage (km):', kilometrajeAnual);
  console.log('Vehicle efficiency (km/L):', eficienciaVehiculo);
  console.log('Number of annual flights:', numeroVuelosAnuales);

  console.log('Electricity consumption (kWh/month):', consumoElectricidad);
  console.log('Natural gas consumption (m³/month):', consumoGasNatural);
  console.log('Heating type:', tipoCalefaccion);

  console.log('Diet type:', tipoDieta);
  console.log('Frequency of meat consumption (days/week):', frecuenciaConsumoCarne);

  console.log('Waste generated (kg/week):', cantidadBasuraGenerada);
  console.log('Percentage of recycled waste (%):', porcentajeResiduosReciclados);

  // Create an object with all the data to pass to the calculation function
  const userData = {
    tipoTransporte,
    kilometrajeAnual,
    eficienciaVehiculo,
    numeroVuelosAnuales,
    consumoElectricidad,
    consumoGasNatural,
    tipoCalefaccion,
    tipoDieta,
    frecuenciaConsumoCarne,
    cantidadBasuraGenerada,
    porcentajeResiduosReciclados
  };

  // Calculate the total carbon footprint using the imported function
  const huellaCarbono = carbonCalculations.calcularHuellaCarbonoTotal(userData);

  console.log(`Total carbon footprint: ${huellaCarbono.total.toFixed(2)} tons of CO₂`);
<<<<<<< HEAD

  const totalTransporte = huellaCarbono.transporte.toFixed(2);
  const totalVivienda = huellaCarbono.vivienda.toFixed(2);
  const totalAlimentacion = huellaCarbono.alimentacion.toFixed(2);
  const totalResiduos = huellaCarbono.residuos.toFixed(2);
<<<<<<< HEAD

  const huellaTotal = parseInt((huellaCarbono.total), 10);

  const porcentajeTransporte = (huellaCarbono.transporte / huellaCarbono.total) * 100;
  const porcentajeVivienda = (huellaCarbono.vivienda / huellaCarbono.total) * 100;
  const porcentajeAlimentacion = (huellaCarbono.alimentacion / huellaCarbono.total) * 100;
  const porcentajeResiduos = (huellaCarbono.residuos / huellaCarbono.total) * 100;
=======
>>>>>>> 5de9867c1d976ea58980af56bbc2d713c6ec9aac
=======

  const totalTransporte = huellaCarbono.transporte.toFixed(2);
  const totalVivienda = huellaCarbono.vivienda.toFixed(2);
  const totalAlimentacion = huellaCarbono.alimentacion.toFixed(2);
  const totalResiduos = huellaCarbono.residuos.toFixed(2);
>>>>>>> 170d19a13a2709e69d327efd0827406e4b4ac453

  const huellaTotal = parseInt((huellaCarbono.total), 10);

  // Calculate the percentage contributions of each category to the total carbon footprint
  const porcentajeTransporte = (huellaCarbono.transporte / huellaCarbono.total) * 100; // Transportation emissions percentage
  const porcentajeVivienda = (huellaCarbono.vivienda / huellaCarbono.total) * 100; // Housing emissions percentage
  const porcentajeAlimentacion = (huellaCarbono.alimentacion / huellaCarbono.total) * 100; // Food emissions percentage
  const porcentajeResiduos = (huellaCarbono.residuos / huellaCarbono.total) * 100; // Waste emissions percentage

  console.log(`Transportation emissions: ${huellaCarbono.transporte.toFixed(2)} tons of CO₂ (${porcentajeTransporte.toFixed(2)}%)`);
  console.log(`Housing emissions: ${huellaCarbono.vivienda.toFixed(2)} tons of CO₂ (${porcentajeVivienda.toFixed(2)}%)`);
  console.log(`Food emissions: ${huellaCarbono.alimentacion.toFixed(2)} tons of CO₂ (${porcentajeAlimentacion.toFixed(2)}%)`);
  console.log(`Waste emissions: ${huellaCarbono.residuos.toFixed(2)} tons of CO₂ (${porcentajeResiduos.toFixed(2)}%)`);

  const newData = new DataModel({
    porcentajeTransporte: porcentajeTransporte, 
    porcentajeVivienda: porcentajeVivienda, 
    porcentajeAlimentacion: porcentajeAlimentacion, 
    porcentajeResiduos: porcentajeResiduos,
    totalTransporte: totalTransporte,
    totalVivienda: totalVivienda,
    totalAlimentacion: totalAlimentacion,
    totalResiduos: totalResiduos,
    huellaTotal: huellaTotal
  });
  newData.save();

  // Redirect back to the calculator page with the calculated percentages
  res.render('calculator', { 
    porcentajeTransporte, 
    porcentajeVivienda, 
    porcentajeAlimentacion, 
    porcentajeResiduos,
    totalTransporte,
    totalVivienda,
    totalAlimentacion,
    totalResiduos,
<<<<<<< HEAD
<<<<<<< HEAD
    huellaTotal
=======
    huellaTotal
>>>>>>> 5de9867c1d976ea58980af56bbc2d713c6ec9aac
=======
    huellaTotal
>>>>>>> 170d19a13a2709e69d327efd0827406e4b4ac453
  });
});

/**
 * Start the Express application
 * Listen on the specified port (default is 3000)
 */
const PORT = process.env.PORT || 3000; // Use the PORT environment variable if available
app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`); // Log that the application has started
});
