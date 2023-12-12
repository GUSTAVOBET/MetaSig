// Função para adicionar itens ao carrinho
function addToCart(description, price, quantity) {
    let cart = JSON.parse(localStorage.getItem('carrinho')) || [];

    const newItem = {
        description: description,
        price: price,
        quantity: quantity
    };

    cart.push(newItem);
    localStorage.setItem('carrinho', JSON.stringify(cart));

    displayCartItems();
}

// Função para exibir os itens do carrinho
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('carrinho')) || [];
    const itensCarrinho = document.querySelector('.itens-carrinho');

    itensCarrinho.innerHTML = '';

    cartItems.forEach((item, index) => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');

        divProduto.innerHTML = `
            <h1>${item.description}</h1>
            <p class="valor">Valor: R$ ${item.price}</p>
            <label for="quantidade${index + 1}" class="valor">Quantidade:</label>
            <input type="number" id="quantidade${index + 1}" class="quantidade" name="quantidade" min="1" value="${item.quantity}">
        `;

        itensCarrinho.appendChild(divProduto);
    });
}

// Exibir os itens do carrinho quando a página carregar
window.onload = function() {
    displayCartItems();
};

// Exemplo de adição de item ao carrinho (pode ser chamado em algum evento de clique, por exemplo)
addToCart('Camisa', 25.00, 2);
addToCart('Calça', 35.00, 1);
