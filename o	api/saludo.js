export default function handler(req, res) {
  const { nombre = "anónimo" } = req.query;

  // Simular error
  if (nombre === "error") {
    return res.status(500).json({
      error: "Error simulado",
      timestamp: new Date().toISOString()
    });
  }

  // Caso normal
  return res.status(200).json({
    resultado: `Hola ${nombre}`,
    timestamp: new Date().toISOString()
  });
}
