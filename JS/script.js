let numeroSecreto;
let contadorDeChances;
const MAX_CHANCES=10;
const campoPalpite = document.querySelector('#campopalpite');
const botaoEnviarPalpite = document.querySelector('botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('botaoReiniciar');

const mensagemElement = document.querySelector('.mensagem');
const palpitesAnterioresElement = document.querySelector('.palpites-anteriores');
const dicaElement = document.querySelector('.dica');
const chancesRestantesElement = document.querySelector('.chancesRestantes');

let listadepalpites = [];

function iniciarjogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log ('numero Secreto (apenas para teste):', numeroSecreto);
}