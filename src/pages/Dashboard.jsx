import React, { useContext } from "react";
import { DrugContext } from "../context/DrugsContext";
import { SalesContext } from "../context/SalesContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { drugs } = useContext(DrugContext);
  const { sales } = useContext(SalesContext);

  // حساب إجمالي قيمة المبيعات
  const totalSalesAmount = sales.reduce((sum, sale) => sum + sale.total, 0);

  return (
    <div className="container mt-4">
      <h2>OlaPharme Dashboard</h2>
      <div className="row mt-4">
        {/* Card: عدد الأدوية */}
        <div className="col-md-4">
          <div className="card text-center bg-light mb-3">
            <div className="card-body">
              <h5 className="card-title">Drugs in Inventory</h5>
              <p className="card-text fs-4">{drugs.length}</p>
              <Link to="/drugs" className="btn btn-primary">View Drugs</Link>
            </div>
          </div>
        </div>

        {/* Card: عدد المبيعات */}
        <div className="col-md-4">
          <div className="card text-center bg-light mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text fs-4">{sales.length}</p>
              <Link to="/sales" className="btn btn-success">View Sales</Link>
            </div>
          </div>
        </div>

        {/* Card: إجمالي قيمة المبيعات */}
        <div className="col-md-4">
          <div className="card text-center bg-light mb-3">
            <div className="card-body">
              <h5 className="card-title">Sales Amount</h5>
              <p className="card-text fs-4">${totalSalesAmount.toFixed(2)}</p>
              <Link to="/sales" className="btn btn-warning">Add Sale</Link>
            </div>
          </div>
        </div>
      </div>

      {/* روابط سريعة */}
      <div className="mt-4">
        <Link to="/add-drug" className="btn btn-outline-primary me-2">+ Add Drug</Link>
        <Link to="/sales" className="btn btn-outline-success">+ New Sale</Link>
      </div>
    </div>
  );
}

export default Dashboard;