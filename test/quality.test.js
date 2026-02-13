const handler = require("../api/procesar.js");

describe("Regla de calidad - mayúsculas obligatorias", () => {
  test("El resultado debe estar completamente en mayúsculas", () => {
    const req = { query: { nombre: "ana" } };

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
    expect(res.body).toHaveProperty("resultado");

    // regla de calidad
    expect(res.body.resultado).toBe(res.body.resultado.toUpperCase());
  });
});
