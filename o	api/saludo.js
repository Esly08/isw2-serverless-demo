export default function handler(req, res) {
  const nombre = req.query.nombre || "anónimo";

  // Simular error
  if (nombre === "error") {
    return res.status(500).json({
      error: "Error simulado",
      timestamp: new Date().toISOString()
    });
  }

  res.status(200).json({
    resultado: `Hola ${nombre}`,
    timestamp: new Date().toISOString()
  });
}
