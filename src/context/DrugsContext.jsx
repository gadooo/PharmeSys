import React, { createContext, useState } from "react";

export const DrugContext = createContext();

export function DrugProvider({ children }) {
  const [drugs, setDrugs] = useState([
  { id: 1, name: "Paracetamol", quantity: 50, price: 5, expiryDate: "2025-01-01" },
  { id: 2, name: "Ibuprofen", quantity: 30, price: 8, expiryDate: "2024-12-15" },
  { id: 3, name: "Amoxicillin", quantity: 20, price: 12, expiryDate: "2025-03-10" },
  { id: 4, name: "Aspirin", quantity: 40, price: 6, expiryDate: "2025-06-20" },
  { id: 5, name: "Metformin", quantity: 25, price: 15, expiryDate: "2025-09-05" },
  { id: 6, name: "Omeprazole", quantity: 35, price: 10, expiryDate: "2025-02-18" },
  { id: 7, name: "Atorvastatin", quantity: 60, price: 20, expiryDate: "2025-11-11" },
  { id: 8, name: "Losartan", quantity: 45, price: 18, expiryDate: "2025-07-30" },
  { id: 9, name: "Azithromycin", quantity: 15, price: 25, expiryDate: "2024-12-01" },
  { id: 10, name: "Vitamin D", quantity: 80, price: 7, expiryDate: "2026-01-15" },
  { id: 11, name: "Cetirizine", quantity: 55, price: 9, expiryDate: "2025-04-12" },
  { id: 12, name: "Diclofenac", quantity: 33, price: 11, expiryDate: "2025-08-22" },
  { id: 13, name: "Hydrocortisone", quantity: 22, price: 14, expiryDate: "2025-05-19" },
  { id: 14, name: "Salbutamol", quantity: 18, price: 19, expiryDate: "2025-03-25" },
  { id: 15, name: "Furosemide", quantity: 27, price: 13, expiryDate: "2025-09-09" },
  { id: 16, name: "Prednisone", quantity: 42, price: 16, expiryDate: "2025-10-10" },
  { id: 17, name: "Levothyroxine", quantity: 36, price: 12, expiryDate: "2025-07-07" },
  { id: 18, name: "Clopidogrel", quantity: 29, price: 21, expiryDate: "2025-06-06" },
  { id: 19, name: "Naproxen", quantity: 31, price: 10, expiryDate: "2025-08-08" },
  { id: 20, name: "Ciprofloxacin", quantity: 24, price: 17, expiryDate: "2025-12-12" },
  { id: 21, name: "Doxycycline", quantity: 19, price: 15, expiryDate: "2025-11-11" },
  { id: 22, name: "Lisinopril", quantity: 28, price: 14, expiryDate: "2025-05-05" },
  { id: 23, name: "Simvastatin", quantity: 32, price: 18, expiryDate: "2025-07-07" },
  { id: 24, name: "Pantoprazole", quantity: 38, price: 12, expiryDate: "2025-09-09" },
  { id: 25, name: "Gabapentin", quantity: 26, price: 20, expiryDate: "2025-10-10" },
  { id: 26, name: "Sertraline", quantity: 34, price: 11, expiryDate: "2025-06-06" },
  { id: 27, name: "Escitalopram", quantity: 21, price: 13, expiryDate: "2025-08-08" },
  { id: 28, name: "Alprazolam", quantity: 17, price: 22, expiryDate: "2025-12-12" },
  { id: 29, name: "Diazepam", quantity: 23, price: 19, expiryDate: "2025-04-04" },
  { id: 30, name: "Insulin", quantity: 41, price: 30, expiryDate: "2025-03-03" },
  { id: 31, name: "Warfarin", quantity: 20, price: 18, expiryDate: "2025-05-05" },
  { id: 32, name: "Morphine", quantity: 15, price: 40, expiryDate: "2025-06-06" },
  { id: 33, name: "Codeine", quantity: 27, price: 22, expiryDate: "2025-07-07" },
  { id: 34, name: "Tramadol", quantity: 30, price: 19, expiryDate: "2025-08-08" },
  { id: 35, name: "Fluconazole", quantity: 25, price: 16, expiryDate: "2025-09-09" },
  { id: 36, name: "Ketoconazole", quantity: 18, price: 14, expiryDate: "2025-10-10" },
  { id: 37, name: "Chlorpheniramine", quantity: 22, price: 9, expiryDate: "2025-11-11" },
  { id: 38, name: "Montelukast", quantity: 28, price: 12, expiryDate: "2025-12-12" },
  { id: 39, name: "Salicylic Acid", quantity: 35, price: 8, expiryDate: "2025-01-01" },
  { id: 40, name: "Iron Supplement", quantity: 50, price: 7, expiryDate: "2025-02-02" },
  { id: 41, name: "Calcium Carbonate", quantity: 45, price: 6, expiryDate: "2025-03-03" },
  { id: 42, name: "Magnesium Hydroxide", quantity: 33, price: 5, expiryDate: "2025-04-04" },
  { id: 43, name: "Multivitamin", quantity: 60, price: 10, expiryDate: "2025-05-05" },
  { id: 44, name: "Vitamin C", quantity: 70, price: 8, expiryDate: "2025-06-06" },
  { id: 45, name: "Zinc Sulfate", quantity: 25, price: 9, expiryDate: "2025-07-07" },
  { id: 46, name: "Clarithromycin", quantity: 18, price: 20, expiryDate: "2025-08-08" },
  { id: 47, name: "Erythromycin", quantity: 22, price: 17, expiryDate: "2025-09-09" },
  { id: 48, name: "Nitrofurantoin", quantity: 19, price: 15, expiryDate: "2025-10-10" },
  { id: 49, name: "Benzylpenicillin", quantity: 16, price: 12, expiryDate: "2025-11-11" },
  { id: 50, name: "Ranitidine", quantity: 28, price: 10, expiryDate: "2025-12-12" },// 10 near expiry (within 1 month)
  { id: 1, name: "Paracetamol", quantity: 50, price: 5, expiryDate: "2024-12-01" },
  { id: 2, name: "Ibuprofen", quantity: 30, price: 8, expiryDate: "2024-12-05" },
  { id: 3, name: "Amoxicillin", quantity: 20, price: 12, expiryDate: "2024-12-10" },
  { id: 4, name: "Aspirin", quantity: 40, price: 6, expiryDate: "2024-12-12" },
  { id: 5, name: "Metformin", quantity: 25, price: 15, expiryDate: "2024-12-15" },
  { id: 6, name: "Omeprazole", quantity: 35, price: 10, expiryDate: "2024-12-18" },
  { id: 7, name: "Atorvastatin", quantity: 60, price: 20, expiryDate: "2024-12-20" },
  { id: 8, name: "Losartan", quantity: 45, price: 18, expiryDate: "2024-12-22" },
  { id: 9, name: "Azithromycin", quantity: 15, price: 25, expiryDate: "2024-12-25" },
  { id: 10, name: "Vitamin D", quantity: 80, price: 7, expiryDate: "2024-12-28" },

  // 20 long expiry (~1 year)
  { id: 11, name: "Cetirizine", quantity: 55, price: 9, expiryDate: "2025-11-01" },
  { id: 12, name: "Diclofenac", quantity: 33, price: 11, expiryDate: "2025-11-05" },
  { id: 13, name: "Hydrocortisone", quantity: 22, price: 14, expiryDate: "2025-11-10" },
  { id: 14, name: "Salbutamol", quantity: 18, price: 19, expiryDate: "2025-11-12" },
  { id: 15, name: "Furosemide", quantity: 27, price: 13, expiryDate: "2025-11-15" },
  { id: 16, name: "Prednisone", quantity: 42, price: 16, expiryDate: "2025-11-18" },
  { id: 17, name: "Levothyroxine", quantity: 36, price: 12, expiryDate: "2025-11-20" },
  { id: 18, name: "Clopidogrel", quantity: 29, price: 21, expiryDate: "2025-11-22" },
  { id: 19, name: "Naproxen", quantity: 31, price: 10, expiryDate: "2025-11-25" },
  { id: 20, name: "Ciprofloxacin", quantity: 24, price: 17, expiryDate: "2025-11-28" },
  { id: 21, name: "Doxycycline", quantity: 19, price: 15, expiryDate: "2025-12-01" },
  { id: 22, name: "Lisinopril", quantity: 28, price: 14, expiryDate: "2025-12-05" },
  { id: 23, name: "Simvastatin", quantity: 32, price: 18, expiryDate: "2025-12-10" },
  { id: 24, name: "Pantoprazole", quantity: 38, price: 12, expiryDate: "2025-12-15" },
  { id: 25, name: "Gabapentin", quantity: 26, price: 20, expiryDate: "2025-12-20" },
  { id: 26, name: "Sertraline", quantity: 34, price: 11, expiryDate: "2025-12-25" },
  { id: 27, name: "Escitalopram", quantity: 21, price: 13, expiryDate: "2025-12-28" },
  { id: 28, name: "Alprazolam", quantity: 17, price: 22, expiryDate: "2025-12-30" },
  { id: 29, name: "Diazepam", quantity: 23, price: 19, expiryDate: "2026-01-02" },
  { id: 30, name: "Insulin", quantity: 41, price: 30, expiryDate: "2026-01-05" }


]);

  const addDrug = (drug) => {
    setDrugs([...drugs, { id: drugs.length + 1, ...drug }]);
  };

  return (
    <DrugContext.Provider value={{ drugs, addDrug }}>
      {children}
    </DrugContext.Provider>
  );
}