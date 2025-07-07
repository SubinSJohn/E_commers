import { useEffect, useState } from "react";

function PlaceOrder() {
  const userName = localStorage.getItem("username");
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch cart items
  useEffect(() => {
    fetch(`http://localhost:8080/viewCart?name=${userName}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Error fetching cart items: " + err));
  }, []);

  // Fetch product data
  useEffect(() => {
    fetch("http://localhost:8080/getAllProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products: " + err));
  }, []);

  // Calculate total
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
    <>
    <div style={{ maxWidth: "600px", margin: "0 auto", fontFamily: "monospace", border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "5px" }}>SalesSavvy</h1>
      <p style={{ textAlign: "center", margin: 0 }}>123 Market Street, Bengaluru, KA 560001</p>
      <p style={{ textAlign: "center", fontSize: "13px", marginTop: "5px", color: "#555" }}>
        Thank you for shopping with us! We deliver top quality products right to your doorstep.
      </p>

      <hr style={{ margin: "20px 0" }} />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <th style={{ textAlign: "left" }}>Product</th>
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
                <td>{product.name}</td>
                <td style={{ textAlign: "center" }}>{item.quantity}</td>
                <td style={{ textAlign: "center" }}>₹{product.price}</td>
                <td style={{ textAlign: "center" }}>₹{subtotal}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {discount > 0 && (
            <tr>
              <td colSpan="3" style={{ textAlign: "right", paddingTop: "10px", fontWeight: "bold", color: "green" }}>
                5% Discount:
              </td>
              <td style={{ textAlign: "center", paddingTop: "10px", color: "green" }}>
                -₹{discount.toFixed(2)}
              </td>
            </tr>
          )}
          <tr>
            <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold", paddingTop: "10px" }}>
              Total:
            </td>
            <td style={{ textAlign: "center", fontWeight: "bold", paddingTop: "10px" }}>
              ₹{grandTotal.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>

      <hr style={{ marginTop: "20px" }} />
      <p style={{ textAlign: "center", fontSize: "12px", color: "#888" }}>
        Need help? Contact us at support@sales-savvy.com
      </p>
    </div>
     <div>
      <button style={{ textAlign: "center", fontSize: "12px"}}>Place Order</button>
    </div>
    </>
  );
}

export default PlaceOrder;
