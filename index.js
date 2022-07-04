import {Financiamento} from './financiamento.js';
import {FinanciamentoCarencia} from './carencia.js';
//Recebendo dados

const comCarencia = document.querySelector ('#carencia');
const listaSuspensa = document.querySelector ('#listaSuspensa');
const corpoTabela = document.querySelector ('#corpoTabela');
const botaoCalcular = document.querySelector ('#botaoCalcular');
const textoValor = document.querySelector ('#textoValor');
const textoEntrada = document.querySelector ('#textoEntrada');
const taxaJuros = document.querySelector ('#taxaJuros');
const textoPrazo = document.querySelector ('#textoPrazo');

// Função para limpar a tabela

function limpaTabela() {
    while (corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}


// EventListener para tornar visivel ou não a lista suspensa
// através do checkbox
comCarencia.addEventListener('change', function() {
    if (this.checked) {
        listaSuspensa.removeAttribute ('hidden');
    } else {
        listaSuspensa.setAttribute ('hidden', 'hidden');
    }
} );

// EventListener para realizar o calculo ao clicar no botão calcular
botaoCalcular.addEventListener ('click', function() {
    limpaTabela();
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxa = parseFloat(taxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;

    // Opção de incluir carencia selecionada
    if (comCarencia.checked) {
        const carencia = parseInt (listaSuspensa.value);
        simulacao = new FinanciamentoCarencia (valor, entrada, taxa, prazo, carencia);
    } else {        
        simulacao = new Financiamento (valor, entrada, taxa, prazo);      

    }

    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();

})
