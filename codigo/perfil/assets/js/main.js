console.log(localStorage);

const radioMensal = document.querySelector('.mensal');
const radioAnual = document.querySelector('.anual');
const periodoSpan = document.querySelectorAll('.periodo-renda');
const pResultado = document.querySelector('.textoResultado');

const rendaBrutaInput = document.querySelector('#rendabruta');
const decimoTerceiroInput = document.querySelector('#decimoterceiro');
const aluguelInput = document.querySelector('#aluguel');
const lucroInvestimentoInput = document.querySelector('#lucro-investimento');
const pensaoAlimentoInput = document.querySelector('#pensao');
const auxilioInput = document.querySelector('#auxilio');

const tipoInvest = document.querySelector('.tipo-investimentos');
tipoInvest.style.display = 'none';

const btnCriaPerfil = document.querySelector('.criarPerfil');
const btnLocalStorage = document.querySelector('.enviarLocalStorage');
const btnLocalStorage1 = document.querySelector('.enviarLocalStorage1');
btnLocalStorage.style.display = 'none';

document.addEventListener('click', (e) => {
    const elemento = e.target;

    if (elemento.classList.contains('mensal')) {
        for (const periodo of periodoSpan) periodo.innerHTML = '(Mensal)';
        radioAnual.checked = false;
    }
    if (elemento.classList.contains('anual')) {
        for (const periodo of periodoSpan) periodo.innerHTML = '(Anual)';
        radioMensal.checked = false;
    }

    if (elemento.classList.contains('criarPerfil')) {
        if (!radioMensal.checked && !radioAnual.checked) {
            pResultado.style.display = 'block';
            criaErro("Selecione a forma que deseja preencher os valores antes de continuar");
            return;
        } else {
            pResultado.style.display = 'none';
        }

        const rendaBruta = Number(rendaBrutaInput.value);
        const decimoTerceiro = Number(decimoTerceiroInput.value);
        const aluguel = Number(aluguelInput.value);
        let lucroInvestimento = Number(lucroInvestimentoInput.value);
        const pensaoAlimento = Number(pensaoAlimentoInput.value);
        const auxilio = Number(auxilioInput.value);

        if(rendaBrutaInput.value == '0') {
            rendaBrutaInput.value = 'R$0,00';
        }
        if(decimoTerceiroInput.value == '0') {
            decimoTerceiroInput.value = 'R$0,00';
        }
        if(aluguelInput.value == '0') {
            aluguelInput.value = 'R$0,00';
        }
        if(lucroInvestimentoInput.value == '0') {
            lucroInvestimentoInput.value = 'R$0,00';
        }
        if(pensaoAlimentoInput.value == '0') {
            pensaoAlimentoInput.value = 'R$0,00';
        }
        if(auxilioInput.value == '0') {
            auxilioInput.value = 'R$0,00';
        }

        if((rendaBruta == '' || Number.isNaN(rendaBruta) == true) && rendaBrutaInput.value !== 'R$0,00') {
            pResultado.style.display = 'block';
            criaErro('Campos vazios ou possuem valores inválidos.');
            tipoInvest.style.display = 'none';
            return;
        }


        if(decimoTerceiro == '' || Number.isNaN(decimoTerceiro) == true && decimoTerceiroInput.value !== 'R$0,00') {
            pResultado.style.display = 'block';
            criaErro('Campos vazios ou possuem valores inválidos.');
            tipoInvest.style.display = 'none';
            return;
        }
        if(aluguel == '' || Number.isNaN(aluguel) == true && aluguelInput.value !== 'R$0,00') {
            pResultado.style.display = 'block';
            criaErro('Campos vazios ou possuem valores inválidos.');
            tipoInvest.style.display = 'none';
            return;
        }

        if(pensaoAlimento == '' || Number.isNaN(pensaoAlimento) == true && pensaoAlimentoInput.value !== 'R$0,00') {
            pResultado.style.display = 'block';
            criaErro('Campos vazios ou possuem valores inválidos.');
            tipoInvest.style.display = 'none';
            return;
        }
        if(auxilio == '' || Number.isNaN(auxilio) == true && auxilioInput.value !== 'R$0,00') {
            pResultado.style.display = 'block';
            criaErro('Campos vazios ou possuem valores inválidos.');
            tipoInvest.style.display = 'none';
            return;
        }

        if(lucroInvestimentoInput.value.length ==  0) {
            pResultado.style.display = 'none';
            btnCriaPerfil.style.display = 'none';
            btnLocalStorage.style.display = 'block';
            tipoInvest.style.display = 'none';
            return;
        }

        pResultado.style.display = 'none';
        tipoInvest.style.display = 'block';
        btnLocalStorage.style.display = 'none';
    }
});

const acoes = document.querySelector('.acoes');
const tesouro = document.querySelector('.tesouro');
const fundos = document.querySelector('.fundos');
const fixa = document.querySelector('.fixa');

const btnExpandir = document.querySelector('.expandir');
const divBtnExpandir = document.querySelector('.buttonexpandir');

let arrayAuxiliar = [];

btnExpandir.addEventListener('click', () => {

    if(!acoes.checked && !tesouro.checked && !fundos.checked && !fixa.checked) {
        alert("Cheque pelo menos um dos campos para inserir valores");
        return;
    }

    if (acoes.checked) {
        criaCampo('Lucro com ações', 'acoesInput', "fa-solid fa-chart-line");
        arrayAuxiliar.push('acoes');
    }
    if (tesouro.checked) {
        criaCampo('Lucro com Tesouro Direto', 'tesouroInput', "fa-solid fa-chart-pie");
        arrayAuxiliar.push('tesouro');
    }
    if (fundos.checked) {
        criaCampo('Lucro com Fundos', 'fundosInput', "fa-solid fa-wallet");
        arrayAuxiliar.push('fundos')
    }
    if (fixa.checked) {
        criaCampo('Lucro com Renda Fixa', 'fixaInput', "fa-solid fa-money-bill-transfer");
        arrayAuxiliar.push('fixa');
    }

    btnExpandir.parentElement.remove();
});

const divInvestimento = document.querySelector('.declararInvestimento');

function criaErro(msg) {
    pResultado.innerHTML = msg;
    pResultado.setAttribute('class', 'bad');
}

function criaCampo(texto, classe, classeIcone) {
    divInvestimento.style.display = 'block';

    const span = document.createElement('span');
    const input = document.createElement('input');
    const br = document.createElement('br');
    const i = document.createElement('i');

    input.setAttribute('type', 'text');
    input.setAttribute('class', classe);
    i.setAttribute('class', classeIcone);

    span.innerHTML = texto;

    input.style.paddingLeft = '5px';
    input.style.outline = '0';
    input.style.fontSize = '1em';
    input.style.marginLeft = '4px';
    input.style.marginBottom = '3px';

    i.style.marginRight = '4px';

    divInvestimento.appendChild(i);
    divInvestimento.appendChild(span);
    divInvestimento.appendChild(input);
    divInvestimento.append(br);
}

btnLocalStorage.addEventListener('click', () => {
    let objeto;
    objeto = criaObjeto(false);

    addLocalStorage(objeto);
});

btnLocalStorage1.addEventListener('click', () => {
    let objeto;
    let arrayInput = [];

    for(let string of arrayAuxiliar) {
        if(string == 'acoes') {
            const inputAcao = document.querySelector('.acoesInput');

            if(inputAcao.value == '') {
                alert('Insira um valor para este campo');
                return;
            }

            if(Number(inputAcao.value) == 0) {
                alert('Insira um valor maior que zero este campo');
                return;
            }

            if(Number(inputAcao.value) == null) {
                alert('Insira um valor válido para este campo');
                return;
            }

            arrayInput.push(Number(inputAcao.value));
        }
        if(string == 'tesouro') {
            const inputTesouro = document.querySelector('.tesouroInput');

            if(inputTesouro.value == '') {
                alert('Insira um valor para este campo');
                return;
            }

            if(Number(inputTesouro.value) == 0) {
                alert('Insira um valor maior que zero este campo');
                return;
            }

            if(Number.isNaN(Number(inputTesouro.value)) == true) {
                alert('Insira um valor válido para este campo');
                return;
            }

            arrayInput.push(Number(inputTesouro.value));
        }
        if(string == 'fundos') {
            const inputFundos = document.querySelector('.fundosInput');

            if(inputFundos.value == '') {
                alert('Insira um valor para este campo');
                return;
            }

            if(Number(inputFundos.value) == 0) {
                alert('Insira um valor maior que zero este campo');
                return;
            }

            if(Number.isNaN(Number(inputFundos.value)) == true) {
                alert('Insira um valor válido para este campo');
                return;
            }

            arrayInput.push(Number(inputFundos.value));
        }
        if(string == 'fixa') {
            const inputFixa = document.querySelector('.fixaInput');

            if(inputFixa.value == '') {
                alert('Insira um valor para este campo');
                return;
            }

            if(Number(inputFixa.value) == 0) {
                alert('Insira um valor maior que zero este campo');
                return;
            }

            if(Number.isNaN(Number(inputFixa.value)) == true) {
                alert('Insira um valor válido para este campo');
                return;
            }

            arrayInput.push(Number(inputFixa.value));
        }
    }

    objeto = criaObjeto(true, arrayInput);
    arrayInput = [];
    console.log(arrayInput);

    addLocalStorage(objeto);
});

function criaObjeto(possuiInvestimento, array) {

    let objetoGeral = {
        rendabruta: rendaBrutaInput.value,
        decidoterceiro: decimoTerceiroInput.value,
        aluguelvalor: aluguelInput.value,
        lucro: lucroInvestimentoInput.value,
        pensao: pensaoAlimentoInput.value,
        auxilio: auxilioInput.value,
    }

    if(possuiInvestimento) {
        for(let i = 0; i < arrayAuxiliar.length; i++) {
            if(arrayAuxiliar[i] == 'acoes') {
                const acoesValue = array[i];
                objetoGeral["acoes"] = acoesValue;
            }
            if(arrayAuxiliar[i] == 'tesouro') {
                const tesouroValue = array[i];
                objetoGeral["tesouro"] = tesouroValue;
            }
            if(arrayAuxiliar[i] == 'fundos') {
                const fundosValue = array[i];
                objetoGeral["fundos"] = fundosValue;
            }
            if(arrayAuxiliar[i] == 'fixa') {
                const fixaValue = array[i];
                objetoGeral["fixa"] = fixaValue;
            }
        }

        arrayAuxiliar = [];
        console.log(arrayAuxiliar);
    }

    return objetoGeral;
}

function addLocalStorage(objeto) {
    const jsonObject = JSON.stringify(objeto);
    console.log(jsonObject);
    localStorage.setItem('relatorio', jsonObject);
    console.log(localStorage);
}

document.addEventListener('keypress', (e) => {
    const tecla = e.keyCode;

    if(tecla == 13) {
        localStorage.clear();
        console.log('o localstorage foi limpo');
    }
});
