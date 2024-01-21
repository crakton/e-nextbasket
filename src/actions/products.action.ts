"use server";

import axios from "axios";

export async function getProducts(limit: number = 10, skip?: number) {
  // fetch products default limit 10
  try {
    const response = await axios.get(
      skip
        ? `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products?limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}
export async function getProduct(id: string) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}
