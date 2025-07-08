import Cart from "./Cart";
import '../styling/Card.css';



function Card({ image, name, price, rating, description, productId}) {

    return (
        <div className="card">
            <div className="card-top">
                <img className="card-image" src={ image } alt="profile pricture" />
                <div className="card-details">
                    <h3 className="card-name">{ name }</h3>
                    <p className="card-price">{ price } RS</p>
                    <p className="card-rattin">4.5 star</p>
                    <Cart 
                        productId={ productId }
                    />
                </div>
            </div>
            <div className="card-description">
                <p className="card-description">{ description}</p>
            </div>
        </div>
    );
} 
export default Card