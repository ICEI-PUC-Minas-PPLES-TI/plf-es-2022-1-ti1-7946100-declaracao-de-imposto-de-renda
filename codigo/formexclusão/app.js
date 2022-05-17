// declara um conjunto inicial de contatos
var db_infos_inicial = {
    "data": [
        {
            "nome": "Vitor",
            "renda": 25000,
            "idade": 15,
            "email": "v@s",
            "telefone": "31-55555555",
        },

    ]
}
// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_info'));
if (!db) {
    db = db_infos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertInfo(info) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoInfo = {
        "id": novoId,       
        "nome": info.nome,
        "email" : info.email,
        "telefone": info.telefone,
        "renda" : info.renda,
        "idade": info.idade,
    };


    // Insere o novo objeto no array
    db.data.push(novoInfo);
    displayMessage("Inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_info', JSON.stringify(db));
}

function updateInfo(id, info) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = info.nome,
    db.data[index].email = info.email,
    db.data[index].telefone = info.telefone,
    db.data[index].renda = info.renda,
    db.data[index].idade = info.idade,

    displayMessage("Alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_info', JSON.stringify(db));
}

function deleteInfo(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_info', JSON.stringify(db));
}

