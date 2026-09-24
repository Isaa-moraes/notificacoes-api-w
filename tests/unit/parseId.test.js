// tests/unit/parseId.test.js
const parseId = require("../../src/helpers/parseId");
const { ValidationError } = require("../../src/errors/AppError");

describe("parseId", () => {
  // Exemplo fornecido no guião
  it("lança ValidationError quando o id não é número", () => {
    expect(() => parseId("abc")).toThrow(ValidationError);
  });

  // DESAFIO: id com texto misturado ("12abc")
  it("lança ValidationError quando o id contém letras misturadas com números", () => {
    expect(() => parseId("12abc")).toThrow(ValidationError);
  });
});