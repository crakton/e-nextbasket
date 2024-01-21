// cartSlice.ts

import { IProduct } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CartState {
  items: {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: string | number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
    quantity: number;
  }[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string | number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
