import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "../styling/GuestPage.css";

function GuestPage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    fetch("http://localhost:8080/getAllProducts")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching products: " + err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 12000); // 12 seconds

    return () => clearTimeout(timer);
  }, []);

  const handlePopupClose = () => setShowPopup(false);

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", formData);
    navigate("/signup");
  };

  return (
    <>
      <div className="customer-header">
        <h1 className="welcome-text">Welcome to SalesSavvy</h1>
        <div className="customer-buttons">
          <button onClick={() => navigate("/")}>🏠 Home</button>
          <button onClick={() => navigate("/signin")}>Sign In</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </div>

      <p className="welcome-subtitle">Browse our latest deals and discover what’s trending today.</p>

      <div className="info-banner">
        Sign up now and get early access to our exclusive offers and discounts!
      </div>

      <div className="guest-subscribe">
        <h3>Stay updated with our latest deals</h3>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Subscribe</button>
      </div>

      <div className="card-container">
        {product.length > 0 ? (
          product.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
              productId={product.id}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-popup" onClick={handlePopupClose}>
              &times;
            </button>
            <h2>Join SalesSavvy</h2>
            <p>Create an account to start saving!</p>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default GuestPage;
