import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

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

    return (
        <>
            <div style={{ textAlign: "right", padding: "10px" }}>
                <button onClick={goToCart}>🛒 View Cart</button>
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
