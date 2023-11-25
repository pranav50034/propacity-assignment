import axios from "axios";

const BASEURL = process.env.REACT_APP_BASE_URL;
 
export const getFilms = async () => {
  const response = await axios.get(`${BASEURL}/films`);
  return response.data;
};

export const getPeople = async () => {
  const response = await axios.get(`${BASEURL}/people`);
  return response.data;
};

export const getPersonSpecies = async (id) => {
  const response = await axios.get(`${BASEURL}/species/${id}`);
  return response.data;
}

export const getSpecies = async (id) => {
  const response = await axios.get(`${BASEURL}/species`);
  return response.data;
}

export const getVehicles = async (id) => {
  const response = await axios.get(`${BASEURL}/vehicles`);
  return response.data;
}

export const getStarships = async (id) => {
  const response = await axios.get(`${BASEURL}/starships`);
  return response.data;
}

export const getPlanets = async (id) => {
  const response = await axios.get(`${BASEURL}/planets`);
  return response.data;
}
