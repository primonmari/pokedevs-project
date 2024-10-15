// window.alert('oi')
// Passo 1
const listaSelecaoPockedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPockedevs);

// Passo 2
listaSelecaoPockedevs.forEach(pockedev => {
    pockedev.addEventListener("click", () => {
        // Passo 3
        esconderCartaoPokedev();

        //Passo 4 
        const idPockedevSelecionado = mostrarCartaoPokedevSelecionado(pockedev);

        //Passo 5 - remover a classe do ativo vermelho
        desativarPokedevNaListagem();

        //Passo 6 - adicionar o ativo vermelho na classe selecionada
        ativarPokedevNaListagem(idPockedevSelecionado);

    });
});

function ativarPokedevNaListagem(idPockedevSelecionado) {
    const pokdevSelecionadoNaListagem = document.getElementById(idPockedevSelecionado);
    pokdevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pockedev) {
    const idPockedevSelecionado = pockedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPockedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPockedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

