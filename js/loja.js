function adicionarCarrinho(produto, preco, arquivo){
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push({produto, preco, arquivo});
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Produto adicionado ao carrinho!");
}

function carregarCarrinho(){
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let lista = document.getElementById("lista");
    let total = 0;

    carrinho.forEach(item=>{
        lista.innerHTML += `<p>${item.produto} - R$ ${item.preco}</p>`;
        total += item.preco;
    });

    document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);
}

function finalizarCompra(){
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.forEach(item=>{
        window.open(item.arquivo);
    });
    localStorage.removeItem("carrinho");
}
