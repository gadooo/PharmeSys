import React, { useEffect, useState, useContext } from "react";
import "./genral.css";
import { DrugContext } from "../context/DrugsContext";
import { useParams, useNavigate } from "react-router-dom";
import { getDrugById } from "../API/DrugsAPI";

function EditDrugForm() {
  const { updateDrug } = useContext(DrugContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {
    getDrugById(id)
      .then((response) => {
        const drug = response.data;
        setName(drug.name);
        setQuantity(drug.quantity);
        setPrice(drug.price);
        setExpiryDate(drug.expiryDate.split("T")[0]); // format for <input type="date">
      })
      .catch((error) => {
        console.error("Error fetching drug data:", error);
      });
  }, [id]);

  const handleUpdateDrug = async (e) => {
    e.preventDefault();
    await updateDrug(id, {
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      expiryDate,
    });
    navigate("/"); // back to drug list after update
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Edit Drug</h2>
      <form onSubmit={handleUpdateDrug}>
        <div className="mb-3">
          <label className="form-label">Drug Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Quantity + Price side by side on larger screens */}
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="col-sm-12 col-md-6 mb-3">
            <label className="form-label">Price ($)</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Expiry Date</label>
          <input
            type="date"
            className="form-control"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-purple w-100">
          Update Drug
        </button>
      </form>
    </div>
  );
}

export default EditDrugForm;