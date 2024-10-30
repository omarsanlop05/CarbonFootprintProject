/**
 * Carbon footprint calculation functions
 */

// Transporte (Coche y vuelos)
function calcularEmisionesTransporte(tipoTransporte, kilometrajeAnual, eficienciaVehiculo, numeroVuelosAnuales) {
  const factorEmisionGasolina = 2.31; // kg CO₂ por litro
  const factorEmisionTransportePublico = 0.05; // Emisiones promedio para transporte público (kg CO₂ por km)
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
  const emisionesVuelos = numeroVuelosAnuales * 0.15; // cada vuelo emite 0.15 toneladas de CO₂
  
  return emisionesTransporte + emisionesVuelos;
}


// Vivienda (Electricidad, gas natural y calefacción)
function calcularEmisionesVivienda(consumoElectricidad, consumoGasNatural, tipoCalefaccion) {
  const factorEmisionElectricidad = 0.47; // kg CO₂ por kWh
  const factorEmisionGas = 1.54; // kg CO₂ por m³
  const promedioEmisionCalefaccionElectricidad = 0.5; // toneladas de CO₂ promedio anual para calefacción eléctrica en México
  const promedioEmisionCalefaccionGas = 1.2; // toneladas de CO₂ promedio anual para calefacción a gas natural en México
  const promedioEmisionCalefaccionOtros = 0.8; // toneladas de CO₂ promedio anual para calefacción de otros tipos en México

  // Calcular emisiones por electricidad (usos generales)
  const consumoAnualElectricidad = consumoElectricidad * 12;
  const emisionesElectricidad = consumoAnualElectricidad * factorEmisionElectricidad / 1000; // toneladas

  // Calcular emisiones por gas natural (usos generales)
  const consumoAnualGas = consumoGasNatural * 12;
  const emisionesGas = consumoAnualGas * factorEmisionGas / 1000; // toneladas

  // Calcular emisiones específicas de calefacción según el tipo
  let emisionesCalefaccion = 0;
  switch (tipoCalefaccion) {
    case 1: // Calefacción eléctrica
      emisionesCalefaccion = promedioEmisionCalefaccionElectricidad;
      break;
    case 2: // Calefacción a gas natural
      emisionesCalefaccion = promedioEmisionCalefaccionGas;
      break;
    case 3: // Otros tipos de calefacción
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

  // Determinar el factor de emisión según el tipo de dieta
  switch (tipoDieta) {
    case 1: // Dieta carnívora
      factorEmisionDieta = 3.0; // toneladas CO₂ para dieta carnívora
      break;
    case 2: // Dieta vegetariana
      factorEmisionDieta = 2.0; // toneladas CO₂ para dieta vegetariana
      break;
    case 3: // Dieta vegana
      factorEmisionDieta = 1.0; // toneladas CO₂ para dieta vegana
      break;
    default:
      console.warn("Tipo de dieta no válido");
      return 0; // Retornar 0 si el tipo de dieta no es válido
  }

  // Calcular las emisiones adicionales por frecuencia de consumo de carne (días/semana)
  const emisionesAdicionalesCarne = (frecuenciaConsumoCarne * 52 / 365) * 1.2; // Asumiendo 1.5 toneladas CO₂ por cada día de consumo de carne

  return factorEmisionDieta + emisionesAdicionalesCarne; // Retorna las emisiones totales
}

// Consumo y residuos
function calcularEmisionesResiduos(cantidadBasuraGenerada, porcentajeResiduosReciclados) {
  const factorEmisionResiduos = 2; // kg CO₂ por kg de basura
  const residuosAnuales = cantidadBasuraGenerada * 52;
  const emisionesResiduos = residuosAnuales * factorEmisionResiduos * (1 - porcentajeResiduosReciclados / 100) / 1000; // toneladas
  
  return emisionesResiduos;
}

// Calcula y devuelve la huella de carbono total en toneladas de CO₂
function calcularHuellaCarbonoTotal(userData) {
  const emisionesTransporte = calcularEmisionesTransporte(
    userData.tipoTransporte,
    userData.kilometrajeAnual,
    userData.eficienciaVehiculo,
    userData.numeroVuelosAnuales
  );
  console.log(`Emisiones de transporte: ${emisionesTransporte.toFixed(2)} toneladas de CO₂`);

  const emisionesVivienda = calcularEmisionesVivienda(
    userData.consumoElectricidad,
    userData.consumoGasNatural,
    userData.tipoCalefaccion
  );
  console.log(`Emisiones de vivienda: ${emisionesVivienda.toFixed(2)} toneladas de CO₂`);

  const emisionesAlimentacion = calcularEmisionesAlimentacion(
    userData.tipoDieta,
    userData.frecuenciaConsumoCarne
  );
  console.log(`Emisiones de alimentación: ${emisionesAlimentacion.toFixed(2)} toneladas de CO₂`);

  const emisionesResiduos = calcularEmisionesResiduos(
    userData.cantidadBasuraGenerada,
    userData.porcentajeResiduosReciclados
  );
  console.log(`Emisiones de residuos: ${emisionesResiduos.toFixed(2)} toneladas de CO₂`);

  return emisionesTransporte + emisionesVivienda + emisionesAlimentacion + emisionesResiduos;
}


// Exporta todas las funciones
module.exports = {
  calcularEmisionesTransporte,
  calcularEmisionesVivienda,
  calcularEmisionesAlimentacion,
  calcularEmisionesResiduos,
  calcularHuellaCarbonoTotal
};