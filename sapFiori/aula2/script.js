function adicionarCliente(){
    //let mensagem = "Clientes adicionados com sucesso!";
    //document.getElementById("mensagem").textContent = mensagem;

    let cliente = document.getElementById("inputCliente");
    let valueCliente = cliente.value;
    document.getElementById("mensagem").textContent = valueCliente;

    let listaClientes = document.getElementById("listaClientes");
    let novoCliente = document.createElement("li");
    novoCliente.textContent = valueCliente;
    listaClientes.appendChild(novoCliente);
    
    document.getElementById("inputCliente").value = "";
    //console.log(cliente);
}