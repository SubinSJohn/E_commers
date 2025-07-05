import Cart from './Cart';


function Card({ image, name, price, rating, description}) {

    const url = "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
    return (
        <div className="card">
            <div className="card-top">
                <img className="card-image" src={ image } alt="profile pricture" />
                <div className="card-details">
                    <h3 className="card-name">{ name }</h3>
                    <p className="card-price">{ price } RS</p>
                    <p className="card-rattin">4.5 star</p>
                     <Cart />
                </div>
            </div>
            <div className="card-description">
                <p className="card-description">{ description}</p>
            </div>
        </div>
    );
}
export default Card