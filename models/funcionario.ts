import { User } from "./usuario";

export class Funcionario extends User {
    constructor(){
        super() // possui os atributos da classe extendida 
    }

    public boasVindas(): string {
        return `Olá, ${super.name}`
    }

    public getAtivo(): boolean {
        return super.ativo
    }
}

const objFuncionario: Funcionario = new Funcionario();
objFuncionario.name = 'Saulin';

console.log(Funcionario.generateToken());
console.log(objFuncionario.boasVindas());
console.log(objFuncionario.getAtivo());

