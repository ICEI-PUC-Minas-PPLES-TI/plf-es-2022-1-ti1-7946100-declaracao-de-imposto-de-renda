// Titulo da pagina de relatorio
const tituloRelatorio = document.querySelector('.titulo');

// Div onde vai ficar as informacoes do relatorio
const informacoes = document.querySelector('.campoInformacoes');

// Todos os atributos possiveis para investimentos
const atributos = ['acao', 'tesouro', 'fundos', 'rendafixa'];

// Retorna um objeto obtido da localStorage
function objetoLocalStorage() {
    const obj = JSON.parse(localStorage.getItem('dadosIrrf'));
    return obj;
}

// Emite o relatorio na tela
function emitirRelatorio() {
    const relatorio = document.getElementById("relatorio");

    relatorio.classList.remove("relatorioFechado");
    botaoRelatorio.classList.remove("relatorioAberto");

    relatorio.classList.add("relatorioAberto");
    botaoRelatorio.classList.add("relatorioFechado");
}

// Captura o evento de clique do botao relatorio
const botaoRelatorio = document.getElementById("btnSimular");
botaoRelatorio.addEventListener('click', e => {
    e.preventDefault();

    try {
        exibeInformacoes(objetoLocalStorage().mensal);
        tituloRelatorio.innerHTML = 'O relatório foi gerado com sucesso!'
    } catch (e) {
        erro('Preencha todos os campos', 'msgErro');
    }

});

// Mensagem de erro
const divmsgErro = document.querySelector('.mensagemErro');
const p = document.createElement('p');
divmsgErro.appendChild(p);

function erro(msg, classe) {
    const p = divmsgErro.querySelector('p');
    p.innerHTML = msg;
    p.classList.add(classe);
}

// salario bruto - contribuicao inss - pensao - (numero dependentes * 189,59)
//A funcao abaixo calcula o imposto de renda e retorna um objeto
function calculoImpostoRenda() {
    const obj = objetoLocalStorage();

    let renda = Number(obj.rendaBruta);
    let salarioInss;
    let baseCalculo;
    let aliquotaInss;
    let aliquotaIrrf;
    let parcelaDedutivel;
    let valorIrrf;
    let salarioLiquido;

    let lucroAcoes = Number(obj.acao);
    let lucroTesouro = Number(obj.tesouro);
    let lucroFundos = Number(obj.fundos);
    let lucroFixa = Number(obj.rendafixa);

    let impostoAcao;

    let impostoTesouro180;
    let impostoTesouro360;
    let impostoTesouro720;
    let impostoTesouroMax;

    let impostoFundos;

    let impostoFixa180;
    let impostoFixa360;
    let impostoFixa720;
    let impostoFixaMax;

    renda = renda + Number(obj.decimoTerceiro) + Number(obj.aluguel) + Number(obj.auxilio);

    if (renda <= 1212) {
        aliquotaInss = 7.5 / 100;
    } else if (renda <= 2427.35) {
        aliquotaInss = 9 / 100;
    } else if (renda <= 3641.03) {
        aliquotaInss = 12 / 100;
    } else {
        aliquotaInss = 14 / 100;
    }

    salarioInss = renda - (renda * aliquotaInss);
    baseCalculo = salarioInss - Number(obj.pensaoAlimenticia) - ((189.59) * 12 * Number(obj.dependentes));

    if (!objetoLocalStorage().mensal) {
        if ((baseCalculo / 12) <= 1903.98) {
            aliquotaIrrf = 0;
            parcelaDedutivel = 0;
        } else if ((baseCalculo / 12) / 12 <= 2826.66) {
            aliquotaIrrf = 7.5 / 100 * 12;
            parcelaDedutivel = 142.80 * 12;
        } else if ((baseCalculo / 12) / 12 <= 3751.05) {
            aliquotaIrrf = 15 / 100 * 12;
            parcelaDedutivel = 354.80 * 12;
        } else if ((baseCalculo / 12) / 12 <= 4664.68) {
            aliquotaIrrf = 22.50 / 100 * 12;
            parcelaDedutivel = 636.13 * 12;
        } else if ((baseCalculo / 12) / 12 > 4664.68) {
            aliquotaIrrf = 27.50 / 100 * 12;
            parcelaDedutivel = 869.36 * 12;
        }

        valorIrrf = (baseCalculo * aliquotaIrrf) - parcelaDedutivel;
    } else {
        if (baseCalculo <= 1903.98) {
            aliquotaIrrf = 0;
            parcelaDedutivel = 0;
        } else if (baseCalculo <= 2826.66) {
            aliquotaIrrf = 7.5 / 100;
            parcelaDedutivel = 142.80;
        } else if (baseCalculo <= 3751.05) {
            aliquotaIrrf = 15 / 100;
            parcelaDedutivel = 354.80;
        } else if (baseCalculo <= 4664.68) {
            aliquotaIrrf = 22.50 / 100;
            parcelaDedutivel = 636.13;
        } else {
            aliquotaIrrf = 27.50 / 100;
            parcelaDedutivel = 869.36;
        }

        valorIrrf = (baseCalculo * aliquotaIrrf) - parcelaDedutivel;
    }


    if (lucroAcoes >= 20000) {
        impostoAcao = lucroAcoes * (15 / 100)
    }

    impostoTesouro180 = lucroTesouro * (22.5 / 100);
    impostoTesouro360 = lucroTesouro * (20 / 100);
    impostoTesouro720 = lucroTesouro * (17.5 / 100);
    impostoTesouroMax = lucroTesouro * (15 / 100);

    impostoFixa180 = lucroFixa * (22.5 / 100);
    impostoFixa360 = lucroFixa * (20 / 100);
    impostoFixa720 = lucroFixa * (17.5 / 100);
    impostoFixaMax = lucroFixa * (15 / 100);

    impostoFundos = lucroFundos * (20 / 100);


    return {
        rendab: renda,
        sal_inss: salarioInss,
        al_inss: aliquotaInss,
        b_calculo: baseCalculo,
        al_irrf: aliquotaIrrf,
        parcel_deduzir: parcelaDedutivel,
        val_irrf: valorIrrf,
        salarioLiquidoFinal: salarioLiquido,
        imposto_acao: impostoAcao,
        imposto_tesouro1: impostoTesouro180,
        imposto_tesouro2: impostoTesouro360,
        imposto_tesouro3: impostoTesouro720,
        imposto_tesouro4: impostoTesouroMax,
        imposto_fixa1: impostoFixa180,
        imposto_fixa2: impostoFixa360,
        imposto_fixa3: impostoFixa720,
        imposto_fixa4: impostoFixaMax,
        imposto_fundos: impostoFundos
    }
}

// A funcao abaixo exibe as informacoes na tela para o usuario
function exibeInformacoes(periodo) {
    const objetoNormal = objetoLocalStorage();
    const objeto = calculoImpostoRenda();

    const insento = document.createElement('tr');
    const quebraLinha = document.createElement('br');

    const rendaBruta = document.createElement('tr');
    const salarioInss = document.createElement('tr');
    const aliquotaPrevidencia = document.createElement('tr');

    const baseDeCalculo = document.createElement('tr');
    const aliquotaImposto = document.createElement('tr');
    const valorImposto = document.createElement('tr');

    const acoes = document.createElement('tr');

    const tesouro = document.createElement('tr');
    const tesouro1 = document.createElement('tr');
    const tesouro2 = document.createElement('tr');
    const tesouro3 = document.createElement('tr');
    const tesouro4 = document.createElement('tr');

    const fundos = document.createElement('tr');
    const fundosPorcentagem = document.createElement('tr');

    const rendafixa = document.createElement('tr');
    const rendafixa1 = document.createElement('tr');
    const rendafixa2 = document.createElement('tr');
    const rendafixa3 = document.createElement('tr');
    const rendafixa4 = document.createElement('tr');

    if (periodo) {
        rendaBruta.innerText = `Renda Bruta Mensal: R$ ${Number(objeto.rendab).toFixed(2)}`;
        salarioInss.innerText = `Salário com desconto do INSS: R$ ${Number(objeto.sal_inss).toFixed(2)}`;
        aliquotaPrevidencia.innerText = `Porcentagem de contribuição: ${(Number(objeto.al_inss) * 100).toFixed(2)}%`;

        if (objeto.al_irrf === 0) {
            insento.innerText = `Insento de IRRF!`;
            informacoes.appendChild(insento);

            informacoes.appendChild(rendaBruta);
            informacoes.appendChild(salarioInss);
            informacoes.appendChild(aliquotaPrevidencia);
        } else {
            baseDeCalculo.innerText = `Base de cálculo para o IRRF: R$ ${Number(objeto.b_calculo).toFixed(2)}`;
            aliquotaImposto.innerText = `Porcentagem a ser paga de imposto: ${(Number(objeto.al_irrf) * 100).toFixed(2)}%`;
            valorImposto.innerText = `Valor a ser pago de IRRF: R$ ${Number(objeto.val_irrf).toFixed(2)}`;

            informacoes.appendChild(baseDeCalculo);
            informacoes.appendChild(aliquotaImposto);
            informacoes.appendChild(valorImposto);
        }

        if (objetoNormal.acao) {
            acoes.innerHTML = `Rendimentos em Ações Mensal: R$ ${Number(objetoNormal.acao).toFixed(2)}`;
            fundosPorcentagem.innerHTML = `Porcetagem de pagamento: 20%`;
            informacoes.appendChild(quebraLinha);
            informacoes.appendChild(acoes);
            informacoes.appendChild(fundos);
        }
        if (objetoNormal.tesouro) {
            tesouro.innerHTML = `Rendimentos em Tesouro Direto Mensal: R$ ${Number(objetoNormal.tesouro).toFixed(2)}`;
            informacoes.appendChild(tesouro);

            tesouro1.innerHTML = `Imposto pago com até 180 dias de investimento: R$ ${Number(objeto.imposto_tesouro1).toFixed(2)}`;
            informacoes.appendChild(tesouro1);

            tesouro2.innerHTML = `Imposto pago de 181 até 360 dias de investimento: R$ ${Number(objeto.imposto_tesouro2).toFixed(2)}`;
            informacoes.appendChild(tesouro2);

            tesouro3.innerHTML = `Imposto pago de 361 até 720 dias de investimento: R$ ${Number(objeto.imposto_tesouro3).toFixed(2)}`;
            informacoes.appendChild(tesouro3);

            tesouro4.innerHTML = `Imposto pago com mais de 720 dias de investimento: R$ ${Number(objeto.imposto_tesouro4).toFixed(2)}`;
            informacoes.appendChild(tesouro4);
        }
        if (objetoNormal.fundos) {
            fundos.innerHTML = `Rendimentos em Fundos Mensal: R$ ${Number(objetoNormal.fundos).toFixed(2)}`;
            fundos.innerHTML = `Rendimentos em Fundos Mensal: R$ ${Number(objetoNormal.fundos).toFixed(2)}`;
            informacoes.appendChild(fundos);
        }
        if (objetoNormal.rendafixa) {
            rendafixa.innerHTML = `Rendimentos em Renda Fixa Mensal: R$ ${Number(objetoNormal.rendafixa).toFixed(2)}`;
            informacoes.appendChild(rendafixa);

            rendafixa1.innerHTML = `Imposto pago com até 180 dias de investimento: R$ ${Number(objeto.imposto_fixa1).toFixed(2)}`;
            informacoes.appendChild(rendafixa1);

            rendafixa2.innerHTML = `Imposto pago de 181 até 360 dias de investimento: R$ ${Number(objeto.imposto_fixa2).toFixed(2)}`;
            informacoes.appendChild(rendafixa2);

            rendafixa3.innerHTML = `Imposto pago de 361 até 720 dias de investimento: R$ ${Number(objeto.imposto_fixa3).toFixed(2)}`;
            informacoes.appendChild(rendafixa3);

            rendafixa4.innerHTML = `Imposto pago com mais de 720 dias de investimento: R$ ${Number(objeto.imposto_fixa4).toFixed(2)}`;
            informacoes.appendChild(rendafixa4);
        }
    } else {
        rendaBruta.innerText = `Renda Bruta Anual: R$ ${Number(objeto.rendab).toFixed(2)}`;
        salarioInss.innerText = `Salário com desconto do INSS R$ ${Number(objeto.sal_inss).toFixed(2)}`;
        aliquotaPrevidencia.innerText = `Porcentagem de contribuição: ${(Number(objeto.al_inss) * 100).toFixed(2)}%`;

        if (Number(objeto.al_irrf) === 0) {
            insento.innerText = `Insento de IRRF!`;
            informacoes.appendChild(insento);

            informacoes.appendChild(rendaBruta);
            informacoes.appendChild(salarioInss);
            informacoes.appendChild(aliquotaPrevidencia);
        } else {
            baseDeCalculo.innerText = `Base de cálculo para o IRRF R$ ${Number(objeto.b_calculo).toFixed(2)}`;
            aliquotaImposto.innerText = `Porcentagem a ser paga de imposto: ${(Number(objeto.al_irrf) * 100).toFixed(2)}%`;
            valorImposto.innerText = `Valor a ser pago de IRRF R$ ${Number(objeto.val_irrf).toFixed(2)}`;

            informacoes.appendChild(baseDeCalculo);
            informacoes.appendChild(aliquotaImposto);
            informacoes.appendChild(valorImposto);
        }

        if (objetoNormal.acao) {
            acoes.innerHTML = `Rendimentos em Ações Anual: R$ ${Number(objetoNormal.acao).toFixed(2)}`;
            informacoes.appendChild(acoes);
        }
        if (objetoNormal.tesouro) {
            tesouro.innerHTML = `Rendimentos em Tesouro Direto Anual: R$ ${Number(objetoNormal.tesouro).toFixed(2)}`;
            informacoes.appendChild(tesouro);

            tesouro1.innerHTML = `Imposto pago com até 180 dias de investimento: R$ ${Number(objeto.imposto_tesouro1).toFixed(2)}`;
            informacoes.appendChild(tesouro1);

            tesouro2.innerHTML = `Imposto pago de 181 até 360 dias de investimento: R$ ${Number(objeto.imposto_tesouro2).toFixed(2)}`;
            informacoes.appendChild(tesouro2);

            tesouro3.innerHTML = `Imposto pago de 361 até 720 dias de investimento: R$ ${Number(objeto.imposto_tesouro3).toFixed(2)}`;
            informacoes.appendChild(tesouro3);

            tesouro4.innerHTML = `Imposto pago com mais de 720 dias de investimento: R$ ${Number(objeto.imposto_tesouro4).toFixed(2)}`;
            informacoes.appendChild(tesouro4);
        }
        if (objetoNormal.fundos) {
            fundos.innerHTML = `Rendimentos em Fundos Anual: R$ ${Number(objetoNormal.fundos).toFixed(2)}`;
            informacoes.appendChild(fundos);
        }
        if (objetoNormal.rendafixa) {
            rendafixa.innerHTML = `Rendimentos em Renda Fixa Anual: R$ ${Number(objetoNormal.rendafixa).toFixed(2)}`;
            informacoes.appendChild(rendafixa);

            rendafixa1.innerHTML = `Imposto pago com até 180 dias de investimento: R$ ${Number(objeto.imposto_fixa1).toFixed(2)}`;
            informacoes.appendChild(rendafixa1);

            rendafixa2.innerHTML = `Imposto pago de 181 até 360 dias de investimento: R$ ${Number(objeto.imposto_fixa2).toFixed(2)}`;
            informacoes.appendChild(rendafixa2);

            rendafixa3.innerHTML = `Imposto pago de 361 até 720 dias de investimento: R$ ${Number(objeto.imposto_fixa3).toFixed(2)}`;
            informacoes.appendChild(rendafixa3);

            rendafixa4.innerHTML = `Imposto pago com mais de 720 dias de investimento: R$ ${Number(objeto.imposto_fixa4).toFixed(2)}`;
            informacoes.appendChild(rendafixa4);
        }
    }

    emitirRelatorio();
}

// Essa funcao regarrega a pagina
function voltarSimulacao() {
    window.location.reload();
}
