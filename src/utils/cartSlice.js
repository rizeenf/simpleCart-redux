import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += action.payload.qty;
        state.totalPrice += action.payload.price;
      } else {
        state.products.push(action.payload);
        state.totalPrice += action.payload.price;
      }
    },

    increaseCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      item.qty += 1;
      state.totalPrice += action.payload.price;
    },

    decreaseCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item.qty == 1) {
        const newItem = state.products.filter(
          (data) => data.id !== action.payload.id
        );
        state.products = newItem;
        if (state.totalPrice - action.payload.price <= 0) {
          state.totalPrice = 0;
        } else {
          state.totalPrice -= action.payload.price;
        }
      } else {
        item.qty -= 1;
        if (state.totalPrice - action.payload.price <= 0) {
          state.totalPrice = 0;
        } else {
          state.totalPrice -= action.payload.price;
        }
      }
    },
    discountCart: (state, action) => {
      if (state.totalPrice <= action.payload.discount) {
        state.totalPrice = 0;
      } else {
        state.totalPrice -= action.payload.discount;
      }
    },
    resetCart: (state) => {
      state.totalPrice = 0;
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseCart,
  decreaseCart,
  discountCart,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
