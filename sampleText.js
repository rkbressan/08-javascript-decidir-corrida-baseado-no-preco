let assert = require("chai").assert;
describe("Escolhe Taxi", function () {
  it("Teste", function () {
    assert.equal(
      escolheTaxi("2.5", "1.0", "5.0", "0.75"),
      "Empresa 1 quando a distância < 10.0, Tanto faz quando a distância = 10.0, Empresa 2 quando a distância > 10.0"
    );
  });
});
