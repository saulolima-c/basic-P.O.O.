"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const usuario_1 = require("./usuario");
class Funcionario extends usuario_1.User {
    constructor() {
        super();
    }
    boasVindas() {
        return `Olá, ${super.name}`;
    }
    getAtivo() {
        return super.ativo;
    }
}
exports.Funcionario = Funcionario;
const objFuncionario = new Funcionario();
objFuncionario.name = 'Saulin';
console.log(objFuncionario.boasVindas());
console.log(Funcionario.generateToken());
console.log(objFuncionario.getAtivo());
