"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this._name = '',
            this._password = '',
            this._ativo = true;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set password(password) {
        this._password = password;
    }
    get password() {
        return this._password;
    }
    set ativo(ativo) {
        this._ativo = ativo;
    }
    get ativo() {
        return this._ativo;
    }
    static generateToken() {
        const num = Math.random().toFixed();
        return this.ID.concat(`${num}HJUYF#KI&HNNJ$`);
    }
}
exports.User = User;
User.ID = '';
const objUser = new User();
objUser.name = 'Saulo Lima';
objUser.password = '12345789';
console.log(objUser.name);
console.log(objUser.password);
