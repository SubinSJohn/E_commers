import{ useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    const [statusMessage, setStatusMessage] = useState("");
    const[itemData, setItemData] = useState({
        id: '',
        name: '',
        description:'',
        price: '',
        image: ''
    });

    useEffect(() => {
        fetch(`http://localhost:8080/searchProductById?id=${id}`)
        .then((res) => res.json())
        .then((data) => setItemData(data))
        .catch((error) => console.error("error from server: " + err));
    },[id]);

    const handleChange=(e) => {
        setItemData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }));
    };

    const handleSubmit = (e) => {
        
        const confirmUpdate = window.confirm("Are you sure you want to update this product?")
        e.preventDefault();
        if(!confirmUpdate) {
        return;
        }

        fetch('http://localhost:8080/updateProduct', {
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(itemData)
        })
        .then((res) => res.text())
        .then((data) => {
            if(data === "success"){
                setStatusMessage("Product updated successfully.");
                setTimeout(() => {
                    navigate('/Admin')
                }, 3000);

                
            } else {
                alert("Update failed: " + data);
            }
        })
        .catch((err) => {
            console.error('Server error', err)
        })
    };
    const handleCancel =() => {
        const confirmCancel = window.confirm("Are you sure you want to cancel editing?")
        if(confirmCancel) {
            navigate('/Admin')
        }
    };

    const handleDelete = () => {
        const confirmDeletion = window.confirm("Are you sure you want to delete this item.")
        if(!confirmDeletion) return;
        
        fetch(`http://localhost:8080/deleteProduct?id=${id}`, {
            method:'DELETE'
        })
        .then((res) => res.text())
        .then((data) => {
            if(data === "success") {
                setStatusMessage("Product deleted successfully");
                setTimeout(() => {
                    navigate('/Admin')
                }, 3000)
            } else{
            }
        })
        .catch((err) => {
            alert('an error has occurred');
            console.error('Server error ', err)
        })
    };


    return(
       <>
            <h2> Edit  { itemData.name }</h2>

            
            <form>
                <label><strong>Name: </strong></label>
                <input 
                    type="text"
                    name="name"
                    value={ itemData.name }
                    onChange={ handleChange }
                /> <br /> <br />

                <label><strong>Description: </strong></label>
                <input 
                    type="text"
                    name="description"
                    value={ itemData.description }
                    onChange={ handleChange }
                /> <br /> <br />

                <label><strong>Price: </strong></label>
                <input 
                    type="number"
                    name="price"
                    value={ itemData.price }
                    onChange={ handleChange }
                /> <br /> <br />

                <label><strong>Image: </strong></label>
                <input 
                    type="text"
                    name="image"
                    value={ itemData.image }
                    onChange={ handleChange }
                /> <br /> <br />
                <button type="button" onClick={ handleSubmit}> Update</button>
                <button type="button" onClick={ handleDelete }>Delete Item</button> 
                <button type="button" onClick={ handleCancel}> Cancel</button>
            </form>
           
            {statusMessage && (
                <p style={{ color: 'green', fontWeight: 'bold' }}>{statusMessage}</p>
            )}




        </>     
    );
}

export default EditPage