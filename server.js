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

// Importar el módulo de cálculo de huella de carbono
const carbonCalculations = require('./carbonCalculations');

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
  tipoTransporte = parseInt(req.body.transporte, 10) || 0;
  kilometrajeAnual = parseInt(req.body.kilometraje, 10) || 0;
  eficienciaVehiculo = parseFloat(req.body.eficiencia) || 0;
  numeroVuelosAnuales = parseInt(req.body.vuelos, 10) || 0;
  consumoElectricidad = parseInt(req.body.energia, 10) || 0;
  consumoGasNatural = parseInt(req.body.gas, 10) || 0;
  tipoCalefaccion = parseInt(req.body.calefaccion, 10) || 0;
  tipoDieta = parseInt(req.body.dieta, 10) || 0;
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

  // Crea un objeto con todos los datos para pasar a la función
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

  // Calcula la huella de carbono total usando la función importada
  const huellaCarbono = carbonCalculations.calcularHuellaCarbonoTotal(userData);

  console.log(`Huella de carbono total: ${huellaCarbono.total.toFixed(2)} toneladas de CO₂`);

  const porcentajeTransporte = (huellaCarbono.transporte / huellaCarbono.total) * 100;
  const porcentajeVivienda = (huellaCarbono.vivienda / huellaCarbono.total) * 100;
  const porcentajeAlimentacion = (huellaCarbono.alimentacion / huellaCarbono.total) * 100;
  const porcentajeResiduos = (huellaCarbono.residuos / huellaCarbono.total) * 100;

  console.log(`Emisiones de transporte: ${huellaCarbono.transporte.toFixed(2)} toneladas de CO₂ (${porcentajeTransporte.toFixed(2)}%)`);
  console.log(`Emisiones de vivienda: ${huellaCarbono.vivienda.toFixed(2)} toneladas de CO₂ (${porcentajeVivienda.toFixed(2)}%)`);
  console.log(`Emisiones de alimentación: ${huellaCarbono.alimentacion.toFixed(2)} toneladas de CO₂ (${porcentajeAlimentacion.toFixed(2)}%)`);
  console.log(`Emisiones de residuos: ${huellaCarbono.residuos.toFixed(2)} toneladas de CO₂ (${porcentajeResiduos.toFixed(2)}%)`);

  // Redirect back to the calculator page with the calculated percentages
  res.render('calculator', { 
    porcentajeTransporte, 
    porcentajeVivienda, 
    porcentajeAlimentacion, 
    porcentajeResiduos 
  });
});

/**
 * Start the Express application
 * Listen on the specified port (default is 3000)
 */
const PORT = process.env.PORT || 3000; // Use the PORT environment variable if available
app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});

