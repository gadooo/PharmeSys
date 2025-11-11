import React, { useState, useContext } from "react";
import { SalesContext } from "../context/SalesContext";
import { DrugContext } from "../context/DrugsContext";

function SalesPage() {
  const { sales, addSale } = useContext(SalesContext);
  const { drugs } = useContext(DrugContext);

  const [items, setItems] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!selectedDrug) return;

    const newItem = {
      id: items.length + 1,
      drugName: selectedDrug.name,
      quantity: parseInt(quantity),
      price: selectedDrug.price,
      totalPrice: selectedDrug.price * parseInt(quantity),
    };

    setItems([...items, newItem]);
    setSelectedDrug(null);
    setQuantity("");
  };

  const handleSaveSale = () => {
    if (items.length === 0) return;
    addSale(items);
    setItems([]);
  };

  // فلترة الأدوية حسب البحث
  const filteredDrugs = drugs.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2>Sales</h2>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search drug..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add Item Form */}
      <form onSubmit={handleAddItem} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Select Drug</label>
          <select
            className="form-select"
            value={selectedDrug ? selectedDrug.id : ""}
            onChange={(e) => {
              const drug = drugs.find(d => d.id === parseInt(e.target.value));
              setSelectedDrug(drug);
            }}
            required
          >
            <option value="">-- Choose a drug --</option>
            {filteredDrugs.map(drug => (
              <option key={drug.id} value={drug.id}>
                {drug.name} (${drug.price})
              </option>
            ))}
          </select>
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

        <button type="submit" className="btn btn-purple">Add Item</button>
      </form>

      {/* Current Sale Items */}
      {items.length > 0 && (
        <div className="mb-4">
          <h4>Current Sale Items</h4>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Drug</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.drugName}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${item.totalPrice.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-purple" onClick={handleSaveSale}>
            Save Sale
          </button>
        </div>
      )}

      {/* Sales History */}
      <h4>Sales History</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sale ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(sale => (
            <tr key={sale.id}>
              <td>{sale.id}</td>
              <td>{sale.date}</td>
              <td>${sale.total.toFixed(2)}</td>
              <td>
                {sale.items.map(item => (
                  <div key={item.id}>
                    {item.drugName} ({item.quantity} × ${item.price})
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesPage;