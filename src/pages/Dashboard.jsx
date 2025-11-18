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
      <h2 className="mb-4 text-center">OlaPharme Dashboard</h2>

      {/* Cards row */}
      <div className="row gy-3">
        {/* Card: عدد الأدوية */}
        <div className="col-sm-12 col-md-4">
          <div className="card text-center bg-light h-100">
            <div className="card-body">
              <h5 className="card-title">Drugs in Inventory</h5>
              <p className="card-text fs-4">{drugs.length}</p>
              <Link to="/drugs" className="btn btn-primary w-100">
                View Drugs
              </Link>
            </div>
          </div>
        </div>

        {/* Card: عدد المبيعات */}
        <div className="col-sm-12 col-md-4">
          <div className="card text-center bg-light h-100">
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text fs-4">{sales.length}</p>
              <Link to="/sales" className="btn btn-success w-100">
                View Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Card: إجمالي قيمة المبيعات */}
        <div className="col-sm-12 col-md-4">
          <div className="card text-center bg-light h-100">
            <div className="card-body">
              <h5 className="card-title">Sales Amount</h5>
              <p className="card-text fs-4">${totalSalesAmount.toFixed(2)}</p>
              <Link to="/sales" className="btn btn-warning w-100">
                Add Sale
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="mt-4 d-flex flex-column flex-md-row justify-content-center gap-2">
        <Link to="/add-drug" className="btn btn-outline-primary">
          + Add Drug
        </Link>
        <Link to="/sales" className="btn btn-outline-success">
          + New Sale
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;