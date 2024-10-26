const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.static("public"));

// Inicializar variables globales
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

// Ruta para el Home
app.get("/", (req, res) => {
  res.render("home");
});

// Ruta para el formulario (calculator.ejs)
app.get("/calculator", (req, res) => {
  res.render("calculator");
});

// Ruta para procesar el formulario
app.post("/calculate", (req, res) => {
  // Asignar los valores enviados desde el formulario
  tipoTransporte = req.body.transporte;
  kilometrajeAnual = parseInt(req.body.kilometraje) || 0;
  eficienciaVehiculo = parseFloat(req.body.eficiencia) || 0;
  numeroVuelosAnuales = parseInt(req.body.vuelos) || 0;
  consumoElectricidad = parseInt(req.body.energia) || 0;
  consumoGasNatural = parseInt(req.body.gas) || 0;
  tipoCalefaccion = req.body.calefaccion;
  tipoDieta = req.body.dieta;
  frecuenciaConsumoCarne = parseInt(req.body.frecuencia_carne) || 0;
  cantidadBasuraGenerada = parseInt(req.body.basura) || 0;
  porcentajeResiduosReciclados = parseInt(req.body.reciclaje) || 0;

  // Imprimir cada valor en la consola
  console.log("Tipo de transporte:", tipoTransporte);
  console.log("Kilometraje anual (km):", kilometrajeAnual);
  console.log("Eficiencia del vehículo (km/L):", eficienciaVehiculo);
  console.log("Número de vuelos anuales:", numeroVuelosAnuales);
  console.log("Consumo de electricidad (kWh/mes):", consumoElectricidad);
  console.log("Consumo de gas natural (m³/mes):", consumoGasNatural);
  console.log("Tipo de calefacción:", tipoCalefaccion);
  console.log("Tipo de dieta:", tipoDieta);
  console.log("Frecuencia de consumo de carne (días/semana):", frecuenciaConsumoCarne);
  console.log("Cantidad de basura generada (kg/semana):", cantidadBasuraGenerada);
  console.log("Porcentaje de residuos reciclados (%):", porcentajeResiduosReciclados);

  res.redirect("/calculator");
});

// Start the Express application
app.listen(3000, () => {
  console.log("Application listening on port 3000");
});
