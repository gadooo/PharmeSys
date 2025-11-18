import React, { useContext } from "react";
import { DrugContext } from "../context/DrugsContext";
import { SalesContext } from "../context/SalesContext";

function Reports() {
  const { drugs } = useContext(DrugContext);
  const { sales } = useContext(SalesContext);

  // إجمالي قيمة المبيعات
  const totalSalesAmount = sales.reduce((sum, sale) => sum + sale.total, 0);

  // الأدوية المنتهية أو قرب الانتهاء
  const today = new Date();
  const expiredDrugs = drugs.filter((drug) => new Date(drug.expiryDate) < today);
  const nearExpiryDrugs = drugs.filter((drug) => {
    const expiry = new Date(drug.expiryDate);
    const diffDays = (expiry - today) / (1000 * 60 * 60 * 24);
    return diffDays > 0 && diffDays <= 30; // خلال 30 يوم
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Reports</h2>

      {/* Cards row */}
      <div className="row gy-3">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card text-center bg-light h-100">
            <div className="card-body">
              <h5 className="card-title">Total Drugs</h5>
              <p className="card-text fs-4">{drugs.length}</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card text-center bg-danger text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Expired Drugs</h5>
              <p className="card-text fs-4">{expiredDrugs.length}</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card text-center bg-warning h-100">
            <div className="card-body">
              <h5 className="card-title">Near Expiry (30 days)</h5>
              <p className="card-text fs-4">{nearExpiryDrugs.length}</p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card text-center bg-success text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Total Sales Amount</h5>
              <p className="card-text fs-4">${totalSalesAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* جدول الأدوية المنتهية */}
      <div className="mt-4">
        <h4>Expired Drugs</h4>
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Drug</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {expiredDrugs.map((drug) => (
                <tr key={drug.id}>
                  <td>{drug.name}</td>
                  <td>{new Date(drug.expiryDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* جدول الأدوية قرب الانتهاء */}
      <div className="mt-4">
        <h4>Near Expiry Drugs (within 30 days)</h4>
        <div className="table-responsive">
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>Drug</th>
                <th>Expiry Date</th>
              </tr>
            </thead>
            <tbody>
              {nearExpiryDrugs.map((drug) => (
                <tr key={drug.id}>
                  <td>{drug.name}</td>
                  <td>{new Date(drug.expiryDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;