/* Omit
interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {
}

const brasileiro: Brasileiro = {
}

/* Bibliotecas
import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao')
    }
});

$('body').novaFuncao();

/*interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}
// -? remove os valores opicionais
type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;
    constructor(nome, idade) {
        this.nome= nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Luke', 14);


/* Uso do ?
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'corrdenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        //redirecionar(usuario.cargo);
    }
    //redirecionar para área do usuário
}

/*Condicional
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'corrdenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //redirecionar para a área de admin
    }
    //redirecionar para área do usuário
}

/* Generic types

function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 'd');

/*
// Pegando dados do Input
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

/* Interfaces
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: false,
}
/*
function soma(a: number, b: number) {
    return a + b;
}

//soma('a', 'b')
*/