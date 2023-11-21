import React, { useState } from 'react';

export const Cta = () => {
  // Defina o estado do carrinho de compras
  const [cart, setCart] = useState([]);
  
  // Função para adicionar um item ao carrinho
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>Cardápio</h1>
      <ul>
        <li>
          Pizza de Pepperoni - $10{' '}
          <button onClick={() => addToCart({ name: 'Pizza de Pepperoni', price: 10 })}>
            Adicionar ao Carrinho
          </button>
        </li>
        <li>
          Pizza de Margherita - $12{' '}
          <button onClick={() => addToCart({ name: 'Pizza de Margherita', price: 12 })}>
            Adicionar ao Carrinho
          </button>
        </li>
        {/* Adicione mais itens aqui */}
      </ul>

      <h2>Carrinho de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}

export default Cta;
