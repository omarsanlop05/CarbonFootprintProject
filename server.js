// Import the Express.js module to create a web server
const express = require('express');

// Create an instance of an Express application
const app = express();

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies

// Set up EJS (Embedded JavaScript) as the view engine
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Initialize variables to store user input data
// Note: Consider avoiding global variables in production code
let tipoTransporte = 0;
let kilometrajeAnual = 0;
let eficienciaVehiculo = 0;
let numeroVuelosAnuales = 0;
let consumoElectricidad = 0;
let consumoGasNatural = 0;
let tipoCalefaccion = 0;
let tipoDieta = 0;
let frecuenciaConsumoCarne = 0;
let cantidadBasuraGenerada = 0;
let porcentajeResiduosReciclados = 0;

/**
 * Route: GET /
 * Description: Render the home page (home.ejs)
 */
app.get('/', (req, res) => {
  res.render('home');
});

/**
 * Route: GET /calculator
 * Description: Render the calculator form page (calculator.ejs)
 */
app.get('/calculator', (req, res) => {
  res.render('calculator');
});

/**
 * Route: POST /calculate
 * Description: Process form data from the calculator and calculate carbon footprint
 */
app.post('/calculate', (req, res) => {
  // Extract and assign values from the form input fields
  tipoTransporte = req.body.transporte;
  kilometrajeAnual = parseInt(req.body.kilometraje, 10) || 0;
  eficienciaVehiculo = parseFloat(req.body.eficiencia) || 0;
  numeroVuelosAnuales = parseInt(req.body.vuelos, 10) || 0;
  consumoElectricidad = parseInt(req.body.energia, 10) || 0;
  consumoGasNatural = parseInt(req.body.gas, 10) || 0;
  tipoCalefaccion = req.body.calefaccion;
  tipoDieta = req.body.dieta;
  frecuenciaConsumoCarne = parseInt(req.body.frecuencia_carne, 10) || 0;
  cantidadBasuraGenerada = parseInt(req.body.basura, 10) || 0;
  porcentajeResiduosReciclados = parseInt(req.body.reciclaje, 10) || 0;

  // Log each value to the console for debugging purposes
  console.log('Tipo de transporte:', tipoTransporte);
  console.log('Kilometraje anual (km):', kilometrajeAnual);
  console.log('Eficiencia del vehículo (km/L):', eficienciaVehiculo);
  console.log('Número de vuelos anuales:', numeroVuelosAnuales);
  console.log('Consumo de electricidad (kWh/mes):', consumoElectricidad);
  console.log('Consumo de gas natural (m³/mes):', consumoGasNatural);
  console.log('Tipo de calefacción:', tipoCalefaccion);
  console.log('Tipo de dieta:', tipoDieta);
  console.log('Frecuencia de consumo de carne (días/semana):', frecuenciaConsumoCarne);
  console.log('Cantidad de basura generada (kg/semana):', cantidadBasuraGenerada);
  console.log('Porcentaje de residuos reciclados (%):', porcentajeResiduosReciclados);

  // Redirect back to the calculator page
  res.redirect('/calculator');
});

/**
 * Start the Express application
 * Listen on the specified port (default is 3000)
 */
const PORT = process.env.PORT || 3000; // Use the PORT environment variable if available
app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
