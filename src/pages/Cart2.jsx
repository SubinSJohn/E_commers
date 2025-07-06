import { useState, useEffect } from "react";


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
            <button 
                onClick={addToCart}
                style={{
                width: "70px",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "4px"
                }}
            > 
                Cart+
            </button>
        )
    }
    
    return(

        <div>
            <button onClick={removeFromCart}>−</button>
            <input
                type="text"
                value={quantity}
                readOnly
                style={{
                    width: "30px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    borderRadius: "4px"
                }}
            />
            <button onClick={addToCart}>+</button>
        </div>
    );
}

export default Cart