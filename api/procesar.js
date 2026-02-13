function handler(req, res) {
  const nombre = req.query?.nombre || "ANÓNIMO";
  const nombreMayus = nombre.toUpperCase();

  res.status(200).json({
    resultado: `Nombre procesado: ${nombreMayus}`,
    longitud: nombreMayus.length
  });
}

module.exports = handler;
