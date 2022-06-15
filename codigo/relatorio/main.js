const p1 = document.querySelector('.rendaBruta')
const p2 = document.querySelector('.salario')
const p3 = document.querySelector('.aluguel')
const p4 = document.querySelector('.lucro')
const p5 = document.querySelector('.pensao')
const p6 = document.querySelector('.auxilio')


const objeto = {
    rendaBruta: 'R$2.000',
    salario: 'R$1.500',
    aluguel: 'R$600',
    lucro: 'R$1.600',
    pensao: 'R$700',
    auxilio: 'R$1.200'
}

const jsonObject = JSON.stringify(objeto)
localStorage.setItem('dados', jsonObject)

const objetoLocalStorage = localStorage.getItem('dados')

const objetoNormal = JSON.parse(objetoLocalStorage)

function emitirRelatorio(){
    const relatorio = document.getElementById("relatorio");
    const botaoRelatorio = document.getElementById("botaoRelatorio");
    
    relatorio.classList.remove("relatorioFechado");
    botaoRelatorio.classList.remove("relatorioAberto");

    relatorio.classList.add("relatorioAberto");
    botaoRelatorio.classList.add("relatorioFechado");
}

p1.innerHTML = objetoNormal.rendaBruta
p2.innerHTML = objetoNormal.salario
p3.innerHTML = objetoNormal.aluguel
p4.innerHTML = objetoNormal.lucro
p5.innerHTML = objetoNormal.pensao
p6.innerHTML = objetoNormal.auxilio