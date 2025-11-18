import axios from 'axios';

const API_BASE_URL = 'https://localhost:7222/api/Drug'; // your API base URL

export const getAllDrugs = () => axios.get(API_BASE_URL);
export const getDrugById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const createDrug = (drug) => axios.post(API_BASE_URL, drug);
export const updateDrug = (id, drug) => axios.put(`${API_BASE_URL}/${id}`, drug);
export const deleteDrug = (id) => axios.delete(`${API_BASE_URL}/${id}`);
