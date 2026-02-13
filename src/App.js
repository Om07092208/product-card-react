import React from "react";
import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  const products = [
    { name: "Wireless Headphones", price: 129.99, inStock: true },
    { name: "Mechanical Keyboard", price: 89.99, inStock: false },
    { name: "Smart Watch", price: 199.99, inStock: true },
    { name: "Gaming Mouse", price: 49.99, inStock: true },
    { name: "Bluetooth Speaker", price: 59.99, inStock: false },
    { name: "Laptop Stand", price: 39.99, inStock: true }
  ];

  return (
    <div className="container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}

export default App;

