const Contato = require('./modelo');

const contatos = []

module.exports = Contato

function adicionarContato(nome, email, telefone) {
    const novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato)
    return novoContato;
}

function listarContato (){
    return contatos;
}

function buscarContato (nome) {
    return contatos.find(Contato => contatos.nome === nome)
}

    const contato = buscarContato(nome);
    if (contato) {
        contato.email = email;
        contato.telefone = telefone;
        return true;
     } else {
        return false;
            }


function removerContato (nome) {
    const index = contatos.findIndex(contato => contato.nome === nome);
    if (index !== -1) {
        contatos.splice(index, 1);
        return true;
    } else {
        return false;
    }
}

module.exports = {adicionarContato, listarContato, buscarContato, atualizarContato, removerContato}