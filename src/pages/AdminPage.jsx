import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";


function AdminPage() {
    const username = localStorage.getItem("username"); 
    const role = localStorage.getItem("role");
    const navigate = useNavigate()

    if(role !== "Admin"){
        return <Navigate to="/" />;
    }

    const [product, setProduct] = useState([]);

    useEffect (() => {
        fetch("http://localhost:8080/getAllProducts")
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error("Error fetching products: " + err));
    },[]);

   



    return (
        <div>
            <h2>Welcome { username }</h2>
            <br /><br />
            <button type="button" onClick={() => navigate('/edit/0')}>Add new Product</button>
            <br /> <br />
            <button type="button" onClick={() => navigate('/')}>Home</button>
            <br /> <br />

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item) => (
                        <tr key = {item.id}>
                            <td>{item.id}</td>
                            <img
                                src={item.image}
                                alt={item.name}
                                width="100"
                                height="100"
                            />
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => navigate(`/edit/${item.id}`)}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminPage