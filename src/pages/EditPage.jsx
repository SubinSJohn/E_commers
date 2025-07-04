import{ useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const isNewProduct = id === "0"; 
    const updateOrSave =isNewProduct? "Save":"Update"; 
    const headerName =isNewProduct? "Add a Product":`Edit ${itemData.name}`; 
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
        if(isNewProduct) return;
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
      
        e.preventDefault();
        if(isNewProduct) {
            const confirmUpdate = window.confirm("Are you sure you want to Add this product?")
            if(!confirmUpdate) return;
        
        } else {
            const confirmUpdate1 = window.confirm("Are you sure you want to update this product?") 
            if(!confirmUpdate1) return;
        }

        const url = isNewProduct ? "http://localhost:8080/addProduct" : "http://localhost:8080/updateProduct";
        fetch( url, {
            method:'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(itemData)
        })
        .then((res) => res.text())
        .then((data) => {
            if(data === "success" || data === "Saved"){
                const mess = isNewProduct? "Product Added successfully." : "Product updated successfully.";
                setStatusMessage(mess);
                setTimeout(() => {
                    navigate('/Admin')
                }, 1000);

                
            } else {
                alert("Update failed: " + data);
            }
        })
        .catch((err) => {
            alert('an error has occurred in product updation');
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
        if(isNewProduct) { 
            navigate('/Admin');
            return;
        }
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
                }, 1000)
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
            <h2> { headerName }</h2>

            
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
                <button type="button" onClick={ handleSubmit}> { updateOrSave }</button>
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