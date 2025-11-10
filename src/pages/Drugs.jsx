import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./genral.css";


function Drugs() {
  const [drugs, setDrugs] = useState([
    { id: 1, name: "Paracetamol", quantity: 50, price: 5, expiryDate: "2025-01-01" },
    { id: 2, name: "Ibuprofen", quantity: 30, price: 8, expiryDate: "2024-12-15" },
    { id: 3, name: "Amoxicillin", quantity: 20, price: 12, expiryDate: "2025-03-10" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Drugs Inventory</h2>

      {/* Search Bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search drug by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add Drug Button */}
      <div className="mb-3">
        <Link to="/add-drug" className="btn btn-purple">
          + Add New Drug
        </Link>
      </div>

      {/* Drugs Table */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Drug</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredDrugs.map((drug) => (
            <tr key={drug.id}>
              <td>{drug.name}</td>
              <td>{drug.quantity}</td>
              <td>${drug.price.toFixed(2)}</td>
              <td>{new Date(drug.expiryDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Drugs;