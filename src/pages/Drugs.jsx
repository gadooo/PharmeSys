import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DrugContext } from "../context/DrugsContext";

function DrugsList() {
  const { drugs, loading, deleteDrug } = useContext(DrugContext);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <p>Loading drugs...</p>;

  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteButton = async (id) => {
    await deleteDrug(id);
    console.log("Delete drug with ID:", id);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Drugs Inventory</h2>

      {/* Search + Add button row */}
      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search drug by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-6 text-md-end">
          <Link to="/add-drug" className="btn btn-purple">
            + Add New Drug
          </Link>
        </div>
      </div>

      {/* Responsive table */}
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th>Drug</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Expiry Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDrugs.length > 0 ? (
              filteredDrugs.map((drug) => (
                <tr key={drug.id}>
                  <td>{drug.name}</td>
                  <td>{drug.quantity}</td>
                  <td>${Number(drug.price).toFixed(2)}</td>
                  <td>
                    {drug.expiryDate
                      ? new Date(drug.expiryDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="text-center">
                    <Link
                      to={`/edit-drug/${drug.id}`}
                      className="btn btn-sm btn-secondary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteButton(drug.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No drugs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DrugsList;