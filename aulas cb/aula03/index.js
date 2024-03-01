const readline = require('readline-sync');
const contatoControlador = require('./controlador');

function menu (){
    console.log('1. Adicionar contato');
    console.log('2. Listar contatos');
    console.log('3. Buscar contato');
    console.log('4. Atualizar contato');
    console.log('5. Remover contato');
    console.log('6. Sair');
}

function escolherOpcao(opcao) {
    switch(opcao) {
    case 1:
        const n1 = readline.question("Digite o nome do contato:")
        const e1 = readline.question("Digite o email do contato:")
        const t1 = readline.question("Digite o telefone do contato:")
        console.log("Opção selecionada: Adicionar contato");
        contatoControlador.adicionarContato();  break;
    case 2: 
        const contato2 = contatoControlador.listarContato();
        contato2.forEach(contato => {
            console.log('Nome:', contato.nome)
        })
    case 3: 
        console.log("Opção selecionada: Buscar contato");
        contatoControlador.buscarContato(); break;
    case 4:
        console.log("Opção selecionada: Atualizar contato");
        contatoControlador.atualizarContato(); break;
    case 5:
        console.log("Opção selecionada: Remover contato");
        contatoControlador.removerContato();
    case 6:
        console.log("Opção selecionada: Sair");break;
    default:
            console.log("Opção inválida");
            break;
} }