function criarCartao(pergunta,resposta){
let conteudo = document.getElementById("conteudo")
let cartao = document.createElement("article")
cartao.classList = "cartao"

cartao.innerHTML = "testando o inner"

conteudo.appendChild(cartao)
}


criarCartao(1,2)