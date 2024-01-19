"use server";

import axios from "axios";

export async function getProducts(limit: number=10) {
  // fetch products default limit 10
  try {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}
