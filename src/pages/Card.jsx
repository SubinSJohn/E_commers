import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import '../styling/Card.css';



function Card({ image, name, price, rating, description, productId}) {

    const role = localStorage.getItem("role");
    const navigate = useNavigate()
    return (
        <div className="card">
            <div className="card-top">
                <img className="card-image" src={ image } alt="profile pricture" />
                <div className="card-details">
                    <h3 className="card-name">{ name }</h3>
                    <p className="card-price">{ price } RS</p>
                    <p className="card-rattin">4.5 star</p>
                    {role === "Customer" ? (
                        <Cart productId={productId} />
                    ) : role === "Admin" ? (
                        <button className="edit-button" onClick={() => navigate(`/edit/${productId}`)}>
                            Edit
                        </button>
                    ) : (
                        <div className="guest-box">
                            <p>Please sign up to place an order.</p>
                            <button className="signup-button" onClick={() => navigate("/signup")}>
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="card-description">
                <p className="card-description">{ description}</p>
            </div>
        </div>
    );
} 
export default Card