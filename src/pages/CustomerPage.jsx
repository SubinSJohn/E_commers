import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card.jsx";

function CustomerPage() {


    const [productlist, setProductlist] = useState([]);
    const [cartItems, setCartitems] = useState([]);
    

   useEffect (() => {
        fetch("http://localhost:8080/getAllProducts")
        .then((res) => res.json())
        .then((data) => setProductlist(data))
        .catch((err) => console.error("Error fetching products: " + err));
    },[]);



    return(
        <div className="card-container">
            { productlist.map(( product ) => (
                <Card 
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                />
            ))}        
        </div>
    );
}
export default CustomerPage