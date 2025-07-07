import { useEffect, useState } from "react";
import Card2 from "./Card2";
import { useNavigate } from "react-router-dom";

function ViewCart() {
  const userName = localStorage.getItem("username");
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
 
  const navigate = useNavigate();

  // Fetch cart items (productId + quantity)
  useEffect(() => {
    fetch(`http://localhost:8080/viewCart?name=${userName}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Error fetching cart items: " + err));
  }, []);

  // Fetch all products once
  useEffect(() => {
    fetch("http://localhost:8080/getAllProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products: " + err));
  }, []);

  

  const handleClearCart = () => {
    fetch("http://localhost:8080/emptyCart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        username: userName
       }),
    })
      .then((res) => res.text())
      .then((msg) => {
        if (msg === "Cart cleared successfully") {
          navigate("/customer");
          //setCartItems([]); // if i just want to be in this page 
        }
      })
      .catch((err) => console.error("Error clearing cart: " + err));
  };

  const goToPlaceOrder = () =>{
    navigate("/placeorder")
  }

  return (
    <div className="view-cart">
      <h2>Your Cart, {userName}</h2>
      <button onClick={handleClearCart}>Clear Cart</button>
      <div className="cart-list">
        {cartItems.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;
          return (
            <Card2
              key={item.productId}
              productId={item.productId}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={4.5}
              description={product.description}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      <button type="button" onClick={goToPlaceOrder}>Place Order</button>
    </div>
  );
}

export default ViewCart;
