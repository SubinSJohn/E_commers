import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styling/PlaceOrder.css';


function PlaceOrder() {
  const userName = localStorage.getItem("username");
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (product) {
        sum += product.price * item.quantity;
      }
    });
    setTotal(sum);
  }, [cartItems, products]);

  const discount = total > 1000 ? total * 0.05 : 0;
  const grandTotal = total - discount;

  return (
    <div className="place-order-container">
  <h1>🧾 SalesSavvy Receipt</h1>
  <p className="address">123 Market Street, Bengaluru, KA 560001</p>
  <p className="note">Thanks for placing your trust in us! Here's a quick summary of your order.</p>

  <hr />

  {cartItems.length === 0 ? (
    <p style={{ textAlign: "center", color: "#999" }}>
      Your cart is empty. Add some products to place an order.
    </p>
  ) : (
    <>
      <table className="place-order-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const product = products.find((p) => p.id === item.productId);
            if (!product) return null;
            const subtotal = product.price * item.quantity;
            return (
              <tr key={item.productId}>
                <td style={{ textAlign: "left" }}>{product.name}</td>
                <td>{item.quantity}</td>
                <td>₹{product.price}</td>
                <td>₹{subtotal}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {discount > 0 && (
            <tr>
              <td colSpan="3" className="discount" style={{ textAlign: "right" }}>
                5% Discount:
              </td>
              <td className="discount">-₹{discount.toFixed(2)}</td>
            </tr>
          )}
          <tr>
            <td colSpan="3" style={{ textAlign: "right" }}>
              Total:
            </td>
            <td>₹{grandTotal.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="place-order-btn">Place Order</button>
      </div>
    </>
  )}

  <hr />

  <p className="support-text">
    If you have any questions, reach us at <strong>support@sales-savvy.com</strong>.
  </p>

  <div className="order-buttons">
    <button className="back-cart-btn" onClick={() => navigate("/viewcart")}>⬅ Back to Cart</button>
    <button className="home-btn" onClick={() => navigate("/customer")}>Back to Product</button>
  </div>
</div>

  );
}

const buttonStyle = {
  backgroundColor: "#f97316",
  border: "none",
  padding: "10px 18px",
  borderRadius: "6px",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "14px",
};

export default PlaceOrder;
