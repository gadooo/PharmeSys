import React, { createContext, useState, useEffect } from "react";
import { 
  getAllDrugs, 
  createDrug, 
  updateDrug, 
  deleteDrug 
} from "../API/DrugsAPI";   // <-- import your API functions

export const DrugContext = createContext();

export function DrugProvider({ children }) {
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ============================
  //  FETCH ALL DRUGS FROM API
  // ============================
  const fetchDrugs = async () => {
    try {
      const response = await getAllDrugs();
      setDrugs(response.data);
    } catch (error) {
      console.error("Error fetching drugs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load drugs when context mounts
  useEffect(() => {
    fetchDrugs();
  }, []);

  // ============================
  //  ADD DRUG (POST)
  // ============================
  const addDrugHandler = async (drug) => {
    try {
      const response = await createDrug(drug);
      setDrugs((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error adding drug:", error);
    }
  };

  // ============================
  //  UPDATE DRUG (PUT)
  // ============================
  const updateDrugHandler = async (id, updatedDrug) => {
    try {
      const response = await updateDrug(id, updatedDrug);
      await fetchDrugs();
      setDrugs((prev) =>
        prev.map((drug) => (drug.id === id ? response.data : drug))
      );
    } catch (error) {
      console.error("Error updating drug:", error);
    }
  };

  // ============================
  //  DELETE DRUG (DELETE)
  // ============================
  const deleteDrugHandler = async (id) => {
    try {
      await deleteDrug(id);
      setDrugs((prev) => prev.filter((drug) => drug.id !== id));
    } catch (error) {
      console.error("Error deleting drug:", error);
    }
  };

  return (
    <DrugContext.Provider
      value={{
        drugs,
        loading,
        addDrug: addDrugHandler,
        updateDrug: updateDrugHandler,
        deleteDrug: deleteDrugHandler,
        fetchDrugs,
      }}
    >
      {children}
    </DrugContext.Provider>
  );
}
