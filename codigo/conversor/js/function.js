const formConvert = document.getElementById('formConvert');

function onlynumber(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

document.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        const botaoConversor = document.querySelector("#inputConvert");
        botaoConversor.click();
    }
});

const fetchPromise = async() =>
    await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');

formConvert.addEventListener('submit', (e) => {
    e.preventDefault();
    const dolarInput = document.getElementById('inputDolar');
    const valorConvertido = document.getElementById('valorConvertido')

    if (!dolarInput.value) {
        valorConvertido.innerHTML = 'Insira um valor em Dolar';
        return;
    }
    const dolarPreenchido = parseFloat(dolarInput.value);

    fetchPromise().then(async(response) => {
        const { USDBRL } = await response.json();
        const resultado = dolarPreenchido * USDBRL.high;
        valorConvertido.innerHTML = `R$ ${resultado.toFixed(2)}`;
    });
});
