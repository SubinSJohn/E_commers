import { useState } from "react";


function Cart({ userId, ProductId }) {


    const [quantity, setQuantity] = useState(0);
    
    const incrementQuantity = () => {
        setQuantity(prev => prev+1);
    };
    const decrementQuantity = () => {
        if(quantity > 0) {
            setQuantity(prev => prev-1);
        }
    };

    if(quantity === 0) {
        return (
            <button 
                onClick={incrementQuantity}
                style={{
                width: "70px",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "4px"
                }}
            >
  Cart+
</button>
        )
    }
    
    return(

        <div>
            <button onClick={decrementQuantity}>−</button>
            <input
                type="text"
                value={quantity}
                readOnly
                style={{
                    width: "30px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    borderRadius: "4px"
                }}
            />
            <button onClick={incrementQuantity}>+</button>
        </div>
    );
}

export default Cart