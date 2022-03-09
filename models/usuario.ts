export interface userDTO {
    name: string,
    password: string
}

export class User implements userDTO {
    public static ID: string = '';
    private _name: string;
    private _password: string;
    protected _ativo: boolean;

    constructor() {
        this._name = '',
        this._password = '',
        this._ativo = true
    }

    set name(name:string) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set password(password:string) {
        this._password = password;
    }


    get password() {
        return this._password;
    }

    protected set ativo(ativo:boolean) {
        this._ativo = ativo;
    }

    protected get ativo() {
        return this._ativo;
    }

    public static generateToken(): string {
        const num = Math.random().toFixed();
        return this.ID.concat(`${num}HJUYF#KI&HNNJ$`)
    }
}

const objUser: User = new User();

// chama método set da classe User
objUser.name = 'Saulo Lima';
objUser.password = '12345789';

// chama método get da classe User
console.log(objUser.name);
console.log(objUser.password);
