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
        // Menambahkan qty saja jika judul movienya sudah ada
        existingCartItem.qty += action.payload.qty;
      } else {
        // Menambahkan judul movie baru yang dipesan
        state.carts.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlices.actions;
export default cartSlices.reducer;
