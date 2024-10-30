/**
 * Carbon footprint calculation functions
 */

// Transporte (Coche y vuelos)
function calcularEmisionesTransporte(tipoTransporte, kilometrajeAnual, eficienciaVehiculo, numeroVuelosAnuales) {
  const factorEmisionGasolina = 2.31; // kg CO₂ por litro
  const factorEmisionTransportePublico = 0.04; // kg CO₂ por km para transporte público
  let emisionesTransporte = 0;

  switch (tipoTransporte) {
    case 1: // Coche
      const consumoAnualLitros = kilometrajeAnual / eficienciaVehiculo || 0;
      emisionesTransporte = consumoAnualLitros * factorEmisionGasolina / 1000; // toneladas
      break;
    case 2: // Transporte público
      emisionesTransporte = kilometrajeAnual * factorEmisionTransportePublico / 1000; // toneladas
      break;
    case 3: // Bicicleta
    case 4: // Caminar
      emisionesTransporte = 0; // Emisiones cero para bicicleta y caminar
      break;
    default:
      console.warn("Tipo de transporte no válido");
  }

  // Emisiones por vuelos
  const emisionesVuelos = numeroVuelosAnuales * 0.12; // cada vuelo emite 0.12 toneladas de CO₂
  
  return emisionesTransporte + emisionesVuelos;
}


// Vivienda (Electricidad, gas natural y calefacción)
function calcularEmisionesVivienda(consumoElectricidad, consumoGasNatural, tipoCalefaccion) {
  const factorEmisionElectricidad = 0.408; // kg CO₂ por kWh
  const factorEmisionGas = 1.45; // kg CO₂ por m³
  const promedioEmisionCalefaccionElectricidad = 0.3; // toneladas de CO₂ para calefacción eléctrica en México
  const promedioEmisionCalefaccionGas = 0.8; // toneladas de CO₂ para calefacción a gas natural en México
  const promedioEmisionCalefaccionOtros = 0.5; // toneladas de CO₂ para calefacción de otros tipos en México

  const consumoAnualElectricidad = consumoElectricidad * 12;
  const emisionesElectricidad = consumoAnualElectricidad * factorEmisionElectricidad / 1000; // toneladas

  const consumoAnualGas = consumoGasNatural * 12;
  const emisionesGas = consumoAnualGas * factorEmisionGas / 1000; // toneladas

  let emisionesCalefaccion = 0;
  switch (tipoCalefaccion) {
    case 1: 
      emisionesCalefaccion = promedioEmisionCalefaccionElectricidad;
      break;
    case 2: 
      emisionesCalefaccion = promedioEmisionCalefaccionGas;
      break;
    case 3: 
      emisionesCalefaccion = promedioEmisionCalefaccionOtros;
      break;
    default:
      console.warn("Tipo de calefacción no válido");
  }

  return emisionesElectricidad + emisionesGas + emisionesCalefaccion;
}


// Alimentación
function calcularEmisionesAlimentacion(tipoDieta, frecuenciaConsumoCarne) {
  let factorEmisionDieta;

  switch (tipoDieta) {
    case 1:
      factorEmisionDieta = 2.5; // toneladas CO₂ para dieta carnívora
      break;
    case 2: 
      factorEmisionDieta = 1.6; // toneladas CO₂ para dieta vegetariana
      break;
    case 3: 
      factorEmisionDieta = 0.9; // toneladas CO₂ para dieta vegana
      break;
    default:
      console.warn("Tipo de dieta no válido");
      return 0;
  }

  const emisionesAdicionalesCarne = (frecuenciaConsumoCarne * 52 / 365) * 1.0; 

  return factorEmisionDieta + emisionesAdicionalesCarne;
}

// Consumo y residuos
function calcularEmisionesResiduos(cantidadBasuraGenerada, porcentajeResiduosReciclados) {
  const factorEmisionResiduos = 1.5; // kg CO₂ por kg de basura
  const residuosAnuales = cantidadBasuraGenerada * 52;
  const emisionesResiduos = residuosAnuales * factorEmisionResiduos * (1 - porcentajeResiduosReciclados / 100) / 1000; // toneladas
  
  return emisionesResiduos;
}

// Calcula y devuelve la huella de carbono total y las emisiones individuales en toneladas de CO₂
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

  const totalEmisiones = emisionesTransporte + emisionesVivienda + emisionesAlimentacion + emisionesResiduos;

  return {
    total: totalEmisiones,
    transporte: emisionesTransporte,
    vivienda: emisionesVivienda,
    alimentacion: emisionesAlimentacion,
    residuos: emisionesResiduos,
  };
}


// Exporta todas las funciones
module.exports = {
  calcularEmisionesTransporte,
  calcularEmisionesVivienda,
  calcularEmisionesAlimentacion,
  calcularEmisionesResiduos,
  calcularHuellaCarbonoTotal
};
