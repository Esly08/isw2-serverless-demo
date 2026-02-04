import { procesar } from "../../lib/procesar";

export default function handler(req, res) {
  try {
    const nombre = req.query.nombre || "anónimo";

    const data = procesar(nombre);

    return res.status(200).json({
      entrada: nombre,
      resultado: data.resultado,
      flujo: "entrada -> procesar"
    });
  } catch (err) {
    return res.status(502).json({
      error: "Fallo llamando a procesar",
      detalle: err.message
    });
  }
}

