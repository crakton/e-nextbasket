"use server";

import axios from "axios";

export async function getPosts(limit: number = 3, skip?: number) {
  // fetch posts default limit 3
  try {
    const response = await axios.get(
      `https://dummyjson.com/posts?limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}
