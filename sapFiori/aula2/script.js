function adicionarCliente(){
    let cliente = document.getElementById("inputCliente");
    let valueCliente = cliente.value.trim();
    const mensagem = document.getElementById("mensagem");
    //document.getElementById("mensagem").textContent = valueCliente;

    if (valueCliente =="") {
        let mensagemErro = "Nome do cliente não pode estar em branco";
        mensagem.textContent = mensagemErro;
    } else {

    const listaClientes = document.getElementById("listaClientes");
    let novoCliente = document.createElement("li");
    novoCliente.textContent = valueCliente;
    listaClientes.appendChild(novoCliente);
    
    let mensagemSucesso = "Cliente adicionado com sucesso!";
    mensagem.textContent = mensagemSucesso;
    }

    document.getElementById("inputCliente").value = "";
}