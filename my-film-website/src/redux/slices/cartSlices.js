import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { movieTitle } = action.payload;
      const existingCartItem = state.carts.find(item => item.movieTitle === movieTitle);

      if (existingCartItem) {
        // Increase the quantity if the movie is already in the cart
        existingCartItem.qty += action.payload.qty;
      } else {
        // Add new movie to the cart
        state.carts.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlices.actions;
export default cartSlices.reducer;