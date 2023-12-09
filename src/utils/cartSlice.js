import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    increaseCart: (state, action) => {},
    decreaseCart: (state, action) => {},
  },
});

export const { addToCart, increaseCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
