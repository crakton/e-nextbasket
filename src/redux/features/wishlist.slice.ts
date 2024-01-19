import { IProduct } from "@/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "WISHLIST",
  initialState: [] as IProduct[],
  reducers: {
    removeFromWishlist(state, action: PayloadAction<string>) {
      // perform removing product and update the state
      state = state.filter((item) => item.id !== action.payload);
    },
    toggleWishlistItem(state, action: PayloadAction<IProduct>) {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        // Product already exists in the wishlist, so remove it
        state.splice(existingIndex, 1);
      } else {
        // Product doesn't exist in the wishlist, so add it
        state.push(action.payload);
      }

      // Ensure uniqueness by converting the array to a Set and back to an array
      const uniqueWishlist = Array.from(
        new Set(state.map((item) => item.id))
      ).map((id) => {
        return state.find((item) => item.id === id) as IProduct;
      });

      state = uniqueWishlist;
    },
  },
});

export const { removeFromWishlist, toggleWishlistItem } = wishlist.actions;
export default wishlist.reducer;
