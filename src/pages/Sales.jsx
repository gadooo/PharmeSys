import React, { useState } from "react";
import "./genral.css";

function Sales() {
  const [sales, setSales] = useState([]);
  const [drugName, setDrugName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleAddSale = (e) => {
    e.preventDefault();

    const newSale = {
      id: sales.length + 1,
      drugName,
      quantity: parseInt(quantity),
      totalPrice: parseFloat(price) * parseInt(quantity),
      date: new Date().toLocaleDateString(),
    };

    setSales([...sales, newSale]);
    setDrugName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <div className="container mt-4">
      <h2>Sales</h2>

      {/* Form */}
      <form onSubmit={handleAddSale} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Drug Name</label>
          <input
            type="text"
            className="form-control"
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price per unit ($)</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-purple " >Add Sale</button>
      </form>

      {/* Sales Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Drug</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.drugName}</td>
              <td>{sale.quantity}</td>
              <td>${sale.totalPrice.toFixed(2)}</td>
              <td>{sale.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sales;