import { describe, it, expect } from "bun:test";
import {
  maiorNumero,
  verificarParOuImpar,
  contarCaracter,
  atualizarPropriedade,
} from "./previa.js";

// Teste para a função maiorNumero
describe("maiorNumero", () => {
  it("deve retornar o maior número da lista", () => {
    expect(maiorNumero([1, 3, 5, 7, 2])).toBe(7);
  });
  it("deve retornar null para lista vazia", () => {
    expect(maiorNumero([])).toBe(null);
  });
  it("deve retornar null para entrada inválida", () => {
    expect(maiorNumero("não é uma lista")).toBe(null);
  });
});

// Teste para a função verificarParOuImpar
describe("verificarParOuImpar", () => {
  it('deve retornar "Par" para números pares', () => {
    expect(verificarParOuImpar(4)).toBe("Par");
  });
  it('deve retornar "Ímpar" para números ímpares', () => {
    expect(verificarParOuImpar(7)).toBe("Ímpar");
  });
  it("deve retornar null para entradas inválidas", () => {
    expect(verificarParOuImpar("não é um número")).toBe(null);
  });
});

// Teste para a função contarCaracterA
describe("contarCaracter", () => {
  it("deve contar a quantidade de caracteres na string", () => {
    expect(contarCaracter("Abracadabra", "a")).toBe(5);
  });
  it("deve retornar null para entradas inválidas", () => {
    expect(contarCaracter(12345, "b")).toBe(null);
  });
});

// Teste para a função atualizarPropriedade
describe("atualizarPropriedade", () => {
  it("deve atualizar uma propriedade existente", () => {
    const objeto = { nome: "João", idade: 25 };
    expect(atualizarPropriedade(objeto, "idade", 30)).toEqual({
      nome: "João",
      idade: 30,
    });
  });
  it("deve retornar null se a propriedade não existir", () => {
    const objeto = { nome: "João" };
    expect(atualizarPropriedade(objeto, "altura", 1.8)).toBe(null);
  });
});
