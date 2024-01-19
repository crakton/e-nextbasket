import { combineReducers } from "@reduxjs/toolkit";
import wishlistSlice from "./features/wishlist.slice";
import cartSlice from "./features/cart.slice";

const rootReducer = combineReducers({
    cart: cartSlice,
    wishlist: wishlistSlice,
});
export default rootReducer;