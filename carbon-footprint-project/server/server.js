require('dotenv').config();
const express = require('express');
const carbonCalculations = require('./carbonCalculations');
const mongoose = require("mongoose");

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(cors({
  origin: 'http://localhost:3000', // Adjust if necessary
}));

//Database on Mongoose initialization and  configuration
var user = process.env.DB_USER;
var pass = process.env.DB_PASS;
var db = process.env.DB;

const mongoURL = `mongodb+srv://${user}:${pass}@cluster0.1pvct.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`;
console.log(mongoURL);
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

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

app.get('/', (req, res) => {
  res.render('home'); 
});

app.get('/calculator', (req, res) => {
  res.render('calculator'); // Render the calculator view
});

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

  const totalTransporte = parseFloat(huellaCarbono.transporte.toFixed(2));
  const totalVivienda = parseFloat(huellaCarbono.vivienda.toFixed(2));
  const totalAlimentacion = parseFloat(huellaCarbono.alimentacion.toFixed(2));
  const totalResiduos = parseFloat(huellaCarbono.residuos.toFixed(2));
  const huellaTotal = parseFloat(huellaCarbono.total.toFixed(2));

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
  
  // Añadir una respuesta JSON en el servidor
    res.json({ 
      porcentajeTransporte, 
      porcentajeVivienda, 
      porcentajeAlimentacion, 
      porcentajeResiduos,
      totalTransporte,
      totalVivienda,
      totalAlimentacion,
      totalResiduos,
      huellaTotal
    });
});

const PORT = process.env.PORT || 5000; // Use the PORT environment variable if available
app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`); // Log that the application has started
});
