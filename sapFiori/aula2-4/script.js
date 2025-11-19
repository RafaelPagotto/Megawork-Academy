let materiais = [];

// Habilita o uso de ENTER no input para adicionar material
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputMaterial');
    if (input) {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                adicionarMaterial();
            }
        });
    }
});

function adicionarMaterial(){
    const input = document.getElementById("inputMaterial");
    const valorMaterial = input.value.trim();
    const mensagem = document.getElementById("mensagem");

    if (valorMaterial === "") {
        mensagem.textContent = "Nome do material não pode estar em branco";
        return;
    }

    materiais.push(valorMaterial);
    montaListaMateriais();
    mensagem.textContent = "Material adicionado com sucesso!";
    input.value = "";
}

function montaListaMateriais(){
    const lista = document.getElementById("listaMateriais");
    lista.innerHTML = "";

    for(let i = 0; i < materiais.length; i++){
        const item = document.createElement("li");
        item.textContent = materiais[i];

        const botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerMaterial(i);
        item.appendChild(botaoRemover);

        const botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarMaterial(i);
        item.appendChild(botaoEditar);

        lista.appendChild(item);
    }
}

function removerMaterial(i){
    materiais.splice(i, 1);
    montaListaMateriais();
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Material removido com sucesso!";
}

function editarMaterial(i){
    const novoValor = prompt("Insira o novo valor do material:");
    if (novoValor && novoValor.trim() !== "") {
        materiais[i] = novoValor.trim();
        montaListaMateriais();
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent = "Material editado com sucesso!";
    }
}

function deletarMaterial(){
    materiais.length = 0;
    montaListaMateriais();
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Materiais deletados com sucesso!";
}