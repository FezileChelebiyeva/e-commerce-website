import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
  count: 0,
  price: 0,
};

export const addCard = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product?.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.product.filter((elem) => elem.id != action.payload);
    },
    removeAllProduct: (state, action) => {
      state.product = [];
      state.count = 0;
    },
    increment: (state, action) => {
      state.count += 1;
    },
    decremennt: (state, action) => {
      state.count -= 1;
    },
    incrementPrice: (state, action) => {
      state.price = state.price + +action.payload;
    },
    decrementPrice: (state, action) => {
      state.price = state.price - +action.payload;
    },
  },
});

export const {
  addProduct,
  increment,
  removeProduct,
  decremennt,
  removeAllProduct,
  incrementPrice,
  decrementPrice
} = addCard.actions;
export default addCard.reducer;
