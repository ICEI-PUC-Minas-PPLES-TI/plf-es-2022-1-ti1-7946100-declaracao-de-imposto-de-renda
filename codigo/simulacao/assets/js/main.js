const rendaBrutaInput = document.querySelector('#rendaBruta');
const numeroDependentesInput = document.querySelector('#numeroDependentes');
const divResultado = document.querySelector('#resultado');
const msgResultado = document.querySelector('#mensagemresultado');

window.onload = function() {
    if(localStorage.getItem('dados') === null) {
        return;
    }

    criaTabela();
    adicionaDadosNaTabela();
}

// Captura evento de clique no botão 'simular'
document.addEventListener('click', e => {
    e.preventDefault();
    const elemento = e.target;

    const rendaBrutaValue = Number(rendaBrutaInput.value);
    const numeroDependentesValue = Number(numeroDependentesInput.value);

    
    if(elemento.classList.contains('simular')) {
        if(!rendaBrutaValue) {
            mensagem('Campo renda bruta é inválido!', 0);
            return;
        }

        if(!Number.isInteger(numeroDependentesValue)) {
            mensagem('O campo número de dependentes precisa ser um número inteiro!');
            return;
        }

        const dadosEmGeral = calculoIrrf(rendaBrutaValue, numeroDependentesValue);
        adicionaDadosLocalStorage(dadosEmGeral);

        if(!divResultado.classList.contains('possuiTabela')) {
            criaTabela();
        }

        adicionaDadosNaTabela();
    }
});

// Limpar o localStorage do navegador
document.addEventListener('click', e => {
    const elemento = e.target;

    if(elemento.classList.contains('limpar-dados')) {
        localStorage.clear();
        console.log(localStorage);
        window.location.reload()
    }
});

// Adiciona dados na local storage
function adicionaDadosLocalStorage(objetoDados) {
    const objetoJSON = JSON.stringify(objetoDados);
    localStorage.setItem('dados', objetoJSON);
    console.log(localStorage);
}

// Adiciona os dados na tabela do navegador
function adicionaDadosNaTabela() {
    const jsonObject = localStorage.getItem('dados');
    const normalObject = JSON.parse(jsonObject)
    manipulaDadosTabela(normalObject);
    mensagem('Dados adicionados com sucesso!', 1);
}

// Cria uma mensagem de sucesso ou de erro
const p = criaElemento('p');
function mensagem(msg, flag) {
    p.innerText = '';
    p.innerText = msg;

    if(flag === 0) {
        msgResultado.style.backgroundColor = 'rgb(247, 166, 166)';
        msgResultado.appendChild(p);
    }
    if(flag === 1) {
        msgResultado.style.backgroundColor = 'rgb(166, 247, 185)';
        msgResultado.appendChild(p);
    }
}

// Faz todos os cálculos relacionados ao IRRF
// e nos retorna um objeto de informações
function calculoIrrf(rendaBruta, dependentes) {
    let aliquota;

    if(rendaBruta <= 1212.00) {
        aliquota = 7.5;
    } else if(rendaBruta <= 2427.35) {
        aliquota = 9;
    } else if(rendaBruta <= 3641.03) {
        aliquota = 12;
    } else if(rendaBruta <= 7087.22) {
        aliquota = 14;
    } else {
        mensagem('Faixa salarial não encontrada', 0);
        localStorage.clear();
        return;
    }

    const contribuicaoInss = calculaContribuicaoInss(rendaBruta, aliquota);

    const baseDeCalculoValor = calculaBaseDeCalculo(rendaBruta, contribuicaoInss, dependentes);

    if(baseDeCalculoValor <= 1903.98) {
        return 0;
    }

    const dadosIrrf =  dadosDoIrrf(baseDeCalculoValor);
    const irrf = (baseDeCalculoValor * (dadosIrrf[0] / 100)) - dadosIrrf[1];

    let impostoRendaTotal = irrf.toFixed(2);

    const informacoes = {
        rendabruta: rendaBruta.toFixed(2),
        nDependentes: dependentes,
        aliquotaInss: aliquota,
        cInss: contribuicaoInss.toFixed(2),
        baseCalculo: baseDeCalculoValor.toFixed(2),
        aliquotaIrrf: dadosIrrf[0],
        parcelaADeduzir: dadosIrrf[1].toFixed(2),
        impostoRenda: impostoRendaTotal
    }

    return informacoes;
}

// Cria um elemento html
function criaElemento(elemento) {
    return document.createElement(elemento);
}

// Calcula o valor a ser contribuido para o INSS
function calculaContribuicaoInss(rendaBruta, aliquota) {
    return rendaBruta * (aliquota / 100);
}

// Retorna um array com dados sobre o IRRF
function dadosDoIrrf(baseDeCalculo) {
    const dados = [];
    let aliquotaIrrfValor;
    let parcelaDeduzir;

    if(baseDeCalculo <= 2826.66) {
        aliquotaIrrfValor = 7.5;
        parcelaDeduzir = 142.80;
    } else if(baseDeCalculo <= 3751.05) {
        aliquotaIrrfValor = 15.0;
        parcelaDeduzir = 354.80;
    } else if(baseDeCalculo <= 4664.68) {
        aliquotaIrrfValor = 22.5;
        parcelaDeduzir = 636.13;
    } else {
        aliquotaIrrfValor = 27.5;
        parcelaDeduzir = 869.36;
    }   

    dados.push(aliquotaIrrfValor);
    dados.push(parcelaDeduzir);

    return dados;
}

// Retorna o valor da base de cálculo para o cálculo do IRRF
function calculaBaseDeCalculo(rendaBruta, cInss, dependentes) {
    return rendaBruta - cInss - (189.59 * dependentes);
}

// Cria um cabeçalho para a tabela onde os resultados serão mostrados
function criaTabela() {
    const table = criaElemento('table');
    const thead = criaElemento('thead');
    const tbody = criaElemento('tbody');

    tbody.setAttribute('class', 'corpoTabela');

    table.appendChild(thead);
    table.appendChild(tbody);
    
    const linha1 = criaElemento('tr');

    const coluna1 = criaElemento('th');
    const coluna2 = criaElemento('th');
    const coluna3 = criaElemento('th');
    const coluna4 = criaElemento('th');
    const coluna5 = criaElemento('th');
    const coluna6 = criaElemento('th');
    const coluna7 = criaElemento('th');
    const coluna8 = criaElemento('th');

    coluna1.innerText = 'Renda Bruta';
    coluna2.innerText = 'Número de dependentes';
    coluna3.innerText = 'Alíquota INSS';
    coluna4.innerText = 'Valor da contribuição INSS';
    coluna5.innerText = 'Base de Cálculo IRRF';
    coluna6.innerText = 'Alíquota IRRF';
    coluna7.innerText = 'Parcela a Deduzir IRRF';
    coluna8.innerText = 'Imposto de Renda (IRRF)';

    for(let i = 1; i < 9; i++) {
        linha1.appendChild(eval(`coluna${i}`));
        eval(`coluna${i}`).style.backgroundColor = '#ededed';
        eval(`coluna${i}`).style.border = '1px solid #c4c4c4';
        eval(`coluna${i}`).setAttribute('class', 'colunaTabela');
    }

    thead.appendChild(linha1);

    divResultado.appendChild(table);
    divResultado.setAttribute('class', 'possuiTabela');
}

// Adiciona os resultados aos campos da criaTabela
// com base nos cálculos feitos nas funções anteriores
function manipulaDadosTabela(dados) {
    const corpoTabela = document.querySelector('.corpoTabela');

    const linhaDados = criaElemento('tr');
    linhaDados.setAttribute('class', 'linhaDeDados');

    const dado1 = criaElemento('td');
    const dado2 = criaElemento('td');
    const dado3 = criaElemento('td');
    const dado4 = criaElemento('td');
    const dado5 = criaElemento('td');
    const dado6 = criaElemento('td');
    const dado7 = criaElemento('td');
    const dado8 = criaElemento('td');

    
    dado1.innerText = `R$${dados.rendabruta}`.replace('.', ',');
    dado2.innerText = `${dados.nDependentes}`;
    dado3.innerText = `${dados.aliquotaInss}%`;
    dado4.innerText = `R$${dados.cInss}`.replace('.', ',');
    dado5.innerText = `R$${dados.baseCalculo}`.replace('.', ',');
    dado6.innerText = `${dados.aliquotaIrrf}%`;
    dado7.innerText = `R$${dados.parcelaADeduzir}`.replace('.', ',');
    dado8.innerText = `R$${dados.impostoRenda}`.replace('.', ',');

    if(typeof dados !== 'object') {
        dado1.innerText = 'R$0,00';
        dado2.innerText = '-';
        dado3.innerText = '-';
        dado4.innerText = 'R$0,00';
        dado5.innerText = 'R$0,00';
        dado6.innerText = '-';
        dado7.innerText = 'R$0,00';
        dado8.innerText = 'Insento';
    } 

    for(let i = 1; i < 9; i++) {
        linhaDados.appendChild(eval(`dado${i}`));
        eval(`dado${i}`).setAttribute('class', 'dadoTabela');
    }

    corpoTabela.appendChild(linhaDados);
}
