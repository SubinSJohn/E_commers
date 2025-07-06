import Cart2 from "./Cart2";
import { useState, useEffect } from "react";

function Card2({ productId, name, price, rating, description, image}) {

    const [quantity, setQuantity] = useState(0);
    const [itemTotal, setItemTotal] = useState(0);

    useEffect(() => {
        setItemTotal(price * quantity);
    }, [quantity, price]);

  return (
    <div className="card2">
        <div className="cards2-image">
            <img className="card2-image" src={ image } alt="profile pricture" />
        </div>
        <div className="card2-itemsRaper">
            <div className="cards2-items">
                <h3 className="card2-details">{name}</h3>
                <p>Price: ₹{price}</p>               
                <p>Rating: {rating}⭐</p>
                <p>Total: ₹{itemTotal}</p>
                
            </div>
            <div className="cards2-description">
                <p>{description}</p>
            </div>
        </div>
        <div className="cards2-cart" >
            <Cart2
                productId={ productId }
                setQuantity={ setQuantity }
                quantity= {quantity}

            />
        </div>
    </div>
  );
}

export default Card2;
