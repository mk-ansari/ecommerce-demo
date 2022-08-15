// CREATED BY: ANSARI KAMAL

import axios from "axios";

// SERVER PATH
const serverPath = "https://apis.tjcg.in";

// API URL
const usersAPI = "api/users";
const productsAPI = "api/products";

export const signUp = async (user: any) => {
  try {
    return await axios.post(`${serverPath}/${usersAPI}/register`, user);
  } catch (error) {
    console.log(`Error while calling Signup api.`);
  }
};

export const signIn = async (user: any) => {
  try {
    return await axios.post(`${serverPath}/${usersAPI}/signin`, user);
  } catch (error) {
    console.log(`Error while calling Signin api.`);
  }
};

export const getProducts = async () => {
  try {
    return await axios.get(`${serverPath}/${productsAPI}`);
  } catch (error) {
    console.log("Error while fetching products.");
  }
};

export const getProduct = async (id: string) => {
  try {
    return await axios.get(`${serverPath}/${productsAPI}/${id}`);
  } catch (error) {
    console.log("Error while fetching products.");
  }
};

export const searchProduct = async (key:string) =>{
  try {
    return await axios.get(`${serverPath}/${productsAPI}/`);
  } catch (error) {
    console.log("Error while fetching products.");
  }
}



