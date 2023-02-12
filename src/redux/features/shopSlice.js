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
        }
      });
    },
    addToCart: (state, action) => {
      state.value += action.payload;
    },
    decreaseItems: (state, action) => {
      state.value += action.payload;
    },
    removeItems: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
