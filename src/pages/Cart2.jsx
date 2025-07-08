import { useState, useEffect } from "react";
import '../styling/Cart2.css';


function Cart({ productId, setQuantity, quantity }) {


    const userName = localStorage.getItem("username");
    

     useEffect(() => {
        fetch(`http://localhost:8080/viewCart?name=${userName}`)
        .then((res) => res.json())
        .then((data) => {
            const item = data.find((i) => i.productId === productId);
            if (item) {
                setQuantity(item.quantity);
            }
        })
        .catch((err) => console.error("Error fetching products:"+err));
    }, [userName, productId]);


    
    const addToCart = () => {
       fetch("http://localhost:8080/addToCart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userName: userName,
            productId: productId,
            quantity: 1,
        }),
        })
        .then((res) => res.text())
        .then((data) => {
            if (data === "Item added to cart") {
            setQuantity((prev) => prev + 1);
            }
        })
        .catch((err) => console.error("Error adding to cart:", err));
    };

    const removeFromCart = () => {
        fetch("http://localhost:8080/removeFromCart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userName: userName,
            productId: productId,
            quantity: 1,
        }),
        })
        .then((res) => res.text())
        .then((data) => {
            if (data === "Item removed" || data === "Item removed completely from cart") {
                setQuantity((prev) => Math.max(0, prev - 1));
            }
        })
        .catch((err) => console.error("Error removing from cart:", err));
    };

    if(quantity === 0) {
        return (
            <button className="cart2-add-btn" onClick={addToCart}>
                Cart+
            </button>
        );
    }
    
   return (
    <div className="cart2-quantity-wrapper">
      <button className="cart2-btn" onClick={removeFromCart}>−</button>
      <input className="cart2-quantity" type="text" value={quantity} readOnly />
      <button className="cart2-btn" onClick={addToCart}>+</button>
    </div>
  );
}

export default Cart