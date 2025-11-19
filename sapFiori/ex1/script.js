let clientes = [];

//Habilita o uso de ENTER no input para adicionar cliente
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputCliente');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                adicionarCliente();
            }
        });
    }
});

function adicionarCliente(){
        
    let cliente = document.getElementById("inputCliente");
    let valueCliente = cliente.value.trim();
    const mensagem = document.getElementById("mensagem");

    if (valueCliente =="") {
        let mensagemErro = "Nome do cliente não pode estar em branco";
        mensagem.textContent = mensagemErro;
    } else {

    clientes.push(valueCliente);
    
    montaListaTela();

    let mensagemSucesso = "Cliente adicionado com sucesso!";
    mensagem.textContent = mensagemSucesso;
    }

    document.getElementById("inputCliente").value = "";
}

function montaListaTela(){
    
    const listaClientes = document.getElementById("listaClientes");
    listaClientes.innerHTML = "";
    
    for(let i = 0; i < clientes.length; i++){
        let novoCliente = document.createElement("li");
        novoCliente.textContent = clientes[i];

        let botaoRemover = document.createElement("button");
        novoCliente.appendChild(botaoRemover);
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerCliente(i);

        let botaoEditar = document.createElement("button");
        novoCliente.appendChild(botaoEditar);
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarCliente(i);

        listaClientes.appendChild(novoCliente);
    }
}

function removerCliente(i){
    clientes.splice(i, 1);
    montaListaTela();
    
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Cliente removido com sucesso!";
}

function editarCliente(i){
    let clienteEditar =  prompt("Insira o novo valor de cliente: ");

    if(clienteEditar.trim() !== ""){
        clientes[i] = clienteEditar;
        montaListaTela();
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent = "Cliente editado com sucesso!";
    }
}

function deletarClientes(){
    clientes.length = 0;
    montaListaTela();

    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Clientes deletados com sucesso!";
}