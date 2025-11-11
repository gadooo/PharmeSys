import React, { createContext, useState } from "react";

export const SalesContext = createContext();

export function SalesProvider({ children }) {
  const [sales, setSales] = useState([]);

  const addSale = (saleItems) => {
    const newSale = {
      id: sales.length + 1,
      items: saleItems,
      date: new Date().toLocaleDateString(),
      total: saleItems.reduce((sum, item) => sum + item.totalPrice, 0),
    };
    setSales([...sales, newSale]);
  };

  return (
    <SalesContext.Provider value={{ sales, addSale }}>
      {children}
    </SalesContext.Provider>
  );
}