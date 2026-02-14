function handler(req, res) {
  const nombre = req.query?.nombre ?? "ANÓNIMO";  // Usa ?? en lugar de ||
  const nombreMayus = nombre.toUpperCase();
  res.status(200).json({
    resultado: `Nombre procesado: ${nombreMayus}`,
    longitud: nombreMayus.length
  });
}
module.exports = handler;

describe("procesar", () => {
  test("convierte el nombre a mayúsculas", () => {
    const req = { query: { nombre: "juan" } };

    const res = {
      statusCode: null,
      body: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(payload) {
        this.body = payload;
        return this;
      }
    };

    handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      resultado: "Nombre procesado: JUAN",
      longitud: 4
    });
  });

  test("maneja nombre ausente", () => {
    const req = { query: {} };

    const res = {
      statusCode: null,
      body: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(payload) {
        this.body = payload;
        return this;
      }
    };

    handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toContain("ANÓNIMO");
  });
});
