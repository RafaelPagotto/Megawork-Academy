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
    //document.getElementById("mensagem").textContent = valueCliente;

    if (valueCliente =="") {
        let mensagemErro = "Nome do cliente não pode estar em branco";
        mensagem.textContent = mensagemErro;
    } else {

    clientes.push(valueCliente);
    console.log(clientes);
    
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
        listaClientes.appendChild(novoCliente);
    }
}