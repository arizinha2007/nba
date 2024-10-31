function criarCartao(pergunta,resposta){
let conteudo = document.getElementById("conteudo")
let cartao = document.createElement("article")
cartao.classList = "cartao"

cartao.innerHTML = `
 <div class="cartao--conteudo">
          <div class="cartao--pergunta">Qual é o time com mais titulos?</div>
            <div class="cartao--resposta">Boston Celtics</div>
        </div>
        `

conteudo.appendChild(cartao)

}


criarCartao(1,2)