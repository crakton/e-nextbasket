import { IProduct } from "@/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "CART",
  initialState: [] as IProduct[],
  reducers: {
    removeFromCart(state, action: PayloadAction<string>) {
      // perform removing product and update the cart
      state = state.filter((item) => item.id !== action.payload);
    },
    toggleCartItem(state, action: PayloadAction<IProduct>) {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex !== -1) {
        // Product already exists in the cart, so remove it
        state.splice(existingIndex, 1);
      } else {
        // Product doesn't exist in the cart, so add it
        state.push(action.payload);
      }

      // Ensure uniqueness by converting the array to a Set and back to an array
      const uniqueCartItems = Array.from(
        new Set(state.map((item) => item.id))
      ).map((id) => {
        return state.find((item) => item.id === id) as IProduct;
      });

      state = uniqueCartItems;
    },
  },
});

export const { removeFromCart, toggleCartItem } = cart.actions;
export default cart.reducer;