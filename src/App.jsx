import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Drugs from "./pages/Drugs";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import AddDrugForm from "./components/AddDrugForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/drugs" element={<Drugs />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/add-drug" element={<AddDrugForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;