import React from 'react'
import { useState } from 'react';

const App = () => {
  const [cart, setCart] = useState([])
    const products = [
    { id: 1, name: "Laptop", price: 50000 , quantity:0},
    { id: 2, name: "Mouse", price: 500, quantity:0 },
    { id: 3, name: "Keyboard", price: 1500 , quantity:0},
    { id: 4, name: "Monitor", price: 12000 , quantity:0},
    { id: 5, name: "Headphones", price: 2500 , quantity:0}
  ];
  const handleAddToCart = (product)=>{
    const exists = cart.find((item,i)=> item.id=== product.id)
    if(exists){
      const newCart = {quantity: product.quantity+=1}
      setCart([...cart,newCart])
      console.log(cart);
      
    }else{
   setCart([...cart, product])
console.log(cart);

    }
  }
  const totalPrice = cart.reduce((acc, item)=> acc+item.price,0)


  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
        justifyContent: "center"
      }}
    >
      {products.map((val) => {
        return (
          <div
            key={val.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              backgroundColor: "#000",
              text:"#fff"

            }}
          >
            <h3>{val.name}</h3>
            <p>₹{val.price}</p>

            <button
            onClick={()=>handleAddToCart(val)}
              style={{
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Buy Now
            </button>
          </div>
        );
      })}
      <div>
     <p>Cart count = {cart.length}</p>
     <p>Total Price = {totalPrice}</p>
      </div>
    </div>
  );
};

export default App;