// src/api/salesService.js
import axios from "axios";

const API_BASE_URL = "https://localhost:7222/api/Sale"; // adjust if needed

// Sales
export const getAllSales = () => axios.get(API_BASE_URL);
export const getSaleById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const createSale = (sale) => axios.post(API_BASE_URL, sale);
export const deleteSale = (id) => axios.delete(`${API_BASE_URL}/${id}`);

// Sale Items
export const addSaleItem = (saleId, item) =>
  axios.post(`${API_BASE_URL}/${saleId}/items`, item);

export const updateSaleItem = (saleId, itemId, item) =>
  axios.put(`${API_BASE_URL}/${saleId}/items/${itemId}`, item);

export const deleteSaleItem = (saleId, itemId) =>
  axios.delete(`${API_BASE_URL}/${saleId}/items/${itemId}`);