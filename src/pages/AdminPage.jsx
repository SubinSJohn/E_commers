import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Card from "./Card";
import { toast } from "react-toastify";
import "../styling/AdminPage.css";

function AdminPage() {
    const username = localStorage.getItem("username"); 
    const role = localStorage.getItem("role");
    const navigate = useNavigate();

    if (role !== "Admin") {
        return <Navigate to="/" />;
    }

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/getAllProducts")
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error("Error fetching products: " + err));
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        toast.info("Loged Out",{
                    position: "bottom-right",
                    autoClose: 2000,
                    type: "info"
                  });
        navigate("/");
    };

    return (
        <div className="admin-page">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
                <nav className="admin-nav">
                    <button onClick={() => navigate("/")}>🏠 Home</button>
                    <button onClick={() => navigate("/edit/0")}>➕ Add Product</button>
                    <button onClick={handleLogout}>🚪 Logout</button>
                </nav>
            </header>

            <section className="admin-welcome">
                <h2>Welcome, {username}</h2>
                <p>You have access to manage and edit the product catalog.</p>
            </section>

            <section className="admin-products">
                <h3>Product List</h3>
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
                        <p>No products available.</p>
                    )}
                </div>
            </section>
        </div>
    );
}

export default AdminPage;
