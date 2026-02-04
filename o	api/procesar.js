import { procesar } from "../../lib/procesar";

export default function handler(req, res) {
  const { nombre = "anónimo" } = req.query;

  try {
    const data = procesar(nombre);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      timestamp: new Date().toISOString()
    });
  }
}

export function procesar(nombre) {
  // Simular error
  if (nombre === "error") {
    throw new Error("Error simulado");
  }

  return {
    resultado: `Hola ${nombre}`,
    timestamp: new Date().toISOString()
  };
}
