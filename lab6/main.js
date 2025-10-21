// Espera que todo o DOM esteja carregado
document.addEventListener("DOMContentLoaded", function() {
    // Chama a função carregarProdutos com a lista de produtos
    carregarProdutos(produtos);
});

// Função que percorre e insere os produtos na página
function carregarProdutos(listaProdutos) {
    // Obtém o elemento pai onde os produtos serão inseridos
    const secaoProdutos = document.querySelector(".lista-produtos");

    // Percorre cada produto
    listaProdutos.forEach(produto => {
        console.log(produto.id, produto.title); // Verifica dados na consola

        // Cria o artigo do produto e insere no HTML
        const artigo = criarProduto(produto);
        secaoProdutos.append(artigo);
    });
}

// Função que cria o elemento <artigo> com os dados do produto
function criarProduto(produto) {
    // Cria o elemento principal
    const artigo = document.createElement("article");

    // Cria os sub-elementos sem usar <div>
    const titulo = document.createElement("h3");
    titulo.textContent = produto.title;

    const imagem = document.createElement("img");
    imagem.src = produto.imagem;
    imagem.alt = `Imagem do produto ${produto.title}`;

    const categoria = document.createElement("p");
    categoria.textContent = `Categoria: ${produto.category}`;

    const descricao = document.createElement("p");
    descricao.textContent = produto.descricao;

    const preco = document.createElement("p");
    preco.textContent = `Preço: €${produto.preco.toFixed(2)}`;

    const rating = document.createElement("p");
    rating.textContent = `Avaliação: ${produto.rating.rate} ★ (${produto.rating.count} votos)`;

    const botao = document.createElement("button");
    botao.textContent = "Adicionar ao cesto";
    botao.addEventListener("click", () => {
        console.log(`Produto ${produto.id} adicionado ao cesto.`);
        // Aqui poderás adicionar o código para realmente mover o produto ao cesto
    });

    // Junta tudo ao artigo
    artigo.append(titulo, imagem, categoria, descricao, preco, rating, botao);

    // Retorna o artigo completo
    return artigo;
}

// Exemplo simples de função para adicionar produtos ao cesto
function adicionarAoCesto(produto) {
    const cesto = document.querySelector(".lista-cesto");

    const artigoCesto = document.createElement("article");

    const titulo = document.createElement("h4");
    titulo.textContent = produto.title;

    const preco = document.createElement("p");
    preco.textContent = `€${produto.price.toFixed(2)}`;

    artigoCesto.append(titulo, preco);
    cesto.append(artigoCesto);
}