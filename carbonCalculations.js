// Transportation (Car and flights)
function calcularEmisionesTransporte(tipoTransporte, kilometrajeAnual, eficienciaVehiculo, numeroVuelosAnuales) {
  const factorEmisionGasolina = 2.31; // kg CO₂ emitted per liter of gasoline
  const factorEmisionTransportePublico = 0.04; // kg CO₂ emitted per km for public transport
  let emisionesTransporte = 0; // Variable to store transportation emissions

  switch (tipoTransporte) {
    case 1: // Car
      const consumoAnualLitros = kilometrajeAnual / eficienciaVehiculo || 0; // Annual fuel consumption in liters
      emisionesTransporte = consumoAnualLitros * factorEmisionGasolina / 1000; // Convert emissions to tons
      break;
    case 2: // Public transport
      emisionesTransporte = kilometrajeAnual * factorEmisionTransportePublico / 1000; // Convert emissions to tons
      break;
    case 3: // Bicycle
    case 4: // Walking
      emisionesTransporte = 0; // Zero emissions for bicycle and walking
      break;
    default:
      console.warn("Invalid transport type"); // Warn if the transport type is invalid
  }

  // Emissions from flights
  const emisionesVuelos = numeroVuelosAnuales * 0.12; // Each flight emits 0.12 tons of CO₂
  
  return emisionesTransporte + emisionesVuelos; // Return total transportation emissions
}

// Housing (Electricity, natural gas, and heating)
function calcularEmisionesVivienda(consumoElectricidad, consumoGasNatural, tipoCalefaccion) {
  const factorEmisionElectricidad = 0.408; // kg CO₂ emitted per kWh of electricity
  const factorEmisionGas = 1.45; // kg CO₂ emitted per m³ of natural gas
  const promedioEmisionCalefaccionElectricidad = 0.3; // Average CO₂ emissions for electric heating in Mexico (tons)
  const promedioEmisionCalefaccionGas = 0.8; // Average CO₂ emissions for natural gas heating in Mexico (tons)
  const promedioEmisionCalefaccionOtros = 0.5; // Average CO₂ emissions for other types of heating in Mexico (tons)

  const consumoAnualElectricidad = consumoElectricidad * 12; // Annual electricity consumption in kWh
  const emisionesElectricidad = consumoAnualElectricidad * factorEmisionElectricidad / 1000; // Convert emissions to tons

  const consumoAnualGas = consumoGasNatural * 12; // Annual gas consumption in m³
  const emisionesGas = consumoAnualGas * factorEmisionGas / 1000; // Convert emissions to tons

  let emisionesCalefaccion = 0; // Variable to store heating emissions
  switch (tipoCalefaccion) {
    case 1: 
      emisionesCalefaccion = promedioEmisionCalefaccionElectricidad; // Use average emissions for electric heating
      break;
    case 2: 
      emisionesCalefaccion = promedioEmisionCalefaccionGas; // Use average emissions for natural gas heating
      break;
    case 3: 
      emisionesCalefaccion = promedioEmisionCalefaccionOtros; // Use average emissions for other types of heating
      break;
    default:
      console.warn("Invalid heating type"); // Warn if the heating type is invalid
  }

  return emisionesElectricidad + emisionesGas + emisionesCalefaccion; // Return total housing emissions
}

// Food consumption
function calcularEmisionesAlimentacion(tipoDieta, frecuenciaConsumoCarne) {
  let factorEmisionDieta; // Variable to store diet emissions factor

  switch (tipoDieta) {
    case 1:
      factorEmisionDieta = 2.5; // CO₂ emissions for carnivorous diet (tons)
      break;
    case 2: 
      factorEmisionDieta = 1.6; // CO₂ emissions for vegetarian diet (tons)
      break;
    case 3: 
      factorEmisionDieta = 0.9; // CO₂ emissions for vegan diet (tons)
      break;
    default:
      console.warn("Invalid diet type"); // Warn if the diet type is invalid
      return 0; // Return 0 emissions for invalid diet type
  }

  // Additional emissions based on meat consumption frequency (converted to annual)
  const emisionesAdicionalesCarne = (frecuenciaConsumoCarne * 52 / 365) * 1.0; // Assume 1.0 tons CO₂ per instance of meat consumption

  return factorEmisionDieta + emisionesAdicionalesCarne; // Return total food-related emissions
}

// Waste and recycling
function calcularEmisionesResiduos(cantidadBasuraGenerada, porcentajeResiduosReciclados) {
  const factorEmisionResiduos = 1.5; // kg CO₂ emitted per kg of waste
  const residuosAnuales = cantidadBasuraGenerada * 52; // Total annual waste generated
  const emisionesResiduos = residuosAnuales * factorEmisionResiduos * (1 - porcentajeResiduosReciclados / 100) / 1000; // Convert to tons, accounting for recycling percentage
  
  return emisionesResiduos; // Return total waste-related emissions
}

// Calculates and returns the total carbon footprint and individual emissions in tons of CO₂
function calcularHuellaCarbonoTotal(userData) {
  const emisionesTransporte = calcularEmisionesTransporte(
    userData.tipoTransporte,
    userData.kilometrajeAnual,
    userData.eficienciaVehiculo,
    userData.numeroVuelosAnuales
  );

  const emisionesVivienda = calcularEmisionesVivienda(
    userData.consumoElectricidad,
    userData.consumoGasNatural,
    userData.tipoCalefaccion
  );

  const emisionesAlimentacion = calcularEmisionesAlimentacion(
    userData.tipoDieta,
    userData.frecuenciaConsumoCarne
  );

  const emisionesResiduos = calcularEmisionesResiduos(
    userData.cantidadBasuraGenerada,
    userData.porcentajeResiduosReciclados
  );

  // Calculate total emissions by summing emissions from all categories
  const totalEmisiones = emisionesTransporte + emisionesVivienda + emisionesAlimentacion + emisionesResiduos;

  // Return an object containing total emissions and emissions breakdown by category
  return {
    total: totalEmisiones,
    transporte: emisionesTransporte,
    vivienda: emisionesVivienda,
    alimentacion: emisionesAlimentacion,
    residuos: emisionesResiduos,
  };
}

<<<<<<< HEAD
<<<<<<< HEAD
// Exporta todas las funciones
=======
// Export all functions for use in other modules
>>>>>>> 5de9867c1d976ea58980af56bbc2d713c6ec9aac
=======
// Export all functions for use in other modules
>>>>>>> 170d19a13a2709e69d327efd0827406e4b4ac453
module.exports = {
  calcularEmisionesTransporte,
  calcularEmisionesVivienda,
  calcularEmisionesAlimentacion,
  calcularEmisionesResiduos,
  calcularHuellaCarbonoTotal
};
