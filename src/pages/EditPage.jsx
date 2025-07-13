import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styling/EditPage.css';

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNewProduct = id === "0";
  const updateOrSave = isNewProduct ? "Save" : "Update";
  const [statusMessage, setStatusMessage] = useState("");
  const [itemData, setItemData] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    if (isNewProduct) return;
    fetch(`http://localhost:8080/searchProductById?id=${id}`)
      .then((res) => res.json())
      .then((data) => setItemData(data))
      .catch((err) => console.error("Error from server: " + err));
  }, [id]);

  const handleChange = (e) => {
    setItemData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmMsg = isNewProduct
      ? "Are you sure you want to add this product?"
      : "Are you sure you want to update this product?";
    if (!window.confirm(confirmMsg)) return;

    const url = isNewProduct
      ? "http://localhost:8080/addProduct"
      : "http://localhost:8080/updateProduct";

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemData)
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "success" || data === "Saved") {
          const msg = isNewProduct
            ? "Product added successfully."
            : "Product updated successfully.";
          setStatusMessage(msg);
          setTimeout(() => navigate('/Admin'), 1000);
        } else {
          alert("Update failed: " + data);
        }
      })
      .catch((err) => {
        alert("An error has occurred in product update.");
        console.error("Server error", err);
      });
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel editing?")) {
      navigate('/Admin');
    }
  };

  const handleDelete = () => {
    if (isNewProduct) {
      navigate('/Admin');
      return;
    }
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    fetch(`http://localhost:8080/deleteProduct?id=${id}`, {
      method: 'DELETE'
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "success") {
          setStatusMessage("Product deleted successfully.");
          setTimeout(() => navigate('/Admin'), 1000);
        }
      })
      .catch((err) => {
        alert("An error has occurred.");
        console.error("Server error", err);
      });
  };

  const headerName = isNewProduct ? "Add a Product" : `Edit: ${itemData.name}`;

  return (
    <div className="edit-page">
      <h2>{headerName}</h2>

      <form className="edit-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={itemData.name}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={itemData.description}
          onChange={handleChange}
          required
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={itemData.price}
          onChange={handleChange}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={itemData.image}
          onChange={handleChange}
        />

        <div className="button-group">
          <button type="button" onClick={handleSubmit}>
            {updateOrSave}
          </button>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>

      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </div>
  );
}

export default EditPage;
