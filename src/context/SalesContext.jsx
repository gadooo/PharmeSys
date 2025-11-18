import React, { createContext, useState, useEffect } from "react";
import {
  getAllSales,
  createSale,
  deleteSale,
  addSaleItem,
  updateSaleItem,
  deleteSaleItem,
} from "../API/SalesAPI"; // adjust path

export const SalesContext = createContext();

export function SalesProvider({ children }) {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all sales on mount
  useEffect(() => {
    const fetchSales = async () => {
      setLoading(true);
      try {
        const response = await getAllSales();
        setSales(response.data);
      } catch (error) {
        console.error("Error fetching sales:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  // Create new sale
  const addSale = async (sale) => {
    try {
      const response = await createSale(sale);
      setSales((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error creating sale:", error);
    }
  };

  // Delete sale
  const removeSale = async (id) => {
    try {
      await deleteSale(id);
      setSales((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error deleting sale:", error);
    }
  };

  // Add item to sale
  const addItemToSale = async (saleId, item) => {
    try {
      const response = await addSaleItem(saleId, item);
      setSales((prev) =>
        prev.map((s) => (s.id === saleId ? response.data : s))
      );
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Update sale item
  const editSaleItem = async (saleId, itemId, updatedItem) => {
    try {
      const response = await updateSaleItem(saleId, itemId, updatedItem);
      setSales((prev) =>
        prev.map((s) => (s.id === saleId ? response.data : s))
      );
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // Delete sale item
  const removeSaleItem = async (saleId, itemId) => {
    try {
      const response = await deleteSaleItem(saleId, itemId);
      setSales((prev) =>
        prev.map((s) => (s.id === saleId ? response.data : s))
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <SalesContext.Provider
      value={{
        sales,
        loading,
        addSale,
        removeSale,
        addItemToSale,
        editSaleItem,
        removeSaleItem,
      }}
    >
      {children}
    </SalesContext.Provider>
  );
}