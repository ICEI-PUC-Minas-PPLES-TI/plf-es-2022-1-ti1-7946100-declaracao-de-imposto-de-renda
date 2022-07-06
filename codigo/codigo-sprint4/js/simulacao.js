// Radio buttons de declaracao mensal ou anual
const rButtonMensal = document.querySelector('.mensalRadio');
const rButtonAnual = document.querySelector('.anualRadio');

// Radio buttons de declaracao se possui ou nao rendimentos de investimento
const rInvestimentoTrue = document.querySelector('.investimentoTrue');
const rInvestimentoFalse = document.querySelector('.investimentoFalse');

// Input text no geral
const inputRendabruta = document.querySelector('.inputRendabruta');
const inputDecimoTerceiro = document.querySelector('.inputDecimoTerceiro');
const inputAluguel = document.querySelector('.inputAluguel');
const inputPensaoAlimenticia = document.querySelector('.inputPensaoAlimenticia');
const inputAuxilio = document.querySelector('.inputAuxilio');
const inputNumeroDependentes = document.querySelector('.inputNumeroDependentes');

// Todos os inputs dentro da div "containerInput"
const allInput = document.querySelectorAll('.containerInput input');

// Div principal da parte de informar os rendimentos
const formInvestimentos = document.querySelector('.formInvestimentos');

// Onde vão ficar os inputs de declaração de investimento
const divDeclarandoInvestimento = document.querySelector('.declarandoInvestimento');

// Todos os inputs[radio] refente aos tipos de investimentos
const allInputInvestimento = document.querySelectorAll('.opcoesInvestimento input');

// Array que armazena o nome das classes de cada investimento checado
let arrayClasses = [];

// Array com nome dos campos de cada investimento
let arrayNomes = [];

// Array para setar os icones de cada campo de cada investimento
let arrayIcones = [];

// Apenas uma variaval de controle de fluxo de aplicacao
let auxControle = true;

// Array que guarda o nome de cada campo do input de declarar rendimentos de investimentos
let nomeAtributo = [];

// Array responsavel 
let vetor = [];

// Captura o evento de clique do botao simular
document.querySelector('.btnSimular').addEventListener('click', e => {
    e.preventDefault();
    localStorage.clear();

    
    if (!verificaRadioButton(rButtonMensal, rButtonAnual)) return;
    if (!validaCampo(Array.from(allInput))) return;
    if (!verificaRadioButton(rInvestimentoTrue, rInvestimentoFalse)) return;

    geraCampoInvestimento(rInvestimentoTrue, rInvestimentoFalse);

    if (vetor.length > 0) {
        if (!validaRendimentos(Array.from(vetor))) return;
    }

    if (auxControle) {
        addLocalStorage(dados(rInvestimentoFalse.checked));
    }

    auxControle = true;
    return;
});

// Ao marcar um checkbox um input text e gerado, ao desmarcar o mesmo e deletado
function ManipulaInputInvestimento() {
    arrayClasses = [];
    arrayNomes = [];
    arrayIcones = [];
    nomeAtributo = [];

    verificaInvestimentoChecado(allInputInvestimento);
    criaTodosOsCampos();

    vetor = document.querySelectorAll('.declarandoInvestimento input');
}

// Substitui virugulas por ponto
function replaceVirgula(inputs) {
    for (let input of inputs) {
        input.value = input.value.replace(',', '.');
    }
}

// Desmarcar inputs marcados
function desmarcaCampos(inputs) {
    for (let input of inputs) {
        input.checked = false;
    }
}

// Verifica se os radio button foram marcados
function verificaRadioButton(r1, r2) {
    return true ? r1.checked || r2.checked : false;
}

// Valida os campos a serem preenchidos
function validaCampo(inputs) {
    if (inputs.length === 0) return false;

    inputs = inputs.slice(0, -2);
    let auxiliar = 0;

    replaceVirgula(inputs);

    inputs.forEach(campo => {
        if (!campo.value || Number.isNaN(Number(campo.value))) {
            auxiliar += 1;
        }
    });

    if (auxiliar > 0) return false;
    return true;
}

// Valida os campos referentes aos rendimentos de investimentos
function validaRendimentos(inputs) {
    let auxiliar = 0;
    if (inputs.length === 0) {
        auxControle = true;
        return false;
    }

    replaceVirgula(inputs);

    inputs.forEach(campo => {
        if (!campo.value || Number.isNaN(Number(campo.value))) {
            auxiliar += 1;
        }
    });

    if (auxiliar > 0) return false;

    auxControle = true;
    return true;
}

// Verifica se a pessoa obteve rendimentos provindos de investimentos,
// se sim, é gerado um campo para a pessoa declarar os redimentos, especificados
function geraCampoInvestimento(r1, r2) {
    if (!verificaRadioButton(r1, r2)) {
        return false;
    }
    if (r1.checked) {
        formInvestimentos.style.display = 'flex';
        auxControle = false;
    }

    if (r2.checked) {
        formInvestimentos.style.display = 'none';

        const inputInvestimento = document.querySelectorAll('#controller');
        for (input of inputInvestimento) {
            input.parentElement.remove();
        }

        desmarcaCampos(allInputInvestimento);
    }
    return true;
}

// Verifica quais tipos de investimentos estao checados
function verificaInvestimentoChecado(inputs) {
    if (inputs[0].checked) {
        arrayClasses.push("inputAcoes")
        arrayNomes.push("*Ações");
        arrayIcones.push("fa-solid fa-chart-line");
        nomeAtributo.push('acao');
    }
    if (inputs[1].checked) {
        arrayClasses.push("inputTesouroDireto");
        arrayNomes.push("*Tesouro Direto");
        arrayIcones.push("fa-solid fa-chart-pie");
        nomeAtributo.push('tesouro');
    }
    if (inputs[2].checked) {
        arrayClasses.push("inputFundos");
        arrayNomes.push("*Fundos Imobiliários");
        arrayIcones.push("fa-solid fa-wallet");
        nomeAtributo.push('fundos');
    }
    if (inputs[3].checked) {
        arrayClasses.push("inputFixa");
        arrayNomes.push("*Renda Fixa");
        arrayIcones.push("fa-solid fa-money-bill-transfer");
        nomeAtributo.push('rendafixa');
    }
}

// Campos que serão gerados apos o usuario pressionar o botao expandir
function criaCampoDeclarado(titulo, classe, icone = false) {
    const div = document.createElement('div');

    const br = document.createElement('br');
    const span = document.createElement('span');
    const input = document.createElement('input');
    const i = document.createElement('i');

    div.setAttribute('class', 'mainInvestimento');
    input.setAttribute('type', 'text');
    input.setAttribute('class', classe);
    input.setAttribute('id', 'controller');
    i.setAttribute('class', icone);

    span.innerHTML = titulo;

    div.appendChild(i);
    div.appendChild(span);
    div.appendChild(input);
    div.append(br);

    divDeclarandoInvestimento.appendChild(div);
}

// Cria todos os campos checados e acrescenta novos campos checados posteriornmente
function criaTodosOsCampos() {
    let inputs = Array.from(document.querySelectorAll('.declarandoInvestimento input'));

    inputs.forEach(input => {
        input.parentElement.remove();
    });

    for (let i = 0; i < arrayNomes.length; i++) {
        criaCampoDeclarado(arrayNomes[i], arrayClasses[i], arrayIcones[i]);
    }

    inputs = Array.from(document.querySelectorAll('.declarandoInvestimento input'));
    auxControle = true;
}

// Gera um objeto com todos os dados fornecidos pelo usuario
function dados(tag) {
    const objeto = {
        rendaBruta: inputRendabruta.value,
        decimoTerceiro: inputDecimoTerceiro.value,
        aluguel: inputAluguel.value,
        pensaoAlimenticia: inputPensaoAlimenticia.value,
        auxilio: inputAuxilio.value,
        dependentes: inputNumeroDependentes.value,
        mensal: rButtonMensal.checked
    }

    if (tag) {
        return objeto;
    } else {
        let inputs = Array.from(document.querySelectorAll('.declarandoInvestimento input'));

        for (let i = 0; i < inputs.length; i++) {
            objeto[`${nomeAtributo[i]}`] = inputs[i].value;
        }

        return objeto;
    }
}

// Adiciona um objeto na localStorage
function addLocalStorage(objeto) {
    localStorage.clear();
    localStorage.setItem('dadosIrrf', JSON.stringify(objeto));

    const sectionPerfil = document.querySelector('.perfil');
    sectionPerfil.style.display = 'none';
}

