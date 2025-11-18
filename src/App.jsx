import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Drugs from "./pages/Drugs";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import EditDrugForm from "./components/EditDrugForm";
import AddDrugForm from "./components/AddDrugForm";
import { DrugProvider } from "./context/DrugsContext";
import { SalesProvider } from "./context/SalesContext";

function App() {
  return (
    <DrugProvider >
      <SalesProvider>

    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Drugs />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/add-drug" element={<AddDrugForm />} />
          <Route path="/edit-drug/:id" element={<EditDrugForm />} />
        </Routes>
      </div>
    </Router>
    </SalesProvider>
    </DrugProvider>
  );
}

export default App;