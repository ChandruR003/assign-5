import React, { useState } from 'react';
import './App.css';

function Product({ name, price }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
    </div>
  );
}

function App() {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    { id: 4, name: 'Product 4', price: 49.99 },
    { id: 5, name: 'Product 5', price: 59.99 },
    { id: 6, name: 'Product 6', price: 69.99 },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Listing App</h1>
      </header>
      <main>
        <div className="product-list">
          <h2>Product List</h2>
          {products.map((product) => (
            <Product key={product.id} name={product.name} price={product.price} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
