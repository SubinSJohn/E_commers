import { useEffect, useState } from "react";
import Card2 from "./Card2";
import { useNavigate } from "react-router-dom";
import "../styling/ViewCart.css";

function ViewCart() {
  const userName = localStorage.getItem("username");
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/viewCart?name=${userName}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Error fetching cart items: " + err));
  }, []);

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
      body: JSON.stringify({ username: userName }),
    })
      .then((res) => res.text())
      .then((msg) => {
        if (msg === "Cart cleared successfully") {
          navigate("/customer");
        }
      })
      .catch((err) => console.error("Error clearing cart: " + err));
  };

  const goToPlaceOrder = () => {
    navigate("/placeorder");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);

  return (
     <div className="view-cart-container">
    <div className="view-cart-wrapper">
      <div className="view-cart-header">
        <div>
          <h2>Your Cart, {userName}</h2>
          <p className="cart-subtext">Review your selected items before placing your order.</p>
        </div>
        <div className="view-cart-actions">
          <button className="btn orange" onClick={handleClearCart}>Clear Cart</button>
          <button className="cart-buttons" onClick={ () => navigate("/customer")}>Back to Products</button>
        </div>
      </div>

      <div className="cart-user-info">
        <p>👤 Logged in as <strong>{userName}</strong></p>
      </div>

  {cartItems.length === 0 ? (
    <p className="empty-cart-msg">🛒 Your cart is empty. Add some items!</p>
  ) : (
    <>
      <p className="cart-hint">Tip: Use the + and − buttons to update quantities.</p>
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
    </>
  )}
  <button className="btn green" onClick={goToPlaceOrder}>
    Place Order
</button>
</div>
</ div>
  );
}

export default ViewCart;
