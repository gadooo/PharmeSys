import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DrugContext } from "../context/DrugsContext";

function DrugsList() {
  const { drugs } = useContext(DrugContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Drugs Inventory</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search drug by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mb-3">
        <Link to="/add-drug" className="btn btn-purple">+ Add New Drug</Link>
      </div>
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

export default DrugsList;