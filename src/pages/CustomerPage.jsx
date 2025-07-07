import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "../styling/CustomerPage.css";

function CustomerPage() {
    const userName = localStorage.getItem("username");
    const [productList, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/getAllProducts")
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error("Error fetching products: " + err));
    }, []);

    const goToCart = () => {
        navigate("/viewcart");
    };

    const goToHome = () => {
        navigate("/");
    };

    return (
        <>
            <div className="customer-header">
                <h2 className="welcome-text">Welcome, {userName}</h2>
                <div className="customer-buttons">
                    <button className="home-button" onClick={goToHome}>🏠 Home</button>
                    <button className="cart-button" onClick={goToCart}>🛒 View Cart</button>
                </div>
            </div>

            <p className="welcome-subtitle">
                Explore curated deals, trusted sellers, and unbeatable prices.
            </p>

            <div className="info-banner">
                🔍 Tip: Click on the cart icon to add items quickly. You can always review them later from your cart!
            </div>

            <div className="card-container">
                {productList.map((product) => (
                    <Card
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        productId={product.id}
                    />
                ))}
            </div>
        </>
    );
}

export default CustomerPage;
