export function procesar(nombre) {
  if (nombre === "error") {
    throw new Error("Error simulado");
  }

  return {
    resultado: `Nombre procesado: ${nombre.toUpperCase()}`,
    timestamp: new Date().toISOString()
  };
}
