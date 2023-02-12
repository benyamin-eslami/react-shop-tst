import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cart: [],
  isCartOpen: false,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    increaseItems: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseItems: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeItems: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  increaseItems,
  decreaseItems,
  addToCart,
  removeItems,
  setIsCartOpen,
} = shopSlice.actions;

export default shopSlice.reducer;
