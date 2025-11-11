import React, { useState } from "react";
import "./genral.css"
import { useContext } from "react";
import { DrugContext } from "../context/DrugsContext";
import { useNavigate } from "react-router-dom";
function AddDrugForm(){
  const { addDrug } = useContext(DrugContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleAddDrug = (e) => {
    e.preventDefault();
    addDrug({ name, quantity: parseInt(quantity), price: parseFloat(price), expiryDate });
    navigate("/drugs"); // يرجعك لقائمة الأدوية بعد الإضافة
  };

  return (
    <div className="container mt-4">
      <h2>Add New Drug</h2>
      <form onSubmit={handleAddDrug}>
        <div className="mb-3">
          <label className="form-label">Drug Name</label>
          <input type="text" className="form-control" value={name}
            onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input type="number" className="form-control" value={quantity}
            onChange={(e) => setQuantity(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price ($)</label>
          <input type="number" className="form-control" value={price}
            onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Expiry Date</label>
          <input type="date" className="form-control" value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-purple">Add Drug</button>
      </form>
    </div>
  );
}


export default AddDrugForm;