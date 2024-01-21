// wishlistSlice.ts

import { IProduct } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface WishlistState {
  items: IProduct[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState, // Add this line to provide an initial state
  reducers: {
    toggleProduct: (state, action: PayloadAction<IProduct>) => {
      if (state && state.items.length === 0) {
        // Check if `state` is truthy before accessing items
        // Wishlist is empty, add the product directly
        state.items.push(action.payload);
      } else {
        // Wishlist is not empty, perform toggle operation
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        } else {
          state.items.push(action.payload);
        }
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleProduct, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
